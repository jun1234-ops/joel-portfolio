import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Journey from "@/components/Journey";
import SectionPlaceholder from "@/components/SectionPlaceholder";
import { sections } from "@/data/site";
import Achievements from "@/components/Achievements";

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
          if (section.id === "achievements") return <Achievements key={section.id} />;
          return <SectionPlaceholder key={section.id} {...section} />;
        })}
      </main>
    </>
  );
}