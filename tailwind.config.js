/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "rgb(152, 234, 254)", // or you can use hex as '#98E4FE'
      },
    },
  },
  plugins: [],
};
