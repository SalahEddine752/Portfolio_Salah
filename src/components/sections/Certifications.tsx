import { Award } from 'lucide-react'
import { useI18n } from '../../i18n/context'
import { Section } from '../layout/Section'
import { SectionHeader } from '../layout/SectionHeader'
import { InfoCard } from '../ui/InfoCard'
import { Reveal } from '../ui/Reveal'

export function Certifications() {
  const { t, cv } = useI18n()

  return (
    <Section id="certifications" ariaLabel={t.ui.certifications.aria}>
      <SectionHeader index="07" eyebrow={t.ui.certifications.eyebrow} title={t.ui.certifications.title} />

      <div className="grid gap-5 md:grid-cols-2">
        {cv.certifications.map((certification, index) => (
          <Reveal key={certification.id} delay={index * 60}>
            <InfoCard
              icon={Award}
              title={certification.name}
              description={certification.issuer}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}