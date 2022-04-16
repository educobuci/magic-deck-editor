const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        gridTemplateColumns: {
          fill: 'repeat(auto-fill, minmax(0, 1fr))',
        },
      },
      lineHeight: {
        full: '100%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
