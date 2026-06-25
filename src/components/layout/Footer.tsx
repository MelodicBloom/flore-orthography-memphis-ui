import { ArrowRight } from 'lucide-react'
import MemphisDecor from '../ui/MemphisDecor'

export default function Footer() {
  return (
    <footer id="contact" className="bg-deep-green text-ivory canvas-texture relative overflow-hidden">
      {/* Decorative cream brush stroke top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ivory/20 to-transparent" />
      <MemphisDecor variant="dots" color="#F7F3EE" size={100} className="absolute top-8 right-12 opacity-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        {/* Newsletter */}
        <div id="newsletter" className="mb-16 pb-16 border-b border-ivory/10">
          <p className="font-sans text-xs tracking-wide uppercase text-ivory/40 mb-3">Stay Inspired</p>
          <h3 className="font-display text-2xl md:text-3xl text-ivory mb-2">
            Notes on color, texture,{' '}
            <span className="italic">and form.</span>
          </h3>
          <p className="font-sans text-sm text-ivory/60 mb-6">Subscribe to our newsletter for thoughts, updates, and inspiration.</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md"
          >
            <input
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              className="flex-1 bg-ivory/10 border border-ivory/20 text-ivory placeholder-ivory/40 text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-ivory/60 transition-colors"
            />
            <button
              type="submit"
              className="bg-ivory text-deep-green px-5 py-3 text-sm font-sans rounded-sm hover:bg-blush transition-colors flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ivory"
            >
              Subscribe <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        </div>

        {/* Footer columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {[
            { heading: 'Studio', links: ['About', 'Approach', 'Services', 'Careers'] },
            { heading: 'Work', links: ['Portfolio', 'Case Studies', 'Process'] },
            { heading: 'Journal', links: ['Articles', 'Inspiration', 'News'] },
            { heading: 'Connect', links: ['hello@flore.studio', '+1 (310) 123-4567', 'Los Angeles, CA'] },
          ].map((col) => (
            <div key={col.heading}>
              <p className="font-sans text-xs tracking-wide uppercase text-ivory/40 mb-4">{col.heading}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-sans text-sm text-ivory/70 hover:text-ivory transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ivory"
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
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-ivory/10">
          <span className="font-display text-lg tracking-editorial">FLORÉ</span>
          <p className="font-sans text-xs text-ivory/40">&copy; 2024 Floré Studio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {['Instagram', 'Pinterest', 'Behance', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className="font-sans text-xs text-ivory/50 hover:text-ivory transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ivory"
                aria-label={social}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
