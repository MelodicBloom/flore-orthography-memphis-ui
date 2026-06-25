import Reveal from '../motion/Reveal'
import { ArrowRight } from 'lucide-react'
import PaintingPanel from '../ui/PaintingPanel'
import MemphisDecor from '../ui/MemphisDecor'
import Button from '../ui/Button'
import { projects } from '../../data/projects'
import { motion } from 'framer-motion'

export default function SelectedWork() {
  return (
    <section id="work" className="bg-ivory section-shell">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-number">Selected Work</p>
              <h2 className="font-display text-4xl md:text-5xl tracking-editorial text-ink">
                Built with <span className="italic font-normal">intention.</span>
              </h2>
            </div>
            <Button variant="text" withArrow className="hidden md:inline-flex">View All Work</Button>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.06}>
              <motion.div
                className="group cursor-pointer"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 26 }}
              >
                <div className="relative overflow-hidden rounded-sm shadow-card group-hover:shadow-lifted transition-shadow duration-300">
                  <PaintingPanel
                    tone={project.tone}
                    showMemphis
                    showSheen
                    aspectRatio="aspect-[4/5]"
                    className="w-full group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  {/* Arrow button overlay */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-ivory/90 flex items-center justify-center shadow-soft"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ArrowRight size={14} strokeWidth={1.5} className="text-ink" />
                  </motion.div>
                </div>
                <div className="pt-4">
                  <div className="flex items-center gap-2 mb-1">
                    <MemphisDecor variant="dots" size={16} className="opacity-50" />
                    <span className="font-sans text-xs text-ink/40 uppercase tracking-wide">{project.category}</span>
                  </div>
                  <h3 className="font-display text-xl text-ink group-hover:text-lavender transition-colors">{project.title}</h3>
                  <p className="font-sans text-sm text-ink/55 mt-1 leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <div className="md:hidden mt-8 text-center">
          <Button variant="secondary" withArrow>View All Work</Button>
        </div>
      </div>
    </section>
  )
}
