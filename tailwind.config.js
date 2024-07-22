/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "mono": ['SFMono-Regular', 'monospace'],
      }
    },
  },
  plugins: [],
}

