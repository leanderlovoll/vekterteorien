import { TheoryContent } from '@/types';

export const hmsTheory: TheoryContent = {
  subjectId: 'hms',
  title: 'HMS – Helse, miljø og sikkerhet',
  sections: [
    {
      heading: 'Arbeidsmiljøloven og HMS-krav',
      content: 'Arbeidsmiljøloven skal sikre et fullt forsvarlig arbeidsmiljø. Arbeidsgiver har hovedansvaret for HMS, men arbeidstaker har medvirkningsplikt. Alle virksomheter skal ha en systematisk HMS-internkontroll med risikovurderinger, rutiner og avviksbehandling.',
      bulletPoints: [
        'Arbeidsgiver har hovedansvar for HMS',
        'Arbeidstaker har medvirkningsplikt',
        'Internkontroll er pålagt alle virksomheter',
        'Arbeidstilsynet fører tilsyn med etterlevelse',
      ],
    },
    {
      heading: 'Risikovurdering og forebygging',
      content: 'HMS-risikovurdering innebærer å identifisere farer på arbeidsplassen, vurdere sannsynlighet og konsekvens, og iverksette tiltak. Verneombudet er arbeidstakernes representant i HMS-saker og skal ivareta de ansattes interesser.',
      bulletPoints: [
        'Identifiser farer og vurder risiko systematisk',
        'Verneombudet er arbeidstakernes HMS-representant',
        'Alle yrkesskader skal meldes og dokumenteres',
        'Arbeidstaker kan nekte farlig arbeid ved umiddelbar fare',
      ],
    },
    {
      heading: 'Ergonomi og arbeidshelse for vektere',
      content: 'Vektere har spesielle ergonomiske utfordringer som lang tid på beina, bæring av utstyrsbelte, og ensidige arbeidsstillinger. Riktig fottøy, variasjon i arbeidsstillinger og bruk av personlig verneutstyr (PVU) som vernesko og refleksvest er viktig for å forebygge belastningsskader.',
      bulletPoints: [
        'Bruk riktig fottøy og utstyr',
        'Varier arbeidsstillinger for å unngå belastning',
        'Bruk pålagt personlig verneutstyr (PVU)',
        'Rapporter ergonomiske utfordringer til leder',
      ],
    },
  ],
  keyTerms: [
    { term: 'Arbeidsmiljøloven', definition: 'Loven som regulerer arbeidsmiljø, arbeidstid og stillingsvern, med formål å sikre et fullt forsvarlig arbeidsmiljø.' },
    { term: 'Internkontroll', definition: 'Virksomhetens eget systematiske HMS-arbeid med rutiner, risikovurderinger og avviksbehandling.' },
    { term: 'Verneombud', definition: 'Arbeidstakernes valgte representant i HMS-saker som ivaretar de ansattes interesser overfor arbeidsgiver.' },
    { term: 'Personlig verneutstyr (PVU)', definition: 'Utstyr som brukes av den enkelte for å beskytte mot risiko, som vernesko, refleksvest og hørselsvern.' },
    { term: 'Medvirkningsplikt', definition: 'Arbeidstakers plikt til å medvirke i HMS-arbeid, følge instrukser og melde fra om farlige forhold.' },
  ],
};
