import { LayoutGrid, Mail } from 'lucide-react'
import { useI18n } from '../../i18n/context'
import { Button } from '../ui/Button'
import { ProfileSignature } from '../ui/ProfileSignature'
import { Reveal } from '../ui/Reveal'
import { SocialLinks } from '../ui/SocialLinks'
import { TechStack } from '../ui/TechStack'

export function Hero() {
  const { t, cv, locale } = useI18n()
  const { profile } = cv

  return (
    <section
      id="accueil"
      aria-label={t.ui.hero.aria}
      className="relative scroll-mt-20 pt-[calc(5.5rem+env(safe-area-inset-top,0px))] pb-12 md:pt-[calc(6rem+env(safe-area-inset-top,0px))] md:pb-14 lg:pb-16"
    >
      <div className="container-site">
        {/* Hero blends into the page background — theme tokens, no dedicated panel */}
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,25.5rem)] lg:gap-12">
          {/* Identity & content */}
          <div className="order-2 lg:order-1">
            <Reveal>
              <p className="mb-5 flex items-center gap-3 font-mono text-[0.72rem] font-medium tracking-[0.16em] text-brand uppercase">
                <span aria-hidden="true" className="h-px w-8 bg-brand/60" />
                {t.ui.hero.eyebrowPrefix} — {profile.location}
              </p>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="text-[2.5rem] leading-[1.05] font-extrabold tracking-[-0.03em] text-ink sm:text-[3rem] lg:text-[3.25rem]">
                BENYICH
                <br />
                SALAH{' '}
                <span className="relative inline-block">
                  EDDINE
                  <span
                    aria-hidden="true"
                    className="bar-fill absolute -bottom-1.5 start-0 h-0.5 w-full rounded-full bg-[linear-gradient(90deg,var(--c-brand),#a78bfa)]"
                  />
                </span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-pretty text-ink-2 md:text-lg">
                {profile.title}
              </p>
              <p
                lang={locale === 'fr' ? 'en' : locale}
                className="mt-1.5 font-accent text-xl italic text-brand md:text-2xl"
              >
                {profile.tagline}
              </p>
            </Reveal>

            <Reveal delay={180}>
              <TechStack items={profile.coreStack} className="mt-6" />
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button href="#projets" size="lg" className="w-full sm:w-auto">
                  {t.ui.hero.primaryCta}
                  <LayoutGrid size={17} aria-hidden="true" />
                </Button>
                <Button
                  href="#contact"
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Mail size={17} aria-hidden="true" />
                  {t.ui.hero.secondaryCta}
                </Button>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 border-t border-line/70 pt-6">
                <SocialLinks />
              </div>
            </Reveal>
          </div>

          {/* Professional portrait */}
          <Reveal delay={160} className="order-1 lg:order-2">
            <div className="mx-auto w-full max-w-[15rem] sm:max-w-[24rem] lg:max-w-none">
              <div className="portrait-wrap relative">
                <div
                  aria-hidden="true"
                  className="portrait-aura pointer-events-none absolute -inset-3 -z-10 rounded-[2rem]"
                />
                <div aria-hidden="true" className="portrait-outline" />
                <div className="portrait-ring rounded-xl p-px">
                  <div className="relative overflow-hidden rounded-[19px] bg-surface">
                    <div className="aspect-[3/4] w-full">
                      <img
                        src="/images/portrait-1120.jpg"
                        srcSet="/images/portrait-620.jpg 620w, /images/portrait-1120.jpg 1120w"
                        sizes="(min-width: 1024px) 408px, (min-width: 640px) 384px, 240px"
                        alt={t.ui.hero.portraitAlt}
                        width={1120}
                        height={840}
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                        className="portrait-img h-full w-full object-cover object-top"
                      />
                    </div>
                    <ProfileSignature className="absolute end-3 bottom-3 z-[2] sm:end-4 sm:bottom-4 lg:end-5 lg:bottom-5" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}