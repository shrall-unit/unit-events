import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        unit: {
          black: {
            100: '#1c1c1c',
            90: '#2c2c2e',
            80: '#3a3a3c',
            60: '#48484a',
          },
          grey: {
            40: '#8e8e93',
            30: '#c7c7cc',
            20: '#e5e5ea',
            10: '#f8f9fc',
          },
          purple: {
            60: '#4b1fff',
            40: '#6a45ff',
            20: '#9d85ff',
          },
          blue: {
            60: '#2fadeb',
            40: '#52b9eb',
            20: '#8dcceb',
          },
          turquoise: {
            60: '#29ccb4',
            40: '#85e1cb',
            20: '#bde1dd',
          },
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'pulse-opacity': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        pulse: 'pulse-opacity 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
