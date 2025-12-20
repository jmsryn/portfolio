import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Educations';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import ProjectsGrid from '@/components/ProjectsGrid';

export default function Home() {
  return (
    <>
      {/* Clean minimal background */}
      <div
        className="fixed inset-0 -z-10 bg-background"
        aria-hidden="true"
      >
        {/* Subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      </div>

      <main className="relative w-full min-h-screen">
        <div className="mx-auto max-w-screen-xl w-full">
          <Hero />

          <div className="container-custom">
            <About />
            <Experience />
            <ProjectsGrid />
            <Education />
            <Certifications />
            <Contact />
          </div>

          <Footer />
        </div>
      </main>

      <BackToTop />
    </>
  );
}
