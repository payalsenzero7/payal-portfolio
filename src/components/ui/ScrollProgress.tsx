import { useEffect, useRef } from 'react';

/** Thin gradient bar at the top showing how far the page is scrolled. */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrollable = el.scrollHeight - el.clientHeight;
      const percent = scrollable > 0 ? (el.scrollTop / scrollable) * 100 : 0;

      if (barRef.current) {
        barRef.current.style.width = `${percent}%`;
      }
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      className="fixed top-0 left-0 z-100 h-0.5 w-0 bg-linear-to-r from-accent to-accent-2"
    />
  );
}
