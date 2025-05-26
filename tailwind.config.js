import flowbiteReact from "flowbite-react/plugin/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      ".flowbite-react\\class-list.json"
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
  plugins: [flowbiteReact],
}