import type { CSSProperties, ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface BadgeProps {
  children: ReactNode
  variant?: 'stack' | 'brand'
  className?: string
  style?: CSSProperties
}

export function Badge({ children, variant = 'stack', className, style }: BadgeProps) {
  return (
    <span
      style={style}
      className={cn(
        'inline-flex items-center rounded-xs px-2 py-1 font-mono text-[0.7rem] leading-none',
        variant === 'stack' ? 'bg-surface-2 text-ink-2' : 'bg-brand-soft text-brand',
        className,
      )}
    >
      {children}
    </span>
  )
}
