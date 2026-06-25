import { useState } from 'react'
import Reveal from '../motion/Reveal'
import Button from '../ui/Button'
import PaintingPanel from '../ui/PaintingPanel'
import { journalPosts } from '../../data/journal'
import { motion, AnimatePresence } from 'framer-motion'

const categories = ['All', 'Branding', 'Inspiration', 'Design']

export default function Journal() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? journalPosts
    : journalPosts.filter((p) => p.category === activeCategory)

  return (
    <section id="journal" className="bg-ink canvas-texture section-shell relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl tracking-editorial text-ivory brush-underline">
                Journal
              </h2>
              <p className="font-sans text-sm text-ivory/50 mt-3 max-w-md">
                Notes on color, texture, story, and form.
              </p>
            </div>
            <div className="flex items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-sans text-xs px-3 py-1.5 rounded-sm border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ivory ${
                    activeCategory === cat
                      ? 'bg-ivory text-ink border-ivory'
                      : 'text-ivory/60 border-ivory/20 hover:border-ivory/50 hover:text-ivory'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filtered.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.32, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="group cursor-pointer bg-ivory/5 border border-ivory/10 rounded-sm overflow-hidden hover:bg-ivory/10 transition-colors">
                  <PaintingPanel
                    tone={post.tone}
                    showSheen
                    aspectRatio="aspect-[3/2]"
                    className="w-full"
                  />
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-sans text-xs text-ivory/40">{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-ivory/20" />
                      <span className="font-sans text-xs text-ivory/40">{post.category}</span>
                    </div>
                    <h3 className="font-display text-lg text-ivory group-hover:text-blush transition-colors mb-2">
                      {post.title}
                    </h3>
                    <p className="font-sans text-sm text-ivory/55 leading-relaxed">{post.excerpt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-10 text-center">
            <Button variant="ghost" withArrow className="border-ivory/30 text-ivory hover:bg-ivory/10">View All Articles</Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
