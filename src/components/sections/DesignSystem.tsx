import { Reveal } from '../motion/Reveal'
import { ColorSwatch } from '../ui/ColorSwatch'
import { Button } from '../ui/Button'
import { MemphisDecor } from '../ui/MemphisDecor'
import { colorTokens, designTokenTable } from '../../data/tokens'
import { Search, Heart, User, ShoppingBag, Menu } from 'lucide-react'

const paletteEntries: Array<{ name: string; hex: string }> = [
  { name: 'Ink', hex: colorTokens.ink },
  { name: 'Ivory', hex: colorTokens.ivory },
  { name: 'Blush', hex: colorTokens.blush },
  { name: 'Sage', hex: colorTokens.sage },
  { name: 'Lavender', hex: colorTokens.lavender },
  { name: 'Ochre', hex: colorTokens.ochre },
  { name: 'Deep Green', hex: colorTokens.deepGreen },
  { name: 'Charcoal', hex: colorTokens.charcoal },
]

export function DesignSystem() {
  return (
    <section id="system" className="bg-warm-paper relative overflow-hidden">
      <div className="absolute top-12 right-12 opacity-20" aria-hidden="true">
        <MemphisDecor variant="cluster" color="#0E0F14" size="lg" opacity={1} />
      </div>

      <div className="section-shell">
        {/* Header */}
        <Reveal className="mb-16">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-charcoal/40 font-mono mb-3">
                Design System
              </p>
              <h2 className="heading-editorial text-ink">
                A soft system
                <br />
                with sharp logic.
              </h2>
            </div>
            <MemphisDecor variant="chips" opacity={0.8} />
          </div>
        </Reveal>

        {/* 01 Colors */}
        <Reveal className="mb-16">
          <div className="divider-thin mb-8" />
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-xs text-charcoal/40">01</span>
            <h3 className="text-sm uppercase tracking-widest text-charcoal/60">Colors</h3>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
            {paletteEntries.map((s) => (
              <ColorSwatch key={s.hex} name={s.name} hex={s.hex} />
            ))}
          </div>
        </Reveal>

        {/* 02 Typography */}
        <Reveal className="mb-16">
          <div className="divider-thin mb-8" />
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-xs text-charcoal/40">02</span>
            <h3 className="text-sm uppercase tracking-widest text-charcoal/60">Typography</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="font-display text-8xl font-bold tracking-tightest leading-none mb-1">Aa</p>
              <p className="text-sm text-charcoal/60 font-mono">Playfair Display</p>
              <p className="text-xs text-charcoal/40">Regular / Medium / Bold</p>
            </div>
            <div>
              <p className="font-sans text-8xl font-bold leading-none mb-1">Aa</p>
              <p className="text-sm text-charcoal/60 font-mono">Inter</p>
              <p className="text-xs text-charcoal/40">Regular / Medium / Bold</p>
            </div>
          </div>
          <div className="mt-8 space-y-2">
            {[
              { label: 'H1', classes: 'font-display text-5xl font-bold tracking-tightest', sample: 'Playfair Display 64 / 1.1' },
              { label: 'H2', classes: 'font-display text-4xl font-semibold tracking-tighter', sample: 'Playfair Display 48 / 1.2' },
              { label: 'H3', classes: 'font-display text-2xl font-medium tracking-tight', sample: 'Playfair Display 32 / 1.25' },
              { label: 'Body', classes: 'font-sans text-base', sample: 'Inter Regular 16 / 1.6' },
              { label: 'Small', classes: 'font-sans text-sm', sample: 'Inter Regular 14 / 1.5' },
              { label: 'Caption', classes: 'font-mono text-xs', sample: 'IBM Plex Mono 12 / 1.5' },
            ].map(({ label, classes, sample }) => (
              <div key={label} className="flex items-baseline gap-6">
                <span className="w-16 text-xs font-mono text-charcoal/40 shrink-0">{label}</span>
                <span className={classes}>{sample}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* 03 Elements */}
        <Reveal className="mb-16">
          <div className="divider-thin mb-8" />
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-xs text-charcoal/40">03</span>
            <h3 className="text-sm uppercase tracking-widest text-charcoal/60">Elements</h3>
          </div>
          <div className="flex flex-wrap items-center gap-8">
            <MemphisDecor variant="dots" color="#0E0F14" opacity={0.3} size="sm" />
            <div className="w-12 h-6 rounded-full bg-blush opacity-60" />
            <MemphisDecor variant="arch" color="#8D7CC3" opacity={0.5} size="sm" />
            <MemphisDecor variant="squiggle" color="#0E0F14" opacity={0.3} size="sm" />
            <div className="w-16 h-10 rounded-lg bg-sage opacity-50" />
            <div className="w-10 h-10 rounded-full bg-ochre/60" />
            <div className="w-14 h-6 rounded-md bg-deep-green/30" />
          </div>
        </Reveal>

        {/* 04 Buttons */}
        <Reveal className="mb-16">
          <div className="divider-thin mb-8" />
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-xs text-charcoal/40">04</span>
            <h3 className="text-sm uppercase tracking-widest text-charcoal/60">Buttons</h3>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" withArrow className="group">Primary Button</Button>
            <Button variant="secondary" withArrow>Secondary Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="text">Text Button</Button>
          </div>
        </Reveal>

        {/* 05 Icons */}
        <Reveal className="mb-16">
          <div className="divider-thin mb-8" />
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-xs text-charcoal/40">05</span>
            <h3 className="text-sm uppercase tracking-widest text-charcoal/60">Icons</h3>
          </div>
          <div className="flex items-center gap-6">
            {[Search, Heart, User, ShoppingBag, Menu].map((Icon, i) => (
              <Icon
                key={i}
                size={22}
                className="text-charcoal/60 hover:text-ink transition-colors cursor-pointer"
              />
            ))}
          </div>
        </Reveal>

        {/* Token table */}
        <Reveal>
          <div className="divider-thin mb-8" />
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-xs text-charcoal/40">06</span>
            <h3 className="text-sm uppercase tracking-widest text-charcoal/60">Design Tokens</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" aria-label="Design token table">
              <thead>
                <tr className="border-b border-ink/10">
                  <th className="text-left py-2 pr-6 font-mono text-xs text-charcoal/40 uppercase tracking-wider">Token</th>
                  <th className="text-left py-2 pr-6 font-mono text-xs text-charcoal/40 uppercase tracking-wider">Value</th>
                  <th className="text-left py-2 font-mono text-xs text-charcoal/40 uppercase tracking-wider">Usage</th>
                </tr>
              </thead>
              <tbody>
                {designTokenTable.map((row) => (
                  <tr key={row.token} className="border-b border-ink/5 hover:bg-ink/2 transition-colors">
                    <td className="py-3 pr-6 font-mono text-xs text-charcoal">{row.token}</td>
                    <td className="py-3 pr-6">
                      <span className="inline-flex items-center gap-2">
                        <span
                          className="w-3 h-3 rounded-sm border border-ink/10 shrink-0"
                          style={{ backgroundColor: row.value }}
                        />
                        <span className="font-mono text-xs text-charcoal/70">{row.value}</span>
                      </span>
                    </td>
                    <td className="py-3 text-charcoal/60 text-xs">{row.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
