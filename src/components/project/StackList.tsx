import type { CSSProperties } from 'react'
import { technologyBrand, technologyIcon } from '../ui/technologyIcon'
import { Badge } from '../ui/Badge'

export function StackList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className ?? ''}`}>
      {items.map((item) => {
        const Icon = technologyIcon(item)
        const brand = technologyBrand(item)
        return (
          <li key={item}>
            <Badge
              style={{ '--tech-l': brand.light, '--tech-d': brand.dark } as CSSProperties}
              className="tech-badge gap-1.5 border border-transparent transition-[border-color,background-color,color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              <Icon className="tech-mark size-3.5 shrink-0" aria-hidden="true" />
              {item}
            </Badge>
          </li>
        )
      })}
    </ul>
  )
}
