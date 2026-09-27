import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface TimelineProps {
  children: ReactNode;
}

export function Timeline({ children }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--color-border)] md:-translate-x-1/2" />
      {children}
    </div>
  );
}

interface TimelineItemProps {
  children: ReactNode;
  isLeft?: boolean;
  icon?: ReactNode;
}

export function TimelineItem({ children, isLeft = false, icon }: TimelineItemProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`relative flex items-start gap-6 mb-12 ${
        isLeft ? 'md:flex-row-reverse md:text-right' : ''
      }`}
    >
      {/* Dot */}
      <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[var(--color-accent-primary)] border-2 border-[var(--color-bg-primary)] md:-translate-x-1/2 z-10" />
      
      {/* Content */}
      <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
        {children}
      </div>
    </motion.div>
  );
}
