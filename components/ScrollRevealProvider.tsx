'use client';

import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

const SR_SELECTOR = '[data-scroll-reveal], [data-sr]';

/**
 * Sekce [data-scroll-reveal]: při načtení jen pokud jsou opravdu na obrazovce (bez masového odhalení data-sr).
 * [data-sr]: výhradně přes IntersectionObserver / scan — animace až při scrollu „k obsahu“.
 * Zpoždění: data-scroll-reveal-delay | data-sr-delay (ms).
 */
export default function ScrollRevealProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const root = document.documentElement;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(SR_SELECTOR));
    if (nodes.length === 0) {
      root.classList.add('sr-enabled');
      return;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      nodes.forEach((el) => el.classList.add('is-revealed'));
      root.classList.add('sr-enabled');
      return;
    }

    const delayFor = (el: HTMLElement) => {
      const raw = el.dataset.scrollRevealDelay ?? el.dataset.srDelay;
      return raw ? Math.min(800, Math.max(0, parseInt(raw, 10) || 0)) : 0;
    };

    const applyReveal = (el: HTMLElement, ms: number) => {
      if (el.classList.contains('is-revealed')) return;
      const go = () => el.classList.add('is-revealed');
      if (ms > 0) window.setTimeout(go, ms);
      else requestAnimationFrame(() => requestAnimationFrame(go));
    };

    /** Jen [data-scroll-reveal]: je sekce už na obrazovce při loadu? */
    const isSectionInitiallyOnScreen = (el: HTMLElement) => {
      if (!el.hasAttribute('data-scroll-reveal')) return false;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const inset = Math.min(80, vh * 0.08);
      return rect.bottom > inset && rect.top < vh - inset;
    };

    /** Záložní scan: alespoň malý pruh prvku je ve viewportu (ne „120px mimo“). */
    const hasMeaningfulViewportOverlap = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const top = Math.max(rect.top, 0);
      const bottom = Math.min(rect.bottom, vh);
      const visible = bottom - top;
      return visible >= Math.min(28, vh * 0.035);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          observer.unobserve(el);
          applyReveal(el, delayFor(el));
        });
      },
      {
        root: null,
        // Mírně rozšířený root → odhalení těsně předtím, než je blok úplně uvnitř (při scrollu dolů/nahoru)
        rootMargin: '10% 0px 14% 0px',
        threshold: [0, 0.02, 0.08],
      }
    );

    const scan = () => {
      nodes.forEach((el) => {
        if (el.classList.contains('is-revealed')) return;
        if (hasMeaningfulViewportOverlap(el)) {
          observer.unobserve(el);
          applyReveal(el, delayFor(el));
        }
      });
    };

    nodes.forEach((el) => {
      if (isSectionInitiallyOnScreen(el)) applyReveal(el, delayFor(el));
    });
    root.classList.add('sr-enabled');

    nodes.forEach((el) => {
      if (!el.classList.contains('is-revealed')) observer.observe(el);
    });

    window.addEventListener('scroll', scan, { passive: true });
    window.addEventListener('resize', scan, { passive: true });

    const tScan = window.setTimeout(scan, 0);
    const tScan2 = window.setTimeout(scan, 120);
    const tScan3 = window.setTimeout(scan, 400);

    const tFallback = window.setTimeout(() => {
      nodes.forEach((el) => {
        if (!el.classList.contains('is-revealed')) el.classList.add('is-revealed');
      });
    }, 5000);

    return () => {
      window.removeEventListener('scroll', scan);
      window.removeEventListener('resize', scan);
      observer.disconnect();
      clearTimeout(tScan);
      clearTimeout(tScan2);
      clearTimeout(tScan3);
      clearTimeout(tFallback);
    };
  }, [pathname]);

  return <>{children}</>;
}
