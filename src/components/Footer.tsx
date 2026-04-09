'use client'

import type React from 'react'
import { motion, type Variants } from 'motion/react'

import { cn } from '@/lib/utils'

function Twitter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 4.01c-1 .49-2.02.82-3.12.97A5.37 5.37 0 0 0 21.24 2a10.68 10.68 0 0 1-3.4 1.3A5.33 5.33 0 0 0 8.76 8.15 15.11 15.11 0 0 1 3 3.11a5.33 5.33 0 0 0 1.65 7.11A5.3 5.3 0 0 1 2.8 9.7v.07a5.34 5.34 0 0 0 4.27 5.23 5.4 5.4 0 0 1-1.4.18c-.34 0-.68-.03-1-.09a5.34 5.34 0 0 0 4.98 3.7A10.7 10.7 0 0 1 2 20.87 15.06 15.06 0 0 0 10.17 23c9.8 0 15.16-8.12 15.16-15.16v-.69c1.04-.74 1.95-1.66 2.67-2.71" />
    </svg>
  )
}

function Github(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-6 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.53c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function Linkedin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

interface FooterColumn {
  heading: string
  links: { text: string; url: string }[]
}

interface FooterProps {
  brandName?: string
  tagline?: string
  columns?: FooterColumn[]
  socials?: {
    twitter?: string
    github?: string
    linkedin?: string
  }
  copyright?: string
  legalLinks?: { text: string; url: string }[]
  className?: string
}

const defaultColumns: FooterColumn[] = [
  {
    heading: 'Servicios',
    links: [
      { text: 'Desarrollo de software', url: '#' },
      { text: 'Ciberseguridad', url: '#' },
      { text: 'Infraestructura cloud', url: '#' },
      { text: 'Automatización', url: '#' },
    ],
  },
  {
    heading: 'Empresa',
    links: [
      { text: 'Nosotros', url: '#' },
      { text: 'Metodología', url: '#' },
      { text: 'Casos de éxito', url: '#' },
      { text: 'Contacto', url: '#' },
    ],
  },
  {
    heading: 'Recursos',
    links: [
      { text: 'Documentación', url: '#' },
      { text: 'Centro de ayuda', url: '#' },
      { text: 'Estado del servicio', url: '#' },
      { text: 'Comunidad', url: '#' },
    ],
  },
]

const defaultLegalLinks = [
  { text: 'Términos', url: '#' },
  { text: 'Privacidad', url: '#' },
  { text: 'Cookies', url: '#' },
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Footer({
  brandName = 'CyberSys',
  tagline = 'Tecnología. Estrategia. Ejecución.',
  columns = defaultColumns,
  socials = { twitter: '#', github: '#', linkedin: '#' },
  copyright = '© 2026 CyberSys. Todos los derechos reservados.',
  legalLinks = defaultLegalLinks,
  className,
}: FooterProps) {
  return (
    <footer
      className={cn(
        'relative w-full overflow-hidden bg-white select-none dark:bg-neutral-950',
        className,
      )}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 px-8 pt-16 pb-10 md:px-16 md:pt-16"
      >
        <motion.p
          variants={itemVariants}
          className="mb-10 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500"
        >
          {tagline}
        </motion.p>

        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="grid grid-cols-2 gap-x-12 gap-y-8 md:grid-cols-3 md:gap-x-20">
            {columns.map((col, ci) => (
              <motion.div key={ci} variants={itemVariants}>
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  {col.heading}
                </p>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link, li) => (
                    <li key={li}>
                      <a
                        href={link.url}
                        className="text-sm font-medium text-zinc-700 transition-colors duration-200 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="md:text-right">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Redes
            </p>
            <div className="flex items-center gap-3 md:justify-end">
              {socials.twitter && (
                <a
                  href={socials.twitter}
                  aria-label="Twitter / X"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-200 text-zinc-600 transition-all duration-200 hover:bg-zinc-300 hover:text-zinc-900 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white"
                >
                  <Twitter className="h-3.5 w-3.5" />
                </a>
              )}
              {socials.github && (
                <a
                  href={socials.github}
                  aria-label="GitHub"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-200 text-zinc-600 transition-all duration-200 hover:bg-zinc-300 hover:text-zinc-900 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white"
                >
                  <Github className="h-3.5 w-3.5" />
                </a>
              )}
              {socials.linkedin && (
                <a
                  href={socials.linkedin}
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-200 text-zinc-600 transition-all duration-200 hover:bg-zinc-300 hover:text-zinc-900 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 border-t border-zinc-300 dark:border-zinc-800"
        />

        <motion.div
          variants={itemVariants}
          className="mt-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
        >
          <p className="text-xs text-zinc-400 dark:text-zinc-500">{copyright}</p>
          <div className="flex items-center gap-5">
            {legalLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                className="text-xs text-zinc-400 transition-colors hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300"
              >
                {link.text}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
