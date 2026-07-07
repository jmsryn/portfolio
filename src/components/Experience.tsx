import { ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface WorkEntry {
  title: string;
  org: string;
  period: string;
  points: string[];
}

interface CertEntry {
  title: string;
  issuer: string;
  year: string;
  link: string;
}

const work: WorkEntry[] = [
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
      'Built automated regression suites that cut release-validation time by ~40%.',
      'Integrated Playwright + GitHub Actions with PR-level test reporting.',
    ],
  },
  {
    title: 'SQA Engineer',
    org: 'Theoria Medical',
    period: '2023 — 2025',
    points: [
      'Owned manual and automated QA for a HIPAA-adjacent clinical product.',
      'Partnered with developers on test-first workflows and flake reduction.',
    ],
  },
  {
    title: 'Lead QA Engineer',
    org: 'Innovuze Solutions',
    period: '2023',
    points: [
      'Mentored the QA team; established bug triage, test-case standards, and a reporting cadence.',
    ],
  },
  {
    title: 'QA Engineer',
    org: 'Innovuze Solutions',
    period: '2022 — 2023',
    points: [
      'Authored API and UI tests (Postman, Selenium) across web and mobile projects.',
    ],
  },
];

const education = {
  degree: 'BS Information Technology',
  school: 'University of Science and Technology of Southern Philippines',
  period: '2018 — 2022',
  points: [
    'Focused on software engineering and QA practices; competed in DICT inter-university hacking competitions.',
    '3rd place, DICT hacking competition.',
    'Capstone: Bureau of Fisheries Management System.',
  ],
};

const certs: CertEntry[] = [
  { title: 'PJPT', issuer: 'TCM Security', year: 'In Progress', link: 'https://certifications.tcm-sec.com/pjpt/' },
  { title: 'CyberOps Associate', issuer: 'Cisco', year: '2022', link: 'https://www.credly.com/badges/635df40f-1ae9-48b5-853b-031cc145a133' },
  { title: 'Web App Security & Testing', issuer: 'TCM Security', year: '2023', link: 'https://drive.google.com/file/d/1CBxts736wqNIeH_tzXAPg7mWQuIT7C1Y/view' },
  { title: 'Introduction to Playwright', issuer: 'Applitools', year: '2024', link: 'https://testautomationu.applitools.com/certificate/?id=4a4d8ca2' },
];

function DetailEntry({
  title,
  sub,
  period,
  points,
}: {
  title: string;
  sub: string;
  period: string;
  points: string[];
}) {
  return (
    <div className="py-5 border-b border-border/60 last:border-b-0">
      <div className="flex items-baseline justify-between gap-4 mb-2">
        <div className="min-w-0">
          <h3 className="text-base font-medium text-foreground font-sans">{title}</h3>
          <p className="text-sm text-muted-foreground">{sub}</p>
        </div>
        <span className="text-xs font-mono text-muted-foreground shrink-0 tabular-nums">
          {period}
        </span>
      </div>
      <ul className="space-y-1.5">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
            <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-accent" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <>
      <section id="experience" className="py-14 md:py-20 border-t border-border">
        <SectionHeading index="04" title="Experience" />
        <div>
          {work.map((w, i) => (
            <DetailEntry key={i} title={w.title} sub={w.org} period={w.period} points={w.points} />
          ))}
        </div>
      </section>

      <section id="education" className="py-14 md:py-20 border-t border-border">
        <SectionHeading index="05" title="Education" />
        <DetailEntry
          title={education.degree}
          sub={education.school}
          period={education.period}
          points={education.points}
        />
      </section>

      <section id="certifications" className="py-14 md:py-20 border-t border-border">
        <SectionHeading index="06" title="Credentials" />
        <div>
          {certs.map((c, i) => (
            <div
              key={i}
              className="flex items-baseline justify-between gap-4 py-3 border-b border-border/60 last:border-b-0 group"
            >
              <div className="min-w-0">
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-foreground hover:text-accent transition-colors inline-flex items-center gap-1.5"
                >
                  {c.title}
                  <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </a>
                <p className="text-sm text-muted-foreground">{c.issuer}</p>
              </div>
              <span className="text-xs font-mono text-muted-foreground shrink-0 tabular-nums">
                {c.year}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
