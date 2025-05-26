
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
    colors: {
    primary: "#6D4E2E",
    secondary: "#A89C7A",
  },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    }
    },
  },
  plugins: [],
}