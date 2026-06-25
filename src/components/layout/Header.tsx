import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navItems } from '../../data/navigation'
import { cn } from '../../lib/utils'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems.map((n) => n.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-ivory/95 backdrop-blur-md border-b border-ink/8 shadow-soft' : 'bg-transparent',
      )}
    >
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 h-16 md:h-18">
        {/* Logo */}
        <a
          href="#home"
          className="font-display text-xl font-bold tracking-tightest text-ink hover:text-deep-green transition-colors"
          aria-label="FLORÉ — home"
        >
          FLORÉ
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-ochre ml-1 mb-2" aria-hidden="true" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-all duration-200 relative',
                active === item.href.replace('#', '')
                  ? 'text-ink'
                  : 'text-charcoal/60 hover:text-ink',
              )}
            >
              {item.label}
              {active === item.href.replace('#', '') && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-ochre"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-xs text-charcoal/40 font-mono">Cart (0)</span>
          <a
            href="#contact"
            className="text-sm font-medium text-ink border border-ink/20 rounded-full px-4 py-1.5 hover:bg-ink hover:text-ivory transition-all duration-200"
          >
            Contact
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-ink/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden bg-ivory/98 backdrop-blur-md border-t border-ink/8 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-6" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-lg font-display font-medium text-ink hover:text-deep-green transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
