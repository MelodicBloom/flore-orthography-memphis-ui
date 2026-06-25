import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { PaintingPanel } from '../ui/PaintingPanel'
import { MemphisDecor } from '../ui/MemphisDecor'
import { Reveal } from '../motion/Reveal'
import { projects } from '../../data/projects'

export function SelectedWork() {
  return (
    <section id="work" className="bg-ivory relative overflow-hidden">
      <div className="section-shell">
        {/* Header */}
        <Reveal className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-charcoal/40 font-mono mb-3">
              Portfolio
            </p>
            <h2 className="heading-editorial text-ink">Selected Work</h2>
          </div>
          <div className="flex items-center gap-2">
            <MemphisDecor variant="dots" color="#E9C46A" opacity={0.6} size="sm" />
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm text-charcoal/60 hover:text-ink transition-colors group"
            >
              View All Work
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </Reveal>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.06}>
              <motion.article
                className="group cursor-pointer"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 26 }}
                aria-label={`${project.title} — ${project.category}`}
              >
                <PaintingPanel
                  tone={project.tone}
                  showMemphis
                  showSheen
                  className="w-full aspect-[4/3] mb-4"
                >
                  {/* Floral abstract art per card */}
                  <div className="absolute inset-0" aria-hidden="true">
                    <div
                      className="absolute opacity-30"
                      style={{
                        width: [160, 120, 140, 130, 150, 110][i % 6],
                        height: [160, 140, 120, 150, 130, 160][i % 6],
                        background: `radial-gradient(ellipse, #F7F3EE 0%, transparent 70%)`,
                        borderRadius: '45% 55% 60% 40% / 40% 50% 50% 60%',
                        top: '15%',
                        left: '20%',
                      }}
                    />
                  </div>
                  {/* Arrow button */}
                  <div className="absolute bottom-4 right-4">
                    <div className="w-8 h-8 rounded-full bg-ivory/80 flex items-center justify-center transition-all duration-200 group-hover:bg-ivory group-hover:scale-110 shadow-soft">
                      <ArrowRight size={14} className="text-ink transition-transform duration-200 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </PaintingPanel>
                <div className="px-1">
                  <h3 className="font-display text-lg font-semibold text-ink tracking-tight mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-charcoal/50 font-mono">{project.category}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
