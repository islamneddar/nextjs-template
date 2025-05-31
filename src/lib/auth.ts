import CredentialsProvider from '@auth/core/providers/credentials';
import { Session } from '@auth/core/types';
import { NextAuth } from '@auth/nextjs';

import { loginSchema } from '@/lib/api/auth';

interface CustomSession extends Session {
  user: {
    id: string;
    email: string;
    name: string;
  };
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
            return null;
          }

          const { email, password } = validatedFields.data;

          // TODO: Replace with your actual user authentication logic
          if (email === 'test@example.com' && password === 'password123') {
            return {
              id: '1',
              email: 'test@example.com',
              name: 'Test User',
            };
          }

          return null;
        } catch (error) {
          console.error('Auth error:', error);
          return null;
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
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }): Promise<CustomSession> {
      return {
        ...session,
        user: {
          id: token.id as string,
          email: token.email as string,
          name: token.name as string,
        },
      };
    },
    async authorized({ request, auth }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = request.nextUrl?.pathname.startsWith('/dashboard');
      if (isOnDashboard && !isLoggedIn) {
        return false;
      }
      return true;
    },
  },
  session: {
    strategy: 'jwt',
  },
});
