import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        canvas: "rgb(var(--canvas) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-fg": "rgb(var(--accent-fg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        mist: "rgb(var(--mist) / <alpha-value>)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 0 rgb(var(--line) / 1), 0 18px 50px -28px rgb(var(--ink) / 0.28)",
        lift: "0 1px 0 rgb(var(--line) / 1), 0 28px 70px -32px rgb(var(--ink) / 0.38)",
        shot: "0 24px 80px -28px rgb(var(--ink) / 0.45)",
      },
      maxWidth: {
        content: "78rem",
        wide: "92rem",
      },
      borderRadius: {
        box: "1.75rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "ticker-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        ticker: "ticker-x 36s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
