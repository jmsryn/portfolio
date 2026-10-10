import { careerMilestones } from './Experience';

/* Sticky scroll companion for the career timeline. ImmersiveLayer tracks
   which .career-entry is being read and mirrors it here: the year readout
   ticks, the reach line draws back toward that year, and passed milestones
   light up. Milestone order matches the entry order in Experience. */
const FIRST = Math.min(...careerMilestones.map((m) => m.year));
const LAST = Math.max(...careerMilestones.map((m) => m.year));
const X0 = 14;
const X1 = 266;
const x = (year: number) => X0 + ((year - FIRST) / (LAST - FIRST)) * (X1 - X0);
const ticks = Array.from({ length: Math.floor((LAST - FIRST) / 2) + 1 }, (_, i) => FIRST + i * 2);

export default function CareerTrajectory() {
  const first = careerMilestones[0];
  return (
    <div className="career-trajectory" aria-hidden="true">
      <div className="ct-readout" data-ct-readout>
        <span className="ct-year" data-ct-year>{first.year}</span>
        <span className="ct-role" data-ct-title>{first.title}</span>
        <span className="ct-org" data-ct-org>{first.org}</span>
      </div>
      <svg viewBox="0 0 280 60" fill="none">
        <line x1={X0} x2={X1} y1="24" y2="24" className="ct-track" />
        <line x1={X0} x2={X1} y1="24" y2="24" className="ct-reach" />
        {ticks.map((year) => (
          <g key={year}>
            <line x1={x(year)} x2={x(year)} y1="34" y2="38" className="ct-track" />
            <text x={x(year)} y="52" textAnchor="middle" className="ct-tick">’{String(year).slice(2)}</text>
          </g>
        ))}
        <circle cx={x(first.year)} cy="24" r="5" className="ct-pulse" data-ct-pulse />
        {careerMilestones.map((m, i) => (
          <circle
            key={i}
            cx={x(m.year)}
            cy="24"
            r="4"
            className="ct-dot"
            data-ct-dot
            data-on={i === 0 ? '' : undefined}
            data-year={m.year}
            data-title={m.title}
            data-org={m.org}
            data-reach={((LAST - m.year) / (LAST - FIRST)).toFixed(4)}
          />
        ))}
      </svg>
    </div>
  );
}
