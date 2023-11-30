/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#A9C2CB',
        'white': '#ffffff',
        'black': {
          medium: '#171E27',
          bold: '#020305',
          },
      },
      fontSize: {
        'heading': 'text-3xl md:text-4xl',
        'content': 'xs'
      },
      fontWeight: {
        'heading': '800',
        'content': '500'
      }

    },
  },
  plugins: [],
}

