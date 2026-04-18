'use client'

import * as React from 'react'
import { AnimatePresence, motion } from 'motion/react'

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface MethodologyItem {
  step: string
  title: string
  description: string
  videoSrc: string
  content: React.ReactNode
}

function MethodologyVideo({
  step,
  title,
  description,
  src,
}: {
  step: string
  title: string
  description: string
  src: string
}) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-zinc-950">
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/18 to-transparent" />
      <div className="absolute inset-0 flex h-full w-full flex-col justify-between p-8 text-left">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-sm font-semibold text-zinc-900">
          {step}
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          <p className="text-sm leading-relaxed text-zinc-200">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

function MethodologyPanel({
  step,
  title,
  description,
}: {
  step: string
  title: string
  description: string
}) {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-zinc-50 p-8 text-left dark:bg-zinc-900">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white dark:bg-white dark:text-zinc-900">
        {step}
      </div>
      <div className="mt-8 space-y-3">
        <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          {description}
        </p>
      </div>
    </div>
  )
}

function MobileMethodologyDetail({
  description,
  src,
}: {
  description: string
  src: string
}) {
  return (
    <div className="mt-3 -mx-4 border-t border-black/15 px-4 pt-6 dark:border-white/10">
      <div className="flex flex-col gap-5 px-2 pb-2">
        <div className="relative overflow-hidden rounded-2xl bg-zinc-950">
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            className="h-44 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/18 to-transparent" />
        </div>
        <p className="text-left text-base leading-8 text-zinc-700 dark:text-zinc-300">
          {description}
        </p>
      </div>
    </div>
  )
}

const items: MethodologyItem[] = [
  {
    step: '01',
    title: 'Consultoría y Diagnóstico',
    description:
      'Analizamos procesos, objetivos y necesidades técnicas para definir una hoja de ruta realista desde el inicio.',
    videoSrc: '/videos/metodologia_1.webm',
    content: (
      <MethodologyVideo
        step="01"
        title="Consultoría y Diagnóstico"
        description="Analizamos procesos, objetivos y necesidades técnicas para definir una hoja de ruta realista desde el inicio."
        src="/videos/metodologia_1.webm"
      />
    ),
  },
  {
    step: '02',
    title: 'Arquitectura y Diseño',
    description:
      'Diseñamos la solución, la experiencia y la estructura tecnológica para construir sobre una base clara y escalable.',
    videoSrc: '/videos/metodologia_2.webm',
    content: (
      <MethodologyVideo
        step="02"
        title="Arquitectura y Diseño"
        description="Diseñamos la solución, la experiencia y la estructura tecnológica para construir sobre una base clara y escalable."
        src="/videos/metodologia_2.webm"
      />
    ),
  },
  {
    step: '03',
    title: 'Desarrollo Ágil',
    description:
      'Construimos en iteraciones cortas con entregas frecuentes, visibilidad constante y capacidad de adaptación.',
    videoSrc: '/videos/metodologia_3.webm',
    content: (
      <MethodologyVideo
        step="03"
        title="Desarrollo Ágil"
        description="Construimos en iteraciones cortas con entregas frecuentes, visibilidad constante y capacidad de adaptación."
        src="/videos/metodologia_3.webm"
      />
    ),
  },
  {
    step: '04',
    title: 'Seguridad y Calidad',
    description:
      'Aplicamos pruebas, revisiones y buenas prácticas para asegurar un resultado confiable, seguro y mantenible.',
    videoSrc: '/videos/metodologia_4.mp4',
    content: (
      <MethodologyVideo
        step="04"
        title="Seguridad y Calidad"
        description="Aplicamos pruebas, revisiones y buenas prácticas para asegurar un resultado confiable, seguro y mantenible."
        src="/videos/metodologia_4.mp4"
      />
    ),
  },
  {
    step: '05',
    title: 'Lanzamiento y Soporte',
    description:
      'Acompañamos la salida a producción, el monitoreo y la evolución del proyecto para sostener su crecimiento.',
    videoSrc: '/videos/metodologia_5.webm',
    content: (
      <MethodologyVideo
        step="05"
        title="Lanzamiento y Soporte"
        description="Acompañamos la salida a producción, el monitoreo y la evolución del proyecto para sostener su crecimiento."
        src="/videos/metodologia_5.webm"
      />
    ),
  },
]

export default function Methodology() {
  const [active, setActive] = React.useState(0)

  return (
    <section id="metodologia" className="relative w-full py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-16">
          <div className="flex h-full flex-col">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Metodología
            </h2>
            <p className="mb-10 max-w-md text-base text-zinc-500 dark:text-zinc-400">
              Así convertimos una necesidad tecnológica en una solución segura,
              escalable y lista para operar.
            </p>

            <ul className="flex flex-1 flex-col gap-1">
              {items.map((item, index) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.07,
                    ease: 'easeOut',
                  }}
                  onClick={() => setActive(index)}
                  className={cn(
                    'cursor-pointer rounded-xl px-4 py-3.5 transition-all duration-200 lg:flex lg:items-center lg:gap-4',
                    active === index
                      ? 'ring-1 ring-foreground'
                      : 'ring-1 ring-transparent',
                  )}
                >
                  <div className="flex w-full flex-row items-center gap-4 lg:contents">
                    <span
                      className={cn(
                        'flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-medium transition-colors duration-200',
                        active === index
                          ? 'bg-foreground text-background'
                          : 'bg-muted text-muted-foreground',
                      )}
                    >
                      {item.step}
                    </span>
                    <span
                      className={cn(
                        'text-sm font-medium transition-colors duration-200',
                        active === index
                          ? 'text-foreground'
                          : 'text-muted-foreground',
                      )}
                    >
                      {item.title}
                    </span>
                  </div>

                  <AnimatePresence initial={false}>
                    {active === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        className="w-full overflow-hidden lg:hidden"
                      >
                        <MobileMethodologyDetail
                          description={item.description}
                          src={item.videoSrc}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="hidden self-end lg:block">
            <Card className="relative aspect-4/3 w-full gap-0 overflow-hidden p-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute inset-0"
                >
                  {items[active].content}
                </motion.div>
              </AnimatePresence>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
