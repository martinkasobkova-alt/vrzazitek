/**
 * SVG vlajky (ne emoji) — konzistentní vykreslení na Windows i jinde.
 * ČR: státní vlajka (bílá / červená, modrý klín u žerdi).
 * EN: Union Jack (Velká Británie — běžná pro přepínač „angličtina“).
 */

type Props = {
  /** Šířka v px, výška se dopočítá podle poměru stran vlajky */
  width?: number;
  className?: string;
};

export function FlagCz({ width = 22, className }: Props) {
  const height = Math.round((width * 2) / 3);
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 3 2"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path fill="#fff" d="M0 0h3v1H0z" />
      <path fill="#d7141a" d="M0 1h3v1H0z" />
      <path fill="#11457e" d="M0 0v2l1.5-1z" />
    </svg>
  );
}

export function FlagGb({ width = 22, className }: Props) {
  const height = Math.round((width * 5) / 10);
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 60 30"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path fill="#012169" d="M0 0h60v30H0z" />
      <path stroke="#fff" strokeWidth="6" d="M0 0l60 30M60 0L0 30" />
      <path stroke="#C8102E" strokeWidth="4" d="M0 0l60 30M60 0L0 30" />
      <path stroke="#fff" strokeWidth="10" d="M30 0v30M0 15h60" />
      <path stroke="#C8102E" strokeWidth="6" d="M30 0v30M0 15h60" />
    </svg>
  );
}
