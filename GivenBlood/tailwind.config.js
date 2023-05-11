/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "red-color": "var(--red-color)"
      }
    },
  },
  plugins: [],
}

