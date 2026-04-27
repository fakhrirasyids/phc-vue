/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,ts}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#14B8A6',
          50: '#ECFDF7',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
        },
        ink: {
          DEFAULT: '#0F1B2D',
          50: '#F8FAFC',
          100: '#EEF2F6',
          900: '#0A1628',
          950: '#06111E',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Intro', 'Poppins', 'system-ui', 'sans-serif'],
        intro: ['Intro', 'Poppins', 'system-ui', 'sans-serif'],
        serif: ['Volkhov', 'Georgia', 'serif'],
      },
      maxWidth: {
        '7xl': '1280px',
      },
    },
  },
  plugins: [],
}
