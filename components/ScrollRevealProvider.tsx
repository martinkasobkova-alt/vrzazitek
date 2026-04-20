'use client';

import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Sleduje [data-scroll-reveal] a po vstupu do viewportu přidá .is-revealed.
 * useLayoutEffect + html.sr-enabled v CSS: animace až po hydrataci, bez „prázdné“ stránky před JS.
 */
export default function ScrollRevealProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const root = document.documentElement;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-scroll-reveal]'));
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
      const raw = el.dataset.scrollRevealDelay;
      return raw ? Math.min(800, Math.max(0, parseInt(raw, 10) || 0)) : 0;
    };

    const applyReveal = (el: HTMLElement, ms: number) => {
      if (el.classList.contains('is-revealed')) return;
      const go = () => el.classList.add('is-revealed');
      if (ms > 0) window.setTimeout(go, ms);
      else queueMicrotask(go);
    };

    /** Libereální: jakákoli část prvku „kolem“ viewportu (řeší IO edge cases / layout). */
    const isRoughlyInView = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const margin = 120;
      return rect.bottom > -margin && rect.top < vh + margin;
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
      { root: null, rootMargin: '120px 0px 120px 0px', threshold: 0 }
    );

    const scan = () => {
      nodes.forEach((el) => {
        if (el.classList.contains('is-revealed')) return;
        if (isRoughlyInView(el)) {
          observer.unobserve(el);
          applyReveal(el, delayFor(el));
        }
      });
    };

    /* Nejdřív odhalit, co je už ve viewportu — až pak zapnout sr-enabled (viz globals.css). */
    nodes.forEach((el) => {
      if (isRoughlyInView(el)) applyReveal(el, delayFor(el));
    });
    root.classList.add('sr-enabled');

    nodes.forEach((el) => {
      if (!el.classList.contains('is-revealed')) observer.observe(el);
    });

    window.addEventListener('scroll', scan, { passive: true });
    window.addEventListener('resize', scan, { passive: true });

    const tScan = window.setTimeout(scan, 80);
    const tScan2 = window.setTimeout(scan, 400);
    const tFallback = window.setTimeout(() => {
      nodes.forEach((el) => {
        if (!el.classList.contains('is-revealed')) el.classList.add('is-revealed');
      });
    }, 2500);

    return () => {
      window.removeEventListener('scroll', scan);
      window.removeEventListener('resize', scan);
      observer.disconnect();
      clearTimeout(tScan);
      clearTimeout(tScan2);
      clearTimeout(tFallback);
    };
  }, [pathname]);

  return <>{children}</>;
}
