/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        mariachiGold: "#D99E32",
        mariachiBrown: "#8C4A0F",
        mariachiDark: "#1c1c1c",
        mariachiEnfasis: "#BF7821",
        mariachiLight: "#ffda6bb4",
        mariachiLight2: "#8c490f66",
        mariachiWhite: "#FFFFFF",
      },
      backgroundImage: {
        'mariachi-gradient': 'linear-gradient(135deg, #ffda6bb4, #8c490f66)',
      },
      fontFamily: {
        main: ["Tahoma", "serif"],
        title: ["Georgia", "serif"],
        script: ["Great Vibes", "cursive"],
      },
      scale: {
        100: "100%",
        110: "110%",
      },
    },
  },
  plugins: [],
}

