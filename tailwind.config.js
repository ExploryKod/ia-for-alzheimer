/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui'],
        heading: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#2563eb',
        secondary: '#475569',
        danger: '#dc2626'
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}