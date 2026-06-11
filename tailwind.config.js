/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        brownDark: "#1c120d",
        brownSoft: "#2a1c14",
        card: "#241711",
        gold: "#D4AF37",
        cream: "#F5EBDD",
      },

      fontFamily: {
        serifDisplay: ["'Playfair Display'", "serif"],
        body: ["'Cormorant Garamond'", "serif"],
      },

      backgroundImage: {
        radialGlow:
          "radial-gradient(circle at 30% 30%, rgba(212,175,55,0.15), transparent 60%)",
      },

      boxShadow: {
        goldGlow: "0 0 30px rgba(212, 175, 55, 0.25)",
      },
    },
  },

  plugins: [],
}