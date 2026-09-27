import { motion } from 'framer-motion';
import { Wrench, BarChart3, Users, Lightbulb } from 'lucide-react';
import { skills } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { SkillBar } from '../ui/SkillBar';
import { Reveal } from '../ui/Reveal';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import type { SkillCategory } from '../../types';

const categories: { key: SkillCategory; label: string; icon: React.ReactNode }[] = [
  { key: 'ba-tools', label: 'BA Tools', icon: <Wrench className="w-5 h-5" /> },
  { key: 'data-analytics', label: 'Data & Analytics', icon: <BarChart3 className="w-5 h-5" /> },
  { key: 'methodologies', label: 'Methodologies', icon: <Users className="w-5 h-5" /> },
  { key: 'soft-skills', label: 'Soft Skills', icon: <Lightbulb className="w-5 h-5" /> },
];

export function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="skills" className="section bg-[var(--color-bg-secondary)]">
      <div className="container">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="A comprehensive toolkit for business analysis and data-driven decision making"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => (
            <Reveal key={category.key} delay={categoryIndex * 0.1}>
              <div className="glass rounded-2xl p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)]">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                    {category.label}
                  </h3>
                </div>
                <div className="space-y-4">
                  {skills
                    .filter((skill) => skill.category === category.key)
                    .map((skill, index) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        delay={prefersReducedMotion ? 0 : index * 0.1}
                      />
                    ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
