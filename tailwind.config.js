/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        faucetsTheme: {
          primary: '#9b1fe9',
          secondary: '#eef2fe',
          accent: '#6d7380',
          "base-100": "#FFFFFF",
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}