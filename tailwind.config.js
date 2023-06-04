const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-roboto)', ...fontFamily.sans],
      }, 
      colors: {
        primary: "#1A1A40",
        primary2: "#7A0BC0",
        secondary: "#FA58B6"
      },
      blur: {
        '8xl': '20rem', 
      },
    }
  },
  plugins: [],
}

