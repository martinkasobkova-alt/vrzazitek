import Image from 'next/image';
import { referenceLogos } from '@/lib/referenceLogos';

export default function ReferenceLogoMarquee() {
  return (
    <div className="logo-marquee">
      <p className="logo-marquee__label">Důvěřují nám</p>
      <div className="logo-marquee__viewport">
        <div className="logo-marquee__track">
          <div className="logo-marquee__group">
            {referenceLogos.map((logo, i) => (
              <div key={`g1-${i}`} className="logo-marquee__item">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={64}
                  className="logo-marquee__img"
                  sizes="160px"
                />
              </div>
            ))}
          </div>
          <div className="logo-marquee__group" aria-hidden>
            {referenceLogos.map((logo, i) => (
              <div key={`g2-${i}`} className="logo-marquee__item">
                <Image
                  src={logo.src}
                  alt=""
                  width={160}
                  height={64}
                  className="logo-marquee__img"
                  sizes="160px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
