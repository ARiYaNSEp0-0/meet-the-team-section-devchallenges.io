/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "4.5xl": [
          "2.5rem",
          {
            lineHeight: "2.75rem",
            fontWeight: "500",
          },
        ],
      },
      color: {
        white: "#fffefe",
        "wild-sand": "#f3f4f6",
        "bright-gray": "#394150",
        "royal-blue": "#3662e3",
        riptide: "#86e7d4",
        "jordy-blue": "#9dc4f8",
        melrose: "#c1b6f8",
        "lavender-pink": "#edacd2",
        frangipani: "#f8d8b0",
      },
    },
  },
  plugins: [],
};
