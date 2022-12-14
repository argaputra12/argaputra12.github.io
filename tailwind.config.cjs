/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          background: "#F0E9D2",
          text: "#181D31",
          link: "#678983"
        },
        dark: {
          background: "#181D31",
          text: "#F0E9D2",
          link: "#678983"
        }
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        title: ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
}
