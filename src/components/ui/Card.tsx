import { cn } from '../../lib/utils'

export interface CardProps {
  children: React.ReactNode
  className?: string
  elevated?: boolean
  tone?: 'ivory' | 'blush' | 'sage' | 'lavender' | 'ochre' | 'ink'
}

const toneStyles: Record<NonNullable<CardProps['tone']>, string> = {
  ivory: 'bg-ivory',
  blush: 'bg-blush/40',
  sage: 'bg-sage/40',
  lavender: 'bg-lavender/20',
  ochre: 'bg-ochre/30',
  ink: 'bg-ink text-ivory',
}

export function Card({ children, className, elevated = false, tone = 'ivory' }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl overflow-hidden transition-all duration-300',
        toneStyles[tone],
        elevated
          ? 'shadow-card hover:shadow-lifted hover:-translate-y-1.5'
          : 'shadow-soft hover:shadow-card hover:-translate-y-0.5',
        className,
      )}
    >
      {children}
    </div>
  )
}
