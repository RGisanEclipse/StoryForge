const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        navHover: '#e0474d',
        discoverHover: '#53bfdc',
      },
      fontFamily:{
        "orbitron":["orbitron","sans-serif"],
        "russoOne":["russoOne","sans-serif"],
        "montserrat":["montserrat","serif"],
        "manrope":["manrope","serif"],
      }
    },
  },
  plugins: [require('flowbite/plugin')],
});
