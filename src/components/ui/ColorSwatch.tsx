import { cn } from '../../lib/utils'

export interface ColorSwatchProps {
  name: string
  hex: string
  className?: string
}

export function ColorSwatch({ name, hex, className }: ColorSwatchProps) {
  return (
    <div className={cn('flex flex-col gap-2 group', className)}>
      <div
        className="w-full aspect-square rounded-xl border border-ink/8 transition-transform duration-200 group-hover:scale-105 shadow-soft"
        style={{ backgroundColor: hex }}
        role="img"
        aria-label={`${name} colour swatch`}
      />
      <div className="space-y-0.5">
        <p className="text-xs font-medium text-ink tracking-wide">{name}</p>
        <p className="text-xs font-mono text-charcoal/50 uppercase">{hex}</p>
      </div>
    </div>
  )
}
