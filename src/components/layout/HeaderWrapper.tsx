'use client';

import { useEffect, useState, type ComponentType } from 'react';

function HeaderPlaceholder() {
  return (
    <header className="sticky top-0 z-50 bg-brand-800 text-white shadow-lg">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <span className="font-bold text-xl">Bestå Vekterprøven</span>
        </div>
      </div>
    </header>
  );
}

export function HeaderWrapper() {
  const [HeaderComp, setHeaderComp] = useState<ComponentType | null>(null);

  useEffect(() => {
    import('./Header').then((mod) => {
      setHeaderComp(() => mod.Header);
    });
  }, []);

  if (!HeaderComp) return <HeaderPlaceholder />;
  return <HeaderComp />;
}
