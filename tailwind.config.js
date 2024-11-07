/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tomato: '#F85A3E',
        orangeCrayola: '#FF7733',
        cinnabar: '#E15634',
        vermilion: '#E63B2E',
        platinum: '#E1E6E1',
      },
    },
  },
  plugins: [],
  
}