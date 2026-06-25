import { useRef, useEffect, useState, ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { motionTokens } from '../../data/motion'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export default function Reveal({
  children,
  delay = 0,
  className,
  direction = 'up',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const offsets: Record<string, { x?: number; y?: number }> = {
    up: { y: 24 },
    down: { y: -24 },
    left: { x: 24 },
    right: { x: -24 },
    none: {},
  }

  const initial = shouldReduceMotion
    ? { opacity: 0 }
    : { opacity: 0, ...offsets[direction] }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={visible ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{
        duration: motionTokens.duration.reveal,
        delay,
        ease: motionTokens.ease.softOut,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
