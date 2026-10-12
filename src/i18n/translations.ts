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

export type Locale = 'fr' | 'en' | 'ar'

export interface LocalizedContent {
  profile: {
    title: string
    tagline: string
    summary: string
    country: string
  }
  /** id → label */
  softSkills: Record<string, string>
  interests: string[]
  /** skill group id → label */
  skillGroupLabels: Record<string, string>
  /** experience id → localized fields */
  experience: Record<string, { role: string; period: string; tasks: string[] }>
  /** education id → localized fields */
  education: Record<string, { degree: string }>
  /** project id → localized fields */
  projects: Record<
    string,
    {
      type: string
      subtitle: string
      description: string
      features: string[]
      highlights: string[]
    }
  >
  /** certification id → localized fields */
  certifications: Record<string, { name: string }>
  /** language id → localized fields */
  languages: Record<string, { name: string; level: string }>
  /** service id → localized fields */
  services: Record<string, { title: string; description: string }>
}

export interface UiStrings {
  skipToContent: string
  nav: Record<string, string>
  lang: {
    label: string
    options: { code: Locale; label: string }[]
  }
  navbar: {
    mainNavAria: string
    cvAria: string
    openMenu: string
    closeMenu: string
    mobileMenuAria: string
  }
  theme: {
    darkAria: string
    lightAria: string
  }
  hero: {
    aria: string
    eyebrowPrefix: string
    techLabel: string
    primaryCta: string
    secondaryCta: string
    portraitAlt: string
  }
  about: {
    aria: string
    eyebrow: string
    title: string
    softSkillsLabel: string
    interestsLabel: string
    cardTitle: string
    factLocation: string
    factEducation: string
    factLanguages: string
  }
  skills: {
    aria: string
    eyebrow: string
    title: string
    description: string
  }
  experience: {
    aria: string
    eyebrow: string
    title: string
  }
  education: {
    aria: string
    eyebrow: string
    title: string
  }
  projects: {
    aria: string
    eyebrow: string
    title: string
    description: string
    featuresLabel: string
    techLabel: string
    detailsLabel: string
    demo: string
    source: string
    discuss: string
    discussSubject: string
  }
  services: {
    aria: string
    eyebrow: string
    title: string
    description: string
  }
  certifications: {
    aria: string
    eyebrow: string
    title: string
  }
  languages: {
    aria: string
    eyebrow: string
    title: string
  }
  contact: {
    aria: string
    eyebrow: string
    title: string
    description: string
    emailBtn: string
    callBtn: string
    availability: string
    emailLabel: string
    phoneLabel: string
    locationLabel: string
  }
  social: {
    linkedin: string
    github: string
    email: string
  }
  footer: {
    rights: string
  }
}

export interface Translation {
  locale: Locale
  dir: 'ltr' | 'rtl'
  ui: UiStrings
  content: LocalizedContent
}

const contentFr: LocalizedContent = {
  profile: {
    title: profile.title,
    tagline: profile.tagline,
    summary: profile.summary,
    country: profile.country,
  },
  softSkills: Object.fromEntries(softSkills.map((s) => [s.id, s.label])),
  interests,
  skillGroupLabels: Object.fromEntries(skillGroups.map((g) => [g.id, g.label])),
  experience: Object.fromEntries(
    experience.map((e) => [e.id, { role: e.role, period: e.period ?? '', tasks: e.tasks }]),
  ),
  education: Object.fromEntries(education.map((e) => [e.id, { degree: e.degree }])),
  projects: Object.fromEntries(
    projects.map((p) => [
      p.id,
      {
        type: p.type,
        subtitle: p.subtitle,
        description: p.description,
        features: p.features,
        highlights: p.highlights,
      },
    ]),
  ),
  certifications: Object.fromEntries(certifications.map((c) => [c.id, { name: c.name }])),
  languages: Object.fromEntries(
    languages.map((l) => [l.id, { name: l.name, level: l.level }]),
  ),
  services: Object.fromEntries(
    services.map((s) => [s.id, { title: s.title, description: s.description }]),
  ),
}

