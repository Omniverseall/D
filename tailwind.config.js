
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'primary':'#5f6FFF',
        'primary-dark': '#4F5AE3',
        'background-light': '#FFFFFF',
        'background-dark': '#121212',
        'text-light': '#333333',
        'text-dark': '#F1F1F1'
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fill, minmax(200px, 1fr))'
      }
    },
  },
  plugins: [],
}
