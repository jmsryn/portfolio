import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, Mail, MapPin, Globe, Github, Linkedin, ArrowLeft } from 'lucide-react';
import PrintButton from './PrintButton';

export const metadata: Metadata = {
  title: 'Resume · James Ryan Gaid',
  description: 'One-page recruiter-friendly resume for James Ryan Gaid — QA & Test Engineer.',
};

const work = [
  {
    title: 'QA & Test Engineer',
    org: 'Amihan Solutions',
    period: '2026 — Present',
    points: [
      'Lead end-to-end and API test coverage across multi-team releases.',
      'Design scalable Playwright frameworks with CI gating on quality metrics.',
    ],
  },
  {
    title: 'Junior SDET',
    org: 'Theoria Medical',
    period: '2025 — 2026',
    points: [
      'Built automated regression suites reducing release-validation time ~40%.',
      'Integrated Playwright + GitHub Actions with PR-level test reporting.',
    ],
  },
  {
    title: 'SQA Engineer',
    org: 'Theoria Medical',
    period: '2023 — 2025',
    points: [
      'Owned manual + automated QA for a HIPAA-adjacent clinical product.',
      'Partnered with devs on test-first workflows and flake reduction.',
    ],
  },
  {
    title: 'Lead QA Engineer',
    org: 'Innovuze Solutions',
    period: '2023',
    points: [
      'Mentored QA team; established bug triage, test-case standards, and reporting cadence.',
    ],
  },
  {
    title: 'QA Engineer',
    org: 'Innovuze Solutions',
    period: '2022 — 2023',
    points: [
      'Authored API + UI tests (Postman, Selenium) across web & mobile projects.',
    ],
  },
];

const stack = {
  Testing: ['Playwright', 'Cypress', 'Selenium', 'K6', 'Postman', 'APIDog'],
  Languages: ['JavaScript', 'TypeScript', 'Python'],
  'DevOps & Cloud': ['Docker', 'GitHub Actions', 'Azure DevOps', 'Git', 'Jira'],
  Security: ['OWASP ZAP', 'Burp Suite'],
};

const certs = [
  { title: 'PJPT', issuer: 'TCM Security', year: 'In Progress' },
  { title: 'CyberOps Associate', issuer: 'Cisco', year: '2022' },
  { title: 'Web App Security & Testing', issuer: 'TCM Security', year: '2023' },
  { title: 'Introduction to Playwright', issuer: 'Applitools', year: '2024' },
];

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* On-screen controls — hidden when printing */}
      <div className="print:hidden sticky top-0 z-20 backdrop-blur bg-background/80 border-b border-border">
        <div className="mx-auto max-w-3xl px-5 md:px-8 py-3 flex items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to portfolio
          </Link>
          <div className="flex items-center gap-2">
            <a
              href="/files/James%20Ryan%20Gaid%20-%20CV1.pdf"
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-md text-xs font-medium text-foreground hover:bg-secondary transition-colors"
            >
              <Download className="w-3 h-3" />
              PDF
            </a>
            <PrintButton />
          </div>
        </div>
      </div>

      <article
        id="resume-sheet"
        className="mx-auto max-w-3xl px-5 md:px-8 py-8 md:py-12 print:py-4 print:px-0 print:max-w-none"
      >
        {/* Header */}
        <header className="pb-5 border-b border-border">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <h1 className="text-3xl md:text-4xl font-display tracking-tight text-foreground leading-none">
                James Ryan Gaid
              </h1>
              <p className="mt-1.5 text-sm text-muted-foreground">
                QA &amp; Test Engineer · SDET · Security Enthusiast
              </p>
            </div>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
              <li className="inline-flex items-center gap-1.5">
                <MapPin className="w-3 h-3" /> Philippines · Remote
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Mail className="w-3 h-3" />
                <a href="mailto:hello@jrgaid.com" className="hover:text-foreground">
                  hello@jrgaid.com
                </a>
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Globe className="w-3 h-3" />
                <a
                  href="https://jrgaid.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  jrgaid.com
                </a>
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Github className="w-3 h-3" />
                <a
                  href="https://github.com/jmsryn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  jmsryn
                </a>
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Linkedin className="w-3 h-3" />
                <a
                  href="https://linkedin.com/in/jmsryn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  jmsryn
                </a>
              </li>
            </ul>
          </div>
        </header>

        {/* Summary */}
        <Section title="Summary">
          <p className="text-sm text-foreground/90 leading-relaxed">
            QA engineer with ~4 years across web, API, and security-adjacent products. I build
            Playwright and Cypress frameworks that slot into CI, reduce regression time, and hold
            teams to measurable quality bars. Comfortable bridging dev and QA — writing
            automation, doing exploratory testing, and running triage when releases heat up.
          </p>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          <div className="space-y-4">
            {work.map((w) => (
              <div key={`${w.title}-${w.org}-${w.period}`} className="break-inside-avoid">
                <div className="flex items-baseline justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground">
                      {w.title} <span className="text-muted-foreground font-normal">· {w.org}</span>
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0 tabular-nums">
                    {w.period}
                  </span>
                </div>
                <ul className="mt-1 list-disc list-outside pl-5 space-y-0.5 text-sm text-foreground/85 leading-relaxed">
                  {w.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section title="Skills">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
            {Object.entries(stack).map(([cat, items]) => (
              <div key={cat} className="flex gap-3">
                <dt className="shrink-0 text-xs font-semibold text-foreground w-28">{cat}</dt>
                <dd className="text-sm text-muted-foreground">{items.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* Education + Certs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 print:gap-x-6">
          <Section title="Education">
            <div>
              <p className="text-sm font-semibold text-foreground">BS Information Technology</p>
              <p className="text-sm text-muted-foreground">
                University of Science and Technology of Southern Philippines · 2022
              </p>
            </div>
          </Section>

          <Section title="Credentials">
            <ul className="space-y-1.5">
              {certs.map((c) => (
                <li
                  key={c.title}
                  className="flex items-baseline justify-between gap-3 text-sm"
                >
                  <div className="min-w-0">
                    <span className="font-medium text-foreground">{c.title}</span>
                    <span className="text-muted-foreground"> · {c.issuer}</span>
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0 tabular-nums">
                    {c.year}
                  </span>
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <footer className="pt-6 mt-6 border-t border-border text-[11px] text-muted-foreground flex items-center justify-between">
          <span>
            © {new Date().getFullYear()} James Ryan Gaid · Generated from jrgaid.com/resume
          </span>
          <span className="font-mono hidden sm:inline">rev · 2026.04</span>
        </footer>
      </article>

      {/* Print-specific tweaks */}
      <style>{`
        @media print {
          @page { size: A4; margin: 14mm; }
          html, body { background: #ffffff !important; color: #111 !important; }
          a { color: inherit !important; text-decoration: none !important; }
          .print\\:hidden { display: none !important; }
        }
      `}</style>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="pt-4 pb-1 break-inside-avoid">
      <h2 className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-2">
        {title}
      </h2>
      {children}
    </section>
  );
}

