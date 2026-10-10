import { Fragment } from 'react';

/* Kinetic hero headline: each word rises out of its own clip, a scan line
   "verifies" the copy, then the accent line gets underlined. Pure CSS
   (immersive.css, .kt-*), so it plays before hydration and sits still for
   reduced motion. */
const LINES = [
  { words: ['QA', 'at', 'heart.'] },
  { words: ['Quality', 'by', 'design.'], accent: true },
];
const LABEL = LINES.map((line) => line.words.join(' ')).join(' ');

export default function HeroTitle() {
  let n = 0;
  return (
    <h1 id="hero-title" className="kinetic-title" aria-label={LABEL}>
      {LINES.map((line, l) => {
        const words = line.words.map((word, i) => (
          <Fragment key={word}>
            {i > 0 && ' '}
            <span className="kt-word" aria-hidden="true">
              <span style={{ ['--w' as string]: n++ }}>{word}</span>
            </span>
          </Fragment>
        ));
        return (
          <Fragment key={l}>
            {l > 0 && <br />}
            {line.accent ? <span className="kt-accent">{words}</span> : words}
          </Fragment>
        );
      })}
    </h1>
  );
}
