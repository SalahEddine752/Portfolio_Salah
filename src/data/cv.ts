/**
 * Single source of truth — transcribed strictly from the CV:
 * CV_Professionnel_SalahEddine_Benyich.pdf
 * Nothing here is invented: no fake dates, URLs, metrics or employers.
 */

export interface Profile {
  fullName: string
  title: string
  tagline: string
  location: string
  country: string
  phone: string
  phoneHref: string
  email: string
  summary: string
  coreStack: string[]
}

export interface SkillGroup {
  id: string
  label: string
  items: string[]
}

export interface SoftSkill {
  id: string
  label: string
}

export interface Experience {
  id: string
  role: string
  company?: string
  period?: string
  tasks: string[]
}

export interface Education {
  id: string
  school: string
  degree: string
  period: string
}

export type ProjectVisualKind = 'b2b' | 'tva' | 'pos'

export interface Project {
  id: string
  name: string
  /** Nature du projet, ex. "Marketplace B2B" */
  type: string
  /** Courte description professionnelle (sous-titre) */
  subtitle: string
  description: string
  /** Fonctionnalités principales décrites dans le CV */
  features: string[]
  /** Points techniques, déduits des technologies listées dans le CV */
  highlights: string[]
  stack: string[]
  context: 'PFE' | 'Stage' | null
  /** État du projet - uniquement s'il est connu */
  status: string | null
  visual: ProjectVisualKind
  featured: boolean
  repoUrl: string | null
  liveUrl: string | null
}

export interface Certification {
  id: string
  name: string
  issuer: string
}

export interface LanguageSkill {
  id: string
  name: string
  level: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: 'code' | 'api' | 'ui' | 'wrench'
}

export const profile: Profile = {
  fullName: 'BENYICH SALAH EDDINE',
  title: 'Technicien Spécialisé en Développement Digital – Full Stack',
  tagline: 'Full Stack Developer',
  location: 'Casablanca',
  country: 'Maroc',
  phone: '07-00-81-64-23',
  phoneHref: 'tel:+212700816423',
  email: 'salaheddineben777@gmail.com',
  summary:
    "Technicien spécialisé en Développement Digital à l'OFPPT. Passionné par les nouvelles technologies. Je suis autonome, responsable, active. Je souhaite rejoindre votre équipe pour collaborer ensemble.",
  coreStack: ['Laravel', 'React.js', 'Node.js', 'MySQL', 'REST API'],
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    label: 'Langages',
    items: ['HTML5', 'CSS3', 'JavaScript ES6', 'PHP', 'Python'],
  },
  {
    id: 'frameworks',
    label: 'Frameworks & Technologies',
    items: [
      'Laravel 12',
      'Laravel Breeze',
      'Laravel Reverb',
      'Node.js',
      'React.js',
      'REST API',
      'Tailwind CSS',
      'shadcn/ui',
      'Bootstrap 5',
    ],
  },
  {
    id: 'databases',
    label: 'Bases de données',
    items: ['MySQL', 'MongoDB'],
  },
  {
    id: 'tools',
    label: 'Outils',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Microsoft Office', 'XAMPP', 'PyCharm'],
  },
]

export const softSkills: SoftSkill[] = [
  { id: 'teamwork', label: 'Travail en équipe & résolution de problèmes' },
  { id: 'analysis', label: "Esprit d'analyse" },
  { id: 'autonomy', label: 'Autonomie' },
]

export const experience: Experience[] = [
  {
    id: 'librairie',
    role: 'Employé polyvalent – Librairie',
    period: 'Juillet 2026 – Décembre 2026',
    tasks: [
      'Accueil et orientation des clients',
      'Vente et encaissement',
      'Gestion et rangement des livres et fournitures scolaires',
      'Préparation des commandes clients',
      'Mise en rayon et suivi des stocks',
    ],
  },
  {
    id: 'responsable-magasin',
    role: 'Responsable magasin',
    tasks: ['Gestion des stocks', 'Accueil et conseil client'],
  },
  {
    id: 'maintenance',
    role: 'Chargé de maintenance et entretien informatique',
    tasks: [],
  },
  {
    id: 'stage-amr',
    role: 'Développeur Full Stack Stagiaire',
    company: 'AMR TECH SOLUTION',
    period: 'Avril 2026',
    tasks: [
      "Développement d'une plateforme web de déclaration TVA avec Laravel, React.js et MySQL pour automatiser le calcul et la génération des formulaires fiscaux.",
    ],
  },
]

export const education: Education[] = [
  {
    id: 'ofppt',
    school: 'OFPPT – CFPMS Tit Mellil',
    degree: 'Diplôme de Technicien Spécialisé en Développement Digital – Option Full Stack',
    period: '2024 – 2026',
  },
  {
    id: 'bac',
    school: 'Lycée Moulay Ismail',
    degree: 'Baccalauréat Science Physique',
    period: '2022 – 2023',
  },
]

