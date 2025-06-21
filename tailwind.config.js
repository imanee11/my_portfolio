/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['"Syne"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(15deg, #8f56cc 0%, #5d4ec4 80%)',
        'gradient-dark': 'linear-gradient(15deg, #E1BAC5, #CEC4EF)',
      }
    },
  },
  plugins: [],
}

