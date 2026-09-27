import { GraduationCap, Award } from 'lucide-react';
import { education, certifications } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading
          title="Education & Certifications"
          subtitle="Academic background and professional credentials"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <Reveal direction="left">
            <div className="glass rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  Education
                </h3>
              </div>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="p-4 rounded-xl bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]"
                  >
                    <h4 className="font-semibold text-[var(--color-text-primary)]">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-[var(--color-accent-primary)]">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)] mt-1">
                      {edu.year}
                    </p>
                    {edu.description && (
                      <p className="text-sm text-[var(--color-text-secondary)] mt-2">
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Certifications */}
          <Reveal direction="right">
            <div className="glass rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)]">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  Certifications
                </h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-4 rounded-xl bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]"
                  >
                    <h4 className="font-semibold text-[var(--color-text-primary)]">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-[var(--color-accent-primary)]">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)] mt-1">
                      {cert.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
