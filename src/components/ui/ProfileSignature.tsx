import { cn } from '../../lib/cn'

interface ProfileSignatureProps {
  className?: string
}

/**
 * Handwritten-style personal signature ("Benyich / Salah Eddine").
 * Purely decorative — hidden from assistive tech and non-interactive.
 */
export function ProfileSignature({ className }: ProfileSignatureProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'portrait-signature pointer-events-none select-none text-end leading-none text-brand',
        className,
      )}
    >
      <p className="font-signature text-[1.3rem] font-semibold italic sm:text-[1.7rem]">Benyich</p>
      <p className="font-signature text-[1rem] font-semibold italic sm:text-[1.25rem]">
        Salah Eddine
      </p>
      <svg
        viewBox="0 0 140 12"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="ms-auto mt-0.5 h-2 w-[5.5rem] text-brand/60 sm:h-2.5 sm:w-[7.5rem]"
      >
        <path
          d="M2 6.5C22 2.5 44 8.5 70 5.5C96 2.5 120 7.5 138 3.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M28 10.5C56 7.5 92 11 122 8"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
    </div>
  )
}
