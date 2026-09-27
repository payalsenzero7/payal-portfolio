import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

export function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.3 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-[var(--color-text-primary)]">{name}</span>
        <span className="text-xs text-[var(--color-text-muted)] font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-[var(--color-bg-tertiary)] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay, ease: 'easeInOut' }}
          className="h-full rounded-full bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)]"
        />
      </div>
    </div>
  );
}
