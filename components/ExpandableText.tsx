'use client';

import { useId, useState } from 'react';
import type { ReactNode } from 'react';

type Props = {
  preview: ReactNode;
  /** Druhá (a další) část textu — zobrazí se po rozbalení */
  extra: ReactNode;
  className?: string;
  readMoreLabel?: string;
  readLessLabel?: string;
};

export default function ExpandableText({
  preview,
  extra,
  className,
  readMoreLabel = 'Číst více',
  readLessLabel = 'Číst méně',
}: Props) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const regionId = `${id}-more`;

  return (
    <div className={className}>
      {preview}
      <div id={regionId} hidden={!open}>
        {extra}
      </div>
      <button
        type="button"
        className="read-more-toggle"
        aria-expanded={open}
        aria-controls={regionId}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? readLessLabel : readMoreLabel}
      </button>
    </div>
  );
}
