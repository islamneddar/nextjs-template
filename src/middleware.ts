import { NextResponse } from 'next/server';

import { auth } from '@/lib/auth';

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isAuthPage = nextUrl.pathname.startsWith('/login');

  if (isAuthPage) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL('/dashboard', nextUrl));
    }
    return undefined;
  }

  if (!isLoggedIn && !isAuthPage) {
    let callbackUrl = nextUrl.pathname;
    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }

    const encodedCallbackUrl = encodeURIComponent(callbackUrl);
    return NextResponse.redirect(new URL(`/login?callbackUrl=${encodedCallbackUrl}`, nextUrl));
  }

  return undefined;
});

// Specify which routes to run the middleware on
export const config = {
  matcher: [
    // Match only our application routes
    '/',
    '/dashboard/:path*',
    '/login',
    // Exclude all other paths
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
