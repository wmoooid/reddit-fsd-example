import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { cn } from '@/shared/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-main'
});

export const metadata: Metadata = {
  title: 'Reddit',
  description: 'Reddit client FSD example'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', inter.variable)}>
        <header></header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
