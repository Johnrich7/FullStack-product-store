/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        deepBlue: '#1F3A93',
        softGray: '#E5E7EB',
        gold: '#F4C542',
        charcoalBlack: '#333333',
        offWhite: '#FAFAFA',
        whiteSmoke: '#F5F5F5',
        charcoalGray: '#1B1B1B',
        mediumGray: '#D1D5DB',
      },
    },
  },
  plugins: [],
}

