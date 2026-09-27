import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ title, subtitle, align = 'center' }: SectionHeadingProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  );
}
