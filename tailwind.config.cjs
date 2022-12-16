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
          background: {
            100: "#FEFDF7",
            200: "#FDFBF0",
            300: "#FAF7E7",
            400: "#F6F1DE",
            500: "#F0E9D2",
            600: "#CEC099",
            700: "#AC9969",
            800: "#8B7542",
          },
          text: {
            100: "#BAC7EA",
            200: "#8694C1",
            300: "#515C83",
            400: "#181D31",
            500: "#11152A",
            600: "#0C0F23",
            700: "#070A1C",
            900: "#040617"
          },
          link: "#678983"
        },
        dark: {
          background: {
            100: "#BAC7EA",
            200: "#8694C1",
            300: "#515C83",
            400: "#181D31",
            500: "#11152A",
            600: "#0C0F23",
            700: "#070A1C",
            900: "#040617"
          },
          text: {
            100: "#FEFDF7",
            200: "#FDFBF0",
            300: "#FAF7E7",
            400: "#F6F1DE",
            500: "#F0E9D2",
            600: "#CEC099",
            700: "#AC9969",
            800: "#8B7542",
          },
          link: "#678983"
        }
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        title: ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
}
