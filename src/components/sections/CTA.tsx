import { Button } from '../ui/Button'
import { PaintingPanel } from '../ui/PaintingPanel'
import { MemphisDecor } from '../ui/MemphisDecor'
import { Reveal } from '../motion/Reveal'

export function CTA() {
  return (
    <section className="bg-ivory relative overflow-hidden">
      <div className="section-shell">
        <div className="relative rounded-3xl overflow-hidden">
          <PaintingPanel
            tone="sage"
            showMemphis={false}
            showSheen
            className="w-full min-h-[480px] flex items-center justify-center"
          >
            {/* Floral blooms behind text */}
            <div className="absolute inset-0" aria-hidden="true">
              <div
                className="absolute w-80 h-80 opacity-20 blur-2xl"
                style={{
                  background: 'radial-gradient(ellipse, #F7F3EE 0%, #C7D8C0 50%, transparent 80%)',
                  borderRadius: '60% 40% 55% 45% / 50% 65% 35% 50%',
                  top: '-10%',
                  right: '-5%',
                }}
              />
              <div
                className="absolute w-48 h-48 opacity-25 blur-xl"
                style={{
                  background: 'radial-gradient(ellipse, #E9C46A 0%, transparent 70%)',
                  borderRadius: '50% 50% 40% 60%',
                  bottom: '10%',
                  left: '5%',
                }}
              />
            </div>

            {/* Memphis decorations */}
            <div className="absolute top-8 left-8" aria-hidden="true">
              <MemphisDecor variant="dots" color="#123B2D" opacity={0.2} size="sm" />
            </div>
            <div className="absolute bottom-8 right-12" aria-hidden="true">
              <MemphisDecor variant="arch" color="#F7F3EE" opacity={0.3} size="md" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-8 max-w-2xl mx-auto">
              <Reveal>
                <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tightest leading-none text-ink mb-6">
                  Let’s create something
                  <br />
                  <em className="not-italic text-deep-green">beautiful.</em>
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="body-refined mb-8 text-charcoal/70">
                  Whether you’re building a new brand or refining an existing one, we’d love to hear
                  your story.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <Button variant="primary" size="lg" withArrow className="group">
                  Get In Touch
                </Button>
              </Reveal>
            </div>
          </PaintingPanel>
        </div>
      </div>
    </section>
  )
}
