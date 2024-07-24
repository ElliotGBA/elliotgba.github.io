const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",],
  darkmode: ["class"],
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
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}