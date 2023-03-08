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
        text1: "#E5E5E5",
      },
      backgroundImage: {
        "gradient-to-b":
          "linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);",
      },

      keyframes: {
        "zoom-out": {
          "0%": {
            transform: "translateX(-76px) scale(0.6)",
          },
          "100%": {
            transform: "translate-y-[-32px] scale(1)",
          },
        },
        translateText: {
          "0%": {transform: "translateX(-40px)", opacity: "0"},

          "100%": {transform: "translateX(0)", opacity: "1"},
        },
      },
      animation: {
        zoomOut: "zoom-out 1s ease-in-out",
        translateText: "translateText 0.5s ease-in-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-textshadow"),
    require("tailwind-scrollbar-hide"),
  ],
};
