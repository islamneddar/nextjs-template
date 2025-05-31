import { Session } from '@auth/core/types';
import { NextRequest } from 'next/server';

import { auth } from '@/lib/auth';

export default auth((req: NextRequest & { auth: Session | null }) => {
  const isLoggedIn = !!req.auth;
  const isOnDashboard = req.nextUrl.pathname.startsWith('/dashboard');

  if (isOnDashboard && !isLoggedIn) {
    return Response.redirect(new URL('/login', req.nextUrl));
  }
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
