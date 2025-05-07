import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Educations';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';

import ProjectsGrid from '@/components/ProjectsGrid';

export default function Home() {
  return (
    <main className="relative">
      {/* Background gradient elements */}
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5 blur-3xl z-[-1]" />

      <Hero />
      <SectionDivider variant="gradient" />
      <About />
      <SectionDivider variant="gradient" />
      <Experience />
      <SectionDivider variant="dots" />
      <ProjectsGrid />
      <SectionDivider variant="gradient" />
      <Education />
      <SectionDivider variant="dots" />
      <Certifications />
      <SectionDivider variant="gradient" />
      <Contact />
      <Footer />
    </main>
  );
}
