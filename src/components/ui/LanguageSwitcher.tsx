import { useI18n } from '../../i18n/context'
import { cn } from '../../lib/cn'

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, t, setLocale } = useI18n()

  return (
    <div
      role="group"
      aria-label={t.ui.lang.label}
      className={cn('inline-flex items-center rounded-sm border border-line p-0.5', className)}
    >
      {t.ui.lang.options.map((option) => {
        const active = option.code === locale
        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLocale(option.code)}
            aria-pressed={active}
            className={cn(
              'inline-flex h-7 items-center rounded-xs px-2 font-mono text-[0.65rem] font-medium tracking-wide transition-colors duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]',
              active
                ? 'bg-brand text-on-brand'
                : 'text-ink-2 hover:text-ink',
            )}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}