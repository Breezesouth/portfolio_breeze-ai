import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  content: [
    resolve(__dirname, '../../index.html'),
    resolve(__dirname, '../../src/**/*.{ts,tsx}')
  ],
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
