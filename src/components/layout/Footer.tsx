import { personalInfo } from '../../data/portfolio';

export function Footer() {
  return (
    <footer className="wrap flex flex-wrap items-center justify-between gap-3 py-9 pb-12 font-mono text-[0.82rem] text-muted">
      <span>&copy; {new Date().getFullYear()} {personalInfo.name}</span>
      <span>{personalInfo.footerNote}</span>
    </footer>
  );
}
