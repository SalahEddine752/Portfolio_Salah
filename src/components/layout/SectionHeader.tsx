import { cn } from '../../lib/cn'
import { Reveal } from '../ui/Reveal'

interface SectionHeaderProps {
  /** Two-digit index, e.g. "01" */
  index: string
  eyebrow: string
  title: string
  description?: string
  className?: string
}

export function SectionHeader({ index, eyebrow, title, description, className }: SectionHeaderProps) {
  return (
    <Reveal as="header" className={cn('mb-8 md:mb-10', className)}>
      <p className="mb-4 flex items-center gap-3 font-mono text-[0.75rem] font-medium tracking-[0.14em] text-brand uppercase">
        <span>{index}</span>
        <span aria-hidden="true" className="h-px w-6 bg-brand/50" />
        <span>{eyebrow}</span>
      </p>
      <h2 className="max-w-3xl text-[1.75rem] leading-[1.1] md:text-[2.25rem] lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-[60ch] text-base text-pretty text-ink-2 md:text-lg">{description}</p>
      )}
    </Reveal>
  )
}
