import { NextResponse } from 'next/server';

import { auth } from '@/lib/auth';

// Auth pages that should be accessible to non-authenticated users
const authPages = ['/login', '/register'];

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isAuthPage = authPages.some((page) => nextUrl.pathname.startsWith(page));

  // If on an auth page and logged in, redirect to dashboard
  if (isAuthPage && isLoggedIn) {
    return NextResponse.redirect(new URL('/dashboard', nextUrl));
  }

  // If not on an auth page and not logged in, redirect to login
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
    // Match all routes except api, static files, etc.
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // Include specific auth and app routes
    '/login',
    '/register',
    '/dashboard/:path*',
  ],
};
