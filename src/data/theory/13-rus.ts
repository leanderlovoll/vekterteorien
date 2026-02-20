import { TheoryContent } from '@/types';

export const rusTheory: TheoryContent = {
  subjectId: 'rus',
  title: 'Alkohol, medikamenter og narkotika',
  sections: [
    {
      heading: 'Gjenkjenne rusmiddelpåvirkning',
      content: 'Vektere må kunne gjenkjenne tegn på ulike typer rusmiddelpåvirkning for å ivareta sikkerhet og gi riktig hjelp. Alkohol gir lukt, sjangling og utydelig tale. Sentralstimulerende stoffer gir store pupiller og hyperaktivitet. Opioider gir små pupiller og sløvhet.',
      bulletPoints: [
        'Alkohol: lukt, sjangling, utydelig tale, endret atferd',
        'Sentralstimulerende (amfetamin, kokain): store pupiller, uro, paranoia',
        'Opioider (heroin, morfin): knappenålspupiller, sløvhet, nikking',
        'Cannabis: røde øyne, sløvhet, søtlig lukt, økt matlyst',
      ],
    },
    {
      heading: 'Håndtering av ruspåvirkede personer',
      content: 'Ruspåvirkede personer kan ha uforutsigbar atferd med raske humørskift. Vær rolig og bestemt, hold trygg avstand, unngå provokasjon, og bruk korte og tydelige setninger. Vurder alltid om personen trenger medisinsk hjelp.',
      bulletPoints: [
        'Vær rolig, bestemt og profesjonell',
        'Hold trygg avstand — atferden er uforutsigbar',
        'Bruk korte og tydelige setninger',
        'Vurder om personen trenger medisinsk hjelp',
        'Dokumenter observasjoner objektivt',
      ],
    },
    {
      heading: 'Overdose og farlige stoffer',
      content: 'Ved mistanke om overdose: ring 113 umiddelbart, sikre frie luftveier, legg i stabilt sideleie hvis bevisstløs men puster, start HLR ved pustestans. GHB er spesielt farlig med smal margin mellom rus og overdose. Blandingsrus øker risikoen for alvorlige komplikasjoner.',
      bulletPoints: [
        'Ring 113 umiddelbart ved mistanke om overdose',
        'Sikre frie luftveier, stabilt sideleie, vær klar for HLR',
        'GHB: smal margin mellom rus og overdose',
        'Blandingsrus: uforutsigbare og forsterkede effekter',
      ],
    },
  ],
  keyTerms: [
    { term: 'Sentralstimulerende', definition: 'Stoffer som amfetamin og kokain som stimulerer sentralnervesystemet, gir store pupiller, energi og paranoia.' },
    { term: 'Opioider', definition: 'Stoffer som heroin og morfin som demper sentralnervesystemet, gir knappenålspupiller, sløvhet og risiko for pustestans.' },
    { term: 'GHB', definition: 'Sentraldempende stoff med svært smal margin mellom rusgivende dose og potensielt dødelig overdose.' },
    { term: 'Blandingsrus', definition: 'Bruk av flere rusmidler samtidig, som gir uforutsigbare og ofte forsterkede effekter med økt risiko for overdose.' },
    { term: 'Nalokson', definition: 'Motgift mot opioidoverdose som kan reversere pustestans. Gis som nesespray eller injeksjon.' },
  ],
};
