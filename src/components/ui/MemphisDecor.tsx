interface MemphisDecorProps {
  variant?: 'dots' | 'squiggle' | 'arch' | 'chips' | 'full'
  color?: string
  className?: string
  size?: number
}

export default function MemphisDecor({
  variant = 'dots',
  color = '#0E0F14',
  className = '',
  size = 120,
}: MemphisDecorProps) {
  if (variant === 'dots') {
    const dots = []
    const cols = 5
    const rows = 5
    const spacing = size / cols
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        dots.push(
          <circle
            key={`${r}-${c}`}
            cx={c * spacing + spacing / 2}
            cy={r * spacing + spacing / 2}
            r={2}
            fill={color}
            opacity={0.5}
          />
        )
      }
    }
    return (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className={`pointer-events-none ${className}`}
        aria-hidden="true"
      >
        {dots}
      </svg>
    )
  }

  if (variant === 'squiggle') {
    return (
      <svg
        width={size}
        height={size / 3}
        viewBox={`0 0 ${size} ${size / 3}`}
        className={`pointer-events-none ${className}`}
        aria-hidden="true"
      >
        <path
          d={`M0 ${size / 6} Q${size / 8} 0 ${size / 4} ${size / 6} Q${(3 * size) / 8} ${size / 3} ${size / 2} ${size / 6} Q${(5 * size) / 8} 0 ${(3 * size) / 4} ${size / 6} Q${(7 * size) / 8} ${size / 3} ${size} ${size / 6}`}
          fill="none"
          stroke={color}
          strokeWidth="2"
          opacity={0.4}
        />
      </svg>
    )
  }

  if (variant === 'arch') {
    return (
      <svg
        width={size / 2}
        height={size / 2}
        viewBox="0 0 60 60"
        className={`pointer-events-none ${className}`}
        aria-hidden="true"
      >
        <path
          d="M10 55 L10 30 A20 20 0 0 1 50 30 L50 55"
          fill="none"
          stroke={color}
          strokeWidth="3"
          opacity={0.35}
        />
      </svg>
    )
  }

  if (variant === 'chips') {
    return (
      <svg
        width={size}
        height={size / 2}
        viewBox="0 0 120 60"
        className={`pointer-events-none ${className}`}
        aria-hidden="true"
      >
        <rect x="0" y="20" width="28" height="20" rx="2" fill={color} opacity={0.18} />
        <rect x="36" y="10" width="20" height="28" rx="10" fill={color} opacity={0.12} />
        <rect x="64" y="22" width="32" height="16" rx="8" fill={color} opacity={0.15} />
        <circle cx="108" cy="30" r="10" fill={color} opacity={0.1} />
      </svg>
    )
  }

  // full = dots + squiggle + arch
  return (
    <div className={`relative ${className}`}>
      <MemphisDecor variant="dots" color={color} size={size} />
      <MemphisDecor variant="squiggle" color={color} size={size} className="mt-3" />
      <MemphisDecor variant="arch" color={color} size={size} className="mt-3" />
    </div>
  )
}
