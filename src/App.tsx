import Methodology from '@/components/Methodology'
import Services from '@/components/Services'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Results from '@/components/Results'
import ThemeSwitchDemo from '@/components/ThemeSwitchDemo'
import ContactSection from '@/components/ContactSection'

export default function App() {
  return (
    <main className="relative">
      <div className="fixed right-4 top-4 z-50 md:right-6 md:top-6">
        <ThemeSwitchDemo />
      </div>
      <Hero />
      <Services />
      <Methodology />
      <Results />
      <ContactSection />
      <Footer />
    </main>
  )
}
