import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface CardProps {
  children: ReactNode
  className?: string
}

/** Flat content card — borders only, no elevation (shadows are reserved for focus surfaces). */
export function Card({ children, className }: CardProps) {
  return (
    <div className={cn('rounded-lg border border-line bg-surface p-5 md:p-6', className)}>
      {children}
    </div>
  )
}
