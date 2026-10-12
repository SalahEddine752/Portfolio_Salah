import { Mail } from 'lucide-react'
import { useI18n } from '../../i18n/context'
import { cn } from '../../lib/cn'
import { GithubIcon, LinkedinIcon } from './TechIcons'

const SOCIAL_LINKS = [
  {
    key: 'linkedin',
    href: 'https://www.linkedin.com/in/salah-eddine-benyich-199a39347/',
    external: true,
    Icon: LinkedinIcon,
  },
  {
    key: 'github',
    href: 'https://github.com/SalahEddine752',
    external: true,
    Icon: GithubIcon,
  },
  {
    key: 'email',
    href: 'mailto:salaheddineben777@gmail.com',
    external: false,
    Icon: Mail,
  },
] as const

interface SocialLinksProps {
  className?: string
}

/**
 * Real, non-fake social destinations (LinkedIn, GitHub, email).
 * Brand marks are inlined Simple Icons; the email uses the lucide envelope.
 * External links open in a new tab with rel="noopener noreferrer".
 */
export function SocialLinks({ className }: SocialLinksProps) {
  const { t } = useI18n()

  return (
    <ul className={cn('flex items-center gap-1', className)}>
      {SOCIAL_LINKS.map(({ key, href, external, Icon }) => (
        <li key={key}>
          <a
            href={href}
            aria-label={t.ui.social[key]}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="inline-flex h-11 w-11 touch-manipulation items-center justify-center rounded-md text-ink-2 transition-[transform,background-color,color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-px hover:bg-brand-soft/60 hover:text-brand active:translate-y-0"
          >
            <Icon size={20} aria-hidden="true" className="size-5" />
          </a>
        </li>
      ))}
    </ul>
  )
}