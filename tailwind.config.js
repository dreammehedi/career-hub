/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    extend: {
      colors: {
        headerBg: "#F9F9FF",
        "primary-linear": {
          start: "#7E90FE",
          end: "#9873FF",
        },
        btn: {
          StartBg: "#7E90FE",
          EndBg: "#9873FF",
        },
        dark: {
          dark1: "#1A1919",
          dark2: "#474747",
          dark3: "#757575",
          dark4: "#A3A3A3",
          dark5: "#D1D1D1",
          dark6: "#E8E8E8",
          dark7: "#F4F4F4",
        },
      },
    },
  },
  plugins: [],
};
