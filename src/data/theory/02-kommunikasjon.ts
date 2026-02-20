import { TheoryContent } from '@/types';

export const kommunikasjonTheory: TheoryContent = {
  subjectId: 'kommunikasjon',
  title: 'Kommunikasjon og konflikthåndtering',
  sections: [
    {
      heading: 'Kommunikasjonsteori',
      content: 'God kommunikasjon er vekterens viktigste verktøy. Over 70 % av all kommunikasjon er ikke-verbal, inkludert kroppsspråk, ansiktsuttrykk og tonefall. Aktiv lytting innebærer å gi full oppmerksomhet, stille åpne spørsmål og bekrefte forståelse gjennom parafrasering.',
      bulletPoints: [
        'Over 70 % av kommunikasjonen er ikke-verbal',
        'Aktiv lytting: lytt, bekreft, parafrasér',
        'Åpne spørsmål inviterer til dialog (hva, hvordan, fortell)',
        'Jeg-meldinger reduserer forsvarsreaksjoner',
      ],
    },
    {
      heading: 'Konflikthåndtering og deeskalering',
      content: 'Konflikter utvikler seg typisk gjennom fasene uenighet, frustrasjon, eskalering, krise og deeskalering. Vekterens mål er å gripe inn tidlig for å forhindre eskalering. Deeskalering innebærer å roe ned situasjonen gjennom rolig stemme, empatisk kommunikasjon og respektfull avstand.',
      bulletPoints: [
        'Gjenkjenn konfliktfasene tidlig',
        'Bruk rolig stemme og åpent kroppsspråk',
        'Hold minst én armlengdes avstand (proksemikk)',
        'Unngå provoserende kroppsspråk (peke, krysse armer)',
        'Anerkjenn personens følelser uten å eskalere',
      ],
    },
    {
      heading: 'Verbal judo og assertiv kommunikasjon',
      content: 'Verbal judo handler om å bruke språk strategisk for å styre samtaler og avverge konfrontasjoner. Assertiv kommunikasjon er å uttrykke egne behov tydelig og respektfullt uten å være verken passiv eller aggressiv. Begge teknikkene er sentrale verktøy for vektere.',
      bulletPoints: [
        'Verbal judo: bruk empati og taktisk kommunikasjon',
        'Assertiv: tydelig og respektfull, ikke passiv eller aggressiv',
        'Presentér deg, vis forståelse og forsøk dialog',
        'Sett tydelige grenser ved behov',
      ],
    },
  ],
  keyTerms: [
    { term: 'Aktiv lytting', definition: 'Å gi full oppmerksomhet til samtalepartneren, stille oppfølgingsspørsmål og bekrefte forståelse gjennom parafrasering.' },
    { term: 'Deeskalering', definition: 'Å aktivt arbeide for å roe ned en situasjon og redusere spenningsnivået for å unngå at konflikten eskalerer.' },
    { term: 'Verbal judo', definition: 'Teknikk for å bruke språk strategisk for å styre samtaler, avverge konfrontasjoner og deeskalere konflikter.' },
    { term: 'Proksemikk', definition: 'Læren om fysisk avstand i kommunikasjon. I konfliktsituasjoner bør man holde minst én armlengdes avstand.' },
    { term: 'Assertiv kommunikasjon', definition: 'Å uttrykke egne meninger og behov tydelig og respektfullt, uten å være passiv eller aggressiv.' },
  ],
};
