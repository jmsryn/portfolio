type Project = {
  title: string;
  description: string;
  url: string;
};

const projects: Project[] = [
  {
    title: 'AutoTestGen',
    description: 'AI-powered test case generator',
    url: 'testai.jrgaid.com',
  },
  {
    title: 'Smart Money Tracker',
    description: 'AI finance assistant',
    url: 'smartmoney.jrgaid.com',
  },
  {
    title: 'Sillage',
    description: 'AI-powered fragrance curator',
    url: 'mysillage.me',
  },
  {
    title: 'Sillage E2E Suite',
    description: 'Playwright testing suite',
    url: 'github.com/jmsryn/mysillage-playwright',
  },
];

export default function ProjectsGrid() {
  return (
    <section id="projects">
      <h2 className="text-lg font-semibold text-foreground font-sans mb-4">
        <span className="text-muted-foreground/40 font-mono font-normal text-sm mr-1.5">~/</span>projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
        {projects.map((p) => (
          <a
            key={p.title}
            href={`https://${p.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <h3 className="text-sm font-medium text-foreground group-hover:underline underline-offset-2 font-sans">
              {p.title}
            </h3>
            <p className="text-xs text-muted-foreground mb-0.5">{p.description}</p>
            <span className="text-xs text-muted-foreground/60 font-mono">{p.url}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
