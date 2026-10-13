import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { DiscussionProvider } from './context/DiscussionProvider'
import { I18nProvider } from './i18n/I18nProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider>
      <DiscussionProvider>
        <App />
      </DiscussionProvider>
    </I18nProvider>
  </StrictMode>,
)
