import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { translations, type Locale } from './translations'
import { I18nContext } from './context'
import { buildLocalizedCv } from './localizedCv'

const STORAGE_KEY = 'lang'

function getInitialLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'fr' || stored === 'en' || stored === 'ar') return stored
  } catch {
    /* storage unavailable — fall back to French */
  }
  return 'fr'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = translations[locale].dir
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* storage unavailable — locale stays for this session */
    }
  }, [])

  const value = useMemo(
    () => ({
      locale,
      dir: translations[locale].dir,
      t: translations[locale],
      cv: buildLocalizedCv(locale),
      setLocale,
    }),
    [locale, setLocale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}