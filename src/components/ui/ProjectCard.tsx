import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import type { Project } from '../../types';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group glass rounded-2xl overflow-hidden hover:border-[var(--color-accent-primary)]/50 transition-all duration-300"
    >
      {/* Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-[var(--color-bg-tertiary)] to-[var(--color-bg-secondary)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-primary)]/10 to-[var(--color-accent-secondary)]/10" />
        <div className="relative z-10 text-center p-4">
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">{project.title}</h3>
          <p className="text-sm text-[var(--color-text-muted)]">{project.category.replace('-', ' ').toUpperCase()}</p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-[var(--color-accent-primary)]/5" />
        <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full bg-[var(--color-accent-secondary)]/5" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
          {project.longDescription}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {project.features.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
              <ChevronRight className="w-4 h-4 text-[var(--color-accent-primary)] flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-[var(--color-bg-tertiary)] text-[var(--color-text-primary)] border border-[var(--color-border)] hover:border-[var(--color-accent-primary)] transition-colors"
          >
            <Github className="w-4 h-4" />
            View Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] text-white hover:shadow-lg transition-shadow"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
