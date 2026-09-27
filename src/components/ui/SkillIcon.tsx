import {
  BadgeCheck,
  Blocks,
  ChartColumn,
  ClipboardList,
  Database,
  FileText,
  Focus,
  GitBranch,
  Layers,
  Lightbulb,
  Medal,
  MessageSquare,
  Network,
  Presentation,
  Ruler,
  Search,
  Sigma,
  Sparkles,
  Target,
  Timer,
  TrendingUp,
  Users,
  Workflow,
  Zap,
  type LucideIcon,
} from 'lucide-react';

/* Brand marks that ship as plain SVGs in simple-icons (single-path, 24x24). */
import pythonSvg from 'simple-icons/icons/python.svg?raw';
import jiraSvg from 'simple-icons/icons/jira.svg?raw';
import courseraSvg from 'simple-icons/icons/coursera.svg?raw';
import udemySvg from 'simple-icons/icons/udemy.svg?raw';
import githubSvg from 'simple-icons/icons/github.svg?raw';

const brandPath = (svg: string) => / d="([^"]+)"/.exec(svg)?.[1] ?? '';

/** Filled single-path brand marks, keyed by icon name. */
const brands: Record<string, string> = {
  python: brandPath(pythonSvg),
  jira: brandPath(jiraSvg),
  coursera: brandPath(courseraSvg),
  udemy: brandPath(udemySvg),
  github: brandPath(githubSvg),
};

/**
 * Marks simple-icons cannot ship (trademark policy). These are hand-drawn
 * simplifications of the real logos — recognisable, not pixel-exact.
 */
const drawn: Record<string, { label: string; children: React.ReactNode }> = {
  excel: {
    label: 'Microsoft Excel',
    children: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="3" fill="#217346" />
        <path
          d="M7.4 6.6 12 12m0 0 4.6-5.4M12 12l-4.6 5.4M12 12l4.6 5.4"
          stroke="#fff"
          strokeWidth="2.3"
          strokeLinecap="round"
          fill="none"
        />
      </>
    ),
  },
  powerbi: {
    label: 'Power BI',
    children: (
      <>
        <rect x="2.6" y="12.4" width="4.6" height="8.8" rx="1.2" fill="#F2C811" />
        <rect x="9.7" y="7.4" width="4.6" height="13.8" rx="1.2" fill="#F2C811" />
        <rect x="16.8" y="2.8" width="4.6" height="18.4" rx="1.2" fill="#F2C811" />
      </>
    ),
  },
  tableau: {
    label: 'Tableau',
    children: (
      <g fill="#E8762C">
        <rect x="10.6" y="1.4" width="2.8" height="21.2" rx="1.4" />
        <rect x="10.6" y="1.4" width="2.8" height="21.2" rx="1.4" transform="rotate(60 12 12)" />
        <rect x="10.6" y="1.4" width="2.8" height="21.2" rx="1.4" transform="rotate(120 12 12)" />
      </g>
    ),
  },
  powerquery: {
    label: 'Power Query',
    children: (
      <g fill="none" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.6 12a8.4 8.4 0 0 1 14.1-6.2" stroke="#4C9AFF" />
        <path d="M17.7 2.5v3.7h-3.7" stroke="#4C9AFF" />
        <path d="M20.4 12a8.4 8.4 0 0 1-14.1 6.2" stroke="#33C2A5" />
        <path d="M6.3 21.5v-3.7h3.7" stroke="#33C2A5" />
      </g>
    ),
  },
  linkedin: {
    label: 'LinkedIn',
    children: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="3.2" fill="#0A66C2" />
        <circle cx="7.1" cy="7.2" r="1.45" fill="#fff" />
        <rect x="5.6" y="9.9" width="2.9" height="8.5" rx="0.7" fill="#fff" />
        <path
          d="M10.9 9.9h2.7v1.16a3.02 3.02 0 0 1 2.72-1.36c2.18 0 3.38 1.4 3.38 3.9v4.7h-2.85v-4.2c0-1.12-.4-1.78-1.32-1.78-.92 0-1.48.63-1.48 1.78v4.2H10.9z"
          fill="#fff"
        />
      </>
    ),
  },
};

/** Stroke-style Lucide marks for conceptual skills. */
const strokes: Record<string, LucideIcon> = {
  sql: Database,
  dax: Sigma,
  medal: Medal,
  sparkles: Sparkles,
  workflow: Workflow,
  search: Search,
  target: Target,
  chartColumn: ChartColumn,
  badgeCheck: BadgeCheck,
  trendingUp: TrendingUp,
  presentation: Presentation,
  clipboardList: ClipboardList,
  gitBranch: GitBranch,
  ruler: Ruler,
  fileText: FileText,
  users: Users,
  zap: Zap,
  blocks: Blocks,
  network: Network,
  layers: Layers,
  lightbulb: Lightbulb,
  messageSquare: MessageSquare,
  focus: Focus,
  timer: Timer,
};

// BadgeCheck exists in lucide v1 but was not in my verified list — alias it to Check.
import { BadgeCheck as CheckCircleCheck } from 'lucide-react';
strokes.badgeCheck = CheckCircleCheck;

interface SkillIconProps {
  name: string;
  className?: string;
}

/**
 * Renders a brand mark or a Lucide icon for a skill/tool name.
 * Unknown names render nothing, so callers can degrade gracefully.
 */
export function SkillIcon({ name, className = 'h-4 w-4' }: SkillIconProps) {
  const brand = brands[name];
  if (brand) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
        <path d={brand} fill="currentColor" />
      </svg>
    );
  }

  const mark = drawn[name];
  if (mark) {
    return (
      <svg viewBox="0 0 24 24" className={className} role="img" aria-label={mark.label}>
        {mark.children}
      </svg>
    );
  }

  const Stroke = strokes[name];
  if (Stroke) {
    return <Stroke className={className} aria-hidden="true" />;
  }

  return null;
}

/** Standalone brand badge for the contact + footer links. */
export function BrandBadge({ name, className = 'h-4 w-4' }: SkillIconProps) {
  return <SkillIcon name={name} className={className} />;
}
