import { Braces, Code2, PanelTop, Wrench } from 'lucide-react'
import type { Service } from '../../data/cv'
import { useI18n } from '../../i18n/context'
import { Section } from '../layout/Section'
import { SectionHeader } from '../layout/SectionHeader'
import { Card } from '../ui/Card'
import { Reveal } from '../ui/Reveal'

const icons: Record<Service['icon'], typeof Code2> = {
  code: Code2,
  api: Braces,
  ui: PanelTop,
  wrench: Wrench,
}

export function Services() {
  const { t, cv } = useI18n()

  return (
    <Section id="services" band ariaLabel={t.ui.services.aria}>
      <SectionHeader
        index="06"
        eyebrow={t.ui.services.eyebrow}
        title={t.ui.services.title}
        description={t.ui.services.description}
      />

      <div className="grid gap-5 md:grid-cols-2">
        {cv.services.map((service, index) => {
          const Icon = icons[service.icon]
          return (
            <Reveal key={service.id} delay={index * 60} className="h-full">
              <Card className="flex h-full items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-brand-soft text-brand">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-bold md:text-lg">{service.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{service.description}</p>
                </div>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}