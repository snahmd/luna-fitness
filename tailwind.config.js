/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#f8f4eb",
        "gray-50": "#efe6e6",
        "gray-100": "#dfcccc",
        "gray-500": "#5e0000",
        "primary-100": "#ffc5e3",
        "primary-300": "#ff81c1",
        "primary-500": "#e9499a",
        "secondary-400": "#ffcd5b",
        "secondary-500": "#ffc132",
        "secondary-700": "#f2a763",
      },
    },
  },
  plugins: [],
};
