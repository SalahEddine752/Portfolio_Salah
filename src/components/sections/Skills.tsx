import type { CSSProperties } from 'react'
import { useI18n } from '../../i18n/context'
import { Section } from '../layout/Section'
import { SectionHeader } from '../layout/SectionHeader'
import { technologyBrand, technologyIcon } from '../ui/technologyIcon'
import { Reveal } from '../ui/Reveal'

export function Skills() {
  const { t, cv } = useI18n()

  return (
    <Section id="competences" band ariaLabel={t.ui.skills.aria}>
      <SectionHeader
        index="02"
        eyebrow={t.ui.skills.eyebrow}
        title={t.ui.skills.title}
        description={t.ui.skills.description}
      />

      <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
        {cv.skillGroups.map((group, index) => (
          <Reveal key={group.id} delay={index * 60} className="border-t border-line pt-5">
            <h3 className="text-lg font-bold">{group.label}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => {
                const Icon = technologyIcon(item)
                const brand = technologyBrand(item)
                return (
                  <li
                    key={item}
                    style={
                      { '--tech-l': brand.light, '--tech-d': brand.dark } as CSSProperties
                    }
                    className="tech-badge group flex items-center gap-2 rounded-xs border border-line bg-surface px-2.5 py-1.5 font-mono text-[0.72rem] leading-none text-ink-2 transition-[transform,border-color,color,background-color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-px hover:text-ink"
                  >
                    <Icon
                      className="tech-mark size-4 shrink-0 transition-colors duration-200"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                )
              })}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}