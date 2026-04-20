interface LogoProps {
  className?: string
  showText?: boolean
}

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Layered cube icon */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
      >
        {/* Bottom layer */}
        <path
          d="M16 28L4 21V14L16 21L28 14V21L16 28Z"
          fill="url(#gradient-bottom)"
        />
        {/* Middle layer */}
        <path
          d="M16 21L4 14V7L16 14L28 7V14L16 21Z"
          fill="url(#gradient-middle)"
        />
        {/* Top layer */}
        <path
          d="M16 14L4 7L16 0L28 7L16 14Z"
          fill="url(#gradient-top)"
        />
        {/* Gradients */}
        <defs>
          <linearGradient id="gradient-bottom" x1="4" y1="14" x2="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4F46E5" />
            <stop offset="1" stopColor="#6366F1" />
          </linearGradient>
          <linearGradient id="gradient-middle" x1="4" y1="7" x2="28" y2="21" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366F1" />
            <stop offset="1" stopColor="#818CF8" />
          </linearGradient>
          <linearGradient id="gradient-top" x1="4" y1="0" x2="28" y2="14" gradientUnits="userSpaceOnUse">
            <stop stopColor="#818CF8" />
            <stop offset="1" stopColor="#A5B4FC" />
          </linearGradient>
        </defs>
      </svg>
      {showText && (
        <span className="text-xl font-semibold tracking-tight text-foreground">
          Prooflayer
        </span>
      )}
    </div>
  )
}
