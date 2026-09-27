import { marqueeItems } from '../../data/portfolio';

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee relative z-1 overflow-hidden border-y border-line bg-surface py-4.5">
      <div className="marquee-track" aria-hidden="true">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-2.5 font-mono text-[0.82rem] whitespace-nowrap text-muted"
          >
            <em className="text-accent not-italic">▲</em>
            {item}
          </span>
        ))}
      </div>
      <span className="sr-only">Skills: {marqueeItems.join(', ')}</span>
    </div>
  );
}
