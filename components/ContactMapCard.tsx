import { SITE_ADDRESS_SINGLE_LINE, SITE_MAP_EMBED_SRC } from '@/lib/siteAddress';

export default function ContactMapCard() {
  return (
    <div className="media-card-dark media-card-dark--stack">
      <div className="media-card-dark__map-block">
        <iframe
          src={SITE_MAP_EMBED_SRC}
          title={`Mapa — ${SITE_ADDRESS_SINGLE_LINE}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}
