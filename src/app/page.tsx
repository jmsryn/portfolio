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
      {/* Seamless background layer - fixed to viewport, full width, no gaps */}
      <div 
        className="fixed -z-10 bg-background overflow-hidden" 
        style={{ 
          width: '100vw', 
          height: '100vh',
          left: 0, 
          right: 0,
          top: 0,
          bottom: 0,
          margin: 0,
          padding: 0
        }}
      >
        {/* Main gradient overlay - seamless */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent via-transparent to-primary/10" />
        
        {/* Subtle grid pattern - seamless */}
        <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]">
          <div 
            className="w-full h-full bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:32px_32px]" 
            style={{ color: 'oklch(var(--foreground))' }} 
          />
        </div>
        
        {/* Radial gradient orbs for depth - extend beyond edges to prevent visible cuts */}
        <div className="absolute top-0 left-0 w-[1200px] h-[1200px] bg-primary/4 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute top-1/4 right-0 w-[1100px] h-[1100px] bg-primary/3 rounded-full blur-3xl translate-x-1/3" />
        <div className="absolute bottom-0 left-1/4 w-[1300px] h-[1300px] bg-primary/4 rounded-full blur-3xl -translate-y-1/3" />
        <div className="absolute bottom-1/3 right-1/4 w-[1000px] h-[1000px] bg-primary/2 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[1600px] bg-primary/2 rounded-full blur-3xl" />
        
        {/* Ensure background extends fully - no visible edges */}
        <div className="absolute inset-0 bg-background" />
      </div>

      <main className="relative w-full min-h-screen overflow-x-hidden">
        {/* Content container with proper centering */}
        <div className="mx-auto max-w-screen-2xl w-full">
          <Hero />
          
          {/* Main content sections with consistent container */}
          <div className="container-custom">
            <About />
            <SectionDivider variant="simple" />
            <Experience />
            <SectionDivider variant="simple" />
            <ProjectsGrid />
            <SectionDivider variant="simple" />
            <Education />
            <SectionDivider variant="simple" />
            <Certifications />
            <SectionDivider variant="simple" />
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
