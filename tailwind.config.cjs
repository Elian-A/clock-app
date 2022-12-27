/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        day: "url('/day-bg.jpg')",
        night: "url('/night-bg.jpg')"
      }
    },
  },
  plugins: [],
}