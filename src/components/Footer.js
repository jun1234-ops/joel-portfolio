import { profile } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-brand-green py-8 text-sm text-white/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 md:flex-row">
        <p>
          © {profile.name}. All rights reserved.
        </p>
        <a href="#home" className="transition hover:text-brand-amber">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}