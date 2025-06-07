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
      // animation: {
      //   typewriter:
      //     "typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s",
      // },
      // keyframes: {
      //   typewriter: {
      //     to: {
      //       left: "100%",
      //     },
      //   },
      //   blink: {
      //     "0%": {
      //       opacity: "0",
      //     },
      //     "0.1%": {
      //       opacity: "1",
      //     },
      //     "50%": {
      //       opacity: "1",
      //     },
      //     "50.1%": {
      //       opacity: "0",
      //     },
      //     "100%": {
      //       opacity: "0",
      //     },
      //   },
      // },
    },
  },
  plugins: [],
};
