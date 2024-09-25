/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  darkMode: "media",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        lalezar: ['Lalezar', 'cursive'],
      },
      backgroundImage: {
        'hero-pattern': "url('/bg-light.png')",
      },
      colors: {
        blueTheme: {
          primary: '#DD6B20', 
          secondary: '#FB923C',
        },
        yellowTheme: {
          primary: '#0C4A6E',
          secondary: '#38BDF8',
        },
        greenTheme: {
          primary: '#14532D',
          secondary: '#4ADE80',
        },
        purpleTheme: {
          primary: '#d5a201',
          secondary: '#FCD34D',
        },
        orangeTheme: {
          primary: '#4C1D95',
          secondary: '#A855F7',
        },
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

