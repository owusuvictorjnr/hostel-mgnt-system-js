/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#038c7f',
        secondary: '#f2c641',
        tertiary: {
          dark: '#f27405',
          light: '#f2c641',
        },
      },
    },
  },
  plugins: [],
}
