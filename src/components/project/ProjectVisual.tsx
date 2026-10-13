import type { Project, ProjectVisualKind } from '../../data/cv'
import { useI18n } from '../../i18n/context'
import { cn } from '../../lib/cn'

interface Preview {
  light: string
  dark: string
}

/**
 * Conceptual UI previews (light + dark) for each project.
 * These are representative product concepts, not screenshots of a real
 * running application. Files live in /public/images/projects.
 */
const previews: Record<ProjectVisualKind, Preview> = {
  b2b: {
    light: '/images/projects/b2bconnect-preview.png',
    dark: '/images/projects/b2bconnect-preview-dark.png',
  },
  tva: {
    light: '/images/projects/simpl-tva-preview.png',
    dark: '/images/projects/simpl-tva-preview-dark.png',
  },
  pos: {
    light: '/images/projects/librapos-preview.png',
    dark: '/images/projects/librapos-preview-dark.png',
  },
}

interface ProjectVisualProps {
  project: Project
  featured?: boolean
}

export function ProjectVisual({ project, featured }: ProjectVisualProps) {
  const { t } = useI18n()
  const preview = previews[project.visual]
  const previewAlt = t.ui.projects.previewAlt.replace('{project}', project.name)

  return (
    <div
      className={cn(
        'relative aspect-[16/10] overflow-hidden bg-surface-2',
        featured && 'lg:self-center',
      )}
    >
      <div className="project-visual absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]">
        <img
          src={preview.light}
          alt={previewAlt}
          loading="lazy"
          decoding="async"
          width={1600}
          height={1000}
          className="h-full w-full object-cover object-top dark:hidden"
        />
        <img
          src={preview.dark}
          alt={previewAlt}
          loading="lazy"
          decoding="async"
          width={1600}
          height={1000}
          className="hidden h-full w-full object-cover object-top dark:block"
        />
      </div>

      <span aria-hidden="true" className="bg-signature absolute inset-x-0 bottom-0 h-0.5" />
    </div>
  )
}
