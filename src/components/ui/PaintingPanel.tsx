import { cn } from '../../lib/utils'

export interface PaintingPanelProps {
  title?: string
  tone?: 'blush' | 'sage' | 'lavender' | 'ochre' | 'ink'
  showMemphis?: boolean
  showSheen?: boolean
  className?: string
  children?: React.ReactNode
}

const toneGradients: Record<NonNullable<PaintingPanelProps['tone']>, string> = {
  blush:
    'bg-gradient-to-br from-blush via-[#E8C4C8] to-[#D4A0A6]',
  sage:
    'bg-gradient-to-br from-sage via-[#A8C4A0] to-[#7FA882]',
  lavender:
    'bg-gradient-to-br from-lavender/60 via-[#B8ADE0] to-[#8D7CC3]',
  ochre:
    'bg-gradient-to-br from-ochre/80 via-[#D4A84B] to-[#B8892C]',
  ink:
    'bg-gradient-to-br from-charcoal via-ink to-[#050508]',
}

export function PaintingPanel({
  tone = 'blush',
  showMemphis = true,
  showSheen = true,
  className,
  children,
}: PaintingPanelProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl canvas-texture',
        toneGradients[tone],
        className,
      )}
    >
      {/* Impasto brush stroke layer */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 8px,
            rgba(255,255,255,0.06) 8px,
            rgba(255,255,255,0.06) 12px
          )`,
        }}
      />
      {/* Paint blob shapes */}
      <div
        className="absolute -top-8 -right-8 w-48 h-48 opacity-25 blur-xl"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)',
          borderRadius: '42% 58% 63% 37% / 38% 42% 58% 62%',
        }}
      />
      <div
        className="absolute -bottom-12 -left-6 w-56 h-40 opacity-20 blur-2xl"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,255,255,0.5) 0%, transparent 70%)',
          borderRadius: '60% 40% 30% 70% / 50% 60% 40% 50%',
        }}
      />
      {/* Memphis dots overlay */}
      {showMemphis && (
        <div
          className="absolute top-4 right-4 w-16 h-16 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(14,15,20,0.5) 1.5px, transparent 1.5px)',
            backgroundSize: '8px 8px',
          }}
        />
      )}
      {/* Sheen sweep */}
      {showSheen && (
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)',
          }}
        />
      )}
      {children}
    </div>
  )
}
