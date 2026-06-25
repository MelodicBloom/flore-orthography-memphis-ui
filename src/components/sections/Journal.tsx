import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal } from '../motion/Reveal'
import { journalPosts } from '../../data/journal'

const categories = ['All', 'Branding', 'Inspiration', 'Design']

export function Journal() {
  const [filter, setFilter] = useState('All')

  const filtered =
    filter === 'All' ? journalPosts : journalPosts.filter((p) => p.category === filter)

  return (
    <section id="journal" className="bg-ink text-ivory relative overflow-hidden">
      <div className="section-shell">
        {/* Header */}
        <Reveal className="flex items-end justify-between mb-12">
          <div>
            <h2
              className="font-display text-5xl md:text-6xl font-bold tracking-tightest leading-none"
              style={{ textDecoration: 'underline', textDecorationColor: '#8D7CC3', textUnderlineOffset: '8px' }}
            >
              Journal
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-ivory/60 hover:text-ivory transition-colors group"
          >
            View All Articles
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        {/* Category filter */}
        <Reveal delay={0.08} className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs px-4 py-1.5 rounded-full font-mono transition-all duration-200 ${
                filter === cat
                  ? 'bg-ivory text-ink'
                  : 'bg-ivory/10 text-ivory/60 hover:bg-ivory/20 hover:text-ivory'
              }`}
              aria-pressed={filter === cat}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.08}>
              <motion.article
                className="group cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 26 }}
              >
                {/* Painting thumbnail */}
                <div
                  className="w-full aspect-video rounded-xl mb-5 relative overflow-hidden"
                  style={{
                    background: [
                      'linear-gradient(135deg, #F2D7D9 0%, #C7D8C0 100%)',
                      'linear-gradient(135deg, #8D7CC3 0%, #F2D7D9 100%)',
                      'linear-gradient(135deg, #E9C46A 0%, #C7D8C0 100%)',
                    ][i % 3],
                  }}
                  aria-hidden="true"
                >
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle, rgba(255,255,255,0.6) 1.5px, transparent 1.5px)',
                      backgroundSize: '10px 10px',
                    }}
                  />
                </div>

                <p className="text-xs text-ivory/40 font-mono mb-2">
                  {post.date} &middot; {post.category}
                </p>
                <h3 className="font-display text-xl font-semibold leading-snug mb-3 text-ivory group-hover:text-ochre transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-ivory/60 leading-relaxed mb-4">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-ivory/40 group-hover:text-ochre transition-colors">
                  {post.readTime} read <ArrowRight size={12} />
                </span>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
