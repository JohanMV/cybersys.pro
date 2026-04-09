import VenomBeam from '@/components/ui/venom-beam'

export default function HeroSection() {
  return (
    <VenomBeam className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-linear-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-5xl lg:text-7xl font-sans pb-1 md:pb-2 pt-2 md:pt-4 relative z-20 font-bold tracking-tight leading-tight">
        Cybersys
        <br />
        Descubre nuevas posibilidades
      </h2>
      <p className="max-w-xl mx-auto text-base md:text-lg text-neutral-700 dark:text-neutral-400 text-center mt-1">
        Expertos en soluciones digitales, optimización y seguridad digital para empresas que no se conforman con el promedio.
      </p>
    </VenomBeam>
  )
}
