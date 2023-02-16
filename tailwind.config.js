/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "footer-pg": "url('./Assets/footerBG.png')",
      },
    },
  },
  plugins: [],
};
