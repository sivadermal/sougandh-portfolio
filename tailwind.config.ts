import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["var(--font-geist-sans)", '"Plus Jakarta Sans"', "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: {
          light: "#d8be99",
          DEFAULT: "#c5a880",
          dark: "#a6885e",
          rich: "#d4af37",
        },
      },
      letterSpacing: {
        arch: "0.28em",
        widearch: "0.35em",
      },
    },
  },
  plugins: [],
};
export default config;
