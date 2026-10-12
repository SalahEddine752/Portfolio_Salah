import { useI18n } from '../../i18n/context'
import { cn } from '../../lib/cn'
import { technologyIcon } from './technologyIcon'

interface TechStackProps {
  items: string[]
  className?: string
}

/**
 * Compact, responsive technology row.
 * Brand marks are inlined (Simple Icons); technologies without an official
 * mark fall back to a neutral glyph from lucide-react.
 */
export function TechStack({ items, className }: TechStackProps) {
  const { t } = useI18n()

  return (
    <ul
      aria-label={t.ui.hero.techLabel}
      className={cn('flex flex-wrap items-center gap-2', className)}
    >
      {items.map((item) => {
        const Icon = technologyIcon(item)
        return (
          <li
            key={item}
            className="group flex items-center gap-1.5 rounded-md border border-line bg-surface px-2.5 py-1 transition-[background-color,border-color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-brand/35 hover:bg-brand-soft/40"
          >
            <Icon
              className="size-4 shrink-0 text-brand transition-colors duration-200"
              aria-hidden="true"
            />
            <span className="text-[0.75rem] font-medium whitespace-nowrap text-ink-2 transition-colors duration-200 group-hover:text-ink">
              {item}
            </span>
          </li>
        )
      })}
    </ul>
  )
}