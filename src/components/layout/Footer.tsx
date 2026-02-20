import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-200 py-8 mt-auto">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Bestå Vekterprøven</h3>
            <p className="text-sm leading-relaxed">
              Din digitale forberedelse til nasjonal grunnutdanning for vektere.
              Øv deg med realistiske spørsmål og simulert eksamen.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Snarveier</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ovelse" className="hover:text-white transition-colors">Øvelse per emne</Link></li>
              <li><Link href="/eksamen" className="hover:text-white transition-colors">Simulert eksamen</Link></li>
              <li><Link href="/feilbank" className="hover:text-white transition-colors">Feilbank</Link></li>
              <li><Link href="/teori" className="hover:text-white transition-colors">Teorisammendrag</Link></li>
              <li><Link href="/statistikk" className="hover:text-white transition-colors">Statistikk</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Info</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/om-oss" className="hover:text-white transition-colors">Om oss</Link></li>
              <li><Link href="/sporsmal-og-svar" className="hover:text-white transition-colors">Spørsmål og svar</Link></li>
              <li><Link href="/kontakt" className="hover:text-white transition-colors">Kontakt oss</Link></li>
              <li><Link href="/vilkar" className="hover:text-white transition-colors">Vilkår</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-brand-800 mt-8 pt-6 text-xs text-brand-300 space-y-3">
          <p>
            Dette er et uoffisielt øvingsverktøy. Nettstedet er ikke tilknyttet Politiet eller noen
            offisiell eksamensinstans. Spørsmålene er laget for øvingsformål og gjenspeiler ikke
            faktiske eksamensspørsmål.
          </p>
          <p className="font-semibold text-brand-200">
            Innholdet på denne nettsiden er ikke juridisk rådgivning. Informasjonen er ment som
            et hjelpemiddel for eksamensforberedelse og erstatter ikke profesjonell juridisk veiledning.
            Ved juridiske spørsmål bør du kontakte kvalifisert juridisk rådgiver.
          </p>
        </div>
      </div>
    </footer>
  );
}
