import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import ProjectsGrid from "@/components/ProjectsGrid";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Hero />

        {/* Main two-column body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-10 pb-10">
          {/* Left column: About, Tech Stack, Projects */}
          <div className="md:col-span-7 space-y-8">
            <About />
            <TechStack />
            <ProjectsGrid />
          </div>

          {/* Right column: Experience */}
          <div className="md:col-span-5">
            <Experience />
          </div>
        </div>

        <Contact />
      </div>

      <Footer />
    </main>
  );
}
