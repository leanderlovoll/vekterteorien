import type { MetadataRoute } from 'next';
import { subjects } from '@/data/subjects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vekterteorien.no';

  const staticPages = [
    '',
    '/ovelse',
    '/eksamen',
    '/feilbank',
    '/teori',
    '/statistikk',
    '/betaling',
    '/logg-inn',
    '/om-oss',
    '/kontakt',
    '/sporsmal-og-svar',
    '/vilkar',
  ];

  const theoryPages = subjects.map((s) => `/teori/${s.id}`);
  const practicePages = subjects.map((s) => `/ovelse/${s.id}`);

  const allPages = [...staticPages, ...theoryPages, ...practicePages];

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.startsWith('/teori') || path.startsWith('/ovelse') ? 0.8 : 0.5,
  }));
}
