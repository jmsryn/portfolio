import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import ProjectsGrid from "@/components/ProjectsGrid";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
        <div className="lg:flex lg:justify-between lg:gap-12 xl:gap-16">
          <Sidebar />

          <div className="lg:w-3/5 lg:py-24 pb-12">
            <Reveal><About /></Reveal>
            <Reveal><TechStack /></Reveal>
            <Reveal><ProjectsGrid /></Reveal>
            <Reveal><Experience /></Reveal>
            <Reveal><Contact /></Reveal>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
