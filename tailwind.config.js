/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        cursive: "DancingScript"
      },
      colors: {
        danube: {
          50: "#f3f7fb",
          100: "#e3edf6",
          200: "#cee0ef",
          300: "#accce4",
          400: "#84b1d6",
          500: "#6d9bcd",
          600: "#537fbd",
          700: "#486dad",
          800: "#405a8d",
          900: "#374c71",
          950: "#253046",
        },
      },
    },
  },
  plugins: [],
};
