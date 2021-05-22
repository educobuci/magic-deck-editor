const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        gridTemplateColumns: {
          'fill': 'repeat(auto-fill, minmax(0, 1fr))',
        },
      },
      lineHeight: {
        'full': '100%'
      }
    },
  },
  variants: {
    extend: {},
  },
}
