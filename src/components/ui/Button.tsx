import { motion } from 'framer-motion';
import type { ReactNode, ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

export function Button({ children, variant = 'primary', size = 'md', href, className, ...props }: ButtonProps) {
  const prefersReducedMotion = useReducedMotion();

  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 cursor-pointer';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] text-white hover:shadow-lg hover:shadow-[var(--color-accent-primary)]/25 hover:scale-[1.02]',
    secondary: 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-primary)] border border-[var(--color-border)] hover:border-[var(--color-accent-primary)] hover:scale-[1.02]',
    outline: 'bg-transparent text-[var(--color-accent-primary)] border border-[var(--color-accent-primary)] hover:bg-[var(--color-accent-primary)]/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  const motionProps = prefersReducedMotion ? {} : {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button className={classes} {...motionProps} {...props}>
      {children}
    </motion.button>
  );
}
