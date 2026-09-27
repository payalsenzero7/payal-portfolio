import { projects } from '../../data/portfolio';
import repoMeta from '../../data/repoMeta.json';
import { Reveal } from '../ui/Reveal';
import { Tilt } from '../ui/Tilt';
import { BrandBadge } from '../ui/SkillIcon';

interface RepoMeta {
  description: string;
  language: string | null;
  stars: number;
  forks: number;
  files: number;
  pushedAt: string | null;
  url: string;
  defaultBranch: string;
}

const meta = repoMeta as Record<string, RepoMeta>;

const formatDate = (iso: string | null) =>
  iso
    ? new Date(iso).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })
    : null;

export function Projects() {
  return (
    <section id="projects" className="section-pad wrap">
      <Reveal>
        <div className="mb-11 flex flex-wrap items-baseline justify-between gap-5">
          <h2 className="text-[clamp(1.5rem,2.6vw,2.1rem)]">Selected work</h2>
          <p className="max-w-[38ch] text-[0.95rem]">Every project, led with the number that mattered most.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:perspective-[1000px]">
          {projects.map((project) => {
            const info = project.repo ? meta[project.repo] : undefined;
            const pushed = formatDate(info?.pushedAt ?? null);
            const repoHref = info?.url ?? 'https://github.com/payalsenzero7';

            return (
              <Tilt key={project.id} max={6} className="h-full">
                <article className="flex h-full flex-col gap-3.5 rounded-[14px] border border-line bg-surface p-6 px-5 transition-[border-color,box-shadow] duration-250 hover:border-accent/35 hover:shadow-[0_24px_44px_-20px_rgba(242,184,7,0.25)]">
                  <p className="font-display text-[2.2rem] leading-none font-bold text-accent">{project.metric}</p>
                  <p className="-mt-2 text-[0.78rem] text-muted">{project.metricLabel}</p>

                  <h3 className="mt-1 text-[1.02rem] font-semibold text-ink">{project.title}</h3>
                  <p className="text-[0.88rem] text-muted">{project.description}</p>

                  {/* Live repo facts, fetched at build time */}
                  {info && (
                    <ul className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.7rem] text-muted">
                      {info.language && <li className="text-accent-2">{info.language}</li>}
                      <li>
                        {info.files} {info.files === 1 ? 'file' : 'files'}
                      </li>
                      {pushed && <li>updated {pushed}</li>}
                    </ul>
                  )}

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-line pt-2.5 font-mono text-[0.74rem]">
                    <span className="text-accent-2">{project.tag}</span>

                    <span className="flex items-center gap-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-accent underline-offset-4 hover:underline"
                        >
                          {project.demoLabel}
                          <span className="sr-only"> — {project.title} notebook</span>
                        </a>
                      )}
                      <a
                        href={repoHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-semibold text-ink underline-offset-4 hover:text-accent hover:underline"
                      >
                        <BrandBadge name="github" className="h-3.5 w-3.5" />
                        {info ? 'View repo' : 'GitHub'}
                        <span className="sr-only"> — {project.title} on GitHub</span>
                      </a>
                    </span>
                  </div>
                </article>
              </Tilt>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
