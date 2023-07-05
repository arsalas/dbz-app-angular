/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
     'black': {1: '#000000'},
     'blue': {
        1: '#CDFAFA',
        2: '#0AC8B9',
        3: '#0397AB',
        4: '#005A82',
        5: '#0A323C',
        6: '#091428',
        7: '#0A1428',
      },
     'gold': {
        1: '#F0E6D2',
        2: '#C8AA6E',
        3: '#C8AA6E',
        4: '#C89B3C',
        5: '#785A28',
        6: '#463714',
        7: '#32281E',
      },
     'grey': {
        1: '#A09B8C',
        1.5: '#5B5A56',
        2: '#3C3C41',
        3: '#1E2328',
        cool: '#1E282D',
        black: '#010A13',
      },
    },
    fontFamily: {
      sans: ['BeaufortforLOL', 'sans-serif'],
      serif: ['BeaufortforLOL', 'serif'],
    },
    extend: {},
  },
  variants: {
    extend: {
        display: ["group-hover"],
    },
  },
  plugins: [],
}

