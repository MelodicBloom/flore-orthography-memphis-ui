import Reveal from '../motion/Reveal'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@&%$!'

export default function TypographySpecimen() {
  return (
    <section className="bg-deep-green canvas-texture section-shell overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="font-sans text-xs tracking-wide uppercase text-ivory/40 mb-8">Typography</p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mb-16">
            <h2 className="font-display font-bold text-[clamp(5rem,14vw,12rem)] leading-none tracking-editorial text-ivory">
              Typography
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <Reveal delay={0.1}>
            <div>
              <div className="flex items-end gap-6 mb-6">
                <span className="font-display font-bold text-8xl text-ivory leading-none">Aa</span>
                <span className="font-sans text-8xl text-ivory leading-none">Aa</span>
              </div>
              <div className="space-y-1">
                <p className="font-display text-sm text-ivory/60">Playfair Display</p>
                <p className="font-sans text-xs text-ivory/40">Regular / Medium / Bold</p>
                <p className="font-sans text-sm text-ivory/60 mt-3">Inter / Satoshi</p>
                <p className="font-sans text-xs text-ivory/40">Regular / Medium / Bold</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              <p className="font-display text-2xl italic text-ivory mb-4 leading-snug">
                &ldquo;The quick brown fox<br />jumps over the lazy dog.&rdquo;
              </p>
              <p className="font-mono text-xs text-ivory/40 break-all leading-relaxed">
                {alphabet}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="border-t border-ivory/10 pt-10 space-y-4">
            {[
              { label: 'Display', cls: 'font-display font-bold text-5xl tracking-editorial', sample: 'Heading One' },
              { label: 'Heading', cls: 'font-display font-semibold text-3xl tracking-refined', sample: 'Heading Two' },
              { label: 'Subhead', cls: 'font-display text-xl', sample: 'Heading Three' },
              { label: 'Body', cls: 'font-sans text-base', sample: 'Body text for longer reading' },
              { label: 'Small', cls: 'font-sans text-sm', sample: 'Small text for captions' },
              { label: 'Mono', cls: 'font-mono text-xs tracking-wide', sample: 'color-ink: #0E0F14' },
            ].map((t) => (
              <div key={t.label} className="flex items-baseline gap-6">
                <span className="font-sans text-xs text-ivory/30 w-16 shrink-0 uppercase tracking-wide">{t.label}</span>
                <span className={`${t.cls} text-ivory`}>{t.sample}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
