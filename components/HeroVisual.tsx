import Image from 'next/image';
import { images } from '@/lib/images';

export default function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="hero-visual__rings" aria-hidden>
        <div className="ring ring-1"></div>
        <div className="ring ring-2"></div>
        <div className="ring ring-3"></div>
      </div>
      <div className="hero-center">
        <Image
          src={images.hero}
          alt="Zážitek ve virtuální realitě"
          fill
          sizes="(max-width: 900px) 85vw, 280px"
          priority
          style={{ objectFit: 'cover' }}
        />
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(145deg, rgba(8, 145, 178, 0.2), rgba(124, 58, 237, 0.15))',
            mixBlendMode: 'multiply',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  );
}
