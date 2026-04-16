'use client'

import * as React from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  BarChart3,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Globe,
  LayoutGrid,
  Lock,
  X,
} from 'lucide-react'

import WhatsAppLogo from '@/assets/icons-whatsapp.svg'

import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import ModernLoader from '@/components/ui/modern-loader'
import { OrbButton } from '@/components/ui/orb-button'
import { cn } from '@/lib/utils'

type ProjectCategory =
  | 'Todos'
  | 'IA y Automatización'
  | 'Ciberseguridad'
  | 'Desarrollo Web'

interface ProjectDetail {
  summary: string
  tools: string[]
  gallery: string[]
  liveUrl?: string
  repoUrl?: string
  note?: string
  layout?: 'stacked' | 'split'
}

interface ProjectItem {
  title: string
  category: Exclude<ProjectCategory, 'Todos'>
  description: string
  icon: React.ReactNode
  containerClassName: string
  image: string
  detail?: ProjectDetail
}

const BUSINESS_WHATSAPP_NUMBER = '51999999999'

function createWhatsAppProjectUrl(projectTitle: string) {
  const message = `Hola, quiero solicitar el proyecto "${projectTitle}" para mi negocio.`
  return `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <img
      src={WhatsAppLogo}
      alt="WhatsApp"
      className={className}
    />
  )
}

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

const items: ProjectItem[] = [
  {
    title: 'IA y Automatización',
    category: 'IA y Automatización',
    description:
      'Proyectos enfocados en optimizar procesos, reducir tareas repetitivas y acelerar decisiones con inteligencia artificial.',
    icon: <BarChart3 className="h-4 w-4 text-neutral-500" />,
    containerClassName: 'md:col-span-1',
    image: '/images/servicio_ia.webp',
    detail: {
      layout: 'split',
      summary:
        'Implementación de referencia para centralizar automatizaciones, acelerar tareas repetitivas y conectar procesos clave con una capa de inteligencia aplicada al negocio.',
      tools: ['Python', 'OpenAI API', 'n8n', 'FastAPI', 'PostgreSQL'],
      gallery: [
        '/images/servicio_ia.webp',
        '/images/servicio_automatizacion.webp',
        '/images/servicio_estrategia.webp',
        '/images/servicio_web.webp',
      ],
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com/example/ia-automatizacion',
      note: 'Contenido de ejemplo para visualizar la propuesta de automatización en formato comercial.',
    },
  },
  {
    title: 'Agente de Soporte Interno',
    category: 'IA y Automatización',
    description:
      'Asistente inteligente conectado a documentación y procesos internos para responder consultas y acelerar operaciones.',
    icon: <BarChart3 className="h-4 w-4 text-neutral-500" />,
    containerClassName: 'md:col-span-1',
    image: '/images/servicio_ia.webp',
    detail: {
      layout: 'split',
      summary:
        'Agente interno diseñado para responder preguntas operativas, consultar documentación y asistir a equipos comerciales o de soporte con respuestas más rápidas y consistentes.',
      tools: ['OpenAI API', 'LangChain', 'React', 'Node.js', 'Supabase'],
      gallery: [
        '/images/servicio_ia.webp',
        '/images/servicio_web.webp',
        '/images/servicio_automatizacion.webp',
        '/images/servicio_estrategia.webp',
      ],
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com/example/agente-soporte',
      note: 'Datos de ejemplo para mostrar cómo se presentaría un asistente interno listo para negocio.',
    },
  },
  {
    title: 'Clasificación Automática de Leads',
    category: 'IA y Automatización',
    description:
      'Sistema que prioriza prospectos según intención, comportamiento y probabilidad de conversión para apoyar al equipo comercial.',
    icon: <BarChart3 className="h-4 w-4 text-neutral-500" />,
    containerClassName: 'md:col-span-1',
    image: '/images/servicio_ia.webp',
    detail: {
      layout: 'split',
      summary:
        'Sistema de priorización comercial pensado para identificar oportunidades con mayor intención de compra y ayudar al equipo a enfocar esfuerzos donde hay más valor.',
      tools: ['Python', 'Scikit-learn', 'React', 'FastAPI', 'HubSpot API'],
      gallery: [
        '/images/servicio_ia.webp',
        '/images/servicio_estrategia.webp',
        '/images/servicio_web.webp',
        '/images/servicio_automatizacion.webp',
      ],
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com/example/clasificacion-leads',
      note: 'Ejemplo visual preparado para simular un flujo de scoring y seguimiento comercial.',
    },
  },
  {
    title: 'Ciberseguridad',
    category: 'Ciberseguridad',
    description:
      'Implementaciones orientadas a protección digital, evaluación de riesgos y fortalecimiento de la postura de seguridad.',
    icon: <Lock className="h-4 w-4 text-neutral-500" />,
    containerClassName: 'md:col-span-1',
    image: '/images/servicio_ciberseguridad_2.webp',
    detail: {
      layout: 'split',
      summary:
        'Proyecto marco para fortalecer la postura digital de una organización mediante evaluación de riesgos, hardening técnico y definición de controles de protección continua.',
      tools: ['Wazuh', 'Suricata', 'Docker', 'Linux', 'OWASP'],
      gallery: [
        '/images/servicio_ciberseguridad_2.webp',
        '/images/servicio_ciberseguridad.webp',
        '/images/servicio_estrategia.webp',
        '/images/servicio_web.webp',
      ],
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com/example/ciberseguridad-base',
      note: 'Contenido de ejemplo para mostrar un enfoque integral de seguridad adaptado a empresa.',
    },
  },
  {
    title: 'Monitoreo de Amenazas',
    category: 'Ciberseguridad',
    description:
      'Solución para detectar comportamientos anómalos, correlacionar eventos y reducir tiempos de respuesta ante incidentes.',
    icon: <Lock className="h-4 w-4 text-neutral-500" />,
    containerClassName: 'md:col-span-1',
    image: '/images/servicio_ciberseguridad.webp',
    detail: {
      layout: 'split',
      summary:
        'Solución orientada a visibilidad operativa, correlación de eventos y alertamiento temprano para reducir tiempos de detección y respuesta frente a incidentes.',
      tools: ['Elastic', 'Sigma Rules', 'Python', 'Grafana', 'MITRE ATT&CK'],
      gallery: [
        '/images/servicio_ciberseguridad.webp',
        '/images/servicio_ciberseguridad_2.webp',
        '/images/servicio_automatizacion.webp',
        '/images/servicio_ia.webp',
      ],
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com/example/monitoreo-amenazas',
      note: 'Vista de ejemplo para representar monitoreo continuo y analítica de eventos.',
    },
  },
  {
    title: 'Auditoría de Seguridad Web',
    category: 'Ciberseguridad',
    description:
      'Evaluación técnica de aplicaciones y superficies expuestas para identificar riesgos, brechas y oportunidades de mejora.',
    icon: <Lock className="h-4 w-4 text-neutral-500" />,
    containerClassName: 'md:col-span-1',
    image: '/images/servicio_ciberseguridad.webp',
    detail: {
      layout: 'split',
      summary:
        'Evaluación técnica enfocada en descubrir riesgos de aplicaciones web, validar configuraciones críticas y priorizar acciones concretas de mejora con criterio de negocio.',
      tools: ['Burp Suite', 'OWASP ZAP', 'Nmap', 'Docker', 'Checklist OWASP'],
      gallery: [
        '/images/servicio_ciberseguridad.webp',
        '/images/servicio_ciberseguridad_2.webp',
        '/images/servicio_web.webp',
        '/images/servicio_estrategia.webp',
      ],
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com/example/auditoria-web',
      note: 'Información de ejemplo para visualizar una auditoría web presentada como solución comercial.',
    },
  },
  {
    title: 'GEOPETS - Clínica Veterinaria',
    category: 'Desarrollo Web',
    description:
      'Landing premium orientada a branding, confianza y conversión comercial para una clínica veterinaria.',
    icon: <Globe className="h-4 w-4 text-neutral-500" />,
    containerClassName: 'md:col-span-1',
    image: '/images/geopets_clinica_web.webp',
    detail: {
      layout: 'split',
      summary:
        'Landing page premium construida como SPA estática con React + Vite para comunicar una propuesta de valor de alto nivel, reforzar la confianza de marca y presentar servicios, instalaciones, equipo médico y contacto en una sola experiencia web.',
      tools: [
        'React 19',
        'Vite',
        'Framer Motion',
        'Lucide React',
        'React Icons',
        'ESLint',
      ],
      gallery: [
        '/images/geopets_clinica_web.webp',
        '/images/geopets_clinica_web_2.webp',
        '/images/geopets_clinica_web_3.webp',
        '/images/ratios16_9.jpg',
      ],
      liveUrl: 'https://geopets-clinica-veterinaria.vercel.app/',
      repoUrl: 'https://github.com/JohanMV/GEOPETS_Clinica_Veterinaria',
      note: 'La primera imagen es real. Las otras dos son placeholders temporales para que luego las reemplaces.',
    },
  },
  {
    title: 'Landing Corporativa',
    category: 'Desarrollo Web',
    description:
      'Sitio institucional enfocado en conversión, velocidad y posicionamiento para presentar servicios de forma clara y profesional.',
    icon: <Globe className="h-4 w-4 text-neutral-500" />,
    containerClassName: 'md:col-span-1',
    image: '/images/servicio_web.webp',
    detail: {
      layout: 'split',
      summary:
        'Landing corporativa de ejemplo pensada para presentar una marca con claridad, reforzar confianza desde el primer scroll y convertir visitas en oportunidades comerciales con una estructura visual limpia y directa.',
      tools: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Lucide React'],
      gallery: [
        '/images/servicio_web.webp',
        '/images/servicio_estrategia.webp',
        '/images/servicio_automatizacion.webp',
        '/images/servicio_ia.webp',
      ],
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com/example/landing-corporativa',
      note: 'Contenido de ejemplo para visualizar esta variante de layout en dos columnas.',
    },
  },
  {
    title: 'Plataforma de Reservas',
    category: 'Desarrollo Web',
    description:
      'Aplicación web para gestionar reservas, disponibilidad y seguimiento de clientes desde una sola interfaz.',
    icon: <Globe className="h-4 w-4 text-neutral-500" />,
    containerClassName: 'md:col-span-1',
    image: '/images/servicio_web.webp',
    detail: {
      layout: 'split',
      summary:
        'Aplicación de ejemplo para administrar reservas, disponibilidad, confirmaciones y seguimiento de clientes desde una experiencia clara, veloz y lista para escalar.',
      tools: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
      gallery: [
        '/images/servicio_web.webp',
        '/images/servicio_estrategia.webp',
        '/images/servicio_automatizacion.webp',
        '/images/servicio_ia.webp',
      ],
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com/example/plataforma-reservas',
      note: 'Demo de presentación para una solución web orientada a reservas y operación diaria.',
    },
  },
]

function ProjectDetailModal({
  project,
  activeImage,
  onSelectImage,
  onClose,
}: {
  project: ProjectItem
  activeImage: string
  onSelectImage: (image: string) => void
  onClose: () => void
}) {
  if (!project.detail) return null
  const isSplitLayout = project.detail.layout === 'split'

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm p-4 sm:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="mx-auto flex h-full w-full max-w-[min(96vw,1500px)] items-center"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="relative w-full">
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black transition-colors hover:bg-zinc-100 dark:border-white/10 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
              aria-label="Cerrar detalle del proyecto"
            >
              <X className="h-4 w-4" />
            </button>

            <ModernLoader
              words={[
                'Abriendo proyecto...',
                'Mostrando detalle real...',
                project.title,
              ]}
              className="max-w-none w-full p-0"
              panelClassName="h-[min(86vh,920px)] w-full border-black dark:border-white/10"
              //contentClassName="px-4 pb-3 pt-4 sm:px-6 sm:pb-4 sm:pt-5 lg:px-8 lg:pb-5 overflow-y-auto"
              contentClassName="px-4 pb-1 pt-4 sm:px-6 sm:pb-2 sm:pt-5 lg:px-8 lg:pb-3 overflow-y-auto"

            >
              {isSplitLayout ? (
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-500">
                        Proyecto destacado
                      </p>
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl">
                        {project.title}
                      </h3>
                      <p className="text-sm leading-7 text-zinc-700 dark:text-zinc-300 sm:text-base">
                        {project.detail.summary}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-500">
                        Tecnologías utilizadas
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.detail.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-full border border-black/15 bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-900 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-200"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {project.detail.note && (
                      <p className="text-xs text-zinc-700 dark:text-zinc-400">
                        {project.detail.note}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.detail.liveUrl && (
                        <a
                          href={project.detail.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
                        >
                          Abrir sitio
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                      <a
                        href={createWhatsAppProjectUrl(project.title)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-black bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
                      >
                        Solicitar para mi negocio
                        <WhatsAppIcon className="h-6 w-6 text-green-600 dark:text-white" />
                      </a>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-2xl border border-black bg-zinc-50 dark:border-white/10 dark:bg-zinc-950">
                      <img
                        src={activeImage}
                        alt={project.title}
                        className="h-[220px] w-full object-cover sm:h-[320px] lg:h-[420px]"
                      />
                    </div>

                    <div className="grid grid-cols-4 gap-3">
                      {project.detail.gallery.map((image, index) => {
                        const isActive = image === activeImage

                        return (
                          <button
                            key={`${project.title}-${index}`}
                            type="button"
                            onClick={() => onSelectImage(image)}
                            className={cn(
                              'overflow-hidden rounded-xl border transition-all duration-200',
                              isActive
                                ? 'border-black dark:border-white'
                                : 'border-black hover:border-black dark:border-white/10 dark:hover:border-white/30',
                            )}
                          >
                            <img
                              src={image}
                              alt={`${project.title} vista ${index + 1}`}
                              className="h-20 w-full object-cover sm:h-24"
                            />
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  <div className="overflow-hidden rounded-2xl border border-black bg-zinc-50 dark:border-white/10 dark:bg-zinc-950">
                    <img
                      src={activeImage}
                      alt={project.title}
                      className="h-[220px] w-full object-cover sm:h-[320px] lg:h-[420px]"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {project.detail.gallery.map((image, index) => {
                      const isActive = image === activeImage

                      return (
                        <button
                          key={`${project.title}-${index}`}
                          type="button"
                          onClick={() => onSelectImage(image)}
                          className={cn(
                            'overflow-hidden rounded-xl border transition-all duration-200',
                            isActive
                              ? 'border-black dark:border-white'
                              : 'border-black hover:border-black dark:border-white/10 dark:hover:border-white/30',
                          )}
                        >
                          <img
                            src={image}
                            alt={`${project.title} vista ${index + 1}`}
                            className="h-20 w-full object-cover sm:h-24"
                          />
                        </button>
                      )
                    })}
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-500">
                        Proyecto destacado
                      </p>
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl">
                        {project.title}
                      </h3>
                      <p className="max-w-3xl text-sm leading-7 text-zinc-700 dark:text-zinc-300 sm:text-base">
                        {project.detail.summary}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-500">
                        Tecnologías utilizadas
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.detail.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-full border border-black/15 bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-900 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-200"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {project.detail.note && (
                      <p className="text-xs text-zinc-700 dark:text-zinc-400">
                        {project.detail.note}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.detail.liveUrl && (
                      <a
                        href={project.detail.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
                      >
                        Abrir sitio
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    <a
                      href={createWhatsAppProjectUrl(project.title)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-black bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
                    >
                      Solicitar para mi negocio
                      <WhatsAppIcon className="h-6 w-6 text-green-600 dark:text-white" />
                    </a>
                  </div>
                </div>
              )}
            </ModernLoader>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = React.useState<ProjectCategory>('Todos')
  const [showAll, setShowAll] = React.useState(false)
  const [activeProject, setActiveProject] = React.useState<ProjectItem | null>(null)
  const [activeImage, setActiveImage] = React.useState('')

  React.useEffect(() => {
    setShowAll(false)
  }, [activeFilter])

  React.useEffect(() => {
    if (activeProject?.detail?.gallery?.length) {
      setActiveImage(activeProject.detail.gallery[0])
    }
  }, [activeProject])

  React.useEffect(() => {
    if (!activeProject) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [activeProject])

  const filteredItems =
    activeFilter === 'Todos'
      ? items
      : items.filter((item) => item.category === activeFilter)

  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 3)
  const hasMoreThanThree = filteredItems.length > 3

  return (
    <>
      <section
        id="proyectos"
        className="w-full bg-white px-4 py-16 pb-24 dark:bg-black sm:px-6 lg:px-8"
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
                    ? 'border-black bg-white hover:bg-white/90 dark:border-white dark:bg-white dark:hover:bg-white/90 [&>span:first-child>span]:text-white [&>span:last-child]:text-black'
                    : 'border-black/10 bg-zinc-950 hover:border-black/20 dark:border-white/10 dark:bg-zinc-950 dark:hover:border-white/20 [&>span:first-child>span]:text-black dark:[&>span:first-child>span]:text-black [&>span:last-child]:text-zinc-200',
                )}
              >
                {filter.label}
              </OrbButton>
            )
          })}
        </div>

        <motion.div layout transition={{ duration: 0.35, ease: 'easeInOut' }}>
          <BentoGrid className="md:grid-cols-3 md:auto-rows-[22rem]">
            <AnimatePresence mode="popLayout">
              {visibleItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 16, scale: 0.98 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.04,
                    ease: 'easeOut',
                  }}
                >
                  <div
                    role={item.detail ? 'button' : undefined}
                    tabIndex={item.detail ? 0 : undefined}
                    onClick={item.detail ? () => setActiveProject(item) : undefined}
                    onKeyDown={
                      item.detail
                        ? (event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault()
                            setActiveProject(item)
                          }
                        }
                        : undefined
                    }
                    className={cn(item.detail && 'cursor-pointer')}
                  >
                    <BentoGridItem
                      title={
                        <div className="flex items-center gap-2">
                          <span className="shrink-0 text-neutral-700 dark:text-neutral-300">{item.icon}</span>
                          <span className="truncate text-black dark:text-white">{item.title}</span>
                        </div>
                      }
                      description={item.description}
                      className="border-black dark:border-white/20 h-full space-y-2 p-5"
                      containerClassName={item.containerClassName}
                      disableTilt
                      header={
                        <div className="relative flex h-52 w-full overflow-hidden rounded-xl">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover/bento:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/10 dark:bg-black/30" />
                        </div>
                      }
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </BentoGrid>
        </motion.div>

        {hasMoreThanThree && (
          <div className="relative z-10 mx-auto mt-10 flex max-w-7xl justify-center">
            <button
              type="button"
              onClick={() => setShowAll((current) => !current)}
              className="inline-flex items-center gap-2 text-sm font-medium text-black transition-colors duration-200 hover:text-zinc-700 dark:text-white dark:hover:text-zinc-300"
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

      {activeProject && activeImage && (
        <ProjectDetailModal
          project={activeProject}
          activeImage={activeImage}
          onSelectImage={setActiveImage}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  )
}
