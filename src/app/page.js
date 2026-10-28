import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Reflections from "@/components/Reflections";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Journey />
        <Achievements />
        <Projects />
        <Reflections />
        <Contact />
      </main>
      <Footer />
    </>
  );
}