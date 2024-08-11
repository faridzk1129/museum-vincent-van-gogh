/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: "Roboto, sans-serif",
        Cinzel: "Cinzel Decorative, cursive",
        Montserrat: "Montserrat, sans-serif",
        Lora: "Lora, serif",
      },
      colors: {
        BgContainer: "#1A1C19",
        Navbar: {
          button1: "#333123",
          button2: "#E1D6C2",
          button3: "#1A1C19",
          container: "#1A1C19",
          textOther: "#FFF5CB",
        },
        Section1: {
          container: "#E1D6C2",
          textOther: "#352817",
        },
        Section2: {
          container: "#8E8768",
          textOther: "#2B1D0F",
        },
        Section3: {
          container: "#966C54",
          textOther: "#342415",
        },
        Section4: {
          container: "#B5A38B",
          text: "#342415",
          other: "#222222",
        },
      },
    },
  },
  plugins: [],
};
