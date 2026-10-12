import { Navbar } from './components/navigation/Navbar'
import { About } from './components/sections/About'
import { Certifications } from './components/sections/Certifications'
import { Contact } from './components/sections/Contact'
import { Education } from './components/sections/Education'
import { Experience } from './components/sections/Experience'
import { FeaturedProjects } from './components/sections/FeaturedProjects'
import { Footer } from './components/sections/Footer'
import { Hero } from './components/sections/Hero'
import { Languages } from './components/sections/Languages'
import { Services } from './components/sections/Services'
import { Skills } from './components/sections/Skills'
import { useI18n } from './i18n/context'

function App() {
  const { t } = useI18n()

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        {t.ui.skipToContent}
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <FeaturedProjects />
        <Services />
        <Certifications />
        <Languages />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
