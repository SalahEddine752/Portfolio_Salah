import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Variant = 'primary' | 'secondary'
type Size = 'sm' | 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary:
    'bg-linear-to-r from-blue-600 to-violet-600 text-white shadow-[0_5px_16px_-5px_rgb(37_99_235_/_0.45)] hover:-translate-y-px hover:shadow-[0_10px_22px_-6px_rgb(124_58_237_/_0.5)] hover:brightness-110 active:translate-y-0 active:scale-[0.99] dark:from-blue-500 dark:to-violet-500 dark:shadow-[0_6px_18px_-6px_rgb(59_130_246_/_0.45)] dark:hover:shadow-[0_10px_24px_-6px_rgb(139_92_246_/_0.55)]',
  secondary:
    'border border-ink/30 bg-transparent text-ink hover:-translate-y-px hover:border-brand/60 hover:bg-brand-soft/60 hover:text-brand hover:shadow-sm active:translate-y-0 active:scale-[0.99] dark:border-white/40 dark:hover:border-brand/70 dark:hover:bg-brand-soft',
}

const sizes: Record<Size, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-11 px-6 text-sm md:text-base',
  lg: 'h-12 px-7 text-base',
}

const base =
  'inline-flex touch-manipulation items-center justify-center gap-2.5 rounded-md font-medium transition-[transform,box-shadow,filter,background-color,border-color,color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'

interface StyleProps {
  variant?: Variant
  size?: Size
  className?: string
}

function classes({ variant = 'primary', size = 'md', className }: StyleProps) {
  return cn(base, variants[variant], sizes[size], className)
}

type ButtonLinkProps = StyleProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    href: string
    children: ReactNode
  }

export function Button({
  href,
  variant,
  size,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <a href={href} className={classes({ variant, size, className })} {...rest}>
      {children}
    </a>
  )
}
