import { ArrowRight } from 'lucide-react'
import { MemphisDecor } from '../ui/MemphisDecor'
import { Reveal } from '../motion/Reveal'

const footerLinks = {
  Studio: ['About', 'Approach', 'Services', 'Careers'],
  Work: ['Portfolio', 'Case Studies', 'Process'],
  Journal: ['Articles', 'Inspiration', 'News'],
  Connect: ['hello@flore.studio', '+1 (310) 123-4567', 'Los Angeles, CA'],
}

export function Footer() {
  return (
    <footer id="contact" className="bg-deep-green text-ivory relative overflow-hidden">
      {/* Decorative brush stroke top edge */}
      <div
        className="absolute top-0 left-0 right-0 h-1 opacity-30"
        style={{
          background:
            'linear-gradient(90deg, transparent, #C7D8C0 20%, #E9C46A 50%, #C7D8C0 80%, transparent)',
        }}
      />

      {/* Memphis dots background */}
      <div className="absolute top-12 right-16 opacity-10" aria-hidden="true">
        <MemphisDecor variant="dots" color="#F7F3EE" size="lg" opacity={1} />
      </div>

      <div className="section-shell">
        {/* Newsletter */}
        <Reveal className="mb-20">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-widest text-ivory/50 mb-3 font-mono">
              Stay inspired
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">
              Subscribe to our newsletter
              <span className="block text-ivory/60 font-normal text-xl mt-1">
                Thoughts, updates and inspiration.
              </span>
            </h2>
            <form
              className="flex gap-3"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter signup"
            >
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-ivory/10 text-ivory placeholder-ivory/40 border border-ivory/20 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-ochre transition-colors"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="bg-ochre text-ink rounded-full px-6 py-3 text-sm font-medium hover:bg-ivory hover:text-ink transition-all duration-200 flex items-center gap-2"
              >
                Subscribe <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </Reveal>

        {/* Divider */}
        <div className="border-t border-ivory/10 mb-16" />

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="text-xs uppercase tracking-widest text-ivory/40 mb-4 font-mono">
                {section}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-ivory/70 hover:text-ivory transition-colors duration-150"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ivory/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="font-display text-2xl font-bold tracking-tightest">
              FLORÉ
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-ochre ml-1 mb-1" />
            </span>
            <p className="text-xs text-ivory/40 mt-1">
              We blend art and strategy to build brands that bloom.
            </p>
          </div>
          <div className="flex items-center gap-6">
            {['Instagram', 'Pinterest', 'Behance', 'LinkedIn'].map((soc) => (
              <a
                key={soc}
                href="#"
                className="text-xs text-ivory/40 hover:text-ivory/80 transition-colors"
                aria-label={soc}
              >
                {soc}
              </a>
            ))}
          </div>
          <p className="text-xs text-ivory/30">&copy; 2024 FLORÉ Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
