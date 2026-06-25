import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { PaintingPanel } from '../ui/PaintingPanel'
import { MemphisDecor } from '../ui/MemphisDecor'
import { Reveal } from '../motion/Reveal'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-ivory pt-16"
    >
      {/* Background canvas texture blobs */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] opacity-20 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, #F2D7D9 0%, #C7D8C0 50%, transparent 80%)',
          borderRadius: '60% 40% 55% 45% / 50% 65% 35% 50%',
        }}
        aria-hidden="true"
      />

      <div className="section-shell grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center w-full">
        {/* Left — text */}
        <div className="relative z-10 max-w-xl">
          {/* Memphis cluster top-left */}
          <div className="mb-8">
            <MemphisDecor variant="squiggle" color="#E9C46A" opacity={0.5} size="md" />
          </div>

          <Reveal delay={0.05}>
            <p className="text-xs uppercase tracking-widest text-charcoal/50 font-mono mb-4">
              Design System &middot; 2024
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <h1 className="heading-display text-ink mb-6">
              Artful
              <br />
              <em className="not-italic text-deep-green">by Nature.</em>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="body-refined max-w-sm mb-10">
              We design thoughtful brand systems and digital experiences inspired by nature, art, and
              meaningful stories.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" withArrow className="group">
                View Our Work
              </Button>
              <Button variant="secondary">Learn More</Button>
            </div>
          </Reveal>

          {/* Scroll cue */}
          <Reveal delay={0.5}>
            <div className="mt-16 flex items-center gap-3 text-xs text-charcoal/40 font-mono">
              <motion.div
                className="w-px h-10 bg-ink/20"
                animate={{ scaleY: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              Scroll
            </div>
          </Reveal>
        </div>

        {/* Right — painting panel */}
        <div className="relative lg:h-[600px]">
          {/* Memphis dots cluster */}
          <div className="absolute -top-4 -right-4 z-10" aria-hidden="true">
            <MemphisDecor variant="dots" color="#0E0F14" opacity={0.18} size="md" />
          </div>

          {/* Offset background chip */}
          <div
            className="absolute top-8 left-8 right-0 bottom-0 rounded-2xl bg-sage/20"
            aria-hidden="true"
          />

          <motion.div
            className="relative h-full min-h-[460px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <PaintingPanel
              tone="blush"
              showMemphis
              showSheen
              className="w-full h-full min-h-[460px]"
            >
              {/* Floral abstract composition — CSS-generated */}
              <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                {/* Large bloom */}
                <div
                  className="absolute w-72 h-72 opacity-40"
                  style={{
                    background:
                      'radial-gradient(ellipse 60% 70% at 55% 45%, #F7F3EE 0%, #E8C4C8 35%, #D4A0A6 65%, transparent 100%)',
                    borderRadius: '45% 55% 60% 40% / 40% 50% 50% 60%',
                    top: '10%',
                    left: '20%',
                  }}
                />
                {/* Leaf shape */}
                <div
                  className="absolute w-32 h-48 opacity-50"
                  style={{
                    background:
                      'linear-gradient(160deg, #123B2D 0%, #2D6B4F 40%, #7FA882 100%)',
                    borderRadius: '50% 5% 50% 5% / 50% 5% 50% 5%',
                    top: '25%',
                    right: '18%',
                    transform: 'rotate(-25deg)',
                  }}
                />
                {/* Second bloom */}
                <div
                  className="absolute w-40 h-40 opacity-35"
                  style={{
                    background:
                      'radial-gradient(ellipse, #8D7CC3 0%, #B8ADE0 50%, transparent 80%)',
                    borderRadius: '55% 45% 40% 60% / 50% 60% 40% 50%',
                    bottom: '15%',
                    left: '30%',
                  }}
                />
                {/* Ochre accent brush */}
                <div
                  className="absolute w-24 h-8 opacity-60"
                  style={{
                    background: 'linear-gradient(90deg, #E9C46A, #D4A84B)',
                    borderRadius: '40% 60% 60% 40% / 60% 40% 60% 40%',
                    bottom: '28%',
                    right: '22%',
                    transform: 'rotate(-12deg)',
                  }}
                />
              </div>
            </PaintingPanel>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
