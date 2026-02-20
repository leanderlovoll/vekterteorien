import { TheoryContent } from '@/types';

export const brannvernTheory: TheoryContent = {
  subjectId: 'brannvern',
  title: 'Brannvern',
  sections: [
    {
      heading: 'Brannteori og branntrekanten',
      content: 'Brann krever tre elementer: brennbart materiale, oksygen og varme (antennelsesenergi). Fjern ett element for å slokke brannen. Branner klassifiseres i klasser: A (faste materialer), B (væsker), C (gasser), D (metaller) og F (matoljer). Riktig slokkemiddel avhenger av brannklassen.',
      bulletPoints: [
        'Branntrekanten: brennbart materiale + oksygen + varme',
        'Klasse A: faste materialer (tre, papir) → vann',
        'Klasse B: væsker (bensin, olje) → skum, pulver, CO₂',
        'Klasse C: gasser → pulver',
        'CO₂-slokker er trygg for elektrisk utstyr',
      ],
    },
    {
      heading: 'Brannforebygging og slokking',
      content: 'Vekterens huskeregel ved brann: Varsle (110), Redde (mennesker i fare), Slokke (hvis trygt). Sprinkleranlegg aktiveres automatisk av varme. Røyk er farligere enn flammer — de fleste branndødsfall skyldes røykforgiftning. Brannvernlederen har daglig ansvar for brannvernarbeidet.',
      bulletPoints: [
        'Varsle (110) → Redde → Slokke',
        'Forsøk kun slokking hvis det er trygt',
        'Røyk er den største faren — giftig og sprer seg raskt',
        'Sprinkleranlegg aktiveres automatisk av varme (typisk 68°C)',
        'Kontroller slokkeutstyr og rømningsveier regelmessig',
      ],
    },
    {
      heading: 'Brannceller og evakuering',
      content: 'Brannceller er avgrensede områder med brannmotstandsdyktige vegger og dører som hindrer brannspredning. Regelmessige brannøvelser sikrer at alle kjenner rømningsveier og prosedyrer. Rømningsveier skal alltid holdes frie og være merket med nødlys.',
      bulletPoints: [
        'Brannceller hindrer brannspredning i en bestemt tid',
        'Branndører skal aldri blokkeres eller kilses åpne',
        'Gjennomfør brannøvelser regelmessig',
        'Kjenn plassering av slokkeutstyr, nødutganger og alarmer',
      ],
    },
  ],
  keyTerms: [
    { term: 'Branntrekanten', definition: 'De tre elementene som kreves for brann: brennbart materiale, oksygen og varme. Fjern ett element for å slokke.' },
    { term: 'Brannklasser', definition: 'Klassifisering av branner: A (faste), B (væsker), C (gasser), D (metaller), F (matoljer). Bestemmer valg av slokkemiddel.' },
    { term: 'CO₂-slokker', definition: 'Brannslokker med karbondioksid, trygg å bruke på elektrisk utstyr da den ikke leder strøm.' },
    { term: 'Sprinkleranlegg', definition: 'Automatisk slokkesystem der sprinklerhoder aktiveres individuelt av varme og sprer vann for å begrense brannen.' },
    { term: 'Branncelle', definition: 'Avgrenset område med brannmotstandsdyktige vegger, tak og dører som hindrer brannspredning i en bestemt tid.' },
    { term: 'Brannvernleder', definition: 'Person utpekt av virksomheten med ansvar for det daglige brannvernarbeidet, øvelser og kontroll av utstyr.' },
  ],
};
