/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#fff",
      grey: {
        50: "#FAFAFA",
        100: "#6D6D6D",
        200: "#afafaf",
        300: "#666",
        400: "#4a4d4e",
        500: "#3C3F40",
        600: "#333",
        650: "#303233",
        transparent: "#333333a6"
      },
      red: {
        100: "#dc2f2f"
      },
      black: "#000",
      orange: "#FF6600"
    },
    extend: {
      fontFamily: {
        regular: ["Golos Text", "sans-serif"],
        light: ["Golos Text", "sans-serif"]
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px"
      }
    }
  },
  variants: {
    extend: {
      display: ["group-hover", "group-focus"],
      rotate: ["group-hover", "group-focus"]
    }
  },
  plugins: []
};