const contentEn: LocalizedContent = {
  profile: {
    title: 'Specialized Technician in Digital Development – Full Stack',
    tagline: 'Full Stack Developer',
    summary:
      'Specialized technician in Digital Development at OFPPT. Passionate about new technologies. I am autonomous, responsible and proactive. I would like to join your team to work together.',
    country: 'Morocco',
  },
  softSkills: {
    teamwork: 'Teamwork & problem solving',
    analysis: 'Analytical mindset',
    autonomy: 'Autonomy',
  },
  interests: ['Web development', 'Technology watch and self-training', 'Sports'],
  skillGroupLabels: {
    languages: 'Languages',
    frameworks: 'Frameworks & Technologies',
    databases: 'Databases',
    tools: 'Tools',
  },
  experience: {
    librairie: {
      role: 'General employee – Bookstore',
      period: 'July 2026 – December 2026',
      tasks: [
        'Customer reception and guidance',
        'Sales and cash handling',
        'Managing and shelving books and school supplies',
        'Preparing customer orders',
        'Shelf stocking and stock tracking',
      ],
    },
    'responsable-magasin': {
      role: 'Store manager',
      period: '',
      tasks: ['Inventory management', 'Customer reception and advice'],
    },
    maintenance: {
      role: 'Computer maintenance and upkeep officer',
      period: '',
      tasks: [],
    },
    'stage-amr': {
      role: 'Full Stack Developer Intern',
      period: 'April 2026',
      tasks: [
        'Development of a VAT declaration web platform with Laravel, React.js and MySQL to automate the calculation and generation of tax forms.',
      ],
    },
  },
  education: {
    ofppt: {
      degree: 'Diploma of Specialized Technician in Digital Development – Full Stack Option',
    },
    bac: { degree: 'Baccalaureate in Physical Science' },
  },
  projects: {
    b2bconnect: {
      type: 'B2B Marketplace',
      subtitle: 'Smart platform connecting clients and suppliers (PFE)',
      description:
        'B2B platform that connects clients and suppliers: user, product and order management, with real-time messaging between both parties.',
      features: [
        'Connecting clients and suppliers',
        'User, product and order management',
        'Real-time messaging with Laravel Reverb',
      ],
      highlights: [
        'Laravel 12 backend with Blade views',
        'Authentication handled by Laravel Breeze',
        'Real-time communication via Laravel Reverb',
        'Relational MySQL data model: users, products, orders',
        'Responsive interface with Tailwind CSS',
      ],
    },
    'simple-tva': {
      type: 'VAT declaration platform',
      subtitle: 'VAT declaration with automatic calculation',
      description:
        'VAT declaration platform that automates the calculation of amounts and the management of declarations.',
      features: ['Automatic VAT calculation', 'Management of declarations'],
      highlights: [
        'Automatic calculation of VAT amounts',
        'Management and tracking of declarations',
        'React.js front-end connected to a Laravel backend',
        'MySQL database',
        'Interface with Bootstrap 5',
      ],
    },
    smartcinema: {
      type: 'Booking application',
      subtitle: 'Movie booking and showtime management',
      description:
        'Movie booking application with showtime management and a dedicated admin interface.',
      features: ['Movie booking', 'Showtime management', 'Admin interface'],
      highlights: [
        'Laravel backend and React.js front-end',
        'MySQL database',
        'shadcn/ui interface components with Tailwind CSS',
        'Admin interface for managing showtimes',
      ],
    },
  },
  certifications: {
    bureautique: {
      name: 'Diploma in managerial office computer science',
    },
    comptabilite: {
      name: 'Certificate in general accounting',
    },
  },
  languages: {
    ar: { name: 'Arabic', level: 'Native language' },
    fr: { name: 'French', level: 'Written – Spoken' },
    en: { name: 'English', level: 'Intermediate' },
  },
  services: {
    fullstack: {
      title: 'Full stack web development',
      description:
        'Complete web applications with Laravel on the server side and React.js on the client side, connected to MySQL.',
    },
    api: {
      title: 'REST APIs & integrations',
      description:
        'Design and consumption of REST APIs, connected to modern front-ends.',
    },
    ui: {
      title: 'Polished interfaces',
      description:
        'Responsive and accessible interfaces with Tailwind CSS, shadcn/ui and Bootstrap 5.',
    },
    maintenance: {
      title: 'Computer maintenance',
      description:
        'Upkeep and maintenance of equipment and workstations (professional experience).',
    },
  },
}

