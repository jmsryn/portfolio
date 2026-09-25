import { ArrowUpRight, Braces, Camera, FlaskConical, Sparkles } from 'lucide-react';
import ProjectMotif from './ProjectMotif';

const projects = [
  { title: 'AutoTestGen', description: 'From requirements to test cases, with a little help from AI.', url: 'https://testai.jrgaid.com', year: '2025', role: 'AI-assisted hobby', tags: 'AI / Test generation', icon: Braces, style: 'testgen' as const },
  { title: 'Sillage', description: 'A personal fragrance curator. Built with AI, tested with care.', url: 'https://mysillage.me', year: '2024', role: 'AI-assisted hobby', tags: 'AI / Product', icon: Sparkles, style: 'sillage' as const },
  { title: 'Gunita', description: 'A guest photo app for celebrations. Scan a QR, capture moments, and reveal the shared album together.', url: 'https://getgunita.com/', role: 'AI-assisted hobby', tags: 'Photography / Events', icon: Camera, style: 'gunita' as const },
  { title: 'Sillage E2E Suite', description: 'A Playwright testing suite for the Sillage experience.', url: 'https://github.com/jmsryn/mysillage-playwright', year: '2024', role: 'Test automation', tags: 'Playwright / E2E', icon: FlaskConical, style: 'suite' as const },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="selected-work">
      <div className="work-heading" data-reveal><h2>Off the clock.</h2></div>
      <p className="hobby-intro" data-reveal>These are hobby projects I explore through vibe coding with AI tools, plus a personal test automation suite. My professional focus is quality assurance, not product development.</p>
      <div className="project-grid" data-reveal="stagger">
        {projects.map(p => (
          <a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-item group t-card-tilt ${p.style}`}
          >
            <ProjectMotif motif={p.style} />
            <div className="hobby-project-heading">
              <div className="hobby-project-title-group">
                <p.icon size={20} strokeWidth={1.5} aria-hidden="true" className="transition-transform duration-300 group-hover:scale-105 text-accent" />
                <h3>{p.title}</h3>
              </div>
              <span className="project-arrow-button" aria-hidden="true">
                <ArrowUpRight size={16} className="t-arrow-icon" />
              </span>
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