export const projects: Project[] = [
  {
    id: 'b2bconnect',
    name: 'B2BConnect',
    type: 'Marketplace B2B',
    subtitle: 'Plateforme intelligente de mise en relation entre clients et fournisseurs (PFE)',
    description:
      'Plateforme B2B qui connecte clients et fournisseurs : gestion des utilisateurs, des produits et des commandes, avec une messagerie en temps réel entre les deux parties.',
    features: [
      'Mise en relation entre clients et fournisseurs',
      'Gestion des utilisateurs, des produits et des commandes',
      'Messagerie en temps réel avec Laravel Reverb',
    ],
    highlights: [
      'Backend Laravel 12 avec vues Blade',
      'Authentification gérée par Laravel Breeze',
      'Communication temps réel via Laravel Reverb',
      'Modèle de données relationnel MySQL : utilisateurs, produits, commandes',
      'Interface responsive avec Tailwind CSS',
    ],
    stack: ['Laravel 12', 'Laravel Breeze', 'Tailwind CSS', 'Laravel Reverb', 'MySQL', 'Blade'],
    context: 'PFE',
    status: null,
    visual: 'b2b',
    featured: true,
    repoUrl: null,
    liveUrl: null,
  },
  {
    id: 'simple-tva',
    name: 'Simple TVA',
    type: 'Plateforme de déclaration de TVA',
    subtitle: 'Déclaration de TVA avec calcul automatique',
    description:
      'Plateforme de déclaration de TVA qui automatise le calcul des montants et la gestion des déclarations.',
    features: ['Calcul automatique de la TVA', 'Gestion des déclarations'],
    highlights: [
      'Calcul automatique des montants de TVA',
      'Gestion et suivi des déclarations',
      'Front-end React.js connecté à un backend Laravel',
      'Base de données MySQL',
      'Interface avec Bootstrap 5',
    ],
    stack: ['Laravel', 'React.js', 'MySQL', 'Bootstrap 5'],
    context: null,
    status: null,
    visual: 'tva',
    featured: true,
    repoUrl: null,
    liveUrl: null,
  },
  {
    id: 'librapos',
    name: 'LibraPOS',
    type: 'Gestion de librairie & point de vente',
    subtitle: 'Gestion de librairie et point de vente (POS)',
    description:
      'Développement d’une application Full Stack de gestion de librairie avec gestion des produits et intégration de la lecture de codes-barres.',
    features: [
      'Gestion des produits de la librairie',
      'Lecture de codes-barres',
      'Point de vente (POS)',
    ],
    highlights: [
      'Application Full Stack avec Laravel et Vue.js',
      'Conception de la base de données MySQL',
      'Intégration du frontend Vue.js avec le backend Laravel',
      'Interface responsive avec Tailwind CSS',
      'Logique côté client en JavaScript',
    ],
    stack: ['Laravel 12', 'Vue.js', 'MySQL', 'PHP', 'JavaScript', 'Tailwind CSS'],
    context: null,
    status: null,
    visual: 'pos',
    featured: true,
    repoUrl: null,
    liveUrl: null,
  },
]

export const certifications: Certification[] = [
  {
    id: 'bureautique',
    name: "Diplôme en informatique bureautique de gestion",
    issuer: 'Centre social de qualification Tit Mellil',
  },
  {
    id: 'comptabilite',
    name: 'Certificat en comptabilité générale',
    issuer: 'Centre social de qualification Tit Mellil',
  },
]

export const languages: LanguageSkill[] = [
  { id: 'ar', name: 'Arabe', level: 'Langue maternelle' },
  { id: 'fr', name: 'Français', level: 'Écrit – Oral' },
  { id: 'en', name: 'Anglais', level: 'Intermédiaire' },
]

export const services: Service[] = [
  {
    id: 'fullstack',
    title: 'Développement web full stack',
    description:
      'Applications web complètes avec Laravel côté serveur et React.js côté client, connectées à MySQL.',
    icon: 'code',
  },
  {
    id: 'api',
    title: 'API REST & intégrations',
    description: 'Conception et consommation d’API REST, connectées aux front-ends modernes.',
    icon: 'api',
  },
  {
    id: 'ui',
    title: 'Interfaces soignées',
    description: 'Interfaces responsives et accessibles avec Tailwind CSS, shadcn/ui et Bootstrap 5.',
    icon: 'ui',
  },
  {
    id: 'maintenance',
    title: 'Maintenance informatique',
    description: "Entretien et maintenance des équipements et postes de travail (expérience professionnelle).",
    icon: 'wrench',
  },
]

export const interests: string[] = ['Développement web', 'Veille technologique et auto-formation', 'Sport']
