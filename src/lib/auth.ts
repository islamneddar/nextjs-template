import { JWT } from '@auth/core/jwt';
import CredentialsProvider from '@auth/core/providers/credentials';
import { Session } from '@auth/core/types';
import { User } from '@auth/core/types';
import { NextAuth } from '@auth/nextjs';

import { authService, loginSchema } from '@/lib/api/auth';

interface CustomUser extends User {
  id: string;
}

interface CustomSession extends Session {
  user: CustomUser;
}

interface CustomJWT extends JWT {
  id: string;
  email: string;
  name: string;
}

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const validatedFields = loginSchema.safeParse(credentials);

          if (!validatedFields.success) {
            throw new Error('Invalid credentials');
          }

          const { email, password } = validatedFields.data;

          // Call the auth service login function
          const result = await authService.login({ email, password });

          // Return the user object from the auth service
          return result.user as CustomUser;
        } catch (error) {
          console.error('Auth error:', error);
          throw error;
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = (user as CustomUser).id;
        token.email = user.email || '';
        token.name = user.name || '';
      }
      return token as CustomJWT;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: (token as CustomJWT).id,
          email: token.email || '',
          name: token.name || '',
        } as CustomUser;
      }
      return session as CustomSession;
    },
    async authorized({ request, auth }) {
      console.log(auth);
      console.log(request.nextUrl.pathname);
      const pathname = request.nextUrl?.pathname || new URL(request.url).pathname;

      // Always allow access to login page and API routes
      if (pathname.startsWith('/api/') || pathname === '/login') {
        return true;
      }

      // For dashboard routes, require authentication
      if (pathname.startsWith('/dashboard')) {
        return !!auth;
      }
      return true;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.AUTH_SECRET,
});
