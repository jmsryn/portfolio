import type { ComponentType } from 'react';
import { ArrowUpRight, Braces, Camera, FlaskConical, MonitorSmartphone, Sparkles } from 'lucide-react';
import ProjectMotif, { type Motif } from './ProjectMotif';

const LABS_URL = 'https://jrgaidlabs.dev';

type Project = {
  title: string;
  description: string;
  url: string;
  tags: string;
  meta: string;
  icon: ComponentType<{ size?: number; strokeWidth?: number; className?: string; 'aria-hidden'?: boolean }>;
  motif: Motif;
  status?: string;
};

// Mirrors the "Available" products on jrgaidlabs.dev. Update alongside that site.
const labs: Project[] = [
  { title: 'Gunita', description: 'Guests scan a QR code to add their photos to one shared event album.', url: 'https://getgunita.com', tags: 'Web / Events', meta: 'Available', icon: Camera, motif: 'gunita' },
  { title: 'Sillage', description: 'Catalog your fragrance collection and get suggestions for what to wear, based on the weather and your day.', url: 'https://mysillage.me', tags: 'Web / Lifestyle', meta: 'Available', icon: Sparkles, motif: 'sillage' },
  { title: 'ContextDeck', description: 'Turns your phone into a control deck that changes to match whichever app is active.', url: 'https://contextdeck.jrgaidlabs.dev', tags: 'Windows / Productivity', meta: 'Beta', icon: MonitorSmartphone, motif: 'contextdeck', status: 'Beta' },
];

const qaTooling: Project[] = [
  { title: 'AutoTestGen', description: 'From requirements to test cases, with a little help from AI.', url: 'https://testai.jrgaid.com', tags: 'AI / Test generation', meta: 'QA tool', icon: Braces, motif: 'testgen' },
  { title: 'Sillage E2E Suite', description: 'The Playwright suite I use to test Sillage end to end, before every release.', url: 'https://github.com/jmsryn/mysillage-playwright', tags: 'Playwright / E2E', meta: 'Test automation', icon: FlaskConical, motif: 'suite' },
];

function ProjectCard({ p }: { p: Project }) {
  return (
    <a href={p.url} target="_blank" rel="noopener noreferrer" className={`project-item group t-card-tilt ${p.motif}`}>
      <ProjectMotif motif={p.motif} />
      <div className="hobby-project-heading">
        <div className="hobby-project-title-group">
          <p.icon size={20} strokeWidth={1.5} aria-hidden={true} className="transition-transform duration-300 group-hover:scale-105 text-accent" />
          <h3>{p.title}</h3>
          {p.status && <span className="project-status">{p.status}</span>}
        </div>
        <span className="project-arrow-button" aria-hidden="true">
          <ArrowUpRight size={16} className="t-arrow-icon" />
        </span>
      </div>
      <p>{p.description}</p>
      <div className="hobby-project-meta">
        <span className="project-tags">{p.tags}</span>
        <span>{p.meta}</span>
      </div>
    </a>
  );
}

export default function ProjectsGrid() {
  return (
    <section id="projects" className="selected-work">
      <div className="work-heading" data-reveal>
        <h2>Off the clock.</h2>
        <a href={LABS_URL} target="_blank" rel="noopener noreferrer" className="labs-link group t-arrow-glide">
          Visit JR Gaid Labs <ArrowUpRight size={16} className="t-arrow-icon" />
        </a>
      </div>
      <p className="hobby-intro" data-reveal>
        Outside of QA, I build small, useful products under <a href={LABS_URL} target="_blank" rel="noopener noreferrer">JR Gaid Labs</a>, my independent studio. They’re AI-assisted side projects, tested with the same care I bring to work. My professional focus stays on quality assurance.
      </p>

      <div className="project-group" aria-labelledby="labs-heading">
        <h3 id="labs-heading" className="project-group-label" data-reveal>From the Labs</h3>
        <div className="project-grid project-grid--labs" data-reveal="stagger">
          {labs.map(p => <ProjectCard key={p.title} p={p} />)}
        </div>
      </div>

      <div className="project-group" aria-labelledby="qa-tooling-heading">
        <h3 id="qa-tooling-heading" className="project-group-label" data-reveal>QA tooling</h3>
        <div className="project-grid" data-reveal="stagger">
          {qaTooling.map(p => <ProjectCard key={p.title} p={p} />)}
        </div>
      </div>
    </section>
  );
}
