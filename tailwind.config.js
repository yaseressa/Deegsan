/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "footer-pg": "url('./Assets/footerBG.png')",
      },
      colors: {
        primary: "#141712",
        secondary: "#547A37",
      },
      fontFamily: {
        poppins: "'Poppins'",
      },
    },
  },
  plugins: [],
};
