import { SessionProvider } from 'next-auth/react';
import { Nunito } from 'next/font/google';

import { auth } from '@/lib/auth';

import './globals.css';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
