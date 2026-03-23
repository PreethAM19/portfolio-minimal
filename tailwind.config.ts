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
        canvas: "#08090c",
        ink: "#f2f1ec",
        muted: "#9ea4b3",
        accent: "#d8c498",
        "accent-deep": "#8f7d59",
      },
      boxShadow: {
        panel: "0 24px 80px rgba(0, 0, 0, 0.28)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
      },
      maxWidth: {
        "8.5xl": "76rem",
      },
    },
  },
  plugins: [],
};

export default config;
