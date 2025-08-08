import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Educations';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';
import BackToTop from '@/components/BackToTop';

import ProjectsGrid from '@/components/ProjectsGrid';

export default function Home() {
  return (
    <>
      <main className="relative w-full overflow-hidden">
        {/* Background gradient elements - lighten for performance */}
        <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-2xl z-[-1]" />

        {/* Content container with proper centering */}
        <div className="mx-auto max-w-screen-2xl">
          <Hero />
          <SectionDivider variant="gradient" />
          
          {/* Main content sections with consistent container */}
          <div className="container-custom">
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
          </div>
          
          <Footer />
        </div>
      </main>
      
      {/* Global components */}
      <BackToTop />
    </>
  );
}
