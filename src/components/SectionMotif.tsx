/* Line-drawn QA motifs for the About, Tools and Contact columns. They share
   the .m-* vocabulary with ProjectMotif; the extra keyframes live in
   immersive.css and settle on their final frame for reduced motion. */

export type SectionMotifName = 'bughunt' | 'pipeline' | 'release';

const VIEW = '0 0 520 120';

function BugHunt() {
  const code = [
    { x: 44, y: 44, w: 140 },
    { x: 60, y: 58, w: 96 },
    { x: 60, y: 72, w: 168, flagged: true },
    { x: 44, y: 86, w: 120 },
  ];
  const legs = 'M313 66 l-8 -5 M313 73 h-9 M313 80 l-8 5 M331 66 l8 -5 M331 73 h9 M331 80 l8 5 M318 61 l-4 -7 M326 61 l4 -7';
  return (
    <>
      <rect x="28" y="14" width="236" height="92" rx="6" className="m-line" />
      <line x1="28" x2="264" y1="30" y2="30" className="m-line m-faint" />
      {[38, 46, 54].map((cx) => <circle key={cx} cx={cx} cy="22" r="2" className="m-cell" />)}
      {code.map((c) => (
        <g key={c.y}>
          <line x1={c.x} x2={c.x + c.w} y1={c.y} y2={c.y} className="m-bar" />
          {c.flagged && <line x1={c.x} x2={c.x + c.w} y1={c.y} y2={c.y} className="m-bar m-flag" />}
        </g>
      ))}
      <line x1="32" x2="260" y1="36" y2="36" className="m-scan m-scan-code" />
      <path d="M240 72 H296" className="m-line m-faint" strokeDasharray="3 5" />
      <text x="352" y="44" className="m-label">regression run</text>
      <g className="m-bug">
        <ellipse cx="322" cy="73" rx="9" ry="12" className="m-line m-accent" />
        <path d={`M322 61 v24 ${legs}`} className="m-line m-accent" />
        <text x="352" y="77" className="m-label m-accent-text">1 defect caught</text>
      </g>
      <g className="m-fixed">
        <circle cx="322" cy="73" r="13" className="m-node-on" />
        <path d="M316 73 l4 4 l8 -8" className="m-tick" />
        <text x="352" y="77" className="m-label m-accent-text">fixed · re-tested</text>
      </g>
    </>
  );
}

function Pipeline() {
  const stages = ['commit', 'build', 'test', 'deploy'];
  return (
    <>
      <text x="24" y="18" className="m-label">ci · main</text>
      <text x="496" y="18" textAnchor="end" className="m-label m-result">deployed</text>
      {stages.map((name, i) => {
        const x = 24 + i * 124;
        return (
          <g key={name}>
            {i > 0 && <line x1={x - 24} x2={x} y1="48" y2="48" className="m-line m-faint" />}
            <rect x={x} y="30" width="100" height="36" rx="6" className="m-node" />
            <text x={x + 50} y="52" textAnchor="middle" className="m-label">{name}</text>
            <g className={`m-stage m-stage-${i}`}>
              <rect x={x} y="30" width="100" height="36" rx="6" className="m-box" />
              <text x={x + 50} y="52" textAnchor="middle" className="m-label m-label-on">{name}</text>
            </g>
          </g>
        );
      })}
      <line x1="74" x2="446" y1="96" y2="96" className="m-line m-faint" />
      <line x1="74" x2="446" y1="96" y2="96" pathLength={1} className="m-progress" />
      <circle cx="74" cy="96" r="5" className="m-runner m-runner-pipe" />
    </>
  );
}

function Release() {
  const checks = ['e2e suite', 'security scan', 'perf budget'];
  return (
    <>
      <path d="M42 104 A78 78 0 0 1 198 104" className="m-arc-track" />
      <path d="M42 104 A78 78 0 0 1 198 104" pathLength={1} className="m-arc" />
      {[-90, -45, 0, 45, 90].map((a) => (
        <line key={a} x1="120" x2="120" y1="16" y2="22" transform={`rotate(${a} 120 104)`} className="m-line m-faint" />
      ))}
      <line x1="120" x2="120" y1="104" y2="44" className="m-needle" />
      <circle cx="120" cy="104" r="5" className="m-runner" />
      <text x="120" y="119" textAnchor="middle" className="m-label">release confidence</text>
      {checks.map((label, i) => {
        const y = 30 + i * 26;
        return (
          <g key={label}>
            <rect x="262" y={y - 7} width="14" height="14" rx="3" className="m-line" />
            <rect x="262" y={y - 7} width="14" height="14" rx="3" className="m-box m-pop" style={{ animationDelay: `${0.6 + i * 0.7}s` }} />
            <path d={`M265.5 ${y} l3 3 l6 -6`} pathLength={1} className="m-check m-draw" style={{ animationDelay: `${0.6 + i * 0.7}s` }} />
            <text x="288" y={y + 4} className="m-label">{label}</text>
          </g>
        );
      })}
      <text x="262" y="112" className="m-label m-result">→ ready to ship</text>
    </>
  );
}

export default function SectionMotif({ motif }: { motif: SectionMotifName }) {
  return (
    <div className={`project-motif section-motif motif-${motif}`} aria-hidden="true">
      <svg viewBox={VIEW} preserveAspectRatio="xMidYMid meet" fill="none">
        {motif === 'bughunt' && <BugHunt />}
        {motif === 'pipeline' && <Pipeline />}
        {motif === 'release' && <Release />}
      </svg>
    </div>
  );
}
