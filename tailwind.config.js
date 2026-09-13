/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        luzia: {
          bg: '#F3F4F6',
          card: '#FFFFFF',
          dark: '#0C0D12',
          darkcard: '#14151C',
          purple: '#6E2CF4',
          purpleLight: '#F5F2FF',
          accent: '#111111',
          muted: '#6C7179',
          border: 'rgba(0, 0, 0, 0.07)',
          borderDark: 'rgba(255, 255, 255, 0.1)',
        },
        spex: {
          bg: '#08080A',
          surface: '#0F1015',
          card: '#13141B',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(231, 254, 0, 0.4)',
          volt: '#E7FE00',
          amber: '#FFB800',
          orange: '#FF462E',
          muted: '#858998',
          subtle: '#3A3D4D',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['"Instrument Sans"', '"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Instrument Sans"', '"Barlow"', 'sans-serif'],
        barlow: ['"Barlow"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'luzia': '0 10px 30px -5px rgba(0, 0, 0, 0.04), 0 0 1px 1px rgba(0, 0, 0, 0.03)',
        'luzia-hover': '0 20px 40px -10px rgba(0, 0, 0, 0.08), 0 0 1px 1px rgba(0, 0, 0, 0.05)',
        'purple-glow': '0 20px 50px -10px rgba(110, 44, 244, 0.4)',
      }
    },
  },
  plugins: [],
}
