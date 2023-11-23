/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: {
          DEFAULT: '#FFFFFF',
        },
        background: {
          DEFAULT: '#282A36',
        },
        background2: {
          DEFAULT: '#44475A',
        },
        comment: {
          DEFAULT: '#6272A4',
        },
        green: {
          DEFAULT: '#50FA7B',
        },
        red: {
          DEFAULT: '#FF5555',
        },
        cyan: {
          DEFAULT: '#8BE9FD',
        },
      },
    },
  },
  plugins: [],
}
