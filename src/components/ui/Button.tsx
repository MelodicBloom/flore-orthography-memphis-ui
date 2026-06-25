import { ButtonHTMLAttributes, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'text'
export type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  withArrow?: boolean
  children: ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-ink text-ivory hover:bg-charcoal border border-ink',
  secondary: 'bg-transparent text-ink border border-ink hover:bg-ink hover:text-ivory',
  ghost: 'bg-transparent text-ink border border-ink/20 hover:border-ink/60',
  text: 'bg-transparent text-ink underline-offset-4 hover:underline p-0',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'text-xs px-4 py-2',
  md: 'text-sm px-6 py-3',
  lg: 'text-base px-8 py-4',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  withArrow = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={[
        'inline-flex items-center gap-2 font-sans tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink',
        variant !== 'text' ? 'rounded-sm' : '',
        variantClasses[variant],
        sizeClasses[variant === 'text' ? 'md' : size],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
      {withArrow && (
        <motion.span
          className="inline-flex"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.18 }}
        >
          <ArrowRight size={14} strokeWidth={1.5} />
        </motion.span>
      )}
    </motion.button>
  )
}