const contentAr: LocalizedContent = {
  profile: {
    title: 'تقني متخصص في التطوير الرقمي – فول ستاك',
    tagline: 'مطور فول ستاك',
    summary:
      'تقني متخصص في التطوير الرقمي بمكتب التكوين المهني وإنعاش الشغل (OFPPT). شغوف بالتقنيات الحديثة. أنا مستقل في العمل، مسؤول ومبادر، وأطمح للانضمام إلى فريقكم للعمل معًا.',
    country: 'المغرب',
  },
  softSkills: {
    teamwork: 'العمل الجماعي وحل المشكلات',
    analysis: 'روح التحليل',
    autonomy: 'الاستقلالية في العمل',
  },
  interests: ['تطوير الويب', 'مواكبة التقنيات والتعلّم الذاتي', 'الرياضة'],
  skillGroupLabels: {
    languages: 'اللغات',
    frameworks: 'الأطر والتقنيات',
    databases: 'قواعد البيانات',
    tools: 'الأدوات',
  },
  experience: {
    librairie: {
      role: 'موظف متعدد المهام – مكتبة',
      period: 'يوليوز 2026 – دجنبر 2026',
      tasks: [
        'استقبال وتوجيه الزبناء',
        'البيع والتحصيل المالي',
        'تنظيم وإدارة الكتب واللوازم المدرسية',
        'تحضير طلبات الزبناء',
        'العرض على الأرفف وتتبع المخزون',
      ],
    },
    'responsable-magasin': {
      role: 'مسؤول المتجر',
      period: '',
      tasks: ['إدارة المخزون', 'استقبال الزبناء وتقديم النصح'],
    },
    maintenance: {
      role: 'المكلّف بصيانة وحفظ المعدات المعلوماتية',
      period: '',
      tasks: [],
    },
    'stage-amr': {
      role: 'متدرب في تطوير فول ستاك',
      period: 'أبريل 2026',
      tasks: [
        'تطوير منصة ويب للتصريح بالضريبة على القيمة المضافة باستخدام Laravel وReact.js وMySQL لأتمتة حساب وتوليد النماذج الجبائية.',
      ],
    },
  },
  education: {
    ofppt: {
      degree: 'دبلوم تقني متخصص في التطوير الرقمي – خيار فول ستاك',
    },
    bac: { degree: 'البكالوريا في العلوم الفيزيائية' },
  },
  projects: {
    b2bconnect: {
      type: 'سوق B2B',
      subtitle: 'منصة ذكية للربط بين العملاء والموردين (مشروع نهاية التكوين)',
      description:
        'منصة B2B تربط العملاء بالموردين: تدبير المستخدمين والمنتجات والطلبات، مع مراسلة فورية بين الطرفين.',
      features: [
        'الربط بين العملاء والموردين',
        'تدبير المستخدمين والمنتجات والطلبات',
        'مراسلة فورية باستخدام Laravel Reverb',
      ],
      highlights: [
        'واجهة خلفية Laravel 12 مع قوالب Blade',
        'التوثيق المسيَّر عبر Laravel Breeze',
        'اتصال فوري عبر Laravel Reverb',
        'نموذج بيانات علائقي MySQL: المستخدمون والمنتجات والطلبات',
        'واجهة متجاوبة مع Tailwind CSS',
      ],
    },
    'simple-tva': {
      type: 'منصة التصريح بالضريبة على القيمة المضافة',
      subtitle: 'التصريح بالضريبة على القيمة المضافة مع حساب آلي',
      description:
        'منصة للتصريح بالضريبة على القيمة المضافة تؤتمت حساب المبالغ وتدبير التصريحات.',
      features: ['حساب آلي للضريبة على القيمة المضافة', 'تدبير التصريحات'],
      highlights: [
        'حساب آلي لمبالغ الضريبة على القيمة المضافة',
        'تدبير وتتبع التصريحات',
        'واجهة أمامية React.js مرتبطة بواجهة خلفية Laravel',
        'قاعدة بيانات MySQL',
        'واجهة مع Bootstrap 5',
      ],
    },
    smartcinema: {
      type: 'تطبيق حجز',
      subtitle: 'حجز الأفلام وتدبير العروض',
      description: 'تطبيق لحجز الأفلام مع تدبير العروض وواجهة إدارة مخصصة.',
      features: ['حجز الأفلام', 'تدبير العروض', 'واجهة الإدارة'],
      highlights: [
        'واجهة خلفية Laravel وواجهة أمامية React.js',
        'قاعدة بيانات MySQL',
        'مكونات واجهة shadcn/ui مع Tailwind CSS',
        'واجهة إدارة لتدبير العروض',
      ],
    },
  },
  certifications: {
    bureautique: {
      name: 'دبلوم في المعلوميات المكتبية للتدبير',
    },
    comptabilite: {
      name: 'شهادة في المحاسبة العامة',
    },
  },
  languages: {
    ar: { name: 'العربية', level: 'اللغة الأم' },
    fr: { name: 'الفرنسية', level: 'كتابة – حديث' },
    en: { name: 'الإنجليزية', level: 'متوسط' },
  },
  services: {
    fullstack: {
      title: 'تطوير الويب فول ستاك',
      description:
        'تطبيقات ويب متكاملة بـ Laravel على مستوى الخادم و React.js على مستوى الواجهة، متصلة بـ MySQL.',
    },
    api: {
      title: 'واجهات REST والدمج',
      description: 'تصميم واستهلاك واجهات REST، مرتبطة بالواجهات الأمامية الحديثة.',
    },
    ui: {
      title: 'واجهات أنيقة',
      description: 'واجهات متجاوبة وميسّرة الوصول باستخدام Tailwind CSS و shadcn/ui و Bootstrap 5.',
    },
    maintenance: {
      title: 'الصيانة المعلوماتية',
      description: 'صيانة وإصلاح المعدات ومحطات العمل (تجربة مهنية).',
    },
  },
}

