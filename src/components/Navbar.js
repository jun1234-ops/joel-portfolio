"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

// Edit this list any time to change the menu
const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
              <a
                href={link.href}
                className="transition hover:text-brand-amber"
              >
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
            className="hidden rounded-full bg-white px-5 py-2 text-sm font-medium text-brand-green transition hover:bg-brand-amber md:inline-block"
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
              <a href={link.href} onClick={() => setOpen(false)}>
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