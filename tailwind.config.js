/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "mono": ['SFMono-Regular', 'monospace'],
        "sans": ['Roboto', 'sans-serif']
      },
      fontSize: {
        "4xl": "3rem",
      },
      screens: {
        'custom': '1592px',
      },
    },
  },
  plugins: [],
}