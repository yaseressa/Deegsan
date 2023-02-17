/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#141712',
        secondary: '#547A37',
        teritary: '#BBD6A7',
      },
      backgroundImage: {
        'footer-pg': "url('./Assets/footerBG.png')",
        back: "url('./Assets/landingBG.jpg')",
      },

      fontFamily: {
        display: ['"Rammetto One"'],
        body: ['"Poppins"'],
        poppins: "'Poppins'",
      },
    },
  },
  plugins: [],
};
