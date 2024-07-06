module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bg-shift': 'bg-shift 6s infinite alternate',
        'glowing': 'glowing 2s infinite', // Glowing animation
      },
      keyframes: {
        'bg-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        'glowing': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0, 204, 255, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 204, 255, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}