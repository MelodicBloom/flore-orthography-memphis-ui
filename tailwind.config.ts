import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0E0F14',
        ivory: '#F7F3EE',
        'warm-paper': '#FFF9F0',
        blush: '#F2D7D9',
        sage: '#C7D8C0',
        lavender: '#8D7CC3',
        ochre: '#E9C46A',
        'deep-green': '#123B2D',
        charcoal: '#222222',
        'muted-clay': '#D9A18F',
        'cream-stroke': '#EFE5DA',
      },
      fontFamily: {
        display: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '-0.045em',
        refined: '-0.025em',
        wide: '0.08em',
      },
      borderRadius: {
        organic: '42% 58% 63% 37% / 38% 42% 58% 62%',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(14,15,20,0.08)',
        card: '0 12px 36px rgba(14,15,20,0.12)',
        lifted: '0 30px 90px rgba(14,15,20,0.18)',
      },
      backgroundImage: {
        'canvas-grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

export default config
