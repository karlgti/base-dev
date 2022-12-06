// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: require("tailwindcss/colors"),
      colors: {
        blue: "#021B71",
        "primary-blue": "#001B71",
      },
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
