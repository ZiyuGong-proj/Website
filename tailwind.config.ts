import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#121826',
        slate: {
          25: '#f8fafc',
          50: '#f1f5f9',
          100: '#e2e8f0',
          200: '#cbd5f5',
          500: '#64748b',
          600: '#475569',
          700: '#334155'
        },
        brand: {
          600: '#1b4f91',
          700: '#163f78'
        },
        accent: '#d04848',
        open: '#c86a2b'
      },
      boxShadow: {
        subtle: '0 1px 2px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
