import { personalInfo } from '../../data/portfolio';
import { Reveal } from '../ui/Reveal';

export function About() {
  return (
    <section id="about" className="section-pad wrap">
      <Reveal>
        <div className="grid items-center gap-14 md:grid-cols-[0.85fr_1.15fr]">
          {/* Decorative visual */}
          <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-[18px] border border-line bg-linear-to-[160deg]var(--color-surface-2)_var(--color-surface)">
            <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <g stroke="rgba(51,194,165,0.35)" strokeWidth="1" fill="none">
                <circle cx="150" cy="150" r="60" />
                <circle cx="150" cy="150" r="100" />
                <circle cx="150" cy="150" r="140" />
              </g>
            </svg>
            <span className="absolute inset-0 flex items-center justify-center font-display text-[5rem] font-bold text-ink/6">
              {personalInfo.initials}
            </span>
          </div>

          {/* Copy */}
          <div>
            <p className="eyebrow">
              <span className="dot" />
              About
            </p>

            <p className="mb-4 text-[1.02rem]">
              <strong className="font-semibold text-ink">{personalInfo.aboutLead}</strong>{' '}
              {personalInfo.about[0]}
            </p>

            {personalInfo.about.slice(1).map((paragraph) => (
              <p key={paragraph} className="mb-4 text-[1.02rem]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
