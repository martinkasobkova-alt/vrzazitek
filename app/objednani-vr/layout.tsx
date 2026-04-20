import type { Metadata } from 'next';
import { metadataFor } from '@/lib/seo';

export const metadata: Metadata = metadataFor('objednani-vr');

export default function ObjednaniLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
