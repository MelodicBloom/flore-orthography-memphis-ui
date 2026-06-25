import { ArrowRight } from 'lucide-react'
import { PaintingPanel } from '../ui/PaintingPanel'
import { MemphisDecor } from '../ui/MemphisDecor'
import { Reveal } from '../motion/Reveal'

export function About() {
  return (
    <section id="about" className="bg-lavender/10 relative overflow-hidden">
      <div className="absolute top-8 right-8 opacity-30" aria-hidden="true">
        <MemphisDecor variant="dots" color="#8D7CC3" size="lg" opacity={1} />
      </div>

      <div className="section-shell grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-lavender/70 font-mono mb-4">About Us</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-editorial text-ink mb-6">
              We blend art and strategy to build brands that bloom.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="body-refined mb-4">
              Rooted in creativity and guided by purpose, FLORÉ crafts visual systems that feel
              tactile, intelligent, and alive.
            </p>
            <p className="body-refined mb-8">
              We believe a brand can be as considered as a painting — every detail intentional,
              every surface layered with meaning.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-deep-green transition-colors group"
            >
              Our Studio
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
          </Reveal>
        </div>

        {/* Painting panel with arch overlay */}
        <Reveal direction="left" delay={0.1}>
          <div className="relative">
            {/* Arch shape behind panel */}
            <div
              className="absolute -top-4 -left-4 w-full h-full bg-blush/30 rounded-t-[50%] rounded-b-2xl"
              aria-hidden="true"
            />
            <PaintingPanel
              tone="lavender"
              showMemphis
              showSheen
              className="relative w-full aspect-[4/5]"
            >
              {/* Botanical form inside */}
              <div className="absolute inset-0" aria-hidden="true">
                <div
                  className="absolute w-40 h-64 opacity-50"
                  style={{
                    background: 'linear-gradient(160deg, #F7F3EE 0%, #EFE5DA 60%, transparent 100%)',
                    borderRadius: '50% 5% 50% 5% / 50% 5% 50% 5%',
                    top: '10%',
                    left: '30%',
                    transform: 'rotate(15deg)',
                  }}
                />
                <div
                  className="absolute w-48 h-48 opacity-30"
                  style={{
                    background: 'radial-gradient(ellipse, #E9C46A 0%, transparent 70%)',
                    borderRadius: '60% 40% 50% 50%',
                    bottom: '20%',
                    left: '15%',
                  }}
                />
              </div>
            </PaintingPanel>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
