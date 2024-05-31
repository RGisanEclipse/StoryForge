const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        navHover: "#e0474d",
        discoverHover: "#53bfdc",
        void: "#0e0816",
        fuschia: "#a239ca",
        jewel: "#4717f6",
        stark: "#e7dfdd",
        borderGray: "#3b3b3b",
      },
      fontFamily: {
        orbitron: ["orbitron", "sans-serif"],
        russoOne: ["russoOne", "sans-serif"],
        montserrat: ["montserrat", "serif"],
        manrope: ["manrope", "serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
});
