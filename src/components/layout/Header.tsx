'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/ovelse', label: 'Øvelse' },
  { href: '/eksamen', label: 'Eksamen' },
  { href: '/feilbank', label: 'Feilbank' },
  { href: '/teori', label: 'Teori' },
  { href: '/statistikk', label: 'Statistikk' },
];

export function Header() {
  const pathname = usePathname() ?? '';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-800 text-white shadow-lg">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.png`}
              alt="VekterTeori"
              className="h-28 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                  pathname.startsWith(link.href)
                    ? 'bg-brand-600 text-white'
                    : 'text-brand-200 hover:bg-brand-700 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/handlekurv"
              className="p-2 rounded-lg text-brand-200 hover:bg-brand-700 hover:text-white transition-colors"
              aria-label="Handlekurv"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </Link>
            <Link
              href="/logg-inn"
              className="hidden sm:inline-flex items-center px-4 py-1.5 bg-white text-brand-800 text-sm font-semibold rounded-lg hover:bg-brand-50 transition-colors"
            >
              Logg inn
            </Link>
            <Link
              href="/logg-inn"
              className="sm:hidden p-2 rounded-lg text-brand-200 hover:bg-brand-700 hover:text-white transition-colors"
              aria-label="Logg inn"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </Link>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-brand-700 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Lukk meny' : 'Åpne meny'}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-brand-700 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'block px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                  pathname.startsWith(link.href)
                    ? 'bg-brand-600 text-white'
                    : 'text-brand-200 hover:bg-brand-700 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-brand-700 mt-2 pt-2">
              <Link
                href="/logg-inn"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm font-medium text-brand-200 hover:bg-brand-700 hover:text-white transition-colors"
              >
                Logg inn
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
