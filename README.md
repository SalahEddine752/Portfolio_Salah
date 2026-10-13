# Portfolio — BENYICH SALAH EDDINE

Portfolio professionnel de **Benyich Salah Eddine**, Technicien Spécialisé en Développement Digital – Full Stack.

## Stack

- **React 19** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS v4** (design tokens via `@theme`)
- **lucide-react** (icônes)
- `clsx` + `tailwind-merge` (`cn` helper)

Aucun backend, aucune API externe, aucune donnée inventée : tout le contenu provient de la section `src/data/cv.ts`.

## Scripts

```bash
npm install
npm run dev        # serveur de développement
npm run build      # typecheck + build de production
npm run typecheck  # vérification TypeScript
npm run lint       # oxlint
npm run preview    # prévisualiser le build
```

## Structure

```
src/
├─ App.tsx                 # composition des sections
├─ index.css              # design system (tokens, dark mode, utilitaires)
├─ data/
│  ├─ cv.ts               # source de vérité (profil, compétences, expérience, projets…)
│  └─ nav.ts              # navigation + index des sections
├─ hooks/                 # useScrollSpy, useScrolled
├─ lib/                   # cn, gestion du thème
└─ components/
   ├─ layout/             # Container, Section, SectionHeader
   ├─ navigation/         # Navbar, MobileMenu
   ├─ project/            # ProjectCard, StackList
   ├─ sections/           # Hero, About, Skills, Experience, Education,
   │                      # FeaturedProjects, Services, Certifications, Languages,
   │                      # Contact, Footer
   └─ ui/                 # Button, Badge, Card, Reveal, ThemeToggle
```

## Personnalisation

Tout le contenu éditable est centralisé dans `src/data/cv.ts`.
Le CV téléchargeable se trouve dans `public/CV_Professionnel_SalahEddine_Benyich.pdf`.

## Déploiement

Le build génère un site statique dans `dist/` (Vercel, Netlify, GitHub Pages…).
Avant mise en ligne, remplacer l'URL `https://example.com/` dans `index.html`, `public/robots.txt` et `public/sitemap.xml` par le domaine réel.