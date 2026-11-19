/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { navy: '#06175D', blue: '#082FCB', 'blue-bright': '#164FE5', yellow: '#FFD600', red: '#F20D22', ink: '#111827' },
      fontFamily: { display: ['Space Grotesk', 'sans-serif'] },
    },
  },
  plugins: [],
};
