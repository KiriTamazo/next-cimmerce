// @type {import('tailwindcss').Config}
const fontFamily = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--display-font)"],
        body: ["var(--body-font)"],
      },
    },
  },
  plugins: [],
};
