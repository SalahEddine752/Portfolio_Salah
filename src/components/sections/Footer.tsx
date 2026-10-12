import { useI18n } from '../../i18n/context'
import { Container } from '../layout/Container'
import { SocialLinks } from '../ui/SocialLinks'

const YEAR = new Date().getFullYear()

export function Footer() {
  const { t, cv } = useI18n()

  return (
    <footer className="border-t border-line bg-paper">
      <Container>
        <div className="flex flex-col items-center justify-between gap-5 py-9 text-center md:flex-row md:py-8 md:text-start">
          <p className="text-sm text-ink-2">
            © {YEAR} {cv.profile.fullName}. {t.ui.footer.rights}
          </p>
          <SocialLinks />
        </div>
      </Container>
    </footer>
  )
}