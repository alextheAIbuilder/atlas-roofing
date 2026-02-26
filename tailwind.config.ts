import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        roof: { 50: "#fef2f2", 100: "#fee2e2", 500: "#dc2626", 600: "#b91c1c", 700: "#991b1b", 800: "#7f1d1d" },
        steel: { 50: "#f9fafb", 100: "#f3f4f6", 300: "#d1d5db", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827" },
      },
    },
  },
  plugins: [],
};

export default config;
