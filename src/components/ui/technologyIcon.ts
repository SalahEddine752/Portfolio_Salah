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
  PythonIcon,
  ReactIcon,
  TailwindIcon,
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
  PHP: PhpIcon,
  Python: PythonIcon,
  Laravel: LaravelIcon,
  'Laravel 12': LaravelIcon,
  'Laravel Breeze': ShieldCheck,
  'Laravel Reverb': Radio,
  'Node.js': NodeIcon,
  'React.js': ReactIcon,
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
}

const FALLBACK_ICON: TechIconComponent = Code2

export function technologyIcon(name: string): TechIconComponent {
  return namedIcons[name] ?? FALLBACK_ICON
}