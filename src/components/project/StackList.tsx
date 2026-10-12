import { Badge } from '../ui/Badge'

export function StackList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className ?? ''}`}>
      {items.map((item) => (
        <li key={item}>
          <Badge className="transition-colors duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-brand-soft hover:text-brand">
            {item}
          </Badge>
        </li>
      ))}
    </ul>
  )
}
