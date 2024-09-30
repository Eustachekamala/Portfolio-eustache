/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      FontFamily: {
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

