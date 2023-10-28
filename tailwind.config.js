/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#FF3811",
        secondary: "#151515",
        secondaryShadow: "#444444",
        text: "#737373",
        bgGray: "#F3F3F3",
        overlay: "rgba(0,0,0,0.7)",
      },
    },
  },
  plugins: [],
};
