/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        fiapRed: '#E60028',
        fiapGray: '#1E1E1E',
      },
    },
  },
  plugins: [],
}
