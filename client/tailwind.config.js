/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        corn: {
          50: "#fcfbea",
          100: "#faf5c7",
          200: "#f6e792",
          300: "#f0d354",
          400: "#eabd23",
          500: "#daa618",
          600: "#bc8112",
          700: "#965d12",
          800: "#7d4a16",
          900: "#6a3d19",
          950: "#3e200a",
        },
      },
    },
  },
  plugins: [],
};
