/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'monoton': 'Monoton, cursive',  
      'dancing': 'Dancing Script, cursive'
    },
    colors: {
      'navColor': 'rgb(42, 28, 61)', 
      'rosado': 'rgb(202, 59, 128)', 
      'white': '#b9babc'
    }
  },
  plugins: [],
}