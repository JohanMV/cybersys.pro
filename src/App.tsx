import Methodology from '@/components/sections/Methodology'
import Services from '@/components/sections/Services'
import Footer from '@/components/sections/Footer'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import Results from '@/components/sections/Results'
import ThemeSwitchDemo from '@/components/sections/ThemeSwitchDemo'
import ContactSection from '@/components/sections/ContactSection'

export default function App() {
  return (
    <main className="relative">
      <div className="fixed right-4 top-4 z-50 md:right-6 md:top-6">
        <ThemeSwitchDemo />
      </div>
      <Hero />
      <Services />
      <Methodology />
      <Projects />
      <Results />
      <ContactSection />
      <Footer />
    </main>
  )
}
