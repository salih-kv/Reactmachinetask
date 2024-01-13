/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#e8edff",
        "secondary-bg": "#20263a",
        "tertiary-bg": "#1a1f30",
      },
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
