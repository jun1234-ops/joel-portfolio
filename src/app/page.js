import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import SectionPlaceholder from "@/components/SectionPlaceholder";
import { sections } from "@/data/site";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        {sections.map((section) => {
          if (section.id === "about") return <About key={section.id} />;
          if (section.id === "journey") return <Journey key={section.id} />;
          if (section.id === "achievements")
            return <Achievements key={section.id} />;
          if (section.id === "projects") return <Projects key={section.id} />;
          return <SectionPlaceholder key={section.id} {...section} />;
        })}
      </main>
    </>
  );
}