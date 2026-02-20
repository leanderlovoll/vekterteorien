'use client';

import dynamic from 'next/dynamic';
import { Footer } from './Footer';

const Header = dynamic(() => import('./Header').then((m) => m.Header), {
  ssr: false,
  loading: () => (
    <header className="sticky top-0 z-50 bg-brand-800 text-white shadow-lg">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <span className="font-bold text-xl">Bestå Vekterprøven</span>
        </div>
      </div>
    </header>
  ),
});

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
