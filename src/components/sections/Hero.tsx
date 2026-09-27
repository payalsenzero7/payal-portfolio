import { personalInfo, stats } from '../../data/portfolio';
import { useCountUp } from '../../hooks/useCountUp';
import { Magnetic } from '../ui/Magnetic';
import { Tilt } from '../ui/Tilt';

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, display } = useCountUp(value, suffix);

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
    <header className="wrap grid items-center gap-14 py-20 pb-15 md:grid-cols-[1.05fr_0.95fr] md:py-20">
      {/* Left column */}
      <div>
        <p className="eyebrow">
          <span className="dot" />
          {personalInfo.eyebrow}
        </p>

        <h1 className="max-w-[13ch] text-[clamp(2.2rem,4.4vw,3.6rem)]">{personalInfo.headline}</h1>

        <p className="lede my-[22px] max-w-[44ch] text-[1.08rem]">{personalInfo.lede}</p>

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

      {/* Right column — live dashboard panel */}
      <Tilt max={8}>
        <div className="rounded-2xl border border-line bg-linear-to-b from-surface to-surface-2 p-6 pb-5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
          <div className="mb-1.5 flex items-baseline justify-between">
            <h3 className="font-display text-[0.95rem] font-semibold text-ink">Inventory carrying cost</h3>
            <span className="font-mono text-[0.78rem] text-accent-2">▾ 18.4%</span>
          </div>
          <p className="mb-3.5 text-[0.78rem] text-muted">Q1 → Q4, after process redesign</p>

          <svg viewBox="0 0 300 130" width="100%" height="140" role="img" aria-label="Inventory carrying cost trending down over four quarters">
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F2B807" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#F2B807" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              className="chart-fill"
              d="M0,90 L30,78 L60,82 L90,55 L120,60 L150,40 L180,44 L210,25 L240,30 L270,14 L300,18 L300,130 L0,130 Z"
            />
            <path className="chart-line-2" d="M0,105 L30,100 L60,98 L90,92 L120,88 L150,80 L180,78 L210,70 L240,66 L270,60 L300,58" />
            <path className="chart-line" d="M0,90 L30,78 L60,82 L90,55 L120,60 L150,40 L180,44 L210,25 L240,30 L270,14 L300,18" />
            <circle className="chart-dot" cx="300" cy="18" r="4" fill="#F2B807" />
          </svg>

          <div className="mt-3 flex justify-between font-mono text-[0.76rem] text-muted">
            <span>Jan</span>
            <span>Live · Power BI</span>
            <b className="text-accent">Dec</b>
          </div>
        </div>
      </Tilt>
    </header>
  );
}
