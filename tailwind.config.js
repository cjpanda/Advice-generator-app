/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4e5d73",
        secondary: "#323a49",
        light: "cee3e9",
        accent: {
          DEFAULT: "#52ffa8",
        },
        body: "#1f2632",
      },
    },
  },
  plugins: [],
};
