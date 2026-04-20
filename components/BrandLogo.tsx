import Link from 'next/link';
import { images } from '@/lib/images';

type Props = {
  variant?: 'header' | 'footer';
};

export default function BrandLogo({ variant = 'header' }: Props) {
  const maskUrl = `url(${images.logoProfile})`;

  return (
    <Link href="/" className={`site-logo-link site-logo-link--${variant}`} aria-label="VRzazitek.cz — úvodní stránka">
      <span className="site-logo-stack">
        <span
          className={`site-logo-profile site-logo-profile--${variant}`}
          style={{
            WebkitMaskImage: maskUrl,
            maskImage: maskUrl,
          }}
          role="img"
          aria-hidden
        />
        <span className="site-logo-words">
          <span className={`site-logo-name site-logo-name--${variant}`}>VRzazitek.cz</span>
          <span className={`site-logo-slogan site-logo-slogan--${variant}`}>
            Váš <strong>VIRTUÁLNÍ</strong> zážitek začíná zde!
          </span>
        </span>
      </span>
    </Link>
  );
}
