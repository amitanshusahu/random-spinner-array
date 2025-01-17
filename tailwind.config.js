/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#160e2a',
        secondary: '#C473FF',
        accent: '#FB6F92',
      },
      fontFamily: {
        primary: ["DM Sans", 'sans'],
      },
      fontSize: {
        subtitle1: '16px',
        subtitle2: '14px',
        body1: '16px',
        body2: '14px',
        caption: '12px',
        overline: '12px',
      },
      backgroundImage: {
        hero: "url('/image/ban1.png')",
      },
      boxShadow: {
        top: '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}