import { useRef, type ReactNode } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface TiltProps {
  children: ReactNode;
  /** Max rotation in degrees. */
  max?: number;
  className?: string;
}

/** 3D tilt on hover. Disabled for touch devices and reduced-motion users. */
export function Tilt({ children, max = 6, className }: TiltProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || prefersReducedMotion) return;

    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    el.style.transform = `rotateX(${-y * max}deg) rotateY(${x * max}deg)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{ transformStyle: 'preserve-3d', transition: prefersReducedMotion ? undefined : 'transform 0.1s ease' }}
    >
      {children}
    </div>
  );
}
