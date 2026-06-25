import Reveal from '../motion/Reveal'
import ColorSwatch from '../ui/ColorSwatch'
import Button from '../ui/Button'
import MemphisDecor from '../ui/MemphisDecor'
import IconRow from '../ui/IconRow'
import TokenTable from '../ui/TokenTable'
import { colorTokens } from '../../data/tokens'

const colorSwatches = [
  { name: 'Ink', hex: colorTokens.ink },
  { name: 'Ivory', hex: colorTokens.ivory },
  { name: 'Blush', hex: colorTokens.blush },
  { name: 'Sage', hex: colorTokens.sage },
  { name: 'Lavender', hex: colorTokens.lavender },
  { name: 'Ochre', hex: colorTokens.ochre },
  { name: 'Deep Green', hex: colorTokens.deepGreen },
  { name: 'Charcoal', hex: colorTokens.charcoal },
]

const designTokenRows = [
  { name: 'color-ink', value: '#0E0F14', usage: 'Primary text, headings' },
  { name: 'color-ivory', value: '#F7F3EE', usage: 'Backgrounds' },
  { name: 'color-blush', value: '#F2D7D9', usage: 'Accents, highlights' },
  { name: 'color-sage', value: '#C7D8C0', usage: 'Accents, backgrounds' },
  { name: 'color-lavender', value: '#8D7CC3', usage: 'Accents, links' },
  { name: 'color-ochre', value: '#E9C46A', usage: 'Accents, CTAs' },
  { name: 'color-deep-green', value: '#123B2D', usage: 'Strong accents, buttons' },
  { name: 'color-charcoal', value: '#222222', usage: 'Secondary text, borders' },
]

export default function DesignSystem() {
  return (
    <section id="system" className="bg-ivory section-shell">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-16">
            <p className="section-number">Design System</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-editorial text-ink mb-4">
              A soft system
              <br />
              <span className="italic font-normal">with sharp logic.</span>
            </h2>
            <p className="font-sans text-base text-ink/60 max-w-lg">
              The FLORÉ system translates painterly warmth into reusable tokens, layout primitives, motion rules, and editorial components.
            </p>
          </div>
        </Reveal>

        {/* 01 Colors */}
        <Reveal delay={0.08}>
          <div className="mb-14">
            <div className="divider" />
            <p className="section-number">01 / Colors</p>
            <div className="flex flex-wrap gap-6 mt-6">
              {colorSwatches.map((s) => (
                <ColorSwatch key={s.name} name={s.name} hex={s.hex} />
              ))}
            </div>
          </div>
        </Reveal>

        {/* 02 Typography */}
        <Reveal delay={0.1}>
          <div className="mb-14">
            <div className="divider" />
            <p className="section-number">02 / Typography</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
              <div>
                <p className="font-display text-7xl font-bold mb-2">Aa</p>
                <p className="font-sans text-sm text-ink/60">Playfair Display</p>
                <p className="font-sans text-xs text-ink/40">Regular / Medium / Bold</p>
              </div>
              <div>
                <p className="font-sans text-7xl mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Aa</p>
                <p className="font-sans text-sm text-ink/60">Inter / Satoshi</p>
                <p className="font-sans text-xs text-ink/40">Regular / Medium / Bold</p>
              </div>
            </div>
            <div className="mt-8 space-y-3">
              {[
                { label: 'H1', size: 'text-5xl', weight: 'font-bold', family: 'font-display', tracking: 'tracking-editorial' },
                { label: 'H2', size: 'text-3xl', weight: 'font-semibold', family: 'font-display', tracking: 'tracking-refined' },
                { label: 'H3', size: 'text-2xl', weight: 'font-medium', family: 'font-display', tracking: '' },
                { label: 'Body', size: 'text-base', weight: 'font-normal', family: 'font-sans', tracking: '' },
                { label: 'Small', size: 'text-sm', weight: 'font-normal', family: 'font-sans', tracking: '' },
                { label: 'Caption', size: 'text-xs', weight: 'font-normal', family: 'font-sans', tracking: 'tracking-wide' },
              ].map((t) => (
                <div key={t.label} className="flex items-baseline gap-6">
                  <span className="font-sans text-xs text-ink/30 w-12 shrink-0">{t.label}</span>
                  <span className={`${t.size} ${t.weight} ${t.family} ${t.tracking} text-ink`}>
                    Playfair Display
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 03 Elements */}
        <Reveal delay={0.12}>
          <div className="mb-14">
            <div className="divider" />
            <p className="section-number">03 / Elements</p>
            <div className="flex flex-wrap gap-6 mt-6 items-center">
              <MemphisDecor variant="dots" size={80} />
              <MemphisDecor variant="squiggle" size={100} />
              <MemphisDecor variant="arch" size={80} />
              <MemphisDecor variant="chips" size={120} />
              <div className="impasto-blob w-16 h-16 bg-blush" />
              <div className="impasto-blob w-16 h-16 bg-sage" />
              <div className="impasto-blob w-16 h-12 bg-lavender/50" />
            </div>
          </div>
        </Reveal>

        {/* 04 Buttons */}
        <Reveal delay={0.14}>
          <div className="mb-14">
            <div className="divider" />
            <p className="section-number">04 / Buttons</p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Button variant="primary" withArrow>Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="text">Text Button</Button>
            </div>
          </div>
        </Reveal>

        {/* 05 Icons */}
        <Reveal delay={0.16}>
          <div className="mb-14">
            <div className="divider" />
            <p className="section-number">05 / Icons</p>
            <div className="mt-6">
              <IconRow />
            </div>
          </div>
        </Reveal>

        {/* Design Tokens Table */}
        <Reveal delay={0.18}>
          <div className="mb-0">
            <div className="divider" />
            <p className="section-number">Design Tokens</p>
            <div className="mt-6 bg-ink rounded-sm p-6 md:p-8">
              <div className="flex gap-6 mb-6 text-xs font-sans border-b border-ivory/10 pb-4">
                {['Colors', 'Typography', 'Spacing', 'Radius', 'Shadows', 'Z-index'].map((tab) => (
                  <span key={tab} className="text-ivory/50 hover:text-ivory cursor-pointer transition-colors">{tab}</span>
                ))}
              </div>
              <div className="text-ivory">
                <TokenTable tokens={designTokenRows} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
