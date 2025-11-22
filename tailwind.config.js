/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./index.css",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Share Tech Mono"', 'monospace'],
        display: ['"VT323"', 'monospace'],
      },
      colors: {
        'retro-black': '#050505',
        'retro-dark': '#0a0a12',
        'retro-grid': '#1a1a2e',
        'neon-pink': '#ff00ff',
        'neon-blue': '#00ffff',
        'neon-green': '#39ff14',
        'neon-yellow': '#fff01f',
      },
      animation: {
        'scanline': 'scanline 8s linear infinite',
        'blink': 'blink 1s step-end infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        },
        glow: {
          'from': { boxShadow: '0 0 5px #00ffff, 0 0 10px #00ffff' },
          'to': { boxShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff' }
        }
      }
    },
  },
  plugins: [],
}
