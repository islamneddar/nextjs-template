import { auth } from '@/lib/auth';

export default auth(() => {
  // The middleware is now handled by the authorized callback in auth.ts
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
