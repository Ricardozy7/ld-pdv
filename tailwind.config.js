/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        100: '#8298C4',
        200: '#5E7AB3',
        300: '#476AB0',
        400: '#1D499E',
        500: '#0080ff',
        600: '#033390',
        700: '#043085',
        800: '#062D79',
        900: '#072561',
      },
      secondary: {
        100: '#69D1D1',
        200: '#4AC3C3',
        300: '#36B8B8',
        400: '#2BAAAA',
        500: '#65ecdc',
        600: '#259292',
        700: '#1F8989',
        800: '#1C7E7E',
        900: '#166C6C',
      },
      red : {
        500: '#ee332d'
      },
      main: {
        50: '#FFFFFF50',
        100: '#FFFFFF',
        200: '#F5F6FA',
        300: '#EEEEEE',
        400: '#E3E3E3',
        500: '#D8D8D8',
        600: '#CBCBCB',
        700: '#BDBDBD',
        800: '#B6B6B6',
        900: '#ADADAD',
      },
      text: {
        300: '#4C4C4C',
        500: '#141414'
      }
    },
    extend: {},
  },
  plugins: [],
}

