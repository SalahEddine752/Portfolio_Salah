import type { LucideIcon } from 'lucide-react'
import { Card } from './Card'

interface InfoCardProps {
  icon: LucideIcon
  /** Small mono line above the title (e.g. a date range) */
  meta?: string
  title: string
  description: string
}

/** Flat information card used for education, certifications, etc. */
export function InfoCard({ icon: Icon, meta, title, description }: InfoCardProps) {
  return (
    <Card className="flex h-full items-start gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-brand-soft text-brand">
        <Icon size={16} aria-hidden="true" />
      </span>
      <div>
        {meta && <p className="font-mono text-[0.7rem] tracking-wide text-brand">{meta}</p>}
        <h3 className="text-base font-bold md:text-lg">{title}</h3>
        <p className="mt-1 text-sm text-ink-2">{description}</p>
      </div>
    </Card>
  )
}