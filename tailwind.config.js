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
        // Exact tokens extracted from luzia.framer.website CSS variables
        luzia: {
          // --token-7718b53b: #fff
          bg: '#F3F4F6',
          // --token-d65c47cc: #f7f7f7
          bgSoft: '#f7f7f7',
          card: '#FFFFFF',
          // --token-2b90e070: #1f1f1f
          dark: '#0C0D12',
          darkcard: '#14151C',
          // --token-0989c3d2: #7430f7
          purple: '#7430f7',
          // --token-20fb4c91: #f5f2ff
          purpleLight: '#f5f2ff',
          // --token-404da5a0: #111
          accent: '#111111',
          // --token-923661f6: #6c7179
          muted: '#6c7179',
          // --token-556c256e: #d1d3d6
          border: 'rgba(0, 0, 0, 0.07)',
          borderStrong: '#d1d3d6',
          borderDark: 'rgba(255, 255, 255, 0.1)',
          // --token-59ba25ef: #00c047
          green: '#00c047',
          // --token-f6be6067: #eefff3
          greenLight: '#eefff3',
        },
        spex: {
          bg: '#08080A',
          surface: '#0F1015',
          card: '#13141B',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(116, 48, 247, 0.4)',
          volt: '#E7FE00',
          amber: '#FFB800',
          orange: '#FF462E',
          muted: '#858998',
          subtle: '#3A3D4D',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        // Exact font stack from live site
        sans: ['"Instrument Sans"', '"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Instrument Sans"', '"Barlow"', 'sans-serif'],
        barlow: ['"Barlow"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        // Match Framer's rounded-[32px] / rounded-[36px] usage
        'luzia': '32px',
        'luzia-xl': '36px',
        'luzia-sm': '24px',
      },
      boxShadow: {
        // Exact shadow tokens from live site
        'luzia': '0 10px 30px -5px rgba(0, 0, 0, 0.04), 0 0 1px 1px rgba(0, 0, 0, 0.03)',
        'luzia-hover': '0 20px 40px -10px rgba(0, 0, 0, 0.08), 0 0 1px 1px rgba(0, 0, 0, 0.05)',
        'luzia-card': '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03)',
        'purple-glow': '0 20px 50px -10px rgba(116, 48, 247, 0.4)',
        'dark-xl': '0 24px 60px -12px rgba(0, 0, 0, 0.6), 0 0 80px rgba(59, 130, 246, 0.14)',
      },
      spacing: {
        // Common Framer spacings
        '18': '4.5rem',
        '22': '5.5rem',
      },
      backgroundImage: {
        'purple-gradient': 'linear-gradient(135deg, #7430f7 0%, #a78bfa 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0a0a0a 0%, #0c0d12 100%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'scroll-left': 'scrollLeft 30s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
