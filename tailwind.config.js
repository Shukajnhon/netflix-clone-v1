/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#E50914",
        bgColor: "#141414",
        bgColor2: "#6D6D6E",
        text2: "#808080",
        white: "#FFF",
      },
    },
  },
  plugins: [],
};
