import { motion } from 'framer-motion';
import { Award, Briefcase, Code, BarChart3 } from 'lucide-react';
import { personalInfo, stats, certifications } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function About() {
  const prefersReducedMotion = useReducedMotion();

  const statIcons = [
    <Briefcase className="w-6 h-6" />,
    <Code className="w-6 h-6" />,
    <BarChart3 className="w-6 h-6" />,
    <Award className="w-6 h-6" />,
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          title="About Me"
          subtitle="A passionate Business Analyst turning data into decisions"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo & Bio */}
          <Reveal direction="left">
            <div className="space-y-6">
              {/* Photo Placeholder */}
              <div className="relative w-48 h-48 mx-auto md:mx-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] opacity-20 blur-xl" />
                <div className="relative w-full h-full rounded-full bg-[var(--color-bg-tertiary)] border-2 border-[var(--color-border)] flex items-center justify-center overflow-hidden">
                  <span className="text-6xl font-bold gradient-text">
                    {personalInfo.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-4 text-center md:text-left">
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {personalInfo.bio}
                </p>
                <p className="text-[var(--color-text-muted)] text-sm">
                  Based in {personalInfo.location} | Open to opportunities
                </p>
              </div>
            </div>
          </Reveal>

          {/* Stats & Certifications */}
          <Reveal direction="right">
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="glass rounded-xl p-4 text-center hover:border-[var(--color-accent-primary)]/50 transition-colors"
                  >
                    <div className="flex justify-center mb-2 text-[var(--color-accent-primary)]">
                      {statIcons[index]}
                    </div>
                    <div className="text-2xl font-bold text-[var(--color-text-primary)]">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-xs text-[var(--color-text-muted)] mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Certifications */}
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4 text-[var(--color-text-primary)]">
                  Certifications
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div
                      key={cert.id}
                      className="flex items-center gap-3 p-3 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]"
                    >
                      <Award className="w-5 h-5 text-[var(--color-accent-primary)] flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-[var(--color-text-primary)] truncate">
                          {cert.name}
                        </p>
                        <p className="text-xs text-[var(--color-text-muted)]">
                          {cert.issuer} • {cert.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
