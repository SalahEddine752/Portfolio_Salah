import { useI18n } from '../../i18n/context'
import { Section } from '../layout/Section'
import { SectionHeader } from '../layout/SectionHeader'
import { ProjectCard } from '../project/ProjectCard'
import { Reveal } from '../ui/Reveal'

export function FeaturedProjects() {
  const { t, cv } = useI18n()
  const featured = cv.projects.filter((project) => project.featured)

  return (
    <Section id="projets" ariaLabel={t.ui.projects.aria}>
      <SectionHeader
        index="05"
        eyebrow={t.ui.projects.eyebrow}
        title={t.ui.projects.title}
        description={t.ui.projects.description}
      />

      <div className="projects-grid grid gap-6 md:grid-cols-2">
        {featured.map((project, index) => (
          <Reveal key={project.id} delay={index * 60} className="h-full">
            <ProjectCard project={project} className="h-full" />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
