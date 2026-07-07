import { ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

type Project = {
  title: string;
  description: string;
  url: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: 'AutoTestGen',
    description: 'AI-powered test case generator',
    url: 'testai.jrgaid.com',
    tags: ['AI', 'Testing'],
  },
  {
    title: 'Smart Money Tracker',
    description: 'AI finance assistant',
    url: 'smartmoney.jrgaid.com',
    tags: ['AI', 'Finance'],
  },
  {
    title: 'Sillage',
    description: 'AI-powered fragrance curator',
    url: 'mysillage.me',
    tags: ['AI', 'Product'],
  },
  {
    title: 'Sillage E2E Suite',
    description: 'Playwright testing suite',
    url: 'github.com/jmsryn/mysillage-playwright',
    tags: ['Playwright', 'E2E'],
  },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-14 md:py-20 border-t border-border">
      <SectionHeading index="03" title="Projects" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((p) => (
          <a
            key={p.title}
            href={`https://${p.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block p-6 rounded-xl border border-border bg-card/40 hover:bg-card hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-display text-xl text-foreground">{p.title}</h3>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </div>
            <p className="text-sm text-muted-foreground mb-4">{p.description}</p>
            <div className="flex flex-wrap items-center gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono text-muted-foreground/70 px-2 py-0.5 rounded-full border border-border"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
