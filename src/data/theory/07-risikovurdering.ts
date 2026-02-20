import { TheoryContent } from '@/types';

export const risikovurderingTheory: TheoryContent = {
  subjectId: 'risikovurdering',
  title: 'Risikovurdering',
  sections: [
    {
      heading: 'Grunnleggende risikovurdering',
      content: 'Risiko er en kombinasjon av sannsynlighet for og konsekvens av en uønsket hendelse. En risikovurdering identifiserer trusler og sårbarheter, og bruker en risikomatrise til å klassifisere risikoer. Verdier som skal beskyttes inkluderer menneskeliv, informasjon, eiendom og omdømme.',
      bulletPoints: [
        'Risiko = Sannsynlighet × Konsekvens',
        'Trusler: mulige uønskede hendelser',
        'Sårbarheter: svakheter som kan utnyttes',
        'Verdier: alt som er verdt å beskytte',
        'Risikomatrise: verktøy for å prioritere risikoer',
      ],
    },
    {
      heading: 'Tiltak og oppfølging',
      content: 'Risikovurderingen resulterer i forebyggende tiltak (reduserer sannsynlighet) og skadereduserende tiltak (begrenser konsekvens). Restrisiko er den gjenværende risikoen etter tiltak. Risikovurderinger er levende dokumenter som må oppdateres jevnlig.',
      bulletPoints: [
        'Forebyggende tiltak: reduserer sannsynlighet (f.eks. adgangskontroll)',
        'Skadereduserende tiltak: begrenser konsekvens (f.eks. sprinkler)',
        'Restrisiko: gjenværende risiko etter tiltak',
        'Oppdater risikovurderinger ved endringer i trusselbildet',
      ],
    },
  ],
  keyTerms: [
    { term: 'Risiko', definition: 'Kombinasjonen av sannsynligheten for at en uønsket hendelse inntreffer og konsekvensene dersom den inntreffer.' },
    { term: 'Trussel', definition: 'En mulig uønsket hendelse som kan forårsake skade, enten tilsiktet (tyveri) eller utilsiktet (brann).' },
    { term: 'Sårbarhet', definition: 'En svakhet i systemet som kan utnyttes av en trussel, som manglende låser eller svake rutiner.' },
    { term: 'Risikomatrise', definition: 'Et visuelt verktøy der sannsynlighet og konsekvens plottes for å klassifisere risikoer som lav, middels, høy eller kritisk.' },
    { term: 'Restrisiko', definition: 'Den gjenværende risikoen etter at forebyggende og skadereduserende tiltak er iverksatt.' },
  ],
};
