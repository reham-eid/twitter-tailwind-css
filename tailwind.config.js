/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dim: {
          50: "#5F99F7",
          100: "#5F99F7",
          200: "#38444d ",
          300: "#202e3a",
          400: "#253341",
          500: "#5F99F7",
          600: "#5F99F7",
          700: "#192734",
          800: "#162d40",
          900: "#15202b",
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
