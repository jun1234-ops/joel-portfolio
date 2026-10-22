"use client";

export default function ThemeToggle() {
  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (e) {}
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-lg transition hover:bg-white/20"
    >
      {/* Shows in dark mode: click for light */}
      <span className="hidden dark:inline">☀️</span>
      {/* Shows in light mode: click for dark */}
      <span className="dark:hidden">🌙</span>
    </button>
  );
}