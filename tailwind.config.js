const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive']
      },
      colors: {
        gray: colors.blueGray,
        red: colors.rose
      }
    },
  },
  variants: {
    extend: {
      transform: ['active','group-hover'],
      scale: ['active','group-hover'],
    },
  },
  plugins: [],
}
