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
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Reveal><About /></Reveal>
        <Reveal><Journey /></Reveal>
        <Reveal><Achievements /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Reflections /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}