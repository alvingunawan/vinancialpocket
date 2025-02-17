/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".-rotate-y-180": {
      transform: "rotateY(-180deg)",
    },
  });
});

module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#01051e",
        light: "#020726",
        dark: "#010417",
        secondary: "#ff7d3b",
        gray: "#333",
        blob: "#a427df",
      },
    },
    container: {
      center: true,
      padding: {
        default: "20px",
        md: "50px",
      },
    },
  },
  plugins: [rotateY],
};
