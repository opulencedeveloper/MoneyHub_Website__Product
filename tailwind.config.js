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
        secondary: "#FA58B6",
        secondary2: "#737373",
        secondary3: "#333333"
      },
      blur: {
        '8xl': '20rem', 
      },
      boxShadow: {
        '3xl': '40px 40px 70px rgba(0, 0, 0, 0.1)', 
        "4xl": '20px 20px 70px rgba(0, 0, 0, 0.1)'
      },
    }
  },
  plugins: [],
}

