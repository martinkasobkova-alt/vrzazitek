import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isEn = pathname === '/en' || pathname.startsWith('/en/');
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-locale', isEn ? 'en' : 'cs');

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};
