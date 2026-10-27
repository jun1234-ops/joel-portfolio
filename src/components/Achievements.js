"use client";

import { useState } from "react";
import { achievements, achievementCategories } from "@/data/site";
import { EvidenceThumb, Lightbox } from "./EvidenceViewer";

const badgeStyles = {
  Academic: "bg-brand-green text-white",
  Professional: "bg-brand-amber text-brand-green",
  Personal: "bg-foreground text-background",
};

export default function Achievements() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const visible =
    filter === "All"
      ? achievements
      : achievements.filter((a) => a.category === filter);

  return (
    <section
      id="achievements"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20"
    >
      <p className="text-sm">
        <span className="mr-2 text-brand-amber">—</span>
        Achievements
      </p>
      <h2 className="mt-2 text-3xl font-bold">
        Milestones &{" "}
        <span className="italic text-brand-amber">Evidence</span>
      </h2>

      {/* Filter tabs */}
      <div className="mt-8 flex flex-wrap gap-2">
        {achievementCategories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
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

      {/* Cards */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <article
            key={item.id}
            className="flex flex-col rounded-2xl bg-surface p-6"
          >
            <div className="flex items-center justify-between">
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${badgeStyles[item.category]}`}
              >
                {item.category}
              </span>
              <span className="text-xs text-foreground/60">{item.date}</span>
            </div>

            <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 flex-1 text-sm text-foreground/80">
              {item.description}
            </p>

            <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-foreground/50">
              Evidence · click to view
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {item.evidence.map((ev, i) => (
                <EvidenceThumb key={i} item={ev} onOpen={setSelected} />
              ))}
            </div>
          </article>
        ))}
      </div>

      {selected && (
        <Lightbox item={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}