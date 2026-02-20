import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { HeaderWrapper } from '@/components/layout/HeaderWrapper';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

// Force all pages to render dynamically (SSR) to avoid Node.js 24 prerender issues
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: {
    default: 'VekterTeori | Øv til vektereksamen',
    template: '%s | VekterTeori',
  },
  description:
    'Øvingsoppgaver og simulert eksamen for nasjonal grunnutdanning for vektere. Øv på 15 emner med flervalgsoppgaver og få umiddelbar tilbakemelding.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <HeaderWrapper />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
