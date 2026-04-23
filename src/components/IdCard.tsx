'use client';

import { QRCodeSVG } from 'qrcode.react';
import { Terminal } from 'lucide-react';

const EMAIL = 'hello@jrgaid.com';

const vCard = [
  'BEGIN:VCARD',
  'VERSION:3.0',
  'N:Gaid;James Ryan;;;',
  'FN:James Ryan Gaid',
  'TITLE:QA & Test Engineer',
  `EMAIL;TYPE=INTERNET:${EMAIL}`,
  'URL:https://jrgaid.com',
  'URL;type=GitHub:https://github.com/jmsryn',
  'URL;type=LinkedIn:https://linkedin.com/in/jmsryn',
  'ADR;TYPE=HOME:;;;;;;Philippines',
  'END:VCARD',
].join('\n');

export default function IdCard() {
  return (
    <div className="w-full max-w-[240px] mx-auto sm:mx-0 shrink-0">
      <div className="relative aspect-[5/7] rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-800 via-zinc-900 to-black ring-1 ring-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
        {/* glossy sheen */}
        <div
          className="pointer-events-none absolute -top-16 -left-4 w-[140%] h-36 bg-gradient-to-b from-white/[0.08] to-transparent rotate-[-4deg]"
          aria-hidden
        />
        {/* subtle noise / dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)',
            backgroundSize: '14px 14px',
          }}
          aria-hidden
        />

        <div className="relative h-full p-5 flex flex-col justify-between text-white">
          {/* top: prompt icon + title */}
          <div>
            <Terminal className="w-7 h-7 text-white" strokeWidth={2.25} aria-hidden />

            <div className="mt-12">
              <p className="text-base font-semibold tracking-[0.08em] leading-tight uppercase">
                James Ryan
                <br />
                Gaid
              </p>
              <p className="mt-1.5 font-mono text-[9px] tracking-[0.22em] text-white/45 uppercase">
                Access Card
              </p>
            </div>
          </div>

          {/* middle: member */}
          <div>
            <p className="font-mono text-[9px] tracking-[0.22em] text-white/45 uppercase">
              Member
            </p>
            <p className="mt-0.5 text-sm font-semibold tracking-[0.08em] uppercase">
              @jmsryn
            </p>
          </div>

          {/* bottom: role + QR */}
          <div className="flex items-end justify-between gap-3">
            <p className="font-mono text-[9px] tracking-[0.22em] text-white/45 uppercase leading-relaxed">
              QA Engineer
              <br />
              <span className="text-white/30">PH · 2026</span>
            </p>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email James (or scan QR to save contact)"
              className="rounded-sm bg-white p-1 ring-1 ring-white/20 hover:ring-white/40 transition"
              title="Scan to save contact · or click to email"
            >
              <QRCodeSVG
                value={vCard}
                size={46}
                level="M"
                bgColor="#ffffff"
                fgColor="#000000"
                marginSize={0}
              />
            </a>
          </div>
        </div>
      </div>

      <p className="mt-2 text-center sm:text-right font-mono text-[10px] text-muted-foreground/70">
        scan → save contact
      </p>
    </div>
  );
}
