import { useMousePosition, useFinePointer } from '../../hooks/useMousePosition';

/** Fixed background: masked grid + soft glow that follow the pointer. */
export function BackgroundFX() {
  const isFine = useFinePointer();
  const { x, y } = useMousePosition();

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(237,241,247,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(237,241,247,0.035) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: `radial-gradient(700px 500px at ${x}px ${y}px, black, transparent 75%)`,
          WebkitMaskImage: `radial-gradient(700px 500px at ${x}px ${y}px, black, transparent 75%)`,
        }}
      />
      <div
        className="absolute rounded-full blur-[10px] transition-opacity duration-300"
        style={{
          width: 700,
          height: 700,
          left: x - 350,
          top: y - 350,
          background: 'radial-gradient(circle, rgba(242,184,7,0.10), transparent 65%)',
          opacity: isFine ? 1 : 0,
        }}
      />
    </div>
  );
}
