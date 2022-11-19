/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      // Override tailwind fontFamily
      sans: ["Gibson", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#c1c1c1",
        },
        secondary: {
          DEFAULT: "#ffffff",
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      // Create our own container component
      // and ask tailwind to take it into account.
      addComponents({
        ".container": {
          maxWidth: "80vw",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen sm": {
            maxWidth: "70vw",
          },
          "@screen xl": {
            maxWidth: "980px",
          },
        },
      });
    },
  ],
};
