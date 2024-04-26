/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'btn-gradient': "linear-gradient(174deg, rgba(6,40,110,1) 0%, rgba(22,78,192,1) 100%)",
        'box-gradient' : "linear-gradient(51deg, rgba(34,132,241,1) 11%, rgba(6,28,147,1) 100%)"
      })
    },
  },
  plugins: [],
}

