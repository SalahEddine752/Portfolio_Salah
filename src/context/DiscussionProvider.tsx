import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { DiscussionContext } from './discussionContext'

export function DiscussionProvider({ children }: { children: ReactNode }) {
  const [project, setProject] = useState<string | null>(null)

  const discuss = useCallback((projectName: string) => {
    setProject(projectName)

    const target = document.getElementById('contact')
    if (!target) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })

    window.setTimeout(
      () => document.getElementById('contact-topic')?.focus(),
      reduceMotion ? 0 : 450,
    )
  }, [])

  const clear = useCallback(() => setProject(null), [])

  const value = useMemo(() => ({ project, discuss, clear }), [project, discuss, clear])

  return <DiscussionContext.Provider value={value}>{children}</DiscussionContext.Provider>
}
