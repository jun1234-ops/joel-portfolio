"use client";

import { useEffect, useRef, useState } from "react";
import { about, profile } from "@/data/site";

// Counts from 0 up to a number when it scrolls into view
function CountUp({ end, suffix }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 1500;
        const startTime = performance.now();

        function tick(now) {
          const progress = Math.min((now - startTime) / duration, 1);
          setValue(Math.round(end * progress));
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-brand-green py-20 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
        {/* Photo placeholder */}
        <div className="relative mx-auto h-72 w-72 md:h-96 md:w-96">
          <div className="flex h-full w-full items-end justify-center overflow-hidden rounded-full bg-brand-amber">
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full text-brand-green/80"
              fill="currentColor"
              aria-label="Photo placeholder"
            >
              <circle cx="50" cy="38" r="16" />
              <path d="M18 100c0-20 14-34 32-34s32 14 32 34z" />
            </svg>
          </div>
          {about.beyondWork.slice(0, 2).map((tag, i) => (
            <span
              key={tag}
              className={`absolute rounded-full px-4 py-2 text-xs font-medium shadow-lg ${
                i === 0
                  ? "-left-4 bottom-16 bg-white text-brand-green"
                  : "-right-4 bottom-32 bg-brand-amber text-brand-green"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Text */}
        <div>
          <p className="text-sm">
            <span className="mr-2 text-brand-amber">—</span>
            {about.label}
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            {about.title}{" "}
            <span className="italic text-brand-amber">{profile.name}?</span>
          </h2>

          <div className="mt-6 space-y-4 text-white/80">
            {about.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {about.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-brand-amber">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Beyond work */}
          <p className="mt-8 text-xs font-semibold uppercase tracking-wide text-white/60">
            Beyond work
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {about.beyondWork.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/30 px-4 py-1.5 text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <a
            href={about.cv.href}
            className="mt-8 inline-block rounded-full bg-brand-amber px-6 py-3 text-sm font-medium text-brand-green transition hover:opacity-90"
          >
            {about.cv.label}
          </a>
        </div>
      </div>
    </section>
  );
}