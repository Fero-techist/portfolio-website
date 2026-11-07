/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        GreatVibes: ["Great Vibes", "cursive"],
      },
    },
  },
  plugins: [],
};
