import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import DesignSystem from '../components/sections/DesignSystem'
import About from '../components/sections/About'
import SelectedWork from '../components/sections/SelectedWork'
import Journal from '../components/sections/Journal'
import TypographySpecimen from '../components/sections/TypographySpecimen'
import CTA from '../components/sections/CTA'

export default function App() {
  return (
    <div className="bg-ivory font-sans text-ink antialiased">
      <Header />
      <main>
        <Hero />
        <DesignSystem />
        <About />
        <SelectedWork />
        <Journal />
        <TypographySpecimen />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
