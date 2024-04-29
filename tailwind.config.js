/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#e9bf95",
        "primary-color-alt": "#e6b584",
        "title-color": "#f4f1f0",
        "text-color": "#c4bcba",
        "text-color-light": "#918988",
        "secondary-color": "#1e0e0b",
        "secondary-color-alt": "#281815",
        "hover-first": "#e2d3c3",
      },
    },
  },
  plugins: [],
};
