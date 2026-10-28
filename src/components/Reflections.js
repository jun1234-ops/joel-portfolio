"use client";

import { useState } from "react";
import { reflections } from "@/data/site";

export default function Reflections() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="blog" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20">
      <p className="text-sm">
        <span className="mr-2 text-brand-amber">—</span>
        Reflections
      </p>
      <h2 className="mt-2 text-3xl font-bold">
        Notes & <span className="italic text-brand-amber">Lessons</span>
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reflections.map((post) => {
          const isOpen = openId === post.id;
          return (
            <article
              key={post.id}
              className="flex flex-col rounded-2xl bg-surface p-6 transition hover:shadow-lg"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="rounded-full bg-brand-amber px-3 py-1 font-medium text-brand-green">
                  {post.tag}
                </span>
                <span className="text-foreground/60">{post.readTime}</span>
              </div>

              <h3 className="mt-4 text-lg font-semibold">{post.title}</h3>
              <p className="mt-1 text-xs text-foreground/50">{post.date}</p>
              <p className="mt-3 text-sm text-foreground/80">{post.excerpt}</p>

              {isOpen && (
                <div className="mt-4 space-y-3 border-t border-foreground/10 pt-4 text-sm text-foreground/80">
                  {post.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              )}

              <button
                onClick={() => setOpenId(isOpen ? null : post.id)}
                className="mt-5 self-start text-sm font-medium text-brand-green transition hover:text-brand-amber dark:text-brand-amber dark:hover:text-white"
              >
                {isOpen ? "Show less ↑" : "Read more →"}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}