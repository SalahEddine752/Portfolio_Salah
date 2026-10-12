import { useCallback, useEffect, useRef, useState } from 'react'
import { Download, Menu } from 'lucide-react'
import { navItems } from '../../data/nav'
import { useI18n } from '../../i18n/context'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { useScrolled } from '../../hooks/useScrolled'
import { cn } from '../../lib/cn'
import { LanguageSwitcher } from '../ui/LanguageSwitcher'
import { ThemeToggle } from '../ui/ThemeToggle'
import { MobileMenu } from './MobileMenu'

const sectionIds = navItems.map((item) => item.id)

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const scrolled = useScrolled(24)
  const activeId = useScrollSpy(sectionIds)
  const { t } = useI18n()

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-40 border-b pt-[env(safe-area-inset-top)] backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
          scrolled ? 'border-line shadow-[var(--sh-xs)]' : 'border-transparent',
        )}
        style={{ backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent' }}
      >
        <div className="container-site flex h-16 items-center justify-between gap-4">
          <a href="#accueil" className="font-display text-lg font-extrabold tracking-tight text-ink">
            Salah Eddine<span className="text-brand">.</span>
          </a>

          <nav aria-label={t.ui.navbar.mainNavAria} className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const active = activeId === item.id
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={active ? 'location' : undefined}
                      className={cn(
                        'relative inline-flex h-16 items-center whitespace-nowrap px-3 text-sm font-medium transition-colors duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]',
                        active ? 'text-brand' : 'text-ink-2 hover:text-ink',
                      )}
                    >
                      {t.ui.nav[item.id]}
                      <span
                        aria-hidden="true"
                        className={cn(
                          'absolute inset-x-3 bottom-4 h-0.5 origin-left bg-brand transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] rtl:origin-right',
                          active ? 'scale-x-100' : 'scale-x-0',
                        )}
                      />
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher className="hidden lg:inline-flex" />
            <ThemeToggle />
            <a
              href="/CV_Benyich_SalahEddine.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.ui.navbar.cvAria}
              className="hidden h-10 items-center gap-2 rounded-sm border border-line px-3 text-sm font-medium text-ink transition-[transform,box-shadow,border-color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-px hover:border-brand/45 hover:shadow-sm active:translate-y-0 md:inline-flex"
            >
              <Download size={15} aria-hidden="true" />
              CV
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={t.ui.navbar.openMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="inline-flex h-10 w-10 touch-manipulation items-center justify-center rounded-sm border border-line text-ink transition-[transform,shadow,border-color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-px hover:border-brand/45 hover:shadow-sm active:translate-y-0 lg:hidden"
            >
              <Menu size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        activeId={activeId}
        onClose={closeMenu}
        returnFocusTo={menuButtonRef}
      />
    </>
  )
}
