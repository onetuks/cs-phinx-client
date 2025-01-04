/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--purple--500)",
        secondary: "var(--purple--100)",
      },
    },
  },
  plugins: [],
};
