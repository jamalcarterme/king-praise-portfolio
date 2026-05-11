/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.js",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#F5C518',
        'gold-light': '#FFE57A',
        'gold-dark': '#C8A400',
        dark: '#070707',
        'dark-2': '#0f0f0f',
        'dark-3': '#181818',
        'dark-4': '#222222',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
