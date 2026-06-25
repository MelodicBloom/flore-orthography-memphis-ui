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
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        tighter: '-0.025em',
        editorial: '-0.015em',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(14,15,20,0.08)',
        card: '0 12px 36px rgba(14,15,20,0.12)',
        lifted: '0 30px 90px rgba(14,15,20,0.18)',
      },
    },
  },
  plugins: [],
}

export default config
