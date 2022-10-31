/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            primary: "#FFD500",
            secondary: "#262A4E",
            yellow: "#FFD500",
            darkGray: "#8D8D8D",
            azure: "#98AAF1",
            hover: "#FFE76D",
            disable: "#ECECEC",
            blue:"#8793FF",       
            blue262:'#262A4E',
            white:'#FFFFFF',
            gray_D6D6D6:'#D6D6D6',
            gray:'#E8EBF3',
            opacityBlack:'#09081E',
            lightBlue:"#e5eafb",
          },
        height:{
            InputHeight:"56px",
            ButtonHeight:"42px",
            vh80:'75vh',
            px1:'1px'
          },
          backgroundImage: {
            'hero': "url('../public/blackjack-classic-background.jpg')",
          },
      },
    },
    plugins: [],
  }