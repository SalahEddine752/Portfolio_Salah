import {
  certifications,
  education,
  experience,
  interests,
  languages,
  profile,
  projects,
  services,
  skillGroups,
  softSkills,
} from '../data/cv'
import type { LocalizedCv } from './context'
import { translations, type Locale } from './translations'

export function buildLocalizedCv(locale: Locale): LocalizedCv {
  const content = translations[locale].content

  return {
    profile: { ...profile, ...content.profile },
    softSkills: softSkills.map((s) => ({ ...s, label: content.softSkills[s.id] ?? s.label })),
    interests: content.interests.length > 0 ? content.interests : interests,
    skillGroups: skillGroups.map((g) => ({
      ...g,
      label: content.skillGroupLabels[g.id] ?? g.label,
    })),
    experience: experience.map((e) => ({
      ...e,
      role: content.experience[e.id]?.role ?? e.role,
      period: content.experience[e.id]?.period || e.period,
      tasks: content.experience[e.id]?.tasks ?? e.tasks,
    })),
    education: education.map((e) => ({
      ...e,
      degree: content.education[e.id]?.degree ?? e.degree,
    })),
    projects: projects.map((p) => ({
      ...p,
      type: content.projects[p.id]?.type ?? p.type,
      subtitle: content.projects[p.id]?.subtitle ?? p.subtitle,
      description: content.projects[p.id]?.description ?? p.description,
      features: content.projects[p.id]?.features ?? p.features,
      highlights: content.projects[p.id]?.highlights ?? p.highlights,
    })),
    certifications: certifications.map((c) => ({
      ...c,
      name: content.certifications[c.id]?.name ?? c.name,
    })),
    languages: languages.map((l) => ({
      ...l,
      name: content.languages[l.id]?.name ?? l.name,
      level: content.languages[l.id]?.level ?? l.level,
    })),
    services: services.map((s) => ({
      ...s,
      title: content.services[s.id]?.title ?? s.title,
      description: content.services[s.id]?.description ?? s.description,
    })),
  }
}