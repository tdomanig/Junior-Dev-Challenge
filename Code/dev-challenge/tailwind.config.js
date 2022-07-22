/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{ts,tsx}"],
  theme: {
    screens:{
      lg:{'max':'1000px'},
      sm:{'max':'650px'}
    },
    extend: {
   
    },
  },
  plugins: [],
}
