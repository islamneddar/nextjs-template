import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Your App Name',
  description: 'Sign in to your account',
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-gray-50 dark:bg-gray-900">{children}</div>;
}
