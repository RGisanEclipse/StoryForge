const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navHover: '#e0474d',
      },
      fontFamily:{
        "orbitron":["orbitron","sans-serif"],
        "russoOne":["russoOne","sans-serif"],
        "montserrat":["montserrat","serif"],
        "manrope":["manrope","serif"],
      }
    },
  },
  plugins: [],
});
