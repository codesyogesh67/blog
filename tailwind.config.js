/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#232536",
        yellow: "#FFD050",
        purple: "#592EA9",
        darkgrey: "#4C4C4C",
        grey: "#6D6E76",
        lightgrey: "#F4F4F4",
        lavender: "#F4F0F8",
        lightyellow: "#FBF6EA"
      }
    },
  },
  plugins: [],
}
