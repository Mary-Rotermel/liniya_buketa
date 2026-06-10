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
        milk: "#f7f3ef",
        porcelain: "#f2f2f0",
        rose: "#d8a7ad",
        "rose-dust": "#ad7d85",
        graphite: "#2f2c2d",
        taupe: "#7c7072"
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(58, 48, 50, 0.10)",
        petal: "0 18px 45px rgba(173, 125, 133, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
