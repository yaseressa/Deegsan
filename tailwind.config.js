/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "footer-pg": "url('./Assets/footerBG.png')",
        back: "url('./Assets/landingBG.jpg')",
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
