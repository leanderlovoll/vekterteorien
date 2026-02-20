export const metadata = {
  title: 'Kontakt oss',
  description: 'Ta kontakt med Bestå Vekterprøven ved spørsmål eller tilbakemeldinger.',
};

export default function KontaktPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold text-surface-900 mb-6">Kontakt oss</h1>

      <p className="text-surface-700 leading-relaxed mb-6">
        Har du spørsmål, tilbakemeldinger eller finner feil i spørsmålene? Vi hører gjerne fra deg.
      </p>

      <div className="bg-surface-50 rounded-xl p-6">
        <p className="text-sm text-surface-500 mb-1">E-post</p>
        <a
          href="mailto:vekterteorien@outlook.com"
          className="text-brand-600 font-semibold hover:underline"
        >
          vekterteorien@outlook.com
        </a>
      </div>

      <p className="text-sm text-surface-500 mt-6">
        Vi svarer normalt innen 1–2 virkedager.
      </p>
    </div>
  );
}
