"use client";

import { useState } from "react";
import { journey, journeyCategories } from "@/data/site";

// Badge colours for each category
const badgeStyles = {
  Education: "bg-brand-green text-white",
  Experience: "bg-brand-amber text-brand-green",
  Certification: "bg-foreground text-background",
  Training:
    "border border-brand-green text-brand-green dark:border-brand-amber dark:text-brand-amber",
};

export default function Journey() {
  const [filter, setFilter] = useState("All");
  const [openId, setOpenId] = useState(null);

  const visible =
    filter === "All"
      ? journey
      : journey.filter((item) => item.category === filter);

  function changeFilter(category) {
    setFilter(category);
    setOpenId(null);
  }

  return (
    <section id="journey" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20">
      <p className="text-sm">
        <span className="mr-2 text-brand-amber">—</span>
        My Journey
      </p>
      <h2 className="mt-2 text-3xl font-bold">
        Education, Experience &{" "}
        <span className="italic text-brand-amber">Certifications</span>
      </h2>

      {/* Filter tabs */}
      <div className="mt-8 flex flex-wrap gap-2">
        {journeyCategories.map((category) => (
          <button
            key={category}
            onClick={() => changeFilter(category)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              filter === category
                ? "bg-brand-green text-white"
                : "bg-surface hover:bg-brand-amber/30"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <ol className="relative ml-3 mt-10 border-l-2 border-brand-green/30 dark:border-brand-amber/30">
        {visible.map((item) => {
          const isOpen = openId === item.id;

          return (
            <li key={item.id} className="relative mb-8 pl-8">
              {/* Dot on the line */}
              <span className="absolute -left-[9px] top-7 h-4 w-4 rounded-full border-4 border-background bg-brand-amber" />

              <div className="rounded-2xl bg-surface">
                {/* Clickable header */}
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left"
                >
                  <div>
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${badgeStyles[item.category]}`}
                    >
                      {item.category}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-foreground/60">
                      {item.place} · {item.period}
                    </p>
                    <p className="mt-2 text-sm text-foreground/80">
                      {item.summary}
                    </p>
                  </div>
                  <span
                    className={`mt-1 text-xl text-brand-amber transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Expandable area */}
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5">
                      <ul className="list-disc space-y-1 pl-5 text-sm text-foreground/80">
                        {item.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>

                      <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-foreground/50">
                        Evidence
                      </p>
                      <div className="mt-2 grid gap-3 sm:grid-cols-2">
                        {item.evidence.map((label, i) => (
                          <div
                            key={i}
                            className="flex h-24 items-center justify-center rounded-xl border-2 border-dashed border-foreground/20 px-3 text-center text-xs text-foreground/50"
                          >
                            {label} (placeholder)
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}