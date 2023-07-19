/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bgGreen: "#32ad8f",
        primaryGreen: "#318f70",
        secondaryGreen: "#0f2e29",
        highlightGreen: "#2ccbb1",
        primaryBlue: "#1d2d40",
        secondaryBlue: "#162234",
        highlightBlue: "#1b363d",
        shadeGreen: "#194838",
      },
    },
  },
  plugins: [],
};
