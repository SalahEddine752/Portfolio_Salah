import type { ComponentType, SVGProps } from 'react'
import {
  Braces,
  Code2,
  Component,
  Files,
  Radio,
  ShieldCheck,
  SquareCode,
} from 'lucide-react'
import {
  BootstrapIcon,
  Css3Icon,
  GitIcon,
  GithubIcon,
  Html5Icon,
  JavaScriptIcon,
  LaravelIcon,
  MongoDBIcon,
  MysqlIcon,
  NodeIcon,
  PhpIcon,
  PostmanIcon,
  PycharmIcon,
  PythonIcon,
  ReactIcon,
  TailwindIcon,
  VueIcon,
  XamppIcon,
} from './TechIcons'

export type TechIconComponent = ComponentType<SVGProps<SVGSVGElement>>

/**
 * Maps a technology name (exactly as written in cv.ts) to its icon:
 * official brand marks from Simple Icons where they exist, otherwise a
 * neutral lucide glyph. Never fakes a brand logo.
 */
const namedIcons: Record<string, TechIconComponent> = {
  HTML5: Html5Icon,
  CSS3: Css3Icon,
  'JavaScript ES6': JavaScriptIcon,
  JavaScript: JavaScriptIcon,
  PHP: PhpIcon,
  Python: PythonIcon,
  Laravel: LaravelIcon,
  'Laravel 12': LaravelIcon,
  'Laravel Breeze': ShieldCheck,
  'Laravel Reverb': Radio,
  'Node.js': NodeIcon,
  'React.js': ReactIcon,
  'Vue.js': VueIcon,
  'REST API': Braces,
  'Tailwind CSS': TailwindIcon,
  'shadcn/ui': Component,
  'Bootstrap 5': BootstrapIcon,
  MySQL: MysqlIcon,
  MongoDB: MongoDBIcon,
  Git: GitIcon,
  GitHub: GithubIcon,
  'VS Code': SquareCode,
  Postman: PostmanIcon,
  'Microsoft Office': Files,
  XAMPP: XamppIcon,
  PyCharm: PycharmIcon,
}

const FALLBACK_ICON: TechIconComponent = Code2

export function technologyIcon(name: string): TechIconComponent {
  return namedIcons[name] ?? FALLBACK_ICON
}

/** Per-theme brand colour, so marks stay legible on light and dark surfaces. */
export interface TechBrandColor {
  light: string
  dark: string
}

/**
 * Authentic brand colours for each technology (official marks where they exist,
 * perceptually matched accents otherwise). Very light brand colours use a
 * darkened hue in light mode so the icon stays visible, and a brightened hue in
 * dark mode so it stays visible on the dark surface.
 */
const namedBrandColors: Record<string, TechBrandColor> = {
  HTML5: { light: '#E34F26', dark: '#E34F26' },
  CSS3: { light: '#1572B6', dark: '#4BA3DC' },
  'JavaScript ES6': { light: '#C0A000', dark: '#F7DF1E' },
  JavaScript: { light: '#C0A000', dark: '#F7DF1E' },
  PHP: { light: '#777BB4', dark: '#9C9FCF' },
  Python: { light: '#3776AB', dark: '#4B8BBE' },
  Laravel: { light: '#FF2D20', dark: '#FF5A4D' },
  'Laravel 12': { light: '#FF2D20', dark: '#FF5A4D' },
  'Laravel Breeze': { light: '#FF2D20', dark: '#FF5A4D' },
  'Laravel Reverb': { light: '#FF2D20', dark: '#FF5A4D' },
  'Node.js': { light: '#339933', dark: '#6CC24A' },
  'React.js': { light: '#087EA4', dark: '#61DAFB' },
  'Vue.js': { light: '#41B883', dark: '#42D392' },
  'REST API': { light: '#2563EB', dark: '#60A5FA' },
  'Tailwind CSS': { light: '#0891B2', dark: '#22D3EE' },
  'shadcn/ui': { light: '#000000', dark: '#FAFAFA' },
  'Bootstrap 5': { light: '#7952B3', dark: '#A98EDA' },
  MySQL: { light: '#4479A1', dark: '#5FA8D3' },
  MongoDB: { light: '#47A248', dark: '#63C463' },
  Git: { light: '#F05032', dark: '#F05032' },
  GitHub: { light: '#181717', dark: '#E6EDF3' },
  'VS Code': { light: '#007ACC', dark: '#2196F3' },
  Postman: { light: '#FF6C37', dark: '#FF7A4D' },
  'Microsoft Office': { light: '#D83B01', dark: '#EE5C1F' },
  XAMPP: { light: '#FB7A24', dark: '#FF9A5A' },
  // PyCharm renders its own multi-colour brand fills; this entry keeps the
  // per-theme API consistent without overriding them.
  PyCharm: { light: '#21D789', dark: '#21D789' },
}

const FALLBACK_BRAND: TechBrandColor = {
  light: 'var(--c-brand)',
  dark: 'var(--c-brand)',
}

export function technologyBrand(name: string): TechBrandColor {
  return namedBrandColors[name] ?? FALLBACK_BRAND
}