"use client";

import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-accent"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
      <span className="sr-only">{isDark ? "Dark mode on" : "Light mode on"}</span>
    </button>
  );
}

function MoonIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M16.5 13.5A7 7 0 0 1 10.5 4.2 7.5 7.5 0 1 0 19.8 13.5a7 7 0 0 1-3.3 0Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 3v1.6M12 19.4V21M4.2 4.2l1.1 1.1M18.7 18.7l1.1 1.1M3 12h1.6M19.4 12H21M4.2 19.8l1.1-1.1M18.7 5.3l1.1-1.1"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
