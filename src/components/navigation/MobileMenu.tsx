import { useEffect, useRef, type RefObject } from 'react'
import { X } from 'lucide-react'
import { navItems } from '../../data/nav'
import { useI18n } from '../../i18n/context'
import { cn } from '../../lib/cn'
import { LanguageSwitcher } from '../ui/LanguageSwitcher'

interface MobileMenuProps {
  open: boolean
  activeId: string
  onClose: () => void
  /** Element that should receive focus when the menu closes (the trigger button). */
  returnFocusTo?: RefObject<HTMLButtonElement | null>
}

export function MobileMenu({ open, activeId, onClose, returnFocusTo }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const { t, cv } = useI18n()

  const close = (restoreFocus: boolean) => {
    if (restoreFocus) returnFocusTo?.current?.focus()
    onClose()
  }

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        returnFocusTo?.current?.focus()
        onClose()
        return
      }
      if (event.key !== 'Tab' || !panelRef.current) return

      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      )
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose, returnFocusTo])

  if (!open) return null

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label={t.ui.navbar.mobileMenuAria}
      className="menu-panel fixed inset-0 z-50 flex flex-col overflow-y-auto overscroll-contain bg-surface px-6 pt-[calc(1rem+env(safe-area-inset-top))] pb-[calc(2rem+env(safe-area-inset-bottom))] lg:hidden"
    >
      <div className="flex items-center justify-between">
        <span className="font-display text-lg font-extrabold text-ink">
          Salah Eddine<span className="text-brand">.</span>
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={() => close(true)}
          aria-label={t.ui.navbar.closeMenu}
          className="inline-flex h-11 w-11 touch-manipulation items-center justify-center rounded-sm border border-line text-ink"
        >
          <X size={20} aria-hidden="true" />
        </button>
      </div>

      <nav className="mt-8 flex-1 sm:mt-12">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={item.id} className="menu-item" style={{ animationDelay: `${index * 45}ms` }}>
              <a
                href={`#${item.id}`}
                onClick={onClose}
                aria-current={activeId === item.id ? 'location' : undefined}
                className={cn(
                  'block rounded-md px-2 py-3 font-display text-2xl font-bold transition-colors duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]',
                  activeId === item.id ? 'text-brand' : 'text-ink hover:text-brand',
                )}
              >
                {t.ui.nav[item.id]}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="menu-item space-y-3 border-t border-line pt-6" style={{ animationDelay: '300ms' }}>
        <LanguageSwitcher />
        <a
          href={`mailto:${cv.profile.email}`}
          onClick={onClose}
          className="block py-1 text-sm text-ink-2 transition-colors duration-200 hover:text-brand"
        >
          {cv.profile.email}
        </a>
        <a
          href={cv.profile.phoneHref}
          onClick={onClose}
          className="block py-1 text-sm text-ink-2 transition-colors duration-200 hover:text-brand"
        >
          {cv.profile.phone}
        </a>
      </div>
    </div>
  )
}
