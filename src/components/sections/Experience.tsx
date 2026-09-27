import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experience } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { Timeline, TimelineItem } from '../ui/Timeline';
import { Reveal } from '../ui/Reveal';

export function Experience() {
  return (
    <section id="experience" className="section bg-[var(--color-bg-secondary)]">
      <div className="container">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey and key achievements"
        />

        <Timeline>
          {experience.map((exp, index) => (
            <TimelineItem key={exp.id} isLeft={index % 2 === 0}>
              <Reveal direction={index % 2 === 0 ? 'left' : 'right'}>
                <div className="glass rounded-2xl p-6 hover:border-[var(--color-accent-primary)]/50 transition-colors">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)]">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                        {exp.role}
                      </h3>
                      <p className="text-[var(--color-accent-primary)] font-medium">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-[var(--color-text-muted)]">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-primary)] mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
