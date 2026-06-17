import './BlueprintBg.css'

const gridId = 'bg-grid'

export default function BlueprintBg() {
  return (
    <div className="bg-blueprint" aria-hidden="true">
      <svg
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={gridId} width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.3" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill={`url(#${gridId})`} className="bg-grid-overlay" />
      </svg>
    </div>
  )
}
