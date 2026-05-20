/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#050505",
        panel: "#0d0d0d",
        border: "#2a2a2a",
        muted: "#a3a3a3",
        stage: "#d11f1f",
      },
      boxShadow: {
        cinematic: "0 24px 80px rgba(0, 0, 0, 0.45)",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica Neue", "Helvetica", "sans-serif"],
      },
      letterSpacing: {
        nav: "0.34em",
      },
    },
  },
  plugins: [],
};
