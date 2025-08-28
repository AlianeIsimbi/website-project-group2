/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'vector': "url('./Image/vector9.png')",
      },
 fontFamily: {
        nunito: ['Noto Sans', 'sans-serif'],
    },
  },
  plugins: [],
}
}