const uiFr: UiStrings = {
  skipToContent: 'Aller au contenu principal',
  nav: {
    accueil: 'Accueil',
    'a-propos': 'À propos',
    competences: 'Compétences',
    experience: 'Expérience',
    projets: 'Projets',
    contact: 'Contact',
  },
  lang: {
    label: 'Changer de langue',
    options: [
      { code: 'fr', label: 'FR' },
      { code: 'en', label: 'EN' },
      { code: 'ar', label: 'العربية' },
    ],
  },
  navbar: {
    mainNavAria: 'Navigation principale',
    cvAria: 'Ouvrir le CV de Benyich Salah Eddine (PDF, nouvel onglet)',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    mobileMenuAria: 'Menu de navigation',
  },
  theme: {
    darkAria: 'Activer le mode sombre',
    lightAria: 'Activer le mode clair',
  },
  hero: {
    aria: 'Introduction',
    eyebrowPrefix: 'Développeur Full Stack',
    techLabel: 'Technologies principales',
    primaryCta: 'Voir mes projets',
    secondaryCta: 'Me contacter',
    portraitAlt: 'Portrait de Benyich Salah Eddine',
  },
  about: {
    aria: 'À propos',
    eyebrow: 'À propos',
    title: 'Un profil orienté le développement web full stack.',
    softSkillsLabel: 'Savoir-être',
    interestsLabel: 'Intérêts',
    cardTitle: 'En bref',
    factLocation: 'Localisation',
    factEducation: 'Formation',
    factLanguages: 'Langues',
  },
  skills: {
    aria: 'Compétences',
    eyebrow: 'Compétences',
    title: 'Stack technique.',
    description:
      'PHP et Laravel côté serveur, React.js côté client, MySQL et MongoDB pour la donnée.',
  },
  experience: {
    aria: 'Expérience professionnelle',
    eyebrow: 'Expérience',
    title: 'Parcours professionnel.',
  },
  education: {
    aria: 'Formation',
    eyebrow: 'Éducation',
    title: 'Formation académique.',
  },
  projects: {
    aria: 'Projets',
    eyebrow: 'Projets',
    title: 'Projets sélectionnés.',
    description:
      'Trois projets présentés en détail : contexte, fonctionnalités principales et choix techniques.',
    featuresLabel: 'Fonctionnalités',
    techLabel: 'Technologies',
    detailsLabel: 'Détails techniques',
    demo: 'Voir la démo',
    source: 'Code source',
    discuss: 'Discuter de ce projet',
    discussSubject: 'À propos du projet',
  },
  services: {
    aria: 'Services',
    eyebrow: 'Services',
    title: 'Ce que je peux faire.',
    description: 'Des prestations déduites de mes compétences et de mon expérience.',
  },
  certifications: {
    aria: 'Certifications',
    eyebrow: 'Certifications',
    title: 'Certifications.',
  },
  languages: {
    aria: 'Langues',
    eyebrow: 'Langues',
    title: 'Langues.',
  },
  contact: {
    aria: 'Contact',
    eyebrow: 'Contact',
    title: 'Travaillons ensemble.',
    description: 'Une offre de stage, un poste junior ou un projet à confier ? Écrivez-moi.',
    emailBtn: 'Envoyer un e-mail',
    callBtn: 'Appeler',
    availability: 'Je suis disponible pour des opportunités en développement web full stack à {location} et à distance.',
    emailLabel: 'E-mail',
    phoneLabel: 'Téléphone',
    locationLabel: 'Localisation',
  },
  social: {
    linkedin: 'LinkedIn',
    github: 'GitHub',
    email: "Envoyer un e-mail à Benyich Salah Eddine",
  },
  footer: {
    rights: 'Tous droits réservés.',
  },
}

