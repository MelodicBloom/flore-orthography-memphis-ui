interface ColorSwatchProps {
  name: string
  hex: string
  size?: 'sm' | 'md' | 'lg'
}

export default function ColorSwatch({ name, hex, size = 'md' }: ColorSwatchProps) {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
  }

  return (
    <div className="flex flex-col items-start gap-2">
      <div
        className={`${sizeClasses[size]} rounded-sm border border-ink/8 shadow-soft`}
        style={{ backgroundColor: hex }}
        role="img"
        aria-label={`${name} color swatch`}
      />
      <div>
        <p className="text-xs font-sans font-medium text-ink">{name}</p>
        <p className="text-xs font-mono text-ink/50 uppercase tracking-wide">{hex}</p>
      </div>
    </div>
  )
}
