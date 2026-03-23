import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#050608",
        "canvas-soft": "#090b12",
        surface: "#11141c",
        ink: "#f4f7fb",
        muted: "#98a2b3",
        accent: "#cfb486",
        "accent-soft": "#8da7c8",
      },
      boxShadow: {
        panel: "0 30px 90px rgba(0, 0, 0, 0.38)",
        inset: "inset 0 1px 0 rgba(255, 255, 255, 0.05)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
      },
      maxWidth: {
        "8.5xl": "82rem",
      },
    },
  },
  plugins: [],
};

export default config;
