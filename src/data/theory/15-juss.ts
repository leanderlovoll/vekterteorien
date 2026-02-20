import { TheoryContent } from '@/types';

export const jussTheory: TheoryContent = {
  subjectId: 'juss',
  title: 'Juss – Strafferett og straffeprosess',
  sections: [
    {
      heading: 'Borgerpågripelse — Straffeprosessloven § 176',
      content: 'Enhver borger, inkludert vektere, har rett til å pågripe en person som treffes på fersk gjerning eller ferske spor fra en straffbar handling. Den pågrepne skal snarest mulig overleveres til politiet. Pågripelse er et inngripende tiltak og skal kun brukes når nødvendig.',
      bulletPoints: [
        '§ 176: rett til pågripelse ved fersk gjerning eller ferske spor',
        'Den pågrepne skal overleveres til politiet snarest mulig',
        'Forholdsmessig maktbruk — kun det som er nødvendig',
        'Varsle politiet umiddelbart etter pågripelse',
      ],
    },
    {
      heading: 'Nødverge og nødrett',
      content: 'Nødverge (Straffeloven § 18) gir rett til å forsvare seg eller andre mot et ulovlig angrep, så lenge handlingen ikke overskrider det som er forsvarlig. Nødrett (§ 17) gir rett til å handle for å avverge fare for skade på liv, helse eller eiendom, selv om handlingen ellers ville vært straffbar.',
      bulletPoints: [
        'Nødverge (§ 18): forsvar mot ulovlig angrep',
        'Nødrett (§ 17): handling for å avverge fare (brann, ulykke)',
        'Begge krever at handlingen er forholdsmessig',
        'Nødverge: angrep fra person. Nødrett: fare fra situasjon',
      ],
    },
    {
      heading: 'Vaktvirksomhetsloven og maktbruk',
      content: 'Vaktvirksomhetsloven § 7 fastslår at vektere ikke har større rett til maktbruk enn enhver borger. Mildeste inngreps prinsipp innebærer å bruke det mildeste middelet som er tilstrekkelig: dialog → advarsel → bortvisning → pågripelse. Makt er alltid siste utvei.',
      bulletPoints: [
        '§ 7: vektere har kun alminnelige borgerrettigheter',
        'Proporsjonalitetsprinsippet: maktbruk i rimelig forhold til trussel',
        'Mildeste inngreps prinsipp: dialog først, makt sist',
        'Krav til tillatelse fra politiet for å drive vaktvirksomhet',
        'Krav til godkjent grunnutdanning og vandel',
      ],
    },
    {
      heading: 'Sentrale lovbrudd og personvern',
      content: 'Vektere må kjenne til vanlige straffbare handlinger: tyveri (bortskaffe annens eiendom med vinnings hensikt), ran (tyveri med vold/trusler), skadeverk (ødelegge annens eiendom). Personopplysningsloven (GDPR) regulerer behandling av persondata, inkludert kameraovervåking og rapporter.',
      bulletPoints: [
        'Tyveri: ta annens eiendom med vinnings hensikt',
        'Ran: tyveri med vold eller trusler om vold',
        'Skadeverk: ødelegge eller skade annens eiendom',
        'GDPR gjelder kameraovervåking, rapporter og personregistre',
        'Ulovlig frihetsberøvelse: holde noen uten lovlig grunnlag',
      ],
    },
  ],
  keyTerms: [
    { term: 'Borgerpågripelse (§ 176)', definition: 'Enhver borgers rett til å pågripe en person som treffes på fersk gjerning eller ferske spor fra en straffbar handling.' },
    { term: 'Nødverge (§ 18)', definition: 'Rett til å forsvare seg eller andre mot et ulovlig angrep, så lenge handlingen ikke overskrider det som er forsvarlig.' },
    { term: 'Nødrett (§ 17)', definition: 'Rett til å handle for å avverge fare for skade, selv om handlingen ellers ville vært straffbar, når faren avverget er vesentlig større.' },
    { term: 'Proporsjonalitetsprinsippet', definition: 'Kravet om at maktbruk må stå i rimelig forhold til situasjonen og trusselen man står overfor.' },
    { term: 'Mildeste inngreps prinsipp', definition: 'Å alltid bruke det mildeste middelet som er tilstrekkelig for å løse situasjonen: dialog → advarsel → bortvisning → pågripelse.' },
    { term: 'Fersk gjerning', definition: 'At gjerningspersonen oppdages idet den straffbare handlingen pågår eller umiddelbart etter.' },
    { term: 'GDPR/Personopplysningsloven', definition: 'Lov som regulerer behandling av personopplysninger, inkludert kameraovervåking, rapporter og registre.' },
  ],
};
