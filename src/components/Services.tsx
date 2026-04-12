import { BarChart3, Globe, Lock, Sparkles } from 'lucide-react'

import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'

const items = [
  {
    title: 'Soluciones con IA',
    description:
      'Modelos inteligentes entrenados para automatizar y potenciar tu negocio.',
    icon: <BarChart3 className="h-4 w-4 text-neutral-500" />,
    containerClassName: 'md:col-span-1',
    image: '/images/servicio_ia.webp',
  },
  {
    title: 'Ciberseguridad',
    description:
      'Protección proactiva, análisis de vulnerabilidades y respuesta a incidentes.',
    icon: <Lock className="h-4 w-4 text-neutral-500" />,
    containerClassName: 'md:col-span-1',
    image: '/images/servicio_ciberseguridad.webp',
  },
  {
    title: 'Estrategia y Liderazgo Tecnológico',
    description: 'Consultoría especializada en la definición de roadmaps técnicos y selección de infraestructura protegida.',
    icon: <Sparkles className="h-4 w-4 text-neutral-500" />,
    containerClassName: 'md:col-span-1 md:row-span-2',
    image: '/images/servicio_estrategia.webp',
  },
  {
    title: 'Desarrollo Web',
    description:
      'Plataformas digitales rápidas, seguras y escalables que convierten visitantes en clientes.',
    icon: <Globe className="h-4 w-4 text-neutral-500" />,
    containerClassName: 'md:col-span-1',
    image: '/images/servicio_web.webp',
  },
  {
    title: 'Automatización de Procesos',
    description:
      'Elimina tareas repetitivas. Más velocidad, menos errores.',
    icon: <Sparkles className="h-4 w-4 text-neutral-500" />,
    containerClassName: 'md:col-span-1',
    image: '/images/servicio_automatizacion.webp',
  },
]

export default function Services() {
  return (
    <section
      id="servicios"
      className="w-full bg-white px-4 py-16 dark:bg-black sm:px-6 lg:px-8"
    >
      <div className="relative mx-auto mb-12 flex max-w-7xl flex-col items-center gap-4 px-4 text-center sm:px-6">
        <div className="inline-flex items-center rounded-full border border-rose-400/30 bg-rose-500/10 px-4 py-1.5">
          <span className="text-sm font-medium text-rose-500">Servicios</span>
        </div>
        <h2 className="text-4xl font-bold text-zinc-900 md:text-5xl lg:text-6xl dark:text-white">
          Servicios
        </h2>
        <p className="max-w-3xl text-base text-zinc-500 dark:text-zinc-400">
          Diseñamos e implementamos soluciones tecnológicas para
          <br />
          impulsar la operación, seguridad y crecimiento digital de tu empresa.
        </p>
      </div>

      <BentoGrid>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            icon={item.icon}
            className="border-black dark:border-white/20"
            containerClassName={item.containerClassName}
            disableTilt
            header={
              <div className="relative flex h-full min-h-24 w-full overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover/bento:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 dark:bg-black/30" />
              </div>
            }
          />
        ))}
      </BentoGrid>
    </section>
  )
}
