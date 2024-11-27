/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      ll: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1400px",
    },

    extend: {
      colors: {
        primaryColor: "#161622",
        secondaryColor: "FFA001",
        tertiaryColor: "#1E1E2D",
        textColor: "#CDCDE0",
      },

      borderRadius: {
        round: "8px",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
