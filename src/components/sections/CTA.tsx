import Reveal from '../motion/Reveal'
import Button from '../ui/Button'
import PaintingPanel from '../ui/PaintingPanel'
import MemphisDecor from '../ui/MemphisDecor'

export default function CTA() {
  return (
    <section className="bg-ivory canvas-texture section-shell relative overflow-hidden">
      <MemphisDecor variant="squiggle" color="#E9C46A" size={200} className="absolute bottom-16 right-8 opacity-30" />
      <MemphisDecor variant="arch" color="#8D7CC3" size={120} className="absolute top-12 left-12 opacity-25" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal direction="left">
            <div>
              <h2 className="font-display text-5xl md:text-6xl leading-none tracking-editorial text-ink mb-6">
                Let's create
                <br />
                <span className="italic font-normal">something</span>
                <br />
                beautiful.
              </h2>
              <p className="font-sans text-base text-ink/60 mb-8 max-w-sm">
                We'd love to hear about your project. Let's talk about building a brand that endures.
              </p>
              <Button variant="primary" size="lg" withArrow>Get In Touch</Button>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.15}>
            <div className="relative">
              <PaintingPanel
                tone="sage"
                showMemphis
                showSheen
                aspectRatio="aspect-[4/3]"
                className="w-full"
              />
              <div className="absolute -top-4 -right-4">
                <div className="w-12 h-12 impasto-blob bg-ochre opacity-70" aria-hidden="true" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
