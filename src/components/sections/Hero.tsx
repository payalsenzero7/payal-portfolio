import { personalInfo, stats } from '../../data/portfolio';
import { useCountUp } from '../../hooks/useCountUp';
import { Magnetic } from '../ui/Magnetic';
import { Tilt } from '../ui/Tilt';

function Stat({
  value,
  prefix,
  suffix,
  decimals,
  label,
}: {
  value: number;
  prefix: string;
  suffix: string;
  decimals: number;
  label: string;
}) {
  const { ref, display } = useCountUp(value, prefix, suffix, decimals);

  return (
    <div>
      <b ref={ref} className="block font-display text-[1.8rem] font-bold text-ink">
        {display}
      </b>
      <span className="text-[0.8rem] text-muted">{label}</span>
    </div>
  );
}

export function Hero() {
  return (
    <header className="wrap grid items-center gap-14 pt-14 pb-12 md:grid-cols-[1.05fr_0.95fr] md:pt-20 md:pb-15">
      {/* Left column */}
      <div>
        <p className="eyebrow">
          <span className="dot" />
          {personalInfo.eyebrow}
        </p>

        <h1 className="max-w-[13ch] text-[clamp(2.2rem,4.4vw,3.6rem)]">{personalInfo.headline}</h1>

        <p className="lede mt-[22px] mb-8 max-w-[44ch] text-[1.08rem]">{personalInfo.lede}</p>

        <div className="mb-11 flex flex-wrap gap-3.5">
          <Magnetic>
            <a href="#projects" className="btn btn-primary">
              See the work
            </a>
          </Magnetic>
          <Magnetic>
            <a href={personalInfo.resumeUrl} download className="btn btn-ghost">
              Download r&eacute;sum&eacute;
            </a>
          </Magnetic>
        </div>

        <div className="flex flex-wrap gap-10 border-t border-line pt-6.5">
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </div>

      {/* Right column — delay-risk panel from the supply chain analysis */}
      <Tilt max={8}>
        <div className="rounded-2xl border border-line bg-linear-to-b from-surface to-surface-2 px-6 pt-6.5 pb-5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
          <div className="mb-1.5 flex items-baseline justify-between">
            <p className="font-display text-[0.95rem] font-semibold text-ink">Profit lost to late deliveries</p>
            <span className="font-mono text-[0.78rem] text-accent-2">$2.1M</span>
          </div>
          <p className="mb-3.5 text-[0.78rem] text-muted">
            172,765 orders &middot; 54.7% delivered late
          </p>

          <svg viewBox="0 0 300 130" width="100%" height="140" role="img" aria-label="Share of orders by days late, peaking at one day late">
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F2B807" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#F2B807" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              className="chart-fill"
              d="M0,124 L42,116 L84,113 L126,96 L168,102 L210,20 L252,78 L300,116 L300,130 L0,130 Z"
            />
            <path className="chart-line-2" d="M0,124 L42,116 L84,113 L126,96 L168,102 L210,20 L252,78 L300,116" />
            <path
              className="chart-line"
              d="M0,124 L42,116 L84,113 L126,96 L168,102 L210,20 L252,78 L300,116"
            />
            <circle className="chart-dot" cx="210" cy="20" r="4" fill="#F2B807" />
          </svg>

          <div className="mt-3 flex justify-between font-mono text-[0.76rem] text-muted">
            <span>on time</span>
            <span>1 day late &middot; 31%</span>
            <b className="text-accent">4+ days</b>
          </div>
        </div>
      </Tilt>
    </header>
  );
}
