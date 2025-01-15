import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-bg-color)",
        textPrimary: "var(--primary-text-color)",
      },
      animation: {
        customPulse: "customPulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;",
      },
      keyframes: {
        customPulse: {
          "0%, 100%": { opacity: 0 },
          "50%": {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
