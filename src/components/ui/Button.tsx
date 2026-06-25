import { forwardRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../lib/utils'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'text'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  withArrow?: boolean
  asChild?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-ink text-ivory border border-ink hover:bg-deep-green hover:border-deep-green active:scale-[0.98]',
  secondary:
    'bg-transparent text-ink border border-ink hover:bg-ink hover:text-ivory active:scale-[0.98]',
  ghost:
    'bg-ivory/60 text-ink border border-ink/20 hover:bg-ivory hover:border-ink/40 active:scale-[0.98]',
  text: 'bg-transparent text-ink border-0 underline-offset-4 hover:underline p-0',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-8 py-4 text-base gap-2.5',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', withArrow = false, className, children, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center font-sans font-medium tracking-wide',
        'rounded-full transition-all duration-200 cursor-pointer select-none',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lavender',
        'disabled:opacity-40 disabled:pointer-events-none',
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
      {withArrow && (
        <ArrowRight
          className="transition-transform duration-200 group-hover:translate-x-1"
          size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16}
        />
      )}
    </button>
  )
})
