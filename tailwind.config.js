const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    colors: {
      'red': {
        'primary': '#b54e4e',
        'secondary': '#d9a2a2',
        'light': '#fff5f5',
      },
      gray: colors.gray,
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
