// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{njk,md,js}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'inherit',
          },
        },
      }),
    colors: {
      'ma-color': '#5F69B1',
      'ma-color-resp': '#FF9987',
      },
    },
    fontFamily: {
      'ma-police': ['yeseva one', 'sans-serif'],
    },
    screens: {
      'phone': '380px',
      // => @media (min-width: 380px) { ... }
    },
    container: {
      center: true,
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