const uiEn: UiStrings = {
  skipToContent: 'Skip to main content',
  nav: {
    accueil: 'Home',
    'a-propos': 'About',
    competences: 'Skills',
    experience: 'Experience',
    projets: 'Projects',
    contact: 'Contact',
  },
  lang: {
    label: 'Change language',
    options: [
      { code: 'fr', label: 'FR' },
      { code: 'en', label: 'EN' },
      { code: 'ar', label: 'العربية' },
    ],
  },
  navbar: {
    mainNavAria: 'Main navigation',
    cvAria: "Open Benyich Salah Eddine's CV (PDF, new tab)",
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mobileMenuAria: 'Navigation menu',
  },
  theme: {
    darkAria: 'Enable dark mode',
    lightAria: 'Enable light mode',
  },
  hero: {
    aria: 'Introduction',
    eyebrowPrefix: 'Full Stack Developer',
    techLabel: 'Core technologies',
    primaryCta: 'View my projects',
    secondaryCta: 'Contact me',
    portraitAlt: 'Portrait of Benyich Salah Eddine',
  },
  about: {
    aria: 'About',
    eyebrow: 'About',
    title: 'A profile focused on full stack web development.',
    softSkillsLabel: 'Soft skills',
    interestsLabel: 'Interests',
    cardTitle: 'At a glance',
    factLocation: 'Location',
    factEducation: 'Education',
    factLanguages: 'Languages',
  },
  skills: {
    aria: 'Skills',
    eyebrow: 'Skills',
    title: 'Technical stack.',
    description:
      'PHP and Laravel on the server side, React.js on the client side, MySQL and MongoDB for data.',
  },
  experience: {
    aria: 'Professional experience',
    eyebrow: 'Experience',
    title: 'Professional journey.',
  },
  education: {
    aria: 'Education',
    eyebrow: 'Education',
    title: 'Academic education.',
  },
  projects: {
    aria: 'Projects',
    eyebrow: 'Projects',
    title: 'Selected projects.',
    description:
      'Three projects presented in detail: context, main features and technical choices.',
    featuresLabel: 'Features',
    techLabel: 'Technologies',
    detailsLabel: 'Technical details',
    demo: 'View demo',
    source: 'Source code',
    discuss: 'Discuss this project',
    discussSubject: 'About the project',
  },
  services: {
    aria: 'Services',
    eyebrow: 'Services',
    title: 'What I can do.',
    description: 'Services derived from my skills and experience.',
  },
  certifications: {
    aria: 'Certifications',
    eyebrow: 'Certifications',
    title: 'Certifications.',
  },
  languages: {
    aria: 'Languages',
    eyebrow: 'Languages',
    title: 'Languages.',
  },
  contact: {
    aria: 'Contact',
    eyebrow: 'Contact',
    title: "Let's work together.",
    description: 'An internship offer, a junior position or a project to hand over? Write to me.',
    emailBtn: 'Send an email',
    callBtn: 'Call',
    availability:
      'I am available for full stack web development opportunities in {location} and remotely.',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    locationLabel: 'Location',
  },
  social: {
    linkedin: 'LinkedIn',
    github: 'GitHub',
    email: 'Send an email to Benyich Salah Eddine',
  },
  footer: {
    rights: 'All rights reserved.',
  },
}

