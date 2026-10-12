import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { Container } from './Container'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
  /** Alternating background band */
  band?: boolean
  /** Accessible label for the landmark, defaults to the section heading */
  ariaLabel?: string
}

export function Section({ id, children, className, band, ariaLabel }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn('scroll-mt-20 py-14 md:py-16 lg:py-20', band && 'section-band', className)}
    >
      <Container>{children}</Container>
    </section>
  )
}