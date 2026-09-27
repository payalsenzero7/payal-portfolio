import { projects } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../ui/ProjectCard';
import { Reveal } from '../ui/Reveal';

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          title="Featured Projects"
          subtitle="Showcasing my work in supply chain analytics, machine learning, and data visualization"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* More Projects Link */}
        <Reveal delay={0.3}>
          <div className="text-center mt-12">
            <a
              href="https://github.com/payalsenzero7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--color-accent-primary)] hover:text-[var(--color-accent-secondary)] font-medium transition-colors"
            >
              View more on GitHub
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
