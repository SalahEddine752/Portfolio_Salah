import { useEffect, useRef, useState } from 'react'
import { Check, ChevronDown, Copy, Phone } from 'lucide-react'
import { useI18n } from '../../i18n/context'
import { cn } from '../../lib/cn'

interface CallButtonProps {
  /** Human-readable number, e.g. "07-00-81-64-23" */
  phone: string
  /** Real dialable link, e.g. "tel:+212700816423" */
  phoneHref: string
  className?: string
}

/* Segmented pill that mirrors the shared secondary Button: one border, one
   radius, one hover/focus state shared by both halves. */
const root =
  'relative inline-flex h-12 w-full touch-manipulation items-stretch rounded-md border border-ink/30 bg-transparent text-ink transition-[transform,box-shadow,filter,background-color,border-color,color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-px hover:border-brand/60 hover:bg-brand-soft/60 hover:shadow-sm active:translate-y-0 active:scale-[0.99] has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand dark:border-white/40 dark:hover:border-brand/70 dark:hover:bg-brand-soft sm:w-auto'

const segment =
  'inline-flex items-center justify-center font-medium transition-colors duration-200 focus-visible:outline-none'

/** Copy helper: prefers the async Clipboard API, falls back to execCommand. */
async function writeToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      // Permission denied or insecure context — fall through to the legacy path.
    }
  }

  try {
    const field = document.createElement('textarea')
    field.value = text
    field.setAttribute('readonly', '')
    field.style.position = 'absolute'
    field.style.left = '-9999px'
    document.body.appendChild(field)
    field.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(field)
    return ok
  } catch {
    return false
  }
}

/**
 * "Call" action.
 *
 * The main half is a genuine `tel:` link so phones open the dialer. Because a
 * desktop browser can neither place a call nor tell us whether it has a
 * handler, the trailing half opens a small dialog that surfaces the real
 * number with a real copy-to-clipboard button and accessible feedback — no
 * fake "call placed" state.
 */
export function CallButton({ phone, phoneHref, className }: CallButtonProps) {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onPointerDown = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('mousedown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', onPointerDown)
    }
  }, [open])

  async function copyNumber() {
    if (await writeToClipboard(phone)) {
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } else {
      setCopied(false)
    }
  }

  return (
    <div ref={rootRef} className={cn(root, className)}>
      <a
        href={phoneHref}
        className={cn(segment, 'flex-1 gap-2.5 rounded-md px-7 text-base hover:text-brand sm:flex-none')}
      >
        <Phone size={17} aria-hidden="true" className="shrink-0" />
        {t.ui.contact.callBtn}
      </a>

      <button
        ref={toggleRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={t.ui.contact.copyNumber}
        className={cn(
          segment,
          'w-11 shrink-0 rounded-md border-l border-ink/15 text-ink-2 hover:text-brand dark:border-white/15 sm:w-12',
        )}
      >
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={cn('transition-transform duration-200', open && 'rotate-180')}
        />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label={t.ui.contact.phoneGroupLabel}
          className="absolute top-full start-0 z-30 mt-2 w-64 max-w-[calc(100vw-2rem)] rounded-lg border border-line bg-surface p-4 shadow-xl"
        >
          <p className="text-xs font-medium tracking-[0.12em] text-ink-3 uppercase">
            {t.ui.contact.phoneLabel}
          </p>
          <p className="mt-2 font-mono text-sm text-ink">{phone}</p>
          <button
            type="button"
            onClick={copyNumber}
            className="mt-3 inline-flex w-full touch-manipulation items-center justify-center gap-2 rounded-md border border-brand/40 bg-brand-soft/60 px-3 py-2 text-sm font-medium text-brand transition-colors duration-200 hover:bg-brand-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            {copied ? (
              <Check size={15} aria-hidden="true" />
            ) : (
              <Copy size={15} aria-hidden="true" />
            )}
            {copied ? t.ui.contact.copied : t.ui.contact.copyNumberShort}
          </button>
          <span role="status" aria-live="polite" className="sr-only">
            {copied ? t.ui.contact.phoneCopied : ''}
          </span>
        </div>
      )}
    </div>
  )
}
