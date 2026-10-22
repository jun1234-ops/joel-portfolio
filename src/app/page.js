import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="home" className="mx-auto max-w-6xl px-4 py-32">
        <h1 className="text-4xl font-bold">
          Hero section <span className="text-brand-amber">coming next</span>
        </h1>
      </main>
    </>
  );
}