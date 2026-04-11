'use client'

import * as React from 'react'
import { BarChart3, ChevronDown, ChevronUp, Globe, LayoutGrid, Lock } from 'lucide-react'

import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { OrbButton } from '@/components/ui/orb-button'
import { cn } from '@/lib/utils'

type ProjectCategory =
  | 'Todos'
  | 'IA y Automatización'
  | 'Ciberseguridad'
  | 'Desarrollo Web'

const filters: {
  label: ProjectCategory
  icon: React.ReactNode
}[] = [
  {
    label: 'Todos',
    icon: <LayoutGrid className="h-4 w-4" />,
  },
  {
    label: 'IA y Automatización',
    icon: <BarChart3 className="h-4 w-4" />,
  },
  {
    label: 'Ciberseguridad',
    icon: <Lock className="h-4 w-4" />,
  },
  {
    label: 'Desarrollo Web',
    icon: <Globe className="h-4 w-4" />,
  },
]

const items = [
  {
    title: 'IA y Automatización',
    category: 'IA y Automatización' as const,
    description:
      'Proyectos enfocados en optimizar procesos, reducir tareas repetitivas y acelerar decisiones con inteligencia artificial.',
    icon: <BarChart3 className="h-4 w-4 text-neutral-500" />,
    containerClassName: 'md:col-span-1',
    image: '/images/servicio_ia.webp',
  },
  {
    title: 'Agente de Soporte Interno',
    category: 'IA y Automatización' as const,
    description:
      'Asistente inteligente conectado a documentación y procesos internos para responder consultas y acelerar operaciones.',
    icon: <BarChart3 className="h-4 w-4 text-neutral-500" />,
    containerClassName: 'md:col-span-1',
    image: '/images/servicio_ia.webp',
  },
  {
    title: 'Clasificación Automática de Leads',
    category: 'IA y Automatización' as const,
    description:
      'Sistema que prioriza prospectos según intención, comportamiento y probabilidad de conversión para apoyar al equipo comercial.',
    icon: <BarChart3 className="h-4 w-4 text-neutral-500" />,
    containerClassName: 'md:col-span-1',
    image: '/images/servicio_ia.webp',
  },
  {
    title: 'Ciberseguridad',
    category: 'Ciberseguridad' as const,
    description:
      'Implementaciones orientadas a protección digital, evaluación de riesgos y fortalecimiento de la postura de seguridad.',
    icon: <Lock className="h-4 w-4 text-neutral-500" />,
    containerClassName: 'md:col-span-1',
    image: '/images/servicio_ciberseguridad_2.webp',
  },
  {
    title: 'Monitoreo de Amenazas',
    category: 'Ciberseguridad' as const,
    description:
      'Solución para detectar comportamientos anómalos, correlacionar eventos y reducir tiempos de respuesta ante incidentes.',
    icon: <Lock className="h-4 w-4 text-neutral-500" />,
    containerClassName: 'md:col-span-1',
    image: '/images/servicio_ciberseguridad.webp',
  },
  {
    title: 'Auditoría de Seguridad Web',
    category: 'Ciberseguridad' as const,
    description:
      'Evaluación técnica de aplicaciones y superficies expuestas para identificar riesgos, brechas y oportunidades de mejora.',
    icon: <Lock className="h-4 w-4 text-neutral-500" />,
    containerClassName: 'md:col-span-1',
    image: '/images/servicio_ciberseguridad.webp',
  },
  {
    title: 'Desarrollo Web',
    category: 'Desarrollo Web' as const,
    description:
      'Soluciones web modernas, rápidas y escalables diseñadas para generar impacto real en la operación y la experiencia del usuario.',
    icon: <Globe className="h-4 w-4 text-neutral-500" />,
    containerClassName: 'md:col-span-1',
    image: '/images/servicio_web.webp',
  },
  {
    title: 'Landing Corporativa',
    category: 'Desarrollo Web' as const,
    description:
      'Sitio institucional enfocado en conversión, velocidad y posicionamiento para presentar servicios de forma clara y profesional.',
    icon: <Globe className="h-4 w-4 text-neutral-500" />,
    containerClassName: 'md:col-span-1',
    image: '/images/servicio_web.webp',
  },
  {
    title: 'Plataforma de Reservas',
    category: 'Desarrollo Web' as const,
    description:
      'Aplicación web para gestionar reservas, disponibilidad y seguimiento de clientes desde una sola interfaz.',
    icon: <Globe className="h-4 w-4 text-neutral-500" />,
    containerClassName: 'md:col-span-1',
    image: '/images/servicio_web.webp',
  },
 
]

export default function Projects() {
  const [activeFilter, setActiveFilter] =
    React.useState<ProjectCategory>('Todos')
  const [showAll, setShowAll] = React.useState(false)

  React.useEffect(() => {
    setShowAll(false)
  }, [activeFilter])

  const filteredItems =
    activeFilter === 'Todos'
      ? items
      : items.filter((item) => item.category === activeFilter)

  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 3)
  const hasMoreThanThree = filteredItems.length > 3

  return (
    <section
      id="proyectos"
      className="w-full bg-white px-4 py-16 dark:bg-black sm:px-6 lg:px-8"
    >
      <div className="relative mx-auto mb-12 flex max-w-7xl flex-col items-center gap-4 px-4 text-center sm:px-6">
        <div className="inline-flex items-center rounded-full border border-rose-400/30 bg-rose-500/10 px-4 py-1.5">
          <span className="text-sm font-medium text-rose-500">Proyectos</span>
        </div>
        <h2 className="text-4xl font-bold text-zinc-900 md:text-5xl lg:text-6xl dark:text-white">
          Proyectos
        </h2>
        <p className="max-w-3xl text-base text-zinc-500 dark:text-zinc-400">
          Algunos de los enfoques en los que ya venimos construyendo soluciones
          reales para empresas que buscan crecer con tecnología.
        </p>
      </div>

      <div className="mx-auto mb-10 flex max-w-7xl flex-wrap items-center justify-center gap-3">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.label

          return (
            <OrbButton
              key={filter.label}
              onClick={() => setActiveFilter(filter.label)}
              icon={filter.icon}
              showIconAlways
              dotClassName={cn(
                'h-7 w-7 bg-white dark:bg-white',
                isActive && 'bg-black dark:bg-black',
              )}
              className={cn(
                'bg-transparent',
                isActive
                  ? 'border-white bg-white hover:bg-white/90 dark:border-white dark:bg-white dark:hover:bg-white/90 [&>span:first-child>span]:text-white [&>span:last-child]:text-black'
                  : 'border-white/10 bg-zinc-950 hover:border-white/20 [&>span:last-child]:text-zinc-200 dark:border-white/10 dark:bg-zinc-950',
              )}
            >
              {filter.label}
            </OrbButton>
          )
        })}
      </div>

      <BentoGrid className="md:grid-cols-3">
        {visibleItems.map((item) => (
          <BentoGridItem
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
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

      {hasMoreThanThree && (
        <div className="mx-auto mt-8 flex max-w-7xl justify-center">
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors duration-200 hover:text-zinc-300"
          >
            <span>{showAll ? 'Ver menos' : 'Ver más'}</span>
            {showAll ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
        </div>
      )}
    </section>
  )
}
