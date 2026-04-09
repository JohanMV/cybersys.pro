import Methodology from '@/components/Methodology'
import Services from '@/components/Services'
import Footer from '@/components/Footer'
import ThemeSwitchDemo from '@/components/ThemeSwitchDemo'
import ContactSection from '@/components/ContactSection'
import HeroSection from '@/components/HeroSection'

export default function App() {
  return (
    <main className="relative">
      <div className="fixed right-4 top-4 z-50 md:right-6 md:top-6">
        <ThemeSwitchDemo />
      </div>
      <HeroSection />
      <Services />
      <Methodology />
      <ContactSection />
      <Footer />
    </main>
  )
}
