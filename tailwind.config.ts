import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        milk: "#f8f3f0",
        porcelain: "#efeeeb",
        blush: "#f4dce4",
        rose: "#d9a7b4",
        "rose-dust": "#b37b87",
        ink: "#0b2742",
        graphite: "#292526",
        taupe: "#766b6e",
        moss: "#77836d"
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(41, 37, 38, 0.10)",
        petal: "0 18px 45px rgba(179, 123, 135, 0.18)",
        editorial: "0 34px 90px rgba(11, 39, 66, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
