import { TheoryContent } from '@/types';

export const serviceTheory: TheoryContent = {
  subjectId: 'service',
  title: 'Service og kvalitet',
  sections: [
    {
      heading: 'Serviceinnstilling og kundebehandling',
      content: 'Vekteren er ofte den første personen besøkende møter, og fungerer dermed som førstelinjekontakt og ambassadør for oppdragsgiver. God service innebærer å være imøtekommende, hjelpsom og profesjonell. Ren uniform, god hygiene og et åpent kroppsspråk er grunnleggende for profesjonell fremtreden.',
      bulletPoints: [
        'Vekteren er virksomhetens ansikt utad',
        'Vær imøtekommende, hjelpsom og profesjonell',
        'Håndter klager med respekt og forståelse',
        'Vis vei eller henvis til riktig person ved spørsmål',
      ],
    },
    {
      heading: 'Kvalitetssikring',
      content: 'Kvalitetssikring handler om å systematisk sikre at vakttjenestene leveres i henhold til avtalt standard. Dette inkluderer å følge vaktinstrukser, dokumentere hendelser, og ha god kjennskap til objektet man jobber på. Kontinuerlig forbedring og tilbakemelding er viktige elementer.',
      bulletPoints: [
        'Følg vaktinstrukser og prosedyrer',
        'Dokumenter hendelser og avvik',
        'Ha god kjennskap til objektet',
        'Bidra til kontinuerlig forbedring',
      ],
    },
  ],
  keyTerms: [
    { term: 'Førstelinjekontakt', definition: 'At vekteren ofte er den første personen besøkende møter, og dermed representerer virksomheten.' },
    { term: 'Kvalitetssikring', definition: 'Systematisk arbeid for å sikre at tjenester leveres i henhold til avtalt standard og krav.' },
    { term: 'Ambassadør', definition: 'Vekterens rolle som representant for oppdragsgiver, der opptreden og holdning reflekterer virksomhetens verdier.' },
  ],
};
