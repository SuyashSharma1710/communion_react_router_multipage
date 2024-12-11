/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        protest: ['"Protest Guerrilla"', 'cursive'], // Use quotes for multi-word font names
      },
    },
  },
  plugins: [],
}

