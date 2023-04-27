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
      react: "url(/image-back.png)",
      ignite: "url(/Ignite.png)",
      galaxy: "url(/react.svg)",
      plus: "url(/plus.svg)",
      lines: "url(/Lines.svg)",

      'nlw-gradient': 'linear-gradient(90deg, #ff008e 30%, #ffcd1e 60%)',
      'game-gradinet': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 70%)'
    },
    colors: {
      primary: {
        100: '#E1E1E6'
      },
      secundary: { 100: '#ff008e' },
      sucess: {
        900: '#ff6710',
        500: '#ffcd1e'
      },
      black: {
        100: 'rgba(2, 2, 2,0.0)',
        200: 'rgba(2, 2, 2,0.8)',
        250: '#121214'
      },
      gray: {
        900: '#ffcd1e',
        400: '#C39907'
      }
    }
  },
  plugins: [],
}
