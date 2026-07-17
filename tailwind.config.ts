import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F2937",
        gold: "#C8A96A",
        "gold-soft": "#DEC79A",
        nude: "#F7EFE7",
        blush: "#F9E8EC",
        rose: "#F8E9EC",
        cream: "#FAF7F2",
        body: "#374151",
        borderline: "#E5E7EB",
        success: "#16A34A",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: { container: "1240px" },
      borderRadius: { lux: "1.25rem" },
      boxShadow: {
        soft: "0 20px 50px -24px rgba(31, 41, 55, 0.28)",
        glass: "0 8px 32px rgba(31, 41, 55, 0.08)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-22px) translateX(12px)" },
        },
      },
      animation: { float: "float 14s ease-in-out infinite" },
    },
  },
  plugins: [],
};
export default config;
