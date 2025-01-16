/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightOrange:'#ffedd5',
        orange:'#f97136',
        oracle:'#f97316',
        grey:'#f5f3f3',
        lightgrey:'#515151',
        light:'#ffffff66',
        red:'#dc2626',
        comp:'#9ca0ab',
        card:"rgba(256,256,256,0.8)",
        cartNumBg:"#e80013",
        cartBg:"#282a2c",
        cartItem:"#2e3033",
        cartTotal:"#343739"
       },
       backgroundImage:{
        hero: "url('./images/heroBg.png')",
      }
    },
  },
  plugins: [],
}
