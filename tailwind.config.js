/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#d06224',
        'secondary-color': '#ae431e',
        'tertiary-color': '#8A8635',
        'quaternary-color': '#EAC891',
      },
    },
  },
  plugins: [],
}