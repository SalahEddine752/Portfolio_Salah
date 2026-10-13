import { ArrowRight, Check, ExternalLink, FolderGit2, Info } from 'lucide-react'
import type { Project } from '../../data/cv'
import { useI18n } from '../../i18n/context'
import { useDiscussion } from '../../context/discussionContext'
import { cn } from '../../lib/cn'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { ProjectDetails } from './ProjectDetails'
import { ProjectVisual } from './ProjectVisual'
import { StackList } from './StackList'

interface ProjectCardProps {
  project: Project
  /** Large, dominant layout for the first project */
  featured?: boolean
  className?: string
}

function Label({ children }: { children: string }) {
  return (
    <p className="mb-3 font-mono text-[0.68rem] font-medium tracking-[0.14em] text-ink-3 uppercase">
      {children}
    </p>
  )
}

export function ProjectCard({ project, featured, className }: ProjectCardProps) {
  const { t } = useI18n()
  const { discuss } = useDiscussion()

  return (
    <article
      className={cn(
        'project-card group overflow-hidden rounded-lg border border-line bg-surface shadow-xs transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] hover:border-brand/35 hover:shadow-md',
        featured ? 'lg:grid lg:grid-cols-[0.95fr_1.05fr]' : 'flex h-full flex-col',
        className,
      )}
    >
      <ProjectVisual project={project} featured={featured} />

      <div
        className={cn(
          'flex flex-1 flex-col p-5 md:p-6',
          featured && 'lg:justify-center lg:p-8',
        )}
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          {project.context && <Badge variant="brand">{project.context}</Badge>}
          <span className="font-mono text-[0.7rem] tracking-[0.14em] text-ink-3 uppercase">
            {project.type}
          </span>
          {project.status && (
            <span className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] tracking-[0.14em] text-ink-3 uppercase">
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-brand" />
              {project.status}
            </span>
          )}
        </div>

        <h3
          className={cn(
            'mt-3 font-bold tracking-tight text-ink',
            featured ? 'text-2xl md:text-3xl' : 'text-xl',
          )}
        >
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-2 md:text-[0.95rem]">
          {project.subtitle}
        </p>

        <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-pretty text-ink-2">
          {project.description}
        </p>

        <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-ink-3">
          <Info size={13} aria-hidden="true" className="mt-0.5 shrink-0 text-brand/70" />
          {t.ui.projects.previewNote}
        </p>

        <div className="mt-6">
          <Label>{t.ui.projects.featuresLabel}</Label>
          <ul className="space-y-2 text-sm leading-relaxed text-ink-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <Check
                  size={15}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-brand"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <Label>{t.ui.projects.techLabel}</Label>
          <StackList items={project.stack} />
        </div>

        <div className="mt-auto">
          <ProjectDetails items={project.highlights} />

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
              >
                <ExternalLink size={15} aria-hidden="true" />
                {t.ui.projects.demo}
              </Button>
            )}
            {project.repoUrl && (
              <Button
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="sm"
              >
                <FolderGit2 size={15} aria-hidden="true" />
                {t.ui.projects.source}
              </Button>
            )}
            <button
              type="button"
              onClick={() => discuss(project.name)}
              className="group/cta inline-flex touch-manipulation items-center gap-1.5 py-2 text-sm font-medium text-brand transition-colors duration-200 hover:text-brand/80"
            >
              {t.ui.projects.discuss}
              <ArrowRight
                size={15}
                aria-hidden="true"
                className="transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/cta:translate-x-1 rtl:rotate-180 rtl:group-hover/cta:-translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
