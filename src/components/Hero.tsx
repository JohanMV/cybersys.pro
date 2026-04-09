import { OrbButton } from '@/components/ui/orb-button'
import Typeanimation from '@/components/ui/typeanimation'
import VenomBeam from '@/components/ui/venom-beam'

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio">
      <VenomBeam className="flex items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-linear-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-5xl lg:text-7xl font-sans pb-1 md:pb-2 pt-2 md:pt-4 relative z-20 font-bold tracking-tight leading-tight">
          Cybersys
          <br />
          Descubre nuevas{' '}
          <Typeanimation
            words={[' posibilidades', ' oportunidades', ' soluciones']}
            typingSpeed="slow"
            deletingSpeed="slow"
            pauseDuration={2000}
            className="inline text-4xl md:text-5xl lg:text-7xl font-extrabold text-amber-500"
          />
        </h2>
        <p className="max-w-xl mx-auto text-base md:text-lg text-neutral-700 dark:text-neutral-400 text-center mt-1">
          Expertos en soluciones digitales, optimización y seguridad digital
          para empresas que no se conforman con el promedio.
        </p>
        <div className="relative z-20 mt-6 flex flex-col items-center gap-3 sm:flex-row">
          <OrbButton
            onClick={() => scrollToSection('contacto')}
            className="bg-white text-black hover:bg-white/90 dark:bg-white dark:text-black [&>span:first-child]:bg-black [&>span:first-child>span]:text-white [&>span:last-child]:text-black"
          >
            Empezar ahora
          </OrbButton>
          <OrbButton
            onClick={() => scrollToSection('servicios')}
            className="bg-transparent"
          >
            Ver soluciones
          </OrbButton>
        </div>
      </VenomBeam>
    </section>
  )
}
