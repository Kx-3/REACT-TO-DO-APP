/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ebony-50': '#f0f4fd',
        'ebony-100': '#e5eafa',
        'ebony-200': '#cfd9f6',
        'ebony-300': '#b2c0ef',
        'ebony-400': '#929fe7',
        'ebony-500': '#7880dc',
        'ebony-600': '#5d5dce',
        'ebony-700': '#4e4db5',
        'ebony-800': '#414192',
        'ebony-900': '#3a3c75',
        'ebony-950': '#111122',
      },
      fontFamily: {
        'poppins': 'Poppins'
      }
    },
  },
  plugins: [],
}

