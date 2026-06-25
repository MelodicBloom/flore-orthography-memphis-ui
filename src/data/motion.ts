export const motionTokens = {
  duration: {
    fast: 0.18,
    base: 0.32,
    slow: 0.64,
    reveal: 0.9,
  },
  ease: {
    standard: [0.22, 1, 0.36, 1] as number[],
    softOut: [0.16, 1, 0.3, 1] as number[],
    editorial: [0.83, 0, 0.17, 1] as number[],
  },
  spring: {
    gentle: { type: 'spring' as const, stiffness: 120, damping: 18 },
    tactile: { type: 'spring' as const, stiffness: 220, damping: 24 },
    hover: { type: 'spring' as const, stiffness: 300, damping: 26 },
  },
} as const
