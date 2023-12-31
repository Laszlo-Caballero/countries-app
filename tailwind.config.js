/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "hsl(209, 23%, 22%)",
        veryDark: "hsl(207, 26%, 17%)",
      },
      fontFamily: {
        NunitoSansBlod: ["NunitoSansBlod"],
        NunitoSansMedium: ["NunitoSansMedium"],
        NunitoSansLight: ["NunitoSansLight"],
        NunitoSansExtraLight: ["NunitoSansExtraLight"],
      },
      gridTemplateColumns: {
        "4-auto": "auto auto auto auto",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
