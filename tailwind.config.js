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
        secondaryColor: "#FFA001",
        tertiaryColor: "#1E1E2D",
        textColor: "#CDCDE0",
      },

      borderRadius: {
        round: "8px",
      },

      boxShadow: {
        boxShadow: "10px 10px 25px #0000",
      },

      fontSize: {
        h1: "4rem",
        h2: "2.5rem",
        h3: "1.5rem",
        subtitle: "1.5rem",
        body: "1rem",
        small: "0.875rem",
        preTitle: "0.75rem",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