const uiAr: UiStrings = {
  skipToContent: 'تخطّي إلى المحتوى الرئيسي',
  nav: {
    accueil: 'الرئيسية',
    'a-propos': 'من أنا',
    competences: 'المهارات',
    experience: 'الخبرة',
    projets: 'المشاريع',
    contact: 'تواصل',
  },
  lang: {
    label: 'تغيير اللغة',
    options: [
      { code: 'fr', label: 'FR' },
      { code: 'en', label: 'EN' },
      { code: 'ar', label: 'العربية' },
    ],
  },
  navbar: {
    mainNavAria: 'التنقل الرئيسي',
    cvAria: 'فتح السيرة الذاتية لـ Benyich Salah Eddine (PDF، تبويب جديد)',
    openMenu: 'فتح القائمة',
    closeMenu: 'إغلاق القائمة',
    mobileMenuAria: 'قائمة التنقل',
  },
  theme: {
    darkAria: 'تفعيل الوضع الداكن',
    lightAria: 'تفعيل الوضع الفاتح',
  },
  hero: {
    aria: 'مقدمة',
    eyebrowPrefix: 'مطور فول ستاك',
    techLabel: 'التقنيات الأساسية',
    primaryCta: 'مشاهدة مشاريعي',
    secondaryCta: 'تواصل معي',
    portraitAlt: 'صورة شخصية لـ Benyich Salah Eddine',
  },
  about: {
    aria: 'من أنا',
    eyebrow: 'من أنا',
    title: 'ملف شخصي موجّه نحو تطوير الويب فول ستاك.',
    softSkillsLabel: 'المهارات الشخصية',
    interestsLabel: 'الاهتمامات',
    cardTitle: 'باختصار',
    factLocation: 'الموقع',
    factEducation: 'التكوين',
    factLanguages: 'اللغات',
  },
  skills: {
    aria: 'المهارات',
    eyebrow: 'المهارات',
    title: 'المكدس التقني.',
    description:
      'PHP و Laravel على مستوى الخادم، React.js على مستوى الواجهة، و MySQL و MongoDB للبيانات.',
  },
  experience: {
    aria: 'الخبرة المهنية',
    eyebrow: 'الخبرة',
    title: 'المسار المهني.',
  },
  education: {
    aria: 'التكوين',
    eyebrow: 'التعليم',
    title: 'التكوين الأكاديمي.',
  },
  projects: {
    aria: 'المشاريع',
    eyebrow: 'المشاريع',
    title: 'مشاريع مختارة.',
    description: 'ثلاثة مشاريع معروضة بالتفصيل: السياق، المزايا الرئيسية والخيارات التقنية.',
    featuresLabel: 'المزايا',
    techLabel: 'التقنيات',
    detailsLabel: 'التفاصيل التقنية',
    demo: 'مشاهدة التجريبي',
    source: 'المصدر',
    discuss: 'ناقش هذا المشروع',
    discussSubject: 'بخصوص المشروع',
  },
  services: {
    aria: 'الخدمات',
    eyebrow: 'الخدمات',
    title: 'ما يمكنني القيام به.',
    description: 'خدمات مستنبطة من مهاراتي وخبرتي.',
  },
  certifications: {
    aria: 'الشهادات',
    eyebrow: 'الشهادات',
    title: 'الشهادات.',
  },
  languages: {
    aria: 'اللغات',
    eyebrow: 'اللغات',
    title: 'اللغات.',
  },
  contact: {
    aria: 'تواصل',
    eyebrow: 'تواصل',
    title: 'لنعمل معًا.',
    description: 'عرض تدريب، منصب مبتدئ أو مشروع تريد تسليمه؟ راسلني.',
    emailBtn: 'إرسال بريد إلكتروني',
    callBtn: 'اتصال',
    availability: 'أنا متاح لفرص تطوير الويب فول ستاك في {location} وعن بُعد.',
    emailLabel: 'البريد الإلكتروني',
    phoneLabel: 'الهاتف',
    locationLabel: 'الموقع',
  },
  social: {
    linkedin: 'لينكد إن',
    github: 'غيت هاب',
    email: 'إرسال بريد إلكتروني إلى بني يش صلاح الدين',
  },
  footer: {
    rights: 'جميع الحقوق محفوظة.',
  },
}

export const translations: Record<Locale, Translation> = {
  fr: { locale: 'fr', dir: 'ltr', ui: uiFr, content: contentFr },
  en: { locale: 'en', dir: 'ltr', ui: uiEn, content: contentEn },
  ar: { locale: 'ar', dir: 'rtl', ui: uiAr, content: contentAr },
}