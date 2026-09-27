import { useEffect, useState } from 'react';
import { useMousePosition, useFinePointer } from '../../hooks/useMousePosition';

const INTERACTIVE = 'a, button, input, textarea, select, [data-tilt], .chip';

/** Dot + ring cursor that follows the pointer and grows over interactive elements. */
export function CustomCursor() {
  const isFine = useFinePointer();
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isFine) return;

    const handleOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      setIsHovering(Boolean(target?.closest?.(INTERACTIVE)));
    };

    document.addEventListener('mouseover', handleOver, { passive: true });
    return () => document.removeEventListener('mouseover', handleOver);
  }, [isFine]);

  if (!isFine) return null;

  const position = `translate(${x}px, ${y}px) translate(-50%, -50%)`;

  return (
    <>
      <div className="cursor-dot" style={{ transform: position }} aria-hidden="true" />
      <div
        className={`cursor-ring${isHovering ? ' is-hover' : ''}`}
        style={{ transform: position }}
        aria-hidden="true"
      />
    </>
  );
}
