/* Line-drawn, looping motifs for the hobby project cards.
   Drawn in currentColor + var(--accent) so they follow the theme;
   the animation lives in immersive.css (.m-*) and settles on its final
   frame for reduced motion. */

type Motif = 'testgen' | 'sillage' | 'gunita' | 'suite';

const VIEW = '0 0 520 132';

function TestGen() {
  const req = [110, 90, 118, 70];
  const rows = [
    { y: 34, w: 120 },
    { y: 66, w: 96 },
    { y: 98, w: 132 },
  ];
  return (
    <>
      <rect x="36" y="20" width="150" height="92" rx="6" className="m-line" />
      {req.map((w, i) => (
        <line key={i} x1="54" x2={54 + w} y1={42 + i * 16} y2={42 + i * 16} className="m-bar m-parse" style={{ animationDelay: `${i * 0.3}s` }} />
      ))}
      {[0, 1, 2].map((i) => (
        <circle key={i} cx="210" cy="66" r="3" className="m-flow" style={{ animationDelay: `${i * 0.4}s` }} />
      ))}
      {rows.map((r, i) => (
        <g key={r.y}>
          <rect x="312" y={r.y - 9} width="18" height="18" rx="4" className="m-line" />
          <rect x="312" y={r.y - 9} width="18" height="18" rx="4" className="m-box m-pop" style={{ animationDelay: `${1.8 + i * 0.6}s` }} />
          <path d={`M316.5 ${r.y} l4 4 l8 -8`} pathLength={1} className="m-check m-draw" style={{ animationDelay: `${1.8 + i * 0.6}s` }} />
          <line x1="344" x2={344 + r.w} y1={r.y} y2={r.y} className="m-bar" />
        </g>
      ))}
    </>
  );
}

function wave(y: number, amp: number, period: number, phase: number) {
  let d = '';
  for (let x = 90; x <= 520 + period; x += 6) {
    const yy = y + amp * Math.sin(((x - 90) / period) * Math.PI * 2 + phase);
    d += `${d ? 'L' : 'M'}${x} ${yy.toFixed(1)}`;
  }
  return d;
}

function Sillage() {
  const trails = [
    { y: 50, amp: 9, period: 200, phase: 0, dur: 7, op: 1 },
    { y: 64, amp: 12, period: 260, phase: 1.4, dur: 9, op: 0.7 },
    { y: 78, amp: 8, period: 180, phase: 2.6, dur: 6, op: 0.5 },
    { y: 90, amp: 14, period: 300, phase: 0.8, dur: 11, op: 0.35 },
  ];
  return (
    <>
      <defs>
        <linearGradient id="motif-sillage-fade" x1="96" x2="520" y1="0" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.12" stopColor="#fff" stopOpacity="1" />
          <stop offset="0.8" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="motif-sillage-mask">
          <rect x="96" y="0" width="424" height="132" fill="url(#motif-sillage-fade)" />
        </mask>
      </defs>
      <g mask="url(#motif-sillage-mask)">
        {trails.map((t) => (
          <path
            key={t.y}
            d={wave(t.y, t.amp, t.period, t.phase)}
            className="m-trail"
            style={{ opacity: t.op, animationDuration: `${t.dur}s`, ['--period' as string]: `${-t.period}px` }}
          />
        ))}
      </g>
      <rect x="54" y="26" width="24" height="14" rx="3" className="m-line m-accent" />
      <rect x="59" y="40" width="14" height="10" className="m-line" />
      <rect x="42" y="50" width="48" height="58" rx="10" className="m-line" />
      <line x1="50" x2="82" y1="84" y2="84" className="m-line m-faint" />
    </>
  );
}

// Deterministic QR-ish pattern (finder squares drawn separately).
const QR = [
  '00000000', '00000000', '00010110', '01101001',
  '10110110', '01001101', '00011010', '00010111',
];

function Gunita() {
  const frames = [
    { x: 206, r: -6 },
    { x: 306, r: 3 },
    { x: 406, r: -3 },
  ];
  return (
    <>
      <g className="m-qr">
        {[[40, 26], [100, 26], [40, 86]].map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x + 1.5} y={y + 1.5} width="17" height="17" rx="3" className="m-line" />
        ))}
        {QR.flatMap((row, r) =>
          row.split('').map((c, col) =>
            c === '1' ? <rect key={`${r}-${col}`} x={40 + col * 10 + 2} y={26 + r * 10 + 2} width="6" height="6" rx="1" className="m-cell" /> : null,
          ),
        )}
        <line x1="36" x2="124" y1="26" y2="26" className="m-scan" />
      </g>
      <path d="M150 66 h24 m-6 -6 l6 6 l-6 6" className="m-line m-faint" />
      {frames.map((f, i) => (
        <g key={f.x} transform={`rotate(${f.r} ${f.x + 40} 66)`}>
          <g className="m-pop" style={{ animationDelay: `${1.6 + i * 0.5}s` }}>
            <rect x={f.x} y="18" width="80" height="94" rx="4" className="m-frame" />
            <rect x={f.x + 7} y="25" width="66" height="62" rx="2" className="m-line m-faint" />
            <path d={`M${f.x + 12} 80 l16 -18 l10 10 l8 -8 l22 16`} className="m-line m-accent" />
            <circle cx={f.x + 56} cy="40" r="5" className="m-line m-accent" />
          </g>
        </g>
      ))}
      <rect x="0" y="0" width="520" height="132" className="m-flash" />
    </>
  );
}

function Suite() {
  const checkpoints = [120, 220, 320, 420];
  return (
    <>
      <line x1="40" x2="480" y1="70" y2="70" className="m-line m-faint" />
      <line x1="40" x2="480" y1="70" y2="70" pathLength={1} className="m-progress" />
      {checkpoints.map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="70" r="11" className="m-node" />
          <g className="m-pop" style={{ animationDelay: `${0.76 + i * 0.955}s` }}>
            <circle cx={x} cy="70" r="11" className="m-node-on" />
            <path d={`M${x - 4.5} 70 l3 3 l6 -6`} className="m-tick" />
          </g>
          <line x1={x} x2={x} y1="92" y2="100" className="m-line m-faint" />
        </g>
      ))}
      <circle cx="40" cy="70" r="5" className="m-runner" />
      <text x="40" y="40" className="m-label">suite · 4 specs</text>
      <text x="480" y="40" textAnchor="end" className="m-label m-result">all passing</text>
    </>
  );
}

export default function ProjectMotif({ motif }: { motif: Motif }) {
  return (
    <div className={`project-motif motif-${motif}`} aria-hidden="true">
      <svg viewBox={VIEW} preserveAspectRatio="xMidYMid meet" fill="none">
        {motif === 'testgen' && <TestGen />}
        {motif === 'sillage' && <Sillage />}
        {motif === 'gunita' && <Gunita />}
        {motif === 'suite' && <Suite />}
      </svg>
    </div>
  );
}
