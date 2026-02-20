import { TheoryContent } from '@/types';

export const beredskapTheory: TheoryContent = {
  subjectId: 'beredskap',
  title: 'Beredskapsplaner',
  sections: [
    {
      heading: 'Beredskapsplanlegging',
      content: 'En beredskapsplan beskriver hvordan organisasjonen skal håndtere uønskede hendelser og krisesituasjoner. Planen inneholder roller, ansvar, varslingslister, prosedyrer og ressursoversikter. Regelmessige øvelser er avgjørende for at planen fungerer i praksis.',
      bulletPoints: [
        'Beredskapsplanen definerer roller, ansvar og prosedyrer',
        'Varslingsplan: hvem varsles, i hvilken rekkefølge',
        'Regelmessige beredskapsøvelser er påkrevd',
        'Alle ansatte skal kjenne evakueringsplan og rømningsveier',
      ],
    },
    {
      heading: 'Evakuering og krisehåndtering',
      content: 'Evakuering er rask og ordnet forflytning fra et faretruet område til et trygt oppsamlingssted. Vekteren har ofte en sentral rolle ved evakuering og skal verifisere alarmer, iverksette evakuering, og møte utrykningsenhetene. Rømningsveier skal alltid holdes frie for hindringer.',
      bulletPoints: [
        'Verifiser alarm, varsle nødetatene, iverksett evakuering',
        'Oppsamlingssted: forhåndsbestemt trygt sted for opptelling',
        'Rømningsveier skal alltid være frie og merket med nødlys',
        'Bombetrussler skal alltid tas alvorlig — kontakt politi umiddelbart',
      ],
    },
  ],
  keyTerms: [
    { term: 'Beredskapsplan', definition: 'En forhåndsplanlagt plan for håndtering av uønskede hendelser og krisesituasjoner med roller, ansvar og prosedyrer.' },
    { term: 'Evakuering', definition: 'Rask og ordnet forflytning av personer fra et faretruet område til et forhåndsbestemt oppsamlingssted.' },
    { term: 'Oppsamlingssted', definition: 'Et forhåndsbestemt, trygt sted utenfor faresonen der evakuerte samles for opptelling og kontroll.' },
    { term: 'Rømningsveier', definition: 'Merkede utganger og korridorer som sikrer trygg evakuering, og som alltid skal være frie for hindringer.' },
  ],
};
