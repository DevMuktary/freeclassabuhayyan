/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#001232",
          gold: "#FFB902",
          goldHover: "#E5A500",
        },
      },
    },
  },
  plugins: [],
}
