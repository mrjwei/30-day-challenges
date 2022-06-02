const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: 0
      },
      screens: {
        DEFAULT: "100%",
        sm: "640px",
        md: "768px"
      }
    },
    colors: {
      'red': {
        'primary': '#b54e4e',
        'secondary': '#d9a2a2',
        'light': '#fff5f5',
      },
      gray: colors.gray,
      white: colors.white
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
