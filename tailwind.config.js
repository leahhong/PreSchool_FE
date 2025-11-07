import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1fabd5",
          green: "#91c73a",
          yellow: "#ffd739",
          red: "#f25243",
        },
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        glow: "0 32px 70px -32px rgba(31, 171, 213, 0.5)",
      },
      borderRadius: {
        xl: "1.5rem",
        "2xl": "2rem",
      },
    },
  },
  plugins: [],
};

