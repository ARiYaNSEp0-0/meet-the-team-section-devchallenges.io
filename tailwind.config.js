/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
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
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "4.5xl": [
          "2.5rem",
          {
            lineHeight: "3.125rem",
          },
        ],
      },
      spacing: {
        18: "4.5rem",
        26: "6.625rem",
      },
      maxWidth: {
        paragraph: "45ch",
        "7xl": "1705px",
      },
      keyframes: {
        "roll-reveal": {
          from: {
            transform: "translate3d(0,0,0) rotate(12deg) scale(0)",
            opacity: "0",
          },
          to: {
            transform: "translate3d(0,0,0) rotate(0deg) scale(1)",
            opacity: "1",
          },
        },

        "slide-bottom": {
          from: { transform: "translate3d(0, -40px, 0)", opacity: "0" },
          to: { transform: "translate3d(0, 0, 0)", opacity: "1" },
        },
      },
      animation: {
        "roll-reveal": "0.4s roll-reveal ease-in-out backwards",
        "slide-bottom": "0.3s slide-bottom ease-out backwards",
      },
    },
  },
  plugins: [],
};
