/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '656': '656px',
        '590': '590px',
        '334': '334px',
        '353': '353px',
        '100': '100%',
      },
      height: {
        '218': '300px',
        '162': '162px',
      }
    },
  },
  plugins: [],
}

