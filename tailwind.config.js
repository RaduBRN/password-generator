/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: "#24232C",
        mediumGray: "#817D92",
        lightGray: "#E6E5EA",
        darkestGray: "#18171F",
        neonGreen: "#A4FFAF",
        brightRed: "#F64A4A",
        orangeRed: "#FB7C58",
        goldenYellow: "#F8CD65",
      },
      fontFamily: {
        jetbrains: ['"JetBrains"', "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
