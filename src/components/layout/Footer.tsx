import { personalInfo } from '../../data/portfolio';
import { BrandBadge } from '../ui/SkillIcon';

const socials = [
  { name: 'github', label: 'GitHub', href: personalInfo.github },
  { name: 'linkedin', label: 'LinkedIn', href: personalInfo.linkedin },
];

export function Footer() {
  return (
    <footer className="wrap flex flex-wrap items-center justify-between gap-3 py-9 pb-12 font-mono text-[0.82rem] text-muted">
      <span>
        &copy; {new Date().getFullYear()} {personalInfo.name}
      </span>

      <nav aria-label="Social links" className="flex items-center gap-4">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-ink transition-colors hover:text-accent"
          >
            <BrandBadge name={social.name} className="h-3.5 w-3.5" />
            {social.label}
          </a>
        ))}
      </nav>

      <span>{personalInfo.footerNote}</span>
    </footer>
  );
}
