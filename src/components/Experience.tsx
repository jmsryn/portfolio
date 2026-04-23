import { ExternalLink } from 'lucide-react';

interface WorkEntry {
  title: string;
  org: string;
  year: string;
}

interface EducationEntry {
  degree: string;
  school: string;
  year: string;
}

interface CertEntry {
  title: string;
  issuer: string;
  year: string;
  link: string;
}

const work: WorkEntry[] = [
  { title: 'QA & Test Engineer', org: 'Amihan Solutions', year: '2026' },
  { title: 'Jr. SDET', org: 'Theoria Medical', year: '2025' },
  { title: 'SQA Engineer', org: 'Theoria Medical', year: '2023' },
  { title: 'Lead QA Engineer', org: 'Innovuze Solutions', year: '2023' },
  { title: 'QA Engineer', org: 'Innovuze Solutions', year: '2022' },
];

const education: EducationEntry[] = [
  { degree: 'BS Information Technology', school: 'USTP', year: '2022' },
];

const certs: CertEntry[] = [
  { title: 'PJPT', issuer: 'TCM Security', year: 'In Progress', link: 'https://certifications.tcm-sec.com/pjpt/' },
  { title: 'CyberOps Associate', issuer: 'Cisco', year: '2022', link: 'https://www.credly.com/badges/635df40f-1ae9-48b5-853b-031cc145a133' },
  { title: 'Web App Security & Testing', issuer: 'TCM Security', year: '2023', link: 'https://drive.google.com/file/d/1CBxts736wqNIeH_tzXAPg7mWQuIT7C1Y/view' },
  { title: 'Introduction to Playwright', issuer: 'Applitools', year: '2024', link: 'https://testautomationu.applitools.com/certificate/?id=4a4d8ca2' },
];

function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative py-0.5">
      <div
        className="pointer-events-none absolute left-2 top-2.5 bottom-2.5 w-px bg-border"
        aria-hidden
      />
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function EntryRow({
  title,
  sub,
  year,
  link,
  timeline,
}: {
  title: string;
  sub: string;
  year: string;
  link?: string;
  timeline?: boolean;
}) {
  return (
    <div className="relative flex items-start gap-3 group">
      <div
        className={`flex w-4 shrink-0 justify-center pt-1.5 ${timeline ? 'relative z-10' : ''}`}
      >
        <div
          className={
            timeline
              ? 'h-2 w-2 shrink-0 rounded-full bg-foreground/30 ring-2 ring-background'
              : 'h-2 w-2 shrink-0 rounded-full bg-foreground/30'
          }
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <div className="min-w-0">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground hover:underline underline-offset-2 inline-flex items-center gap-1"
              >
                {title}
                <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </a>
            ) : (
              <span className="text-sm font-medium text-foreground">{title}</span>
            )}
            <p className="text-xs text-muted-foreground">{sub}</p>
          </div>
          <span className="text-xs text-muted-foreground shrink-0 tabular-nums">{year}</span>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <div className="space-y-8">
      <section id="experience">
        <h2 className="text-lg font-semibold text-foreground font-sans mb-4">
          <span className="text-muted-foreground/40 font-mono font-normal text-sm mr-1.5">~/</span>experience
        </h2>
        <Timeline>
          {work.map((w, i) => (
            <EntryRow key={i} title={w.title} sub={w.org} year={w.year} timeline />
          ))}
        </Timeline>
      </section>

      <section id="education">
        <h2 className="text-lg font-semibold text-foreground font-sans mb-4">
          <span className="text-muted-foreground/40 font-mono font-normal text-sm mr-1.5">~/</span>education
        </h2>
        <div className="space-y-3">
          {education.map((e, i) => (
            <EntryRow key={i} title={e.degree} sub={e.school} year={e.year} />
          ))}
        </div>
      </section>

      <section id="certifications">
        <h2 className="text-lg font-semibold text-foreground font-sans mb-4">
          <span className="text-muted-foreground/40 font-mono font-normal text-sm mr-1.5">~/</span>credentials
        </h2>
        <div className="space-y-3">
          {certs.map((c, i) => (
            <EntryRow key={i} title={c.title} sub={c.issuer} year={c.year} link={c.link} />
          ))}
        </div>
      </section>
    </div>
  );
}
