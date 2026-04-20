import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('en', 'objednani-vr');

export default function OrderEnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
