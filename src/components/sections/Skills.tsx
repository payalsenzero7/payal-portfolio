import { skillGroups, toolkit } from '../../data/portfolio';
import { Reveal } from '../ui/Reveal';
import { SkillIcon } from '../ui/SkillIcon';
import { Tilt } from '../ui/Tilt';

export function Skills() {
  return (
    <section id="skills" className="section-pad wrap">
      <Reveal>
        <div className="mb-11 flex flex-wrap items-baseline justify-between gap-5">
          <h2 className="text-[clamp(1.5rem,2.6vw,2.1rem)]">What I work with</h2>
          <p className="max-w-[38ch] text-[0.95rem]">Tools and capabilities, grouped by how they actually get used.</p>
        </div>

        {/* Toolset — brand marks */}
        <ul className="mb-14 grid grid-cols-2 gap-3 [perspective:1000px] sm:grid-cols-4 lg:grid-cols-7">
          {toolkit.map((tool) => (
            <li key={tool.id}>
              <Tilt max={8} className="group h-full">
                <div className="flex h-full flex-col items-center gap-2.5 rounded-[14px] border border-line bg-surface px-3 py-5 text-center transition-all duration-200 group-hover:-translate-y-[3px] group-hover:border-accent/30 group-hover:shadow-[0_18px_34px_-22px_rgba(242,184,7,0.3)]">
                  <span className="text-ink transition-colors duration-200 group-hover:text-accent">
                    <SkillIcon name={tool.icon} className="h-7 w-7" />
                  </span>
                  <span className="font-display text-[0.84rem] font-semibold text-ink">{tool.label}</span>
                  <span className="font-mono text-[0.66rem] tracking-wide text-muted uppercase">{tool.note}</span>
                </div>
              </Tilt>
            </li>
          ))}
        </ul>

        {/* Capabilities — icon chips */}
        <div className="grid gap-[18px] md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="flex flex-col rounded-[14px] border border-line bg-surface p-5.5 pb-6 transition-all duration-200 hover:-translate-y-[3px] hover:border-accent/30"
            >
              <h3 className="mb-3.5 font-display text-[0.92rem] font-semibold text-accent-2">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item.label}
                    className="chip flex cursor-default items-center gap-1.5 rounded-[20px] border border-line px-3 py-1.5 text-[0.82rem] text-muted transition-all duration-200 hover:-translate-y-px hover:border-accent hover:bg-accent/6 hover:text-ink"
                  >
                    <SkillIcon name={item.icon} className="h-3.5 w-3.5 shrink-0 opacity-80" />
                    {item.label}
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
