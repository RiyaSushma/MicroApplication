/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0 0.5rem'
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif']
      },
      screens: {
        'xxs': '250px',
        'xs': '360px',
        's': '480px',
        'xxl': '1440px'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

