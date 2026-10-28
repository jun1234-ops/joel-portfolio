"use client";

import { useState } from "react";
import { contact } from "@/data/site";
import SocialLinks from "./SocialLinks";

const inputStyle =
  "w-full rounded-xl border border-foreground/20 bg-background px-4 py-3 text-sm outline-none transition focus:border-brand-amber";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (!res.ok) throw new Error(result.error || "Something went wrong.");

      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20">
      <p className="text-sm">
        <span className="mr-2 text-brand-amber">—</span>
        Contact
      </p>
      <h2 className="mt-2 text-3xl font-bold">
        Let&apos;s <span className="italic text-brand-amber">Connect</span>
      </h2>

      <div className="mt-10 grid gap-12 md:grid-cols-2">
        {/* Left: info */}
        <div>
          <p className="max-w-md text-foreground/80">{contact.intro}</p>

          <p className="mt-6 text-sm text-foreground/60">Email</p>
          <a
            href={`mailto:${contact.email}`}
            className="font-medium text-brand-green hover:text-brand-amber dark:text-brand-amber dark:hover:text-white"
          >
            {contact.email}
          </a>

          <p className="mt-8 text-sm text-foreground/60">Find me online</p>
          <div className="mt-4">
            <SocialLinks />
          </div>
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Your name"
            required
            className={inputStyle}
          />
          <input
            name="email"
            type="email"
            placeholder="Your email"
            required
            className={inputStyle}
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your message"
            required
            className={inputStyle}
          />

          {/* Honeypot: hidden from people, bots fill it in */}
          <input
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full bg-brand-green px-8 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-sm text-green-600 dark:text-green-400">
              Thank you! Your message was sent.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          )}
        </form>
      </div>
    </section>
  );
}