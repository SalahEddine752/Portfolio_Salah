import { createContext, useContext } from 'react'
import type {
  Certification,
  Education,
  Experience,
  LanguageSkill,
  Profile,
  Project,
  Service,
  SkillGroup,
  SoftSkill,
} from '../data/cv'
import type { Locale, Translation } from './translations'

export interface LocalizedCv {
  profile: Profile
  softSkills: SoftSkill[]
  interests: string[]
  skillGroups: SkillGroup[]
  experience: Experience[]
  education: Education[]
  projects: Project[]
  certifications: Certification[]
  languages: LanguageSkill[]
  services: Service[]
}

export interface I18nContextValue {
  locale: Locale
  dir: 'ltr' | 'rtl'
  t: Translation
  cv: LocalizedCv
  setLocale: (locale: Locale) => void
}

export const I18nContext = createContext<I18nContextValue | null>(null)

export function useI18n(): I18nContextValue {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useI18n must be used within an I18nProvider')
  return context
}