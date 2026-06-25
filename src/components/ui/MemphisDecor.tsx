import { cn } from '../../lib/utils'

export interface MemphisDecorProps {
  variant?: 'dots' | 'squiggle' | 'arch' | 'chips' | 'cluster'
  color?: string
  opacity?: number
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function MemphisDecor({
  variant = 'dots',
  color = '#0E0F14',
  opacity = 0.15,
  size = 'md',
  className,
}: MemphisDecorProps) {
  const sizePx = size === 'sm' ? 48 : size === 'lg' ? 120 : 80

  if (variant === 'dots') {
    return (
      <div
        className={cn('pointer-events-none select-none', className)}
        style={{ width: sizePx, height: sizePx, opacity }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 80 80" fill={color}>
          {[0, 1, 2, 3, 4].flatMap((row) =>
            [0, 1, 2, 3, 4].map((col) => (
              <circle key={`${row}-${col}`} cx={col * 16 + 8} cy={row * 16 + 8} r="2.5" />
            )),
          )}
        </svg>
      </div>
    )
  }

  if (variant === 'squiggle') {
    return (
      <div
        className={cn('pointer-events-none select-none', className)}
        style={{ width: sizePx * 1.5, height: sizePx * 0.5, opacity }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 120 40" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round">
          <path d="M4 20 Q16 4 28 20 Q40 36 52 20 Q64 4 76 20 Q88 36 100 20 Q112 4 120 20" />
        </svg>
      </div>
    )
  }

  if (variant === 'arch') {
    return (
      <div
        className={cn('pointer-events-none select-none', className)}
        style={{ width: sizePx * 0.7, height: sizePx, opacity }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 56 80" fill="none" stroke={color} strokeWidth="2.5">
          <path d="M4 78 L4 36 Q4 4 28 4 Q52 4 52 36 L52 78" />
        </svg>
      </div>
    )
  }

  if (variant === 'chips') {
    return (
      <div
        className={cn('pointer-events-none select-none flex gap-2 flex-wrap', className)}
        style={{ opacity }}
        aria-hidden="true"
      >
        {['#F2D7D9', '#C7D8C0', '#8D7CC3', '#E9C46A'].map((c, i) => (
          <div
            key={i}
            className="rounded-md"
            style={{
              width: [32, 48, 24, 40][i],
              height: [20, 16, 24, 16][i],
              backgroundColor: c,
            }}
          />
        ))}
      </div>
    )
  }

  // cluster — dots + squiggle combined
  return (
    <div className={cn('pointer-events-none select-none relative', className)} aria-hidden="true">
      <div style={{ opacity }}>
        <svg viewBox="0 0 100 80" fill={color} style={{ width: sizePx, height: sizePx * 0.8 }}>
          {[0, 1, 2].flatMap((row) =>
            [0, 1, 2].map((col) => (
              <circle key={`${row}-${col}`} cx={col * 16 + 8} cy={row * 16 + 8} r="2.5" />
            )),
          )}
          <path
            d="M0 60 Q12 48 24 60 Q36 72 48 60 Q60 48 72 60"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  )
}
