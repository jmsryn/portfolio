import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import ProjectsGrid from "@/components/ProjectsGrid";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import IdCard from "@/components/IdCard";
import SignalPanel from "@/components/SignalPanel";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Hero />

        {/* Main two-column body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-10 pb-10 items-stretch">
          {/* Left column: About, Tech Stack, Projects, Signal (stretches) */}
          <div className="md:col-span-7 flex flex-col gap-8 h-full">
            <About />
            <TechStack />
            <ProjectsGrid />
            <SignalPanel className="flex-1" />
          </div>

          {/* Right column: ID card, Experience, Education, Credentials */}
          <div className="md:col-span-5 space-y-8">
            <div className="flex justify-center md:justify-start">
              <IdCard />
            </div>
            <Experience />
          </div>
        </div>

        <Contact />
      </div>

      <Footer />
    </main>
  );
}
