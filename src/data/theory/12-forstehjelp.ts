import { TheoryContent } from '@/types';

export const forstehjelpTheory: TheoryContent = {
  subjectId: 'forstehjelp',
  title: 'Førstehjelp',
  sections: [
    {
      heading: 'Livreddende førstehjelp (DHLR)',
      content: 'Ved funn av livløs person: Sikre stedet, forsøk å få kontakt, sjekk pust. Ring 113 hvis personen ikke puster normalt. Start HLR med 30 brystkompresjoner (5-6 cm dypt, 100-120 per minutt) etterfulgt av 2 innblåsninger. Fortsett til hjelp ankommer.',
      bulletPoints: [
        'Sikre egen sikkerhet først',
        'Forsøk å få kontakt — rist i skuldrene og rop',
        'Sjekk pust i opptil 10 sekunder',
        'Ring 113 og start HLR: 30 kompresjoner + 2 innblåsninger',
        'Bruk hjertestarter (AED) så snart den er tilgjengelig',
      ],
    },
    {
      heading: 'Hjertestarter (AED) og stabilt sideleie',
      content: 'En AED analyserer hjerterytmen automatisk og gir elektrisk sjokk hvis nødvendig. Den kan brukes av alle og gir taleinstruksjoner. Stabilt sideleie brukes for bevisstløse som puster normalt — posisjonen sikrer åpne luftveier og forhindrer aspirasjon.',
      bulletPoints: [
        'AED: slå på, følg taleinstruksjoner, plasser elektroder',
        'AED kan brukes av alle — den er trygg og automatisk',
        'Stabilt sideleie: for bevisstløse som puster normalt',
        'Sjekk pust jevnlig ved stabilt sideleie',
      ],
    },
    {
      heading: 'Vanlige førstehjelpsituasjoner',
      content: 'Vektere kan møte situasjoner som blødninger, sjokk, forbrenninger, fremmedlegemer i luftveiene, allergiske reaksjoner og hjerneslag. Kraftige blødninger stoppes med direkte trykk. Sjokk krever å legge personen ned og holde varmen. Ved forbrenning kjøl ned med lunkent vann i 20 minutter.',
      bulletPoints: [
        'Blødning: direkte trykk med bandasje',
        'Sjokk: legg ned, hev bena, hold varm',
        'Forbrenning: kjøl med lunkent vann i 20 minutter',
        'Fremmedlegeme i luftveier: ryggslag og Heimlich-manøver',
        'Hjerneslag: FAST-test og ring 113 umiddelbart',
      ],
    },
  ],
  keyTerms: [
    { term: 'HLR', definition: 'Hjerte-lungeredning: 30 brystkompresjoner (5-6 cm dypt, 100-120/min) etterfulgt av 2 innblåsninger.' },
    { term: 'AED', definition: 'Automatisk ekstern defibrillator (hjertestarter) som analyserer hjerterytmen og gir elektrisk sjokk om nødvendig.' },
    { term: 'Stabilt sideleie', definition: 'Leieposisjon for bevisstløse som puster normalt, som sikrer åpne luftveier og forhindrer aspirasjon.' },
    { term: 'ABC', definition: 'Airway (luftveier), Breathing (pust), Circulation (sirkulasjon) — rekkefølgen for livreddende førstehjelp.' },
    { term: 'FAST', definition: 'Test for hjerneslag: Face (ansiktsskjevhet), Arm (armsvekkelse), Speech (taleproblemer), Time (ring 113 straks).' },
    { term: 'Heimlich-manøver', definition: 'Bukstøt-teknikk for å fjerne fremmedlegemer som blokkerer luftveiene hos voksne.' },
  ],
};
