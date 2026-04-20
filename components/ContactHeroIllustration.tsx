export default function ContactHeroIllustration() {
  return (
    <svg
      viewBox="0 0 460 400"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="auto"
      style={{ maxWidth: 440, display: 'block' }}
      aria-hidden
    >
      <defs>
        <linearGradient id="onas-contact-q-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0891b2" />
          <stop offset="48%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <filter id="onas-contact-q-soft" x="-15%" y="-15%" width="130%" height="130%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M 78 108 C 78 44 148 22 222 34 C 302 48 332 128 276 188 C 246 224 198 236 198 278 L 198 316"
        fill="none"
        stroke="url(#onas-contact-q-grad)"
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#onas-contact-q-soft)"
        opacity={0.94}
      />
      <circle cx={198} cy={364} r={24} fill="url(#onas-contact-q-grad)" opacity={0.93} />
      <g transform="translate(258, 158)">
        <path
          d="M 4 48 Q -18 92 4 136 M 164 48 Q 186 92 164 136"
          fill="none"
          stroke="url(#onas-contact-q-grad)"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <rect
          x="4"
          y="38"
          width="160"
          height="86"
          rx="28"
          fill="rgba(255,255,255,0.2)"
          stroke="url(#onas-contact-q-grad)"
          strokeWidth="4.5"
        />
        <ellipse cx="56" cy="81" rx="26" ry="30" fill="rgba(8,145,178,0.16)" stroke="url(#onas-contact-q-grad)" strokeWidth="3.5" />
        <ellipse cx="112" cy="81" rx="26" ry="30" fill="rgba(124,58,237,0.14)" stroke="url(#onas-contact-q-grad)" strokeWidth="3.5" />
      </g>
    </svg>
  );
}
