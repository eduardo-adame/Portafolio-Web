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

        <rect width="100%" height="100%" fill={`url(#${gridId})`} opacity="0.12" />

        <g className="bg-anim-primary" stroke="currentColor" strokeWidth="1" opacity="0.18" strokeLinecap="round">
          <line x1="250" y1="300" x2="550" y2="250" />
          <path d="M 550 250 L 700 250 L 700 350 L 850 350" />
          <path d="M 850 350 L 1000 350 L 1000 250 L 1150 250" />
          <path d="M 1150 250 L 1300 250 L 1300 350 L 1450 350" />
          <line x1="550" y1="250" x2="550" y2="620" />
          <line x1="550" y1="620" x2="850" y2="720" />
        </g>

        <g className="bg-anim-secondary" stroke="currentColor" strokeWidth="0.7" opacity="0.12" strokeLinecap="round">
          <line x1="850" y1="720" x2="1150" y2="560" />
          <path d="M 1450 350 L 1300 350 L 1300 560 L 1150 560" />
          <line x1="250" y1="300" x2="250" y2="660" />
          <line x1="550" y1="620" x2="250" y2="660" />
          <path d="M 1150 250 L 1150 480 L 1450 480 L 1450 660" />
          <line x1="1150" y1="560" x2="1450" y2="660" />
          <line x1="1450" y1="350" x2="1650" y2="250" />
        </g>

        <g className="bg-anim-nodes" stroke="currentColor" strokeWidth="1.3" opacity="0.22">
          <circle cx="250" cy="300" r="16" />
          <circle cx="550" cy="250" r="22" />
          <circle cx="850" cy="350" r="14" />
          <circle cx="1150" cy="250" r="30" />
          <circle cx="1450" cy="350" r="20" />
          <circle cx="550" cy="620" r="18" />
        </g>

        <g className="bg-anim-nodes-secondary" stroke="currentColor" strokeWidth="1" opacity="0.16">
          <circle cx="850" cy="720" r="14" />
          <circle cx="1150" cy="560" r="24" />
          <circle cx="250" cy="660" r="12" />
          <circle cx="1450" cy="660" r="16" />
          <circle cx="1650" cy="250" r="10" />
        </g>

        <g className="bg-anims-extra" stroke="currentColor" strokeWidth="2.5" opacity="0.14">
          <circle cx="1150" cy="250" r="38" />
        </g>
      </svg>
    </div>
  )
}
