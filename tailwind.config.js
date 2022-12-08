/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'Cairo': ['Cairo', 'sans-serif'] 
      },
      colors: {
        "Blue": "#006DFF",
        "Yellow": "#FDC526",
        "Orange": "#FF765A",
        "LightBlue": "#89C4FF",
      },
      animation: {
          animationDurations: 'bounce 7s infinite'
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}