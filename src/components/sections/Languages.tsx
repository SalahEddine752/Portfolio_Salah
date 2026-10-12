import { useI18n } from '../../i18n/context'
import { Section } from '../layout/Section'
import { SectionHeader } from '../layout/SectionHeader'
import { Card } from '../ui/Card'
import { Reveal } from '../ui/Reveal'

export function Languages() {
  const { t, cv } = useI18n()

  return (
    <Section id="langues" band ariaLabel={t.ui.languages.aria}>
      <SectionHeader index="08" eyebrow={t.ui.languages.eyebrow} title={t.ui.languages.title} />

      <div className="grid gap-5 md:grid-cols-3">
        {cv.languages.map((language, index) => (
          <Reveal key={language.id} delay={index * 60} className="h-full">
            <Card className="flex h-full flex-col justify-between gap-5">
              <h3 className="text-lg font-bold">{language.name}</h3>
              <span className="inline-flex w-fit items-center rounded-xs bg-brand-soft px-2.5 py-1 font-mono text-[0.68rem] tracking-[0.12em] text-brand uppercase">
                {language.level}
              </span>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}