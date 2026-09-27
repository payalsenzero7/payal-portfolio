import { useRef, type ReactNode } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface MagneticProps {
  children: ReactNode;
  className?: string;
}

/** Element leans toward the cursor while hovered. */
export function Magnetic({ children, className }: MagneticProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);

  const handleMove = (event: React.MouseEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (!el || prefersReducedMotion) return;

    const rect = el.getBoundingClientRect();
    const dx = (event.clientX - rect.left - rect.width / 2) * 0.25;
    const dy = (event.clientY - rect.top - rect.height / 2) * 0.4;

    el.style.transform = `translate(${dx}px, ${dy}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0, 0)';
  };

  return (
    <span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className ?? 'inline-block'}
      style={{ transition: prefersReducedMotion ? undefined : 'transform 0.15s ease' }}
    >
      {children}
    </span>
  );
}
