import { Award, ExternalLink } from 'lucide-react';

type Credential = {
  title: string;
  issuer: string;
  date: string;
  link: string;
  type: 'certification' | 'course';
};

const credentials: Credential[] = [
  {
    title: 'Practical Junior Penetration Tester (PJPT)',
    issuer: 'TCM Security',
    date: 'In Progress',
    link: 'https://certifications.tcm-sec.com/pjpt/',
    type: 'certification',
  },
  {
    title: 'CyberOps Associate',
    issuer: 'Cisco Networking Academy',
    date: '2022',
    link: 'https://www.credly.com/badges/635df40f-1ae9-48b5-853b-031cc145a133',
    type: 'course',
  },
  {
    title: 'Practical Web App Security & Testing',
    issuer: 'TCM Security',
    date: '2023',
    link: 'https://drive.google.com/file/d/1CBxts736wqNIeH_tzXAPg7mWQuIT7C1Y/view',
    type: 'course',
  },
  {
    title: 'Introduction to Playwright',
    issuer: 'Applitools',
    date: '2024',
    link: 'https://testautomationu.applitools.com/certificate/?id=4a4d8ca2',
    type: 'course',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 border-t border-border">
      <h2 className="text-2xl md:text-3xl font-display text-foreground mb-8">Credentials</h2>

      <div className="space-y-4">
        {credentials.map((cred) => (
          <a
            key={cred.title}
            href={cred.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 p-4 rounded-xl border border-border hover:border-foreground/20 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-muted-foreground" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-foreground font-sans mb-0.5">
                    {cred.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{cred.issuer}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {cred.date === 'In Progress' && (
                    <span className="px-2 py-0.5 text-xs bg-accent/10 text-accent rounded-full font-medium">
                      Active
                    </span>
                  )}
                  <span className="text-xs text-muted-foreground">{cred.date}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
