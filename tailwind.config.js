/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <--- This line makes the dark mode toggle work!
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}