/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Para o App Router
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // Para o Pages Router
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Para componentes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

