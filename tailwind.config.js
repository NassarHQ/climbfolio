// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "rock-gray": "#1F2023", // very dark slate for overlays
        "climbing-green": "#2E8B57", // deep green accent
        "climbing-orange": "#FF8C00", // bright orange accent
        "chalk-white": "#F5F5F5", // chalky text/hover
      },
      boxShadow: {
        "chalk-puff":
          "0 0 8px rgba(245,245,245,0.5), 0 0 12px rgba(245,245,245,0.3)",
      },
      fontFamily: {
        winky: ['"Winky Rough"'],
        rubikpuddles: ['"Rubik Puddles"', "cursive"],
        Josefin: ['"Josefin Sans"', "sans"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "spin-slower": "spin 30s linear infinite",
        "spin-slowest": "spin 40s linear infinite",
      },
    },
  },
  plugins: [],
};
