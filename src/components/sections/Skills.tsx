import { skillGroups } from '../../data/portfolio';
import { Reveal } from '../ui/Reveal';

export function Skills() {
  return (
    <section id="skills" className="section-pad wrap">
      <Reveal>
        <div className="mb-11 flex flex-wrap items-baseline justify-between gap-5">
          <h2 className="text-[clamp(1.5rem,2.6vw,2.1rem)]">What I work with</h2>
          <p className="max-w-[38ch] text-[0.95rem]">Tools and domains, grouped by how they actually get used.</p>
        </div>

        <div className="grid gap-[18px] md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="rounded-[14px] border border-line bg-surface p-5.5 pb-6 transition-all duration-200 hover:-translate-y-[3px] hover:border-accent/30"
            >
              <h3 className="mb-3.5 font-display text-[0.92rem] font-semibold text-accent-2">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="chip cursor-default rounded-[20px] border border-line px-3 py-1.5 text-[0.82rem] text-muted transition-all duration-200 hover:-translate-y-px hover:border-accent hover:bg-accent/6 hover:text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
