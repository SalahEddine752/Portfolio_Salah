import { ChevronDown } from 'lucide-react'
import { useI18n } from '../../i18n/context'

interface ProjectDetailsProps {
  items: string[]
  label?: string
}

/** Native, accessible collapsible list of technical highlights. */
export function ProjectDetails({ items, label }: ProjectDetailsProps) {
  const { t } = useI18n()
  const resolvedLabel = label ?? t.ui.projects.detailsLabel

  if (items.length === 0) return null

  return (
    <details className="group mt-5 border-t border-line pt-2">
      <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 py-3 font-mono text-[0.72rem] tracking-[0.14em] text-brand uppercase [&::-webkit-details-marker]:hidden">
        <ChevronDown
          size={14}
          aria-hidden="true"
          className="transition-transform duration-200 group-open:rotate-180"
        />
        {resolvedLabel}
      </summary>
      <ul className="mt-4 space-y-2 text-sm text-ink-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
            {item}
          </li>
        ))}
      </ul>
    </details>
  )
}
