export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#121212',
        text: '#ffffff',
        accent: {
          DEFAULT: '#7c3aed',
          soft: '#8b5cf6'
        }
      },
      boxShadow: {
        glow: '0 0 30px rgba(124, 58, 237, 0.2)'
      }
    }
  },
  plugins: []
};
