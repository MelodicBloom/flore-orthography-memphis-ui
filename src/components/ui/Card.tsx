import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  hoverable?: boolean
  tone?: 'ivory' | 'blush' | 'sage' | 'lavender' | 'ochre' | 'ink'
}

const toneBg: Record<string, string> = {
  ivory: 'bg-ivory',
  blush: 'bg-blush/40',
  sage: 'bg-sage/40',
  lavender: 'bg-lavender/20',
  ochre: 'bg-ochre/20',
  ink: 'bg-ink text-ivory',
}

export default function Card({
  children,
  className = '',
  hoverable = true,
  tone = 'ivory',
}: CardProps) {
  return (
    <motion.div
      whileHover={hoverable ? { y: -6, boxShadow: '0 30px 90px rgba(14,15,20,0.18)' } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 26 }}
      className={`${toneBg[tone]} rounded-sm shadow-card overflow-hidden canvas-texture ${className}`}
    >
      {children}
    </motion.div>
  )
}
