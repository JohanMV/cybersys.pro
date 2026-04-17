import { motion } from 'motion/react'
import { ArrowDown } from 'lucide-react'

import { OrbButton } from '@/components/ui/orb-button'
import TypeAnimation from '@/components/ui/type-animation'
import VenomBeam from '@/components/ui/venom-beam'

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio">
      <VenomBeam className="flex w-full flex-col items-center justify-center px-5 pb-12 pt-24 sm:px-6 sm:pt-28 md:px-4 md:pb-0 md:pt-0">
        <h2 className="relative z-20 bg-clip-text pb-1 pt-2 text-center font-sans text-[clamp(2.9rem,11vw,4.6rem)] font-bold leading-[0.95] tracking-tight text-transparent bg-linear-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white md:pb-2 md:pt-4 md:text-5xl lg:text-7xl">
          Cybersys
          <br />
          Descubre nuevas{' '}
          <TypeAnimation
            words={[' posibilidades', ' oportunidades', ' soluciones']}
            typingSpeed="slow"
            deletingSpeed="slow"
            pauseDuration={2000}
            className="inline text-[clamp(2.9rem,11vw,4.6rem)] font-extrabold text-amber-500 md:text-5xl lg:text-7xl"
          />
        </h2>
        <p className="mx-auto mt-4 max-w-[20rem] text-center text-lg leading-relaxed text-neutral-700 dark:text-neutral-400 sm:max-w-xl md:mt-1 md:text-lg">
          Expertos en soluciones digitales, optimización y seguridad digital
          para empresas que no se conforman con el promedio.
        </p>
        <div className="relative z-20 mt-11 flex w-full max-w-xs flex-col items-center gap-3 sm:w-auto sm:max-w-none sm:flex-row md:mt-10 lg:mt-12">
          <OrbButton
            onClick={() => scrollToSection('contacto')}
            className="w-full justify-center bg-white text-black hover:bg-white/90 dark:bg-white dark:text-black sm:w-auto [&>span:first-child]:bg-black [&>span:first-child>span]:text-white [&>span:last-child]:text-black"
          >
            Empezar ahora
          </OrbButton>
          <OrbButton
            onClick={() => scrollToSection('servicios')}
            className="w-full justify-center bg-transparent sm:w-auto"
          >
            Ver soluciones
          </OrbButton>
        </div>

        <motion.button
          type="button"
          onClick={() => scrollToSection('servicios')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-zinc-500 transition-colors hover:text-amber-500 dark:text-zinc-400 dark:hover:text-amber-400 md:bottom-8"
        >
          <span>Descubrir</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex items-center justify-center text-amber-500 dark:text-amber-400"
          >
            <ArrowDown size={16} strokeWidth={1.7} />
          </motion.span>
        </motion.button>
      </VenomBeam>
    </section>
  )
}
