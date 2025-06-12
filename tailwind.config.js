/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm2: "400px", // 👈 اینجاست مدیا کوئری سفارشی
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(270deg, rgba(255, 255, 255, 0.05) 0%, #FFF 20.25%)',
      },
    },
  },
  plugins: [],
};
