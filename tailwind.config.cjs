/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html"
  ],
  theme: {
    fontFamily: {
      'sans': ['Rubik', 'sans-serif'],
    },
    backgroundImage: {
      react: "url(/bg-colors.png)",
      verse: "url(https://scontent.faqa6-1.fna.fbcdn.net/v/t39.8562-6/340534828_180716078121771_2952556783908598650_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6825c5&_nc_ohc=JU9DSGMHwxUAX-jZp5f&_nc_ht=scontent.faqa6-1.fna&oh=00_AfCyKFktf3FcSf0Wi9llmMxAfsLYyqa4cxuSUbUOzgA4ww&oe=64B16DBF)",

      'nlw-gradient': 'linear-gradient(90deg, #ff008e 30%, #ffcd1e 60%)',
      'game-gradinet': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 70%)'
    },
    colors: {
      main: {
        100: '#271A45',
        200: '#8257E5'
      },
      ignite: {
        100: '#01af7c'
      },
      primary: {
        100: '#E1E1E6',
        150: '#E1E1EE',
        900: '#FFFFFF'
      },
      secundary: { 100: '#ff008e' },
      sucess: {
        900: '#ff6710',
        500: '#ffcd1e'
      },
      black: {
        100: 'rgba(2, 2, 2,0.0)',
        200: 'rgba(2, 2, 2,0.8)',
        250: '#121214',
        900: '#000'
      },
      gray: {
        900: '#ffcd1e',
        400: '#C39907'
      },
      dark: {
        1000: "#fff",
        2000: "#000"
      }
    },

    screens: {
      'mobile': {'max': '700px'},
      'tablet': {'max': '784px'},
    }
  },
  plugins: [],
}
