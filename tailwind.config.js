/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          sm: {
            min: "640px",
          },
          md: {
            min: "768px",
          },
          lg: {
            min: "1024px",
          },
          xl: {
            min: "1280px",
          },
          "2xl": {
            min: "1280px",
          },
        },
      },
    },
  },
  plugins: [],
}

