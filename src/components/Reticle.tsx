type ReticleVariant = 'hero' | 'featured' | 'contact'

/**
 * Animated HUD targeting reticle (concentric rings + spinning dashed rings +
 * crosshair). Three variants matched to the mockup's hero, featured-work and
 * contact SVGs.
 */
export function Reticle({
  variant,
  className,
}: {
  variant: ReticleVariant
  className?: string
}) {
  return (
    <svg
      className={['reticle', className].filter(Boolean).join(' ')}
      viewBox="0 0 200 200"
      aria-hidden="true"
    >
      {variant === 'hero' && (
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="100" cy="100" r="94" opacity=".25" />
          <circle className="spin" cx="100" cy="100" r="78" strokeDasharray="6 12" opacity=".7" />
          <circle cx="100" cy="100" r="56" opacity=".4" />
          <circle className="spin-r" cx="100" cy="100" r="40" strokeDasharray="2 7" opacity=".8" />
          <path d="M100 16 V48 M100 152 V184 M16 100 H48 M152 100 H184" opacity=".8" />
        </g>
      )}
      {variant === 'featured' && (
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="100" cy="100" r="92" opacity=".3" />
          <circle className="spin" cx="100" cy="100" r="76" strokeDasharray="5 11" opacity=".8" />
          <circle cx="100" cy="100" r="54" opacity=".45" />
          <circle className="spin-r" cx="100" cy="100" r="38" strokeDasharray="2 6" opacity=".9" />
          <path d="M100 18 V46 M100 154 V182 M18 100 H46 M154 100 H182" opacity=".85" />
          <path d="M100 80 V120 M80 100 H120" opacity=".5" />
        </g>
      )}
      {variant === 'contact' && (
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="100" cy="100" r="94" opacity=".3" />
          <circle className="spin" cx="100" cy="100" r="76" strokeDasharray="5 11" opacity=".8" />
          <circle className="spin-r" cx="100" cy="100" r="46" strokeDasharray="2 7" opacity=".85" />
          <path d="M100 16 V48 M100 152 V184 M16 100 H48 M152 100 H184" opacity=".8" />
        </g>
      )}
      <circle cx="100" cy="100" r="4" fill="currentColor" />
    </svg>
  )
}
