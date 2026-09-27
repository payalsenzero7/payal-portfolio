import { useEffect, useState } from 'react';
import { personalInfo, navLinks } from '../../data/portfolio';
import { Magnetic } from '../ui/Magnetic';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-line bg-bg/80 py-3.5 backdrop-blur-md'
          : 'border-transparent py-5'
      }`}
    >
      <div className="wrap flex items-center justify-between">
        <a
          href="#top"
          onClick={(event) => handleClick(event, '#top')}
          className="font-display text-[1.05rem] font-bold"
        >
          {personalInfo.name}
          <span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-8 text-[0.92rem] text-muted md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => handleClick(event, link.href)}
              className="group relative py-1 transition-colors hover:text-ink"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-accent transition-all duration-250 ease-out group-hover:w-full" />
            </a>
          ))}
        </div>

        <Magnetic>
          <a
            href="#contact"
            onClick={(event) => handleClick(event, '#contact')}
            className="rounded-[7px] bg-accent px-[18px] py-[9px] text-[0.85rem] font-semibold text-ink-inverse transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-6px_rgba(242,184,7,0.55)]"
          >
            Let&rsquo;s talk
          </a>
        </Magnetic>
      </div>
    </nav>
  );
}
