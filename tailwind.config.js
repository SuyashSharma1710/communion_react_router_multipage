/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        insetBlack: "inset 0 0 20px 15px black",
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        protest: ['"Protest Guerrilla"', 'cursive'], // Use quotes for multi-word font names
      },
    },
  },
  plugins: [],
}

