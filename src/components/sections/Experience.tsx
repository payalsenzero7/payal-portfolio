import { experience } from '../../data/portfolio';
import { Reveal } from '../ui/Reveal';
import { MapPin } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="section-pad wrap">
      <Reveal>
        <div className="mb-11 flex flex-wrap items-baseline justify-between gap-5">
          <h2 className="text-[clamp(1.5rem,2.6vw,2.1rem)]">Experience</h2>
          <p className="max-w-[38ch] text-[0.95rem]">Four roles, all of them spent turning someone else&rsquo;s mess into a number.</p>
        </div>

        <ol className="relative flex flex-col gap-10 border-l border-line pl-6 md:pl-8">
          {experience.map((role) => (
            <li key={role.id} className="group relative">
              {/* timeline node */}
              <span
                aria-hidden="true"
                className={`absolute top-1.5 -left-[27px] h-2.5 w-2.5 rounded-full border-2 transition-colors duration-200 md:-left-[35px] ${
                  role.current
                    ? 'border-accent bg-accent shadow-[0_0_0_4px_rgba(242,184,7,0.15)]'
                    : 'border-line bg-surface group-hover:border-accent-2'
                }`}
              />

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-[1.05rem] font-semibold text-ink">{role.role}</h3>
                {role.current && (
                  <span className="rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[0.66rem] tracking-wide text-accent uppercase">
                    Current
                  </span>
                )}
              </div>

              <p className="mt-1 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[0.88rem]">
                <span className="font-semibold text-accent-2">{role.company}</span>
                <span className="text-muted/50" aria-hidden="true">
                  &middot;
                </span>
                <span className="font-mono text-[0.78rem] text-muted">{role.period}</span>
                <span className="flex items-center gap-1 font-mono text-[0.78rem] text-muted">
                  <MapPin className="h-3 w-3" aria-hidden="true" />
                  {role.location}
                </span>
              </p>

              <ul className="mt-3 flex flex-col gap-2">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-[0.9rem] text-muted">
                    <span aria-hidden="true" className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
