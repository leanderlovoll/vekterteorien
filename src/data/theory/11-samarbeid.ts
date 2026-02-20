import { TheoryContent } from '@/types';

export const samarbeidTheory: TheoryContent = {
  subjectId: 'samarbeid',
  title: 'Samarbeid med offentlige myndigheter',
  sections: [
    {
      heading: 'Nødetater og nødnumre',
      content: 'Norge har tre hovednødnumre: 110 (brannvesenet), 112 (politiet) og 113 (medisinsk nødhjelp/AMK). Ved nødanrop skal vekteren oppgi hvem man er, hva som har skjedd, nøyaktig adresse, antall involverte, og om det er pågående fare. Legevakten (116 117) er for ikke-akutte henvendelser.',
      bulletPoints: [
        '110: Brannvesenet',
        '112: Politiet',
        '113: AMK (medisinsk nødhjelp)',
        '116 117: Legevakten (ikke-akutt)',
      ],
    },
    {
      heading: 'Samarbeid med politi og nødetater',
      content: 'Vekteren skal samarbeide tett med politi og nødetater. Når politiet ankommer, gir vekteren en kort orientering og følger politiets instrukser. Vekteren har ikke politimyndighet og skal alltid kontakte politiet ved alvorlige hendelser. Ved borgerpågripelse skal den pågrepne overleveres til politiet snarest mulig.',
      bulletPoints: [
        'Gi kort og presis orientering til politi ved ankomst',
        'Politiet overtar ansvaret når de er på stedet',
        'Kontakt politiet ved straffbare forhold og trusler',
        'Ha lav terskel for å varsle nødetater',
      ],
    },
  ],
  keyTerms: [
    { term: 'Nødnumre', definition: '110 (brann), 112 (politi), 113 (medisinsk nødhjelp). 116 117 er legevakten for ikke-akutte henvendelser.' },
    { term: 'Politimyndighet', definition: 'Offentlig myndighet med vide fullmakter hjemlet i politiloven. Vektere har ikke politimyndighet.' },
    { term: 'AMK', definition: 'Akuttmedisinsk kommunikasjonssentral, ansvarlig for koordinering av medisinsk nødhjelp. Nås på 113.' },
    { term: 'Orientering', definition: 'Kort og presis informasjon til politi/nødetater om hva som har skjedd, hvem som er involvert, og hva som er gjort.' },
  ],
};
