/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#212c42",
        secondary: "#151c2b",
        btn: "#525a6a",
      },
    },
  },
  plugins: [],
};
