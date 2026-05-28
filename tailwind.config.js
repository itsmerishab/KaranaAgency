/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          black: '#000000',
          white: '#FFFFFF',
          gold: {
            DEFAULT: '#FFD700',
            light: '#FFE55C',
            dark: '#C9A961'
          },
          purple: {
            deep: '#1a0a3e',
            nebula: '#2d1b69'
          }
        },
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #000000, #1a0a3e, #FFD700)',
        'nebula-radial': 'radial-gradient(circle, #000000, #1a0a3e, #000000)',
      },
      boxShadow: {
        'cosmic': '0 0 30px rgba(255, 215, 0, 0.3)',
        'gold-glow': '0 0 40px rgba(255, 215, 0, 0.6)',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

