import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import SectionPlaceholder from "@/components/SectionPlaceholder";
import { sections } from "@/data/site";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        {sections.map((section) => (
          <SectionPlaceholder key={section.id} {...section} />
        ))}
      </main>
    </>
  );
}