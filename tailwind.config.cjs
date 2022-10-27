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
          galaxy: "url(/background-galaxy.png)",
          ignite: "url(/Ignite.png)",
        },
        colors: {
          primary: {
            100: '#E1E1E6'
          },
          black: {
            100: 'rgba(2, 2, 2,0.8)'
          }
        }
      },
    plugins: [],
  }
  