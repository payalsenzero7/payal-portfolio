#!/usr/bin/env node
/**
 * Pulls live metadata for the public GitHub repos referenced in
 * src/data/portfolio.ts and writes it to src/data/repoMeta.json.
 *
 * Runs at build time (see "prebuild" in package.json) so the deployed page
 * shows real language / last-push / file counts with no runtime API calls,
 * no rate-limit exposure, and no API token shipped to the browser.
 *
 * Never fails the build: on any error it leaves the existing JSON in place.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dataFile = join(root, 'src', 'data', 'portfolio.ts');
const outFile = join(root, 'src', 'data', 'repoMeta.json');

const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
const headers = {
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  'User-Agent': 'payal-portfolio-build',
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
};

async function gh(path) {
  const res = await fetch(`https://api.github.com${path}`, { headers });
  if (!res.ok) throw new Error(`GitHub ${path} -> ${res.status} ${res.statusText}`);
  return res.json();
}

async function main() {
  const source = await readFile(dataFile, 'utf8');
  const owner = /github:\s*'https:\/\/github\.com\/([^/'\s]+)'/.exec(source)?.[1];
  if (!owner) throw new Error('Could not determine the GitHub owner from portfolio.ts');

  const slugs = [...new Set([...source.matchAll(/repo:\s*'([^']+)'/g)].map((m) => m[1]))];
  if (slugs.length === 0) {
    console.log('[repo-meta] no repos referenced — nothing to fetch');
    return;
  }

  const next = {};

  for (const slug of slugs) {
    try {
      const repo = await gh(`/repos/${owner}/${slug}`);
      const branch = repo.default_branch ?? 'main';
      const tree = await gh(`/repos/${owner}/${slug}/git/trees/${branch}?recursive=1`);
      const files = Array.isArray(tree.tree) ? tree.tree.filter((n) => n.type === 'blob').length : 0;

      next[slug] = {
        description: repo.description ?? '',
        language: repo.language ?? null,
        stars: repo.stargazers_count ?? 0,
        forks: repo.forks_count ?? 0,
        files,
        pushedAt: repo.pushed_at ?? null,
        url: repo.html_url,
        defaultBranch: branch,
      };
      console.log(`[repo-meta] ${slug}: ${files} files, ${repo.language ?? 'n/a'}, pushed ${repo.pushed_at}`);
    } catch (error) {
      // Keep whatever we already had for this slug, if anything.
      if (next[slug]) continue;
      console.warn(`[repo-meta] ${slug}: ${error.message} — skipping`);
    }
  }

  let existing = {};
  try {
    existing = JSON.parse(await readFile(outFile, 'utf8'));
  } catch {
    /* no snapshot yet */
  }

  const merged = { ...existing, ...next };
  await writeFile(outFile, `${JSON.stringify(merged, null, 2)}\n`, 'utf8');
  console.log(`[repo-meta] wrote ${Object.keys(merged).length} entries to src/data/repoMeta.json`);
}

main().catch((error) => {
  console.warn(`[repo-meta] ${error.message} — keeping previous snapshot, build continues`);
});
