/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
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

