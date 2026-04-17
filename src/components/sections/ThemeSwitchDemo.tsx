import * as React from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Laptop, Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from 'next-themes'

import WhatsAppLogo from '@/assets/icons-whatsapp.svg'

import { ThemeSwitch } from '@/components/ui/theme-switch'
import { cn } from '@/lib/utils'

const mobileNavLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Contacto', href: '#contacto' },
]

const BUSINESS_WHATSAPP_NUMBER = '51999999999'

function createWhatsAppMenuUrl() {
  const message =
    'Hola, quiero conversar sobre una solución digital para mi negocio.'
  return `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

function WhatsAppIcon({ className }: { className?: string }) {
  return <img src={WhatsAppLogo} alt="WhatsApp" className={className} />
}

function scrollToHash(hash: string) {
  const targetId = hash.replace('#', '')
  const target = document.getElementById(targetId)

  if (!target) return

  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function MobileQuickControls() {
  const { setTheme, resolvedTheme } = useTheme()
  const [isMounted, setIsMounted] = React.useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  React.useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  if (!isMounted) return null

  const isLight = resolvedTheme !== 'dark'

  const handleNavClick = (href: string) => {
    setMenuOpen(false)

    window.setTimeout(() => {
      scrollToHash(href)
    }, 180)
  }

  return (
    <>
      <div className="inline-flex items-center rounded-full border border-black/10 bg-white/90 p-1 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/80">
        <button
          type="button"
          aria-label="Activar modo claro"
          onClick={() => setTheme('light')}
          className={cn(
            'flex h-6 w-6 items-center justify-center rounded-full transition-colors',
            isLight
              ? 'bg-black text-white dark:bg-white dark:text-black'
              : 'text-zinc-500 dark:text-zinc-400',
          )}
        >
          <Sun size={15} />
        </button>
        <button
          type="button"
          aria-label="Activar modo oscuro"
          onClick={() => setTheme('dark')}
          className={cn(
            'flex h-6 w-6 items-center justify-center rounded-full transition-colors',
            !isLight
              ? 'bg-black text-white dark:bg-white dark:text-black'
              : 'text-zinc-500 dark:text-zinc-400',
          )}
        >
          <Moon size={15} />
        </button>
        <button
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMenuOpen((prev) => !prev)}
          className={cn(
            'flex h-6 w-6 items-center justify-center rounded-full transition-colors',
            menuOpen
              ? 'bg-black text-white dark:bg-white dark:text-black'
              : 'text-zinc-500 dark:text-zinc-400',
          )}
        >
          {menuOpen ? <X size={15} /> : <Menu size={15} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              type="button"
              aria-label="Cerrar menú"
              onClick={() => setMenuOpen(false)}
              className="absolute inset-0 bg-black/25 backdrop-blur-sm dark:bg-black/45"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-white px-6 pb-10 pt-7 text-zinc-950 shadow-2xl dark:bg-zinc-950 dark:text-white"
            >
              <div className="mb-12 flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-500/90">
                    CyberSys
                  </p>
                  <p className="mt-2 max-w-[13rem] text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                    Navega por nuestras soluciones, metodología y casos reales.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Cerrar menú"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-zinc-900 transition-colors hover:bg-black/5 dark:border-white/10 dark:text-white dark:hover:bg-white/5"
                >
                  <X size={20} />
                </button>
              </div>

              <ul className="flex flex-1 flex-col justify-center gap-5">
                {mobileNavLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 28 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 18 }}
                    transition={{ delay: 0.08 + index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={(event) => {
                        event.preventDefault()
                        handleNavClick(link.href)
                      }}
                      className="flex items-baseline gap-4 text-zinc-950 transition-transform duration-200 hover:translate-x-1.5 dark:text-white"
                    >
                      <span className="text-xs font-medium tracking-[0.18em] text-rose-500/90">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <span className="text-[clamp(1.85rem,7vw,2.6rem)] font-semibold leading-none tracking-tight">
                        {link.label}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href={createWhatsAppMenuUrl()}
                onClick={() => setMenuOpen(false)}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ delay: 0.28 }}
                className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-zinc-950 px-6 py-4 text-sm font-semibold tracking-[0.08em] text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              >
                Solicitar asesoría
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
              </motion.a>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default function ThemeSwitchDemo() {
  return (
    <>
      <div className="md:hidden">
        <MobileQuickControls />
      </div>

      <div className="hidden md:block">
        <ThemeSwitch
          variant="icon-click"
          modes={['light', 'dark', 'system']}
          icons={[
            <Sun key="sun-icon" size={16} />,
            <Moon key="moon-icon" size={16} />,
            <Laptop key="laptop-icon" size={16} />,
          ]}
          showInactiveIcons="all"
        />
      </div>
    </>
  )
}
