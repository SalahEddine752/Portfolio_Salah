import { GraduationCap, Languages as LanguagesIcon, MapPin } from 'lucide-react'
import { useI18n } from '../../i18n/context'
import { Section } from '../layout/Section'
import { SectionHeader } from '../layout/SectionHeader'
import { Card } from '../ui/Card'
import { Reveal } from '../ui/Reveal'

const chipClass =
  'rounded-xs border border-line px-3 py-1.5 text-sm text-ink-2 transition-[transform,border-color,color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-px hover:border-brand/40 hover:text-ink'

export function About() {
  const { t, cv } = useI18n()
  const { profile } = cv

  const facts = [
    {
      id: 'location',
      icon: MapPin,
      label: t.ui.about.factLocation,
      value: `${profile.location}, ${profile.country}`,
    },
    {
      id: 'education',
      icon: GraduationCap,
      label: t.ui.about.factEducation,
      value: cv.education[0].degree,
    },
    {
      id: 'languages',
      icon: LanguagesIcon,
      label: t.ui.about.factLanguages,
      value: cv.languages.map((language) => language.name).join(' · '),
    },
  ]

  return (
    <Section id="a-propos" ariaLabel={t.ui.about.aria}>
      <SectionHeader index="01" eyebrow={t.ui.about.eyebrow} title={t.ui.about.title} />

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
        <Reveal className="space-y-6">
          <p className="max-w-[65ch] text-base text-pretty text-ink-2 md:text-lg">{profile.summary}</p>

          <div>
            <h3 className="mb-3 font-mono text-[0.72rem] font-medium tracking-[0.14em] text-brand uppercase">
              {t.ui.about.softSkillsLabel}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {cv.softSkills.map((skill) => (
                <li key={skill.id} className={chipClass}>
                  {skill.label}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-mono text-[0.72rem] font-medium tracking-[0.14em] text-brand uppercase">
              {t.ui.about.interestsLabel}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {cv.interests.map((interest) => (
                <li key={interest} className={chipClass}>
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <Card>
            <h3 className="mb-5 font-mono text-[0.72rem] font-medium tracking-[0.14em] text-brand uppercase">
              {t.ui.about.cardTitle}
            </h3>
            <ul className="space-y-4 text-sm">
              {facts.map((fact) => (
                <li key={fact.id} className="flex items-start gap-3">
                  <fact.icon size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-brand" />
                  <span className="text-ink-2">
                    <span className="block font-medium text-ink">{fact.label}</span>
                    {fact.value}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}