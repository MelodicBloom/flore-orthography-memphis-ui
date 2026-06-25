export const colorTokens = {
  ink: '#0E0F14',
  ivory: '#F7F3EE',
  warmPaper: '#FFF9F0',
  blush: '#F2D7D9',
  sage: '#C7D8C0',
  lavender: '#8D7CC3',
  ochre: '#E9C46A',
  deepGreen: '#123B2D',
  charcoal: '#222222',
  mutedClay: '#D9A18F',
  creamStroke: '#EFE5DA',
} as const

export const typographyTokens = {
  display: {
    family: 'Playfair Display, Cormorant Garamond, Georgia, serif',
    weight: 700,
    letterSpacing: '-0.045em',
    lineHeight: 0.92,
  },
  serif: {
    family: 'Cormorant Garamond, Georgia, serif',
    weight: 600,
    letterSpacing: '-0.025em',
    lineHeight: 1,
  },
  sans: {
    family: 'Inter, ui-sans-serif, system-ui, sans-serif',
    weight: 400,
    letterSpacing: '-0.01em',
    lineHeight: 1.5,
  },
} as const

export const spacingTokens = {
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '6rem',
} as const

export const radiusTokens = {
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  organic: '42% 58% 63% 37% / 38% 42% 58% 62%',
} as const

export const shadowTokens = {
  soft: '0 20px 60px rgba(14, 15, 20, 0.08)',
  card: '0 12px 36px rgba(14, 15, 20, 0.12)',
  lifted: '0 30px 90px rgba(14, 15, 20, 0.18)',
} as const

export type ColorToken = keyof typeof colorTokens
