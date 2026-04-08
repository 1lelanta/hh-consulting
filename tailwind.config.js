/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy950: "#08192D",
          navy900: "#0D284A",
          navy800: "#163B63",
          gold500: "#BE9A5A",
          gold400: "#D7BC86",
          gray050: "#F7F9FC",
          gray200: "#E7ECF3",
          gray500: "#627284",
        },
      },
      boxShadow: {
        soft: "0 20px 50px rgba(8, 25, 45, 0.12)",
        card: "0 14px 30px rgba(8, 25, 45, 0.08)",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      keyframes: {
        reveal: {
          "0%": { opacity: "0", transform: "translateY(14px) scale(0.99)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        reveal: "reveal 700ms ease forwards",
      },
    },
  },
  plugins: [],
};
