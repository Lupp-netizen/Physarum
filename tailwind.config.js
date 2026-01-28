/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['"Space Mono"', 'monospace'],
        'vt323': ['"VT323"', 'monospace'],
        'press-start': ['"Press Start 2P"', 'cursive'],
        'special-elite': ['"Special Elite"', 'cursive'],
        'cutive': ['"Cutive Mono"', 'monospace'],
        'share-tech': ['"Share Tech Mono"', 'monospace'],
        'xanh': ['"Xanh Mono"', 'monospace'],
        'courier': ['"Courier Prime"', 'monospace'],
      },
      colors: {
        'sepia-dark': '#2a2520',
        'sepia-light': '#d4c4a8',
        'sepia-text': '#1a1714',
      },
      animation: {
        'slow-pulse': 'pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'drift': 'drift 20s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(5px, -5px)' },
          '50%': { transform: 'translate(-3px, 3px)' },
          '75%': { transform: 'translate(3px, 5px)' },
        }
      }
    },
  },
  plugins: [],
}
