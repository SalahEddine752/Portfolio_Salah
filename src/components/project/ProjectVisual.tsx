import { type ComponentType, type ReactNode } from 'react'
import type { Project, ProjectVisualKind } from '../../data/cv'
import { cn } from '../../lib/cn'

const initialsOf = (name: string) =>
  name
    .split(/\s+/)
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

function Node({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-sm border border-line bg-surface px-2.5 py-1.5 font-mono text-[0.6rem] tracking-wide text-ink-2 uppercase">
      {children}
    </span>
  )
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-xs bg-surface px-2 py-1 font-mono text-[0.58rem] tracking-wide text-ink-3 uppercase">
      {children}
    </span>
  )
}

/** Mise en relation clients / fournisseurs + messagerie temps réel. */
function B2bVisual() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-2">
        <span aria-hidden="true" className="h-1 w-1 rounded-full bg-brand" />
        <span aria-hidden="true" className="h-1 w-1 rounded-full bg-brand/60" />
        <span aria-hidden="true" className="h-1 w-1 rounded-full bg-brand/30" />
      </div>

      <div className="flex items-center">
        <Node>Client</Node>
        <span aria-hidden="true" className="relative mx-1.5 h-px w-8 bg-line md:w-12">
          <span className="absolute top-1/2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand" />
        </span>
        <Node>Fournisseur</Node>
      </div>

      <div className="flex flex-wrap justify-center gap-1.5">
        <Chip>Produits</Chip>
        <Chip>Commandes</Chip>
        <Chip>Utilisateurs</Chip>
      </div>
    </div>
  )
}

/** Déclaration de TVA : calcul automatique et gestion des déclarations. */
function TvaVisual() {
  return (
    <div className="w-44 rounded-sm border border-line bg-surface p-3.5">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-[0.58rem] tracking-wide text-ink-3 uppercase">
          Déclaration TVA
        </span>
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />
      </div>

      <div aria-hidden="true" className="space-y-2">
        <span className="block h-1.5 w-full rounded-full bg-surface-2" />
        <span className="block h-1.5 w-4/5 rounded-full bg-surface-2" />
        <span className="block h-1.5 w-2/3 rounded-full bg-surface-2" />
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-xs bg-brand-soft px-2 py-1.5">
        <span className="font-mono text-[0.58rem] tracking-wide text-brand uppercase">TVA</span>
        <span aria-hidden="true" className="bg-signature h-1.5 flex-1 rounded-full" />
      </div>
    </div>
  )
}

/** Réservation de films et gestion des séances. */
function CinemaVisual() {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="font-mono text-[0.58rem] tracking-wide text-ink-3 uppercase">Séances</span>
      <div aria-hidden="true" className="grid grid-cols-5 gap-1.5">
        {Array.from({ length: 15 }, (_, index) => (
          <span
            key={index}
            className={cn(
              'h-4 w-4 rounded-xs',
              [4, 7, 11].includes(index) ? 'bg-brand' : 'border border-line bg-surface',
            )}
          />
        ))}
      </div>
      <span className="font-mono text-[0.58rem] tracking-wide text-ink-3 uppercase">Réservation</span>
    </div>
  )
}

const visuals: Record<ProjectVisualKind, ComponentType> = {
  b2b: B2bVisual,
  tva: TvaVisual,
  cinema: CinemaVisual,
}

interface ProjectVisualProps {
  project: Project
  featured?: boolean
}

/**
 * Visuel abstrait construit à partir du concept réel du projet.
 * Ce n'est pas une capture d'écran — le CV ne fournit aucune image.
 */
export function ProjectVisual({ project, featured }: ProjectVisualProps) {
  const Visual = visuals[project.visual]

  return (
    <div
      aria-hidden="true"
      className={cn(
        'relative flex items-center justify-center overflow-hidden bg-surface-2 p-6',
        featured
          ? 'min-h-[240px] lg:aspect-auto lg:h-full lg:min-h-[300px]'
          : 'aspect-[16/10]',
      )}
    >
      <div className="relative flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]">
        <span
          aria-hidden="true"
          className="absolute font-display text-[6rem] leading-none font-extrabold tracking-tight text-ink/[0.045] select-none md:text-[7.5rem]"
        >
          {initialsOf(project.name)}
        </span>

        <div className="relative">
          <Visual />
        </div>
      </div>

      <span aria-hidden="true" className="bg-signature absolute inset-x-0 bottom-0 h-0.5" />
    </div>
  )
}
