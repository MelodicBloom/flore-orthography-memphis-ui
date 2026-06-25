import Reveal from '../motion/Reveal'
import Button from '../ui/Button'
import PaintingPanel from '../ui/PaintingPanel'
import MemphisDecor from '../ui/MemphisDecor'

export default function About() {
  return (
    <section id="about" className="bg-lavender/15 canvas-texture section-shell relative overflow-hidden">
      <MemphisDecor variant="dots" color="#8D7CC3" size={100} className="absolute top-8 right-12 opacity-30" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: Text */}
          <Reveal direction="left">
            <div>
              <p className="font-sans text-xs tracking-wide uppercase text-lavender/80 mb-4">About Us</p>
              <h2 className="font-display text-4xl md:text-5xl leading-tight tracking-editorial text-ink mb-6">
                We blend art and strategy to build brands that bloom.
              </h2>
              <p className="font-sans text-base text-ink/65 leading-relaxed mb-4">
                Rooted in creativity and guided by purpose, FLORÉ creates visual systems that feel tactile, intelligent, and alive.
              </p>
              <p className="font-sans text-base text-ink/65 leading-relaxed mb-8">
                Every project begins with careful listening — and ends with a brand language that is entirely its own. We believe great design is felt before it is understood.
              </p>
              <Button variant="secondary" withArrow>Our Studio</Button>
            </div>
          </Reveal>

          {/* Right: Arch-cropped painting panel */}
          <Reveal direction="right" delay={0.15}>
            <div className="relative">
              {/* Arch-style crop using clip-path */}
              <div
                className="overflow-hidden shadow-lifted"
                style={{ borderRadius: '50% 50% 8px 8px / 40% 40% 8px 8px' }}
              >
                <PaintingPanel
                  tone="lavender"
                  showMemphis
                  showSheen
                  aspectRatio="aspect-[3/4]"
                  className="w-full"
                />
              </div>
              {/* Floating ochre accent */}
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-ochre impasto-blob opacity-70"
                aria-hidden="true"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
