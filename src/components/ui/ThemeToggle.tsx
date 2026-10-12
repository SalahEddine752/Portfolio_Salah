import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useI18n } from '../../i18n/context'
import { applyTheme, getSystemTheme, type Theme } from '../../lib/theme'
import { cn } from '../../lib/cn'

function initialTheme(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>(initialTheme)
  const { t } = useI18n()

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const sync = () => {
      if (!document.documentElement.classList.contains('dark') && media.matches) {
        setTheme(getSystemTheme())
      }
    }
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    applyTheme(next)
  }

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={isDark ? t.ui.theme.lightAria : t.ui.theme.darkAria}
      className={cn(
        'inline-flex h-10 w-10 touch-manipulation items-center justify-center rounded-sm border border-line text-ink-2 transition-colors duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-brand/45 hover:text-ink',
        className,
      )}
    >
      {isDark ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
    </button>
  )
}