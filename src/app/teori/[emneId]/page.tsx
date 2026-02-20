import Link from 'next/link';
import { subjects, getSubjectById } from '@/data/subjects';
import { allTheory } from '@/data/theory';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return subjects.map((s) => ({ emneId: s.id }));
}

export default async function TheoryDetailPage({ params }: { params: Promise<{ emneId: string }> }) {
  const { emneId } = await params;
  const subject = getSubjectById(emneId);
  const theory = allTheory[emneId];

  if (!subject || !theory) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 md:py-12">
      <Link href="/teori" className="text-sm text-brand-600 hover:text-brand-700">
        ← Tilbake til teori
      </Link>

      <div className="mt-4 mb-8">
        <div className="text-xs text-surface-700 font-medium mb-1">
          Emne {subject.number} · {subject.hours} timer
        </div>
        <h1 className="text-3xl font-bold text-surface-900">
          {subject.name}
        </h1>
      </div>

      {/* Theory sections */}
      <div className="space-y-8">
        {theory.sections.map((section, idx) => (
          <section key={idx} className="bg-white rounded-xl shadow-sm border border-surface-200 p-6">
            <h2 className="text-xl font-semibold text-surface-900 mb-3">{section.heading}</h2>
            <p className="text-surface-700 leading-relaxed mb-4">{section.content}</p>
            {section.bulletPoints && section.bulletPoints.length > 0 && (
              <ul className="space-y-2">
                {section.bulletPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-surface-700">
                    <span className="text-brand-500 mt-1.5 flex-shrink-0">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {/* Key terms */}
      {theory.keyTerms.length > 0 && (
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-surface-200 p-6">
          <h2 className="text-xl font-semibold text-surface-900 mb-4">Viktige begreper</h2>
          <dl className="space-y-3">
            {theory.keyTerms.map((term, idx) => (
              <div key={idx} className="border-b border-surface-100 pb-3 last:border-0">
                <dt className="font-medium text-surface-900">{term.term}</dt>
                <dd className="text-sm text-surface-700 mt-0.5">{term.definition}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {/* Navigation */}
      <div className="mt-8 flex justify-between">
        <Link
          href={`/ovelse/${emneId}`}
          className="px-5 py-2.5 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors"
        >
          Øv på dette emnet
        </Link>
        <Link
          href="/teori"
          className="px-5 py-2.5 border border-surface-300 text-surface-700 font-medium rounded-lg hover:bg-surface-100 transition-colors"
        >
          Alle emner
        </Link>
      </div>
    </div>
  );
}
