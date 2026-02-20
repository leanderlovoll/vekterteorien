import { TheoryContent } from '@/types';

export const tiltakTheory: TheoryContent = {
  subjectId: 'tiltak',
  title: 'Fysiske, manuelle og administrative tiltak',
  sections: [
    {
      heading: 'Mekanisk og elektronisk sikring',
      content: 'Mekanisk sikring omfatter fysiske barrierer som låser, gjerder, bommer og sikkerhetsglass. Elektronisk sikring inkluderer alarmsystemer, kameraovervåking (CCTV) og adgangskontrollsystemer med kortlesere eller biometri. Best sikkerhet oppnås ved en kombinasjon av tiltak.',
      bulletPoints: [
        'Mekanisk sikring: låser, gjerder, bommer, sikkerhetsglass',
        'Elektronisk sikring: alarmer, kamera, adgangskontroll',
        'CCTV forebygger, oppdager og dokumenterer hendelser',
        'Soneinndeling: ulike sikkerhetsnivåer i ulike områder',
      ],
    },
    {
      heading: 'Administrative tiltak',
      content: 'Administrative tiltak er instrukser, rutiner og prosedyrer som styrer sikkerhetsarbeidet. Vaktinstruksverket beskriver vekterens oppgaver og handlemåter på et bestemt objekt. Besøksregistrering, sikkerhetsklarering og opplæring er også viktige administrative tiltak.',
      bulletPoints: [
        'Vaktinstruksverket: skriftlige instrukser for hvert objekt',
        'Besøksregistrering og identitetskontroll',
        'Rutiner for vaktbytte og informasjonsoverlevering',
        'Opplæring og regelmessig øvelse',
      ],
    },
    {
      heading: 'Rondering og patruljering',
      content: 'Rondering er planlagte inspeksjonsrunder der vekteren systematisk kontrollerer et område. Under rondering kontrolleres dører, vinduer, alarmer, og man ser etter uregelmessigheter. Funn av avvik som ulåste dører skal sikres, undersøkes og rapporteres.',
      bulletPoints: [
        'Følg ronderingsplan og kontrollpunkter',
        'Kontroller dører, vinduer og alarmer',
        'Rapporter alle avvik og uregelmessigheter',
        'Vær oppmerksom på tegn til innbrudd eller skade',
      ],
    },
  ],
  keyTerms: [
    { term: 'Adgangskontroll', definition: 'Tiltak som sikrer at kun autoriserte personer får tilgang til et område, via kort, kode, biometri eller manuell kontroll.' },
    { term: 'CCTV', definition: 'Kameraovervåkingssystem som brukes til forebygging, oppdagelse og dokumentasjon av hendelser.' },
    { term: 'Rondering', definition: 'Planlagt inspeksjonsrunde der vekteren systematisk kontrollerer et område for avvik og uregelmessigheter.' },
    { term: 'Vaktinstruksverk', definition: 'Skriftlige instrukser spesifikke for et objekt som beskriver vekterens oppgaver, rutiner og handlemåter.' },
    { term: 'Soneinndeling', definition: 'Inndeling av et objekt i områder med ulike sikkerhetsnivåer og tilgangskrav.' },
  ],
};
