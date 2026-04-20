import Link from 'next/link';
import { images } from '@/lib/images';
import { hrefFor } from '@/lib/i18n/routes';

type Props = {
  variant?: 'header' | 'footer';
  locale?: 'cs' | 'en';
};

export default function BrandLogo({ variant = 'header', locale = 'cs' }: Props) {
  const maskUrl = `url(${images.logoProfile})`;
  const homeHref = hrefFor('home', locale);
  const aria =
    locale === 'en'
      ? 'VRzazitek.cz — home'
      : 'VRzazitek.cz — úvodní stránka';
  const slogan =
    locale === 'en' ? (
      <>
        Your <strong>VIRTUAL</strong> experience starts here!
      </>
    ) : (
      <>
        Váš <strong>VIRTUÁLNÍ</strong> zážitek začíná zde!
      </>
    );

  return (
    <Link href={homeHref} className={`site-logo-link site-logo-link--${variant}`} aria-label={aria}>
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
            {slogan}
          </span>
        </span>
      </span>
    </Link>
  );
}
