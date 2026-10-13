import { Mail, MapPin, Phone } from 'lucide-react'
import { useDiscussion } from '../../context/discussionContext'
import { useI18n } from '../../i18n/context'
import { Section } from '../layout/Section'
import { SectionHeader } from '../layout/SectionHeader'
import { Button } from '../ui/Button'
import { CallButton } from '../ui/CallButton'
import { Card } from '../ui/Card'
import { Reveal } from '../ui/Reveal'

export function Contact() {
  const { t, cv } = useI18n()
  const { project, clear } = useDiscussion()
  const { profile } = cv

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    project ? `${t.ui.projects.discussSubject} ${project}` : t.ui.contact.emailSubject,
  )}`

  return (
    <Section id="contact" ariaLabel={t.ui.contact.aria}>
      <SectionHeader
        index="09"
        eyebrow={t.ui.contact.eyebrow}
        title={t.ui.contact.title}
        description={t.ui.contact.description}
      />

      {project && (
        <div
          id="contact-topic"
          tabIndex={-1}
          className="mb-8 flex flex-col gap-3 rounded-md border border-brand/30 bg-brand-soft/60 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm text-ink">
            {t.ui.contact.discussionKicker.replace('{project}', project)}
          </p>
          <button
            type="button"
            onClick={clear}
            className="self-start text-sm font-medium text-brand underline-offset-4 transition-colors duration-200 hover:underline sm:self-auto"
          >
            {t.ui.contact.clearTopic}
          </button>
        </div>
      )}

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <Reveal className="space-y-6 lg:self-center">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button href={mailtoHref} size="lg" className="w-full sm:w-auto">
              <Mail size={17} aria-hidden="true" />
              {t.ui.contact.emailBtn}
            </Button>
            <CallButton phone={profile.phone} phoneHref={profile.phoneHref} />
          </div>

          <p className="max-w-[55ch] text-sm leading-relaxed text-ink-2">
            {t.ui.contact.availability.replace('{location}', profile.location)}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <Card>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-brand" />
                <span className="min-w-0 text-ink-2">
                  <span className="block font-medium text-ink">{t.ui.contact.emailLabel}</span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="break-all transition-colors duration-200 underline-offset-4 hover:text-brand hover:underline"
                  >
                    {profile.email}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-brand" />
                <span className="text-ink-2">
                  <span className="block font-medium text-ink">{t.ui.contact.phoneLabel}</span>
                  <a
                    href={profile.phoneHref}
                    className="transition-colors duration-200 underline-offset-4 hover:text-brand hover:underline"
                  >
                    {profile.phone}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-brand" />
                <span className="text-ink-2">
                  <span className="block font-medium text-ink">{t.ui.contact.locationLabel}</span>
                  {profile.location}, {profile.country}
                </span>
              </li>
            </ul>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}