import { Building2, CalendarDays } from 'lucide-react'
import { useI18n } from '../../i18n/context'
import { Section } from '../layout/Section'
import { SectionHeader } from '../layout/SectionHeader'
import { Card } from '../ui/Card'
import { Reveal } from '../ui/Reveal'

export function Experience() {
  const { t, cv } = useI18n()

  return (
    <Section id="experience" ariaLabel={t.ui.experience.aria}>
      <SectionHeader index="03" eyebrow={t.ui.experience.eyebrow} title={t.ui.experience.title} />

      <ol className="relative space-y-5 border-s border-line ps-6 md:ps-10">
        {cv.experience.map((item, index) => (
          <Reveal key={item.id} delay={index * 60} as="li" className="relative">
            <span
              aria-hidden="true"
              className="absolute top-7 -start-[1.75rem] h-2 w-2 rounded-full bg-brand ring-4 ring-paper md:-start-[2.75rem]"
            />
            <Card>
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                <div>
                  <h3 className="text-lg font-bold md:text-xl">{item.role}</h3>
                  {item.company && (
                    <p className="mt-1 flex items-center gap-2 text-sm text-ink-2">
                      <Building2 size={14} aria-hidden="true" className="text-brand" />
                      {item.company}
                    </p>
                  )}
                </div>
                {item.period && (
                  <p className="flex shrink-0 items-center gap-2 font-mono text-[0.72rem] text-ink-3">
                    <CalendarDays size={13} aria-hidden="true" />
                    {item.period}
                  </p>
                )}
              </div>

              {item.tasks.length > 0 && (
                <ul className="mt-4 space-y-2 text-sm text-ink-2">
                  {item.tasks.map((task) => (
                    <li key={task} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                      {task}
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}