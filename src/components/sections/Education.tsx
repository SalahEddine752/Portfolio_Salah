import { GraduationCap } from 'lucide-react'
import { useI18n } from '../../i18n/context'
import { Section } from '../layout/Section'
import { SectionHeader } from '../layout/SectionHeader'
import { InfoCard } from '../ui/InfoCard'
import { Reveal } from '../ui/Reveal'

export function Education() {
  const { t, cv } = useI18n()

  return (
    <Section id="education" band ariaLabel={t.ui.education.aria}>
      <SectionHeader index="04" eyebrow={t.ui.education.eyebrow} title={t.ui.education.title} />

      <div className="grid gap-5 md:grid-cols-2">
        {cv.education.map((item, index) => (
          <Reveal key={item.id} delay={index * 60}>
            <InfoCard
              icon={GraduationCap}
              meta={item.period}
              title={item.school}
              description={item.degree}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}