import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight, Download, Github, Linkedin } from 'lucide-react';
import PortfolioNav from '@/components/PortfolioNav';
import About from '@/components/About';
import Experience from '@/components/Experience';
import ProjectsGrid from '@/components/ProjectsGrid';
import TechStack from '@/components/TechStack';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SpotifyNowPlaying from '@/components/SpotifyNowPlaying';
import ProfileChat from '@/components/ProfileChat';
import HeroStage from '@/components/HeroStage';
import ImmersiveLayer from '@/components/ImmersiveLayer';

export default function Home() {
  return (
    <div className="portfolio">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <ImmersiveLayer />
      <PortfolioNav />
      <main id="main-content" className="portfolio-container">
        <section className="portfolio-hero" aria-labelledby="hero-title">
          <HeroStage />
          <div className="hero-copy">
            <div className="hero-intro">
              <span className="availability-beacon" aria-hidden="true">
                <span className="availability-beacon-dot" />
              </span>
              Open to QA & SDET opportunities
            </div>
            <h1 id="hero-title">QA at heart.<br /><span>Quality by design.</span></h1>
            <p>I’m James Ryan Gaid, a QA Engineer. I test software, automate checks, and help teams release with confidence.</p>
            <div className="hero-actions">
              <a href="#experience" className="portfolio-button group t-arrow-glide">
                View QA experience <ArrowDownRight size={18} className="t-arrow-icon" data-dir="down" />
              </a>
              <a href="/files/James%20Ryan%20Gaid%20-%20CV1.pdf" download className="text-link group t-arrow-glide">
                Download CV <Download size={16} className="t-arrow-icon" />
              </a>
            </div>
          </div>
          <aside className="hero-focus" aria-label="My quality assurance focus">
            <h2>What I bring to a QA team</h2>
            <dl>
              <div><dt>Thoughtful testing</dt><dd>Manual, API, and end-to-end testing grounded in how people use the product.</dd></div>
              <div><dt>Reliable automation</dt><dd>Maintainable Playwright and Cypress suites, integrated into CI/CD.</dd></div>
              <div><dt>A security mindset</dt><dd>OWASP assessments and a growing focus on security testing.</dd></div>
            </dl>
          </aside>
        </section>
        <div className="hero-bottom">
          <p>Currently at Amihan Solutions</p>
          <div>
            <a href="https://github.com/jmsryn" target="_blank" rel="noopener noreferrer" className="group t-arrow-glide">
              <Github size={16} /> GitHub <ArrowUpRight size={13} className="t-arrow-icon" />
            </a>
            <a href="https://linkedin.com/in/jmsryn" target="_blank" rel="noopener noreferrer" className="group t-arrow-glide">
              <Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} className="t-arrow-icon" />
            </a>
          </div>
        </div>
        <div className="about-layout" data-reveal="stagger"><About /><TechStack /></div>
        <div className="career-layout">
          <div className="career-intro" data-reveal>
            <h2>A career in<br />quality assurance.</h2>
            <p>From hands-on testing to scalable automation and QA team leadership.</p>
            <Link href="/resume" className="text-link group t-arrow-glide">
              View full résumé <ArrowUpRight size={16} className="t-arrow-icon" />
            </Link>
          </div>
          <div className="career-details"><Experience /></div>
        </div>
        <ProjectsGrid />
        <div className="writing-strip" data-reveal>
          <div>
            <h2>A closer look at the work.</h2>
            <p>Deep dives on testing and engineering. New writing coming soon.</p>
          </div>
          <Link href="/deep-dives" className="text-link group t-arrow-glide">
            Visit deep dives <ArrowUpRight size={18} className="t-arrow-icon" />
          </Link>
        </div>
        <div className="contact-layout" data-reveal="stagger">
          <div className="contact-intro">
            <span className="section-kicker">LET’S CONNECT</span>
            <h2>Your next release.<br />More confidence.</h2>
            <p>Looking for a QA Engineer or SDET? Let’s talk about your team and its testing challenges.</p>
            <a className="contact-email group t-arrow-glide" href="mailto:hello@jrgaid.com">
              hello@jrgaid.com <ArrowUpRight size={24} className="t-arrow-icon" />
            </a>
            <SpotifyNowPlaying className="mt-10" />
          </div>
          <Contact />
        </div>
      </main>
      <Footer />
      <ProfileChat />
    </div>
  );
}
