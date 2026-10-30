"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

// Edit this list any time to change the menu
const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Watches which section is in the middle of the screen
  useEffect(() => {
    const ids = [...links.map((l) => l.href.slice(1)), "contact"];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const linkClass = (href) =>
    `transition hover:text-brand-amber ${
      active === href.slice(1) ? "font-semibold text-brand-amber" : ""
    }`;

  return (
    <header className="sticky top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-brand-green px-4 py-3 text-white shadow-lg md:px-6">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-amber font-bold text-brand-green">
            J
          </span>
          Joel Tochi
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 text-sm md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={linkClass(link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className={`hidden rounded-full px-5 py-2 text-sm font-medium transition md:inline-block ${
              active === "contact"
                ? "bg-brand-amber text-brand-green"
                : "bg-white text-brand-green hover:bg-brand-amber"
            }`}
          >
            Contact Me
          </a>
          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 md:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <ul className="mx-auto mt-2 flex max-w-6xl flex-col gap-4 rounded-3xl bg-brand-green p-6 text-white md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={linkClass(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-block rounded-full bg-white px-5 py-2 text-sm font-medium text-brand-green"
            >
              Contact Me
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}