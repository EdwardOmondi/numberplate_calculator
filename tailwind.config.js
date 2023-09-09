/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ], theme: {
    fontFamily: {
      default: ['"DM Sans"', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

