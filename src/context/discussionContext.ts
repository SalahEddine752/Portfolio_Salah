import { createContext, useContext } from 'react'

export interface DiscussionContextValue {
  /** Project the visitor wants to talk about, or null when none is selected. */
  project: string | null
  /** Select a project and move the visitor to the contact section. */
  discuss: (projectName: string) => void
  /** Clear the selected project. */
  clear: () => void
}

export const DiscussionContext = createContext<DiscussionContextValue | null>(null)

export function useDiscussion(): DiscussionContextValue {
  const context = useContext(DiscussionContext)
  if (!context) {
    throw new Error('useDiscussion must be used within a DiscussionProvider')
  }
  return context
}
