import { motion } from 'framer-motion'
import Button from '../ui/Button'
import PaintingPanel from '../ui/PaintingPanel'
import MemphisDecor from '../ui/MemphisDecor'
import { motionTokens } from '../../data/motion'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-ivory canvas-texture relative overflow-hidden flex items-center pt-16">
      {/* Background Memphis layer */}
      <MemphisDecor variant="dots" color="#0E0F14" size={160} className="absolute top-24 left-8 opacity-20" />
      <MemphisDecor variant="squiggle" color="#8D7CC3" size={200} className="absolute bottom-32 left-16 opacity-30" />
      <MemphisDecor variant="chips" color="#E9C46A" size={180} className="absolute top-40 right-8 opacity-25 md:hidden" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full py-20 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-center min-h-[calc(100vh-4rem)]">
          {/* Left: Text */}
          <div className="md:col-span-5 lg:col-span-5 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionTokens.duration.base, delay: 0.1, ease: motionTokens.ease.softOut }}
              className="font-sans text-xs tracking-wide uppercase text-ink/50 mb-6"
            >
              Orthography × Memphis × Floral
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionTokens.duration.reveal, delay: 0.2, ease: motionTokens.ease.softOut }}
              className="font-display text-6xl md:text-7xl lg:text-8xl leading-none tracking-editorial text-ink mb-6"
            >
              Artful
              <br />
              <span className="italic font-normal">by</span>
              <br />
              Nature.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionTokens.duration.base, delay: 0.4, ease: motionTokens.ease.softOut }}
              className="font-sans text-base text-ink/65 leading-relaxed mb-8 max-w-sm"
            >
              We design thoughtful brand systems and digital experiences inspired by nature, painting, and meaningful stories.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionTokens.duration.base, delay: 0.55, ease: motionTokens.ease.softOut }}
              className="flex flex-wrap gap-3"
            >
              <Button variant="primary" size="md" withArrow>View Our Work</Button>
              <Button variant="secondary" size="md">Learn More</Button>
            </motion.div>
          </div>

          {/* Right: Painting panel + Memphis */}
          <div className="md:col-span-7 lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: motionTokens.duration.reveal, delay: 0.3, ease: motionTokens.ease.softOut }}
              className="relative"
            >
              <PaintingPanel
                tone="blush"
                showMemphis
                showSheen
                aspectRatio="aspect-[5/6] md:aspect-[4/5]"
                className="w-full"
              />
              {/* Floating Memphis chips */}
              <MemphisDecor
                variant="dots"
                color="#0E0F14"
                size={100}
                className="absolute -top-6 -left-6 opacity-30 hidden md:block"
              />
              <MemphisDecor
                variant="arch"
                color="#8D7CC3"
                size={80}
                className="absolute -bottom-4 -right-4 opacity-40"
              />
              {/* Offset paper chip */}
              <div className="absolute -bottom-6 left-8 bg-ivory border border-ink/8 shadow-card px-4 py-3 rounded-sm">
                <p className="font-display italic text-sm text-ink/70">Artful systems for brands that bloom.</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="font-sans text-xs text-ink/30 tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-px h-8 bg-ink/20"
            animate={{ scaleY: [1, 0.4, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
