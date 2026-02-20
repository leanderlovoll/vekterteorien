import { TheoryContent } from '@/types';

export const introduksjonTheory: TheoryContent = {
  subjectId: 'introduksjon',
  title: 'Introduksjon til vekteryrket og sikkerhetsbransjen',
  sections: [
    {
      heading: 'Vekteryrket og sikkerhetsbransjen',
      content: 'Vekteryrket er en profesjon som krever kompetanse, ansvarlighet og god dømmekraft. Sikkerhetsbransjen i Norge er regulert gjennom Vaktvirksomhetsloven, som stiller krav til både virksomheter og ansatte. Vektere utfører oppgaver som adgangskontroll, rondering, overvåking og hendelseshåndtering på vegne av oppdragsgivere.',
      bulletPoints: [
        'Vaktvirksomhetsloven regulerer all vaktvirksomhet i Norge',
        'Politiet er tilsynsmyndighet for vaktvirksomhet',
        'Alle vaktselskap må ha tillatelse fra politiet',
        'Vektere må gjennomføre godkjent grunnutdanning',
      ],
    },
    {
      heading: 'Vekterens rolle og myndighet',
      content: 'En vekter har ikke politimyndighet og har ikke større rett til maktbruk enn enhver annen borger. Vekterens oppgaver er å forebygge og observere, ikke å etterforske eller straffe. Vekteren fungerer som oppdragsgiverens representant og skal opptre profesjonelt og serviceorientert.',
      bulletPoints: [
        'Vektere har kun alminnelige borgerrettigheter (nødverge, borgerpågripelse)',
        'Hovedoppgaven er forebygging og observasjon',
        'Vekteren representerer oppdragsgiver og skal opptre profesjonelt',
        'Politiet skal alltid kontaktes ved alvorlige hendelser',
      ],
    },
  ],
  keyTerms: [
    { term: 'Vaktvirksomhetsloven', definition: 'Loven som regulerer vaktvirksomhet i Norge, inkludert krav til tillatelse, utdanning og utøvelse av vekteryrket.' },
    { term: 'Tilsynsmyndighet', definition: 'Politiet er tilsynsmyndighet for vaktvirksomhet og utsteder tillatelser til vaktselskaper.' },
    { term: 'Grunnutdanning', definition: 'Obligatorisk utdanning på totalt 157 timer (112 timer teori + 45 timer praksis) som alle vektere må gjennomføre, avsluttet med en nasjonal eksamen.' },
    { term: 'Borgerpågripelse', definition: 'Enhver borgers rett til å pågripe en person som treffes på fersk gjerning, hjemlet i Straffeprosessloven § 176.' },
  ],
};
