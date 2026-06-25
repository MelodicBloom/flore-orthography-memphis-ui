import { motion } from 'framer-motion'

interface PaintingPanelProps {
  title?: string
  tone?: 'blush' | 'sage' | 'lavender' | 'ochre' | 'ink'
  showMemphis?: boolean
  showSheen?: boolean
  className?: string
  aspectRatio?: string
}

const toneGradients: Record<string, string> = {
  blush: 'from-blush via-[#f0c8cc] to-[#e8b4b8]',
  sage: 'from-sage via-[#b5ccae] to-[#9ab892]',
  lavender: 'from-lavender/60 via-[#a99bd4] to-[#8d7cc3]',
  ochre: 'from-ochre via-[#d4a843] to-[#c49030]',
  ink: 'from-charcoal via-ink to-[#05060a]',
}

const strokeAccents: Record<string, string[]> = {
  blush: ['#F2D7D9', '#D9A18F', '#E8B4B8', '#EFE5DA'],
  sage: ['#C7D8C0', '#9AB892', '#B5CCAE', '#7FA86E'],
  lavender: ['#8D7CC3', '#B5AEDD', '#6B5AAB', '#D4CEEE'],
  ochre: ['#E9C46A', '#C49030', '#F2D45C', '#A67820'],
  ink: ['#222222', '#0E0F14', '#3A3B42', '#555660'],
}

export default function PaintingPanel({
  title,
  tone = 'blush',
  showMemphis = false,
  showSheen = true,
  className = '',
  aspectRatio = 'aspect-[4/5]',
}: PaintingPanelProps) {
  const strokes = strokeAccents[tone]

  return (
    <div
      className={`relative overflow-hidden rounded-sm canvas-texture ${aspectRatio} ${className}`}
    >
      {/* Base gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${toneGradients[tone]}`} />

      {/* Impasto-style SVG brush strokes */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 500"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* Large organic blobs simulating impasto layers */}
        <ellipse cx="200" cy="180" rx="160" ry="120" fill={strokes[0]} opacity="0.45" />
        <ellipse cx="280" cy="300" rx="120" ry="90" fill={strokes[1]} opacity="0.35" transform="rotate(-15 280 300)" />
        <ellipse cx="100" cy="350" rx="100" ry="70" fill={strokes[2]} opacity="0.3" transform="rotate(10 100 350)" />
        {/* Brush stroke marks */}
        <path d="M60 120 Q180 80 320 140 Q360 160 380 200" stroke={strokes[3]} strokeWidth="18" fill="none" opacity="0.25" strokeLinecap="round" />
        <path d="M40 260 Q160 220 300 280 Q350 300 400 340" stroke={strokes[0]} strokeWidth="12" fill="none" opacity="0.2" strokeLinecap="round" />
        <path d="M80 400 Q200 360 340 420" stroke={strokes[1]} strokeWidth="22" fill="none" opacity="0.18" strokeLinecap="round" />
        {/* Floral abstract gesture */}
        <circle cx="190" cy="170" r="55" fill={strokes[2]} opacity="0.3" />
        <circle cx="220" cy="140" r="38" fill={strokes[3]} opacity="0.25" />
        <ellipse cx="175" cy="200" rx="30" ry="45" fill={strokes[0]} opacity="0.2" transform="rotate(-20 175 200)" />
        <ellipse cx="240" cy="195" rx="25" ry="40" fill={strokes[1]} opacity="0.2" transform="rotate(15 240 195)" />
        {/* Leaf gestures */}
        <path d="M150 300 Q170 260 200 280 Q230 300 210 330 Q190 360 160 340 Z" fill={strokes[2]} opacity="0.28" />
        <path d="M240 320 Q270 290 290 310 Q310 335 285 355 Q260 370 245 345 Z" fill={strokes[3]} opacity="0.22" />
      </svg>

      {/* Memphis dots overlay */}
      {showMemphis && (
        <div className="absolute top-4 right-4 opacity-40">
          <svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true">
            {Array.from({ length: 16 }).map((_, i) => (
              <circle
                key={i}
                cx={(i % 4) * 20 + 10}
                cy={Math.floor(i / 4) * 20 + 10}
                r="2.5"
                fill={tone === 'ink' ? '#F7F3EE' : '#0E0F14'}
                opacity={0.6}
              />
            ))}
          </svg>
        </div>
      )}

      {/* Sheen overlay */}
      {showSheen && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)',
            mixBlendMode: 'soft-light',
          }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      {title && (
        <div className="absolute bottom-4 left-4 right-4">
          <p className="font-display text-sm text-ivory/90 drop-shadow-sm">{title}</p>
        </div>
      )}
    </div>
  )
}
