/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        brownPrimary: '#4c3d34',
        brown2: '#d08d7a',
        orange: '#e26743',
        yellow: '#fada8e',
      },
      screens: {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}
