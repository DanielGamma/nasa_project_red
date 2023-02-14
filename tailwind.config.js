/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'monoton': 'Monoton, cursive',  
      'dancing': 'Dancing Script, cursive'
    },
    extend: { 
      colors: { 
        'background': '#243763'
      }
    },
  },
  plugins: [],
}
