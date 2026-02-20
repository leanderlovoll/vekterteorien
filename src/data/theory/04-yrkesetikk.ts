import { TheoryContent } from '@/types';

export const yrkesetikkTheory: TheoryContent = {
  subjectId: 'yrkesetikk',
  title: 'Yrkesetikk og holdninger',
  sections: [
    {
      heading: 'Etiske prinsipper for vektere',
      content: 'Yrkesetikk handler om de moralske prinsippene og retningslinjene som styrer vekterens opptreden. Sentrale verdier er integritet, ærlighet, upartiskhet og respekt. En vekter med god yrkesetikk handler riktig fordi det er riktig, ikke fordi noen overvåker.',
      bulletPoints: [
        'Integritet: vær ærlig og pålitelig, også når ingen ser på',
        'Upartiskhet: behandle alle likt uavhengig av relasjoner',
        'Taushetsplikt: del aldri konfidensiell informasjon med uvedkommende',
        'Nekt ulovlige instrukser fra oppdragsgiver',
      ],
    },
    {
      heading: 'Etiske dilemmaer og profesjonelle holdninger',
      content: 'Vektere kan møte situasjoner der ulike hensyn står mot hverandre. Ved etiske dilemmaer bør man vurdere situasjonen opp mot lover, regler og etiske retningslinjer. Takk alltid nei til gaver eller fordeler som kan påvirke tjenesteutøvelsen, og rådføre seg med leder ved usikkerhet.',
      bulletPoints: [
        'Vurder dilemmaer mot lover og etiske retningslinjer',
        'Avslå gaver som kan påvirke upartiskheten',
        'Rådføre seg med leder ved usikkerhet',
        'Dokumenter uregelmessigheter skriftlig',
      ],
    },
  ],
  keyTerms: [
    { term: 'Integritet', definition: 'Å være ærlig, pålitelig og handle i tråd med etiske prinsipper, også når man ikke blir overvåket.' },
    { term: 'Taushetsplikt', definition: 'Plikten til å ikke dele konfidensiell informasjon fra oppdrag med uvedkommende, også etter endt arbeidsforhold.' },
    { term: 'Upartiskhet', definition: 'Å behandle alle likt og rettferdig, uavhengig av personlige relasjoner, sympatier eller antipatier.' },
    { term: 'Etisk dilemma', definition: 'En situasjon der ulike moralske hensyn står mot hverandre, og det ikke finnes ett åpenbart riktig svar.' },
  ],
};
