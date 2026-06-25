import { Reveal } from '../motion/Reveal'
import { MemphisDecor } from '../ui/MemphisDecor'

const alphabet = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'
const numbers = '0123456789!@#$%^&*()'

export function TypographySpecimen() {
  return (
    <section id="typography" className="bg-deep-green text-ivory relative overflow-hidden">
      {/* Memphis squiggle accent */}
      <div className="absolute bottom-12 right-12 opacity-20" aria-hidden="true">
        <MemphisDecor variant="squiggle" color="#E9C46A" size="lg" opacity={1} />
      </div>

      <div className="section-shell">
        <Reveal className="mb-16">
          <p className="text-xs uppercase tracking-widest text-ivory/40 font-mono mb-4">Typography</p>
          <div className="flex flex-col md:flex-row items-start md:items-end gap-8">
            <h2
              className="font-display text-7xl md:text-9xl font-bold tracking-tightest leading-none"
              style={{ textDecoration: 'underline', textDecorationColor: '#E9C46A', textUnderlineOffset: '12px' }}
            >
              Aa
            </h2>
            <div className="font-sans text-7xl md:text-9xl font-bold leading-none text-ivory/60">
              Aa
            </div>
          </div>
        </Reveal>

        {/* Type pairs */}
        <Reveal delay={0.08} className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-2">
            <p className="text-xs font-mono text-ivory/40 uppercase tracking-wider mb-3">Display Serif</p>
            {[
              { size: 'text-4xl', label: 'Heading 1', weight: 'font-bold' },
              { size: 'text-3xl', label: 'Heading 2', weight: 'font-semibold' },
              { size: 'text-xl', label: 'Heading 3', weight: 'font-medium' },
            ].map(({ size, label, weight }) => (
              <div key={label}>
                <p className={`font-display ${size} ${weight} leading-tight`}>{label}</p>
                <p className="text-xs font-mono text-ivory/30">
                  Playfair Display {size.replace('text-', '')} / {weight}
                </p>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <p className="text-xs font-mono text-ivory/40 uppercase tracking-wider mb-3">Body Sans</p>
            {[
              { size: 'text-base', label: 'Body Text', style: '' },
              { size: 'text-sm', label: 'Small Text', style: '' },
              { size: 'text-xs', label: 'Caption / Mono', style: 'font-mono' },
            ].map(({ size, label, style }) => (
              <div key={label}>
                <p className={`font-sans ${size} ${style} leading-relaxed text-ivory/80`}>
                  {label}
                </p>
                <p className="text-xs font-mono text-ivory/30">
                  Inter {size.replace('text-', '')} / regular
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* The quick brown fox */}
        <Reveal delay={0.12} className="mb-12">
          <div className="divider-thin border-ivory/10 mb-6" />
          <p className="font-display text-2xl md:text-4xl leading-snug text-ivory/80">
            The quick brown fox jumps over the lazy dog.
          </p>
        </Reveal>

        {/* Alphabet */}
        <Reveal delay={0.16}>
          <p className="font-mono text-xs text-ivory/30 tracking-widest break-all leading-loose">
            {alphabet}
          </p>
          <p className="font-mono text-xs text-ivory/20 tracking-widest mt-2">
            {numbers}
          </p>
        </Reveal>

        {/* Font pairing note */}
        <Reveal delay={0.2} className="mt-12">
          <div className="inline-flex gap-8 border border-ivory/10 rounded-xl px-6 py-4">
            <div>
              <p className="text-xs font-mono text-ivory/40 mb-1">Primary</p>
              <p className="font-display text-sm font-semibold">Playfair Display</p>
            </div>
            <div className="w-px bg-ivory/10" />
            <div>
              <p className="text-xs font-mono text-ivory/40 mb-1">Secondary</p>
              <p className="font-sans text-sm font-medium text-ivory/80">Inter</p>
            </div>
            <div className="w-px bg-ivory/10" />
            <div>
              <p className="text-xs font-mono text-ivory/40 mb-1">Mono</p>
              <p className="font-mono text-sm text-ivory/60">IBM Plex Mono</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
