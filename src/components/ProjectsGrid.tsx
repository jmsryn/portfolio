import { ArrowUpRight, Braces, Camera, FlaskConical, Sparkles } from 'lucide-react';

const projects = [
  { title: 'AutoTestGen', description: 'From requirements to test cases, with a little help from AI.', url: 'https://testai.jrgaid.com', year: '2025', role: 'AI-assisted hobby', tags: 'AI / Test generation', icon: Braces, style: 'testgen', cover: 'Better tests.\nLess busywork.' },
  { title: 'Sillage', description: 'A personal fragrance curator. Built with AI, tested with care.', url: 'https://mysillage.me', year: '2024', role: 'AI-assisted hobby', tags: 'AI / Product', icon: Sparkles, style: 'sillage', cover: 'Find your\nsignature.' },
  { title: 'Gunita', description: 'A guest photo app for celebrations. Scan a QR, capture moments, and reveal the shared album together.', url: 'https://getgunita.com/', role: 'AI-assisted hobby', tags: 'Photography / Events', icon: Camera, style: 'gunita' },
  { title: 'Sillage E2E Suite', description: 'A Playwright testing suite for the Sillage experience.', url: 'https://github.com/jmsryn/mysillage-playwright', year: '2024', role: 'Test automation', tags: 'Playwright / E2E', icon: FlaskConical, style: 'suite', cover: 'Built to run.\nDesigned to catch.' },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="selected-work">
      <div className="work-heading"><h2>Off the clock.</h2></div>
      <p className="hobby-intro">These are hobby projects I explore through vibe coding with AI tools, plus a personal test automation suite. My professional focus is quality assurance, not product development.</p>
      <div className="project-grid">
        {projects.map(p => (
          <a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-item group t-arrow-glide t-card-tilt ${p.style}`}
          >
            <div className="hobby-project-heading">
              <p.icon size={20} strokeWidth={1.5} aria-hidden="true" className="transition-transform duration-300 group-hover:scale-105 text-accent" />
              <h3>{p.title}</h3>
              <ArrowUpRight size={16} aria-hidden="true" className="t-arrow-icon" />
            </div>
            <p>{p.description}</p>
            <div className="hobby-project-meta">
              <span className="project-tags">{p.tags}</span>
              <span>{p.role}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
