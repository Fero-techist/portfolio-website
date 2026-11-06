/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
