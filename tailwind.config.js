/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: "./src/**/*.{js,jsx,ts,tsx}",
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      regex: {
        default: "#a7ff72",
        light: "#c6faa5",
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      main: ["Jost", "Zen Antique Soft", "Nunito", "Helvetica"],
      sec: ["Albert Sans", "Inter", "Helvetica"],
    },
    backgroundImage: {
      gradient: "linear-gradient(#f0de14, #65fcb0)",
    },
    extend: {
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
}
