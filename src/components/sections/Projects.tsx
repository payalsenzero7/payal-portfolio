import { projects } from '../../data/portfolio';
import { Reveal } from '../ui/Reveal';
import { Tilt } from '../ui/Tilt';

export function Projects() {
  return (
    <section id="projects" className="section-pad wrap">
      <Reveal>
        <div className="mb-11 flex flex-wrap items-baseline justify-between gap-5">
          <h2 className="text-[clamp(1.5rem,2.6vw,2.1rem)]">Selected work</h2>
          <p className="max-w-[38ch] text-[0.95rem]">Every project, led with the number that mattered most.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Tilt key={project.id} max={6} className="h-full">
              <article className="flex h-full flex-col gap-3.5 rounded-[14px] border border-line bg-surface p-6 px-5 transition-[border-color,box-shadow] duration-250 hover:border-accent/35 hover:shadow-[0_24px_44px_-20px_rgba(242,184,7,0.25)]">
                <p className="font-display text-[2.2rem] leading-none font-bold text-accent">{project.metric}</p>
                <p className="-mt-2 text-[0.78rem] text-muted">{project.metricLabel}</p>

                <h3 className="mt-1 text-[1.02rem] font-semibold text-ink">{project.title}</h3>
                <p className="text-[0.88rem] text-muted">{project.description}</p>

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-2.5 font-mono text-[0.74rem] text-accent-2">
                  <span>{project.tag}</span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-ink underline-offset-4 hover:text-accent hover:underline"
                  >
                    View repo
                    <span className="sr-only"> — {project.title} on GitHub</span>
                  </a>
                </div>
              </article>
            </Tilt>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
