import { TheoryContent } from '@/types';

export const rapportlaereTheory: TheoryContent = {
  subjectId: 'rapportlaere',
  title: 'Rapportlære',
  sections: [
    {
      heading: 'Rapportskriving og dokumentasjon',
      content: 'Rapportskriving er en grunnleggende ferdighet for vektere. Formålet er å dokumentere hendelser nøyaktig og objektivt for oppfølging og bevisføring. En god rapport besvarer: hva, hvor, når, hvem, hvordan — og hvilke tiltak som ble iverksatt. Skriv rapporten så snart som mulig etter hendelsen.',
      bulletPoints: [
        'Besvar: hva, hvor, når, hvem, hvordan',
        'Skriv rapporten umiddelbart etter hendelsen',
        'Vær objektiv: beskriv det du observerte, ikke tolket',
        'Inkluder tiltak som ble iverksatt og hvem som ble varslet',
      ],
    },
    {
      heading: 'Objektivitet og bevissikring',
      content: 'Objektivitet betyr å beskrive det man faktisk observerte med egne sanser, uten personlige tolkninger. Skill mellom observasjoner og vurderinger. Beviskjeden dokumenterer hvem som har håndtert bevis fra funn til overlevering — brudd i kjeden kan gjøre bevis ugyldig i retten.',
      bulletPoints: [
        'Observasjon: «Personen luktet alkohol» (fakta)',
        'Vurdering: «Personen var beruset» (tolkning)',
        'Presise personbeskrivelser er viktige for identifisering',
        'Beviskjeden må dokumenteres for at bevis skal være gyldige',
      ],
    },
  ],
  keyTerms: [
    { term: 'Objektivitet', definition: 'Å beskrive det man faktisk observerte med egne sanser, uten å legge til personlige tolkninger eller meninger.' },
    { term: 'Vaktjournal', definition: 'En kronologisk logg over alle hendelser, observasjoner og aktiviteter i løpet av en vakt.' },
    { term: 'Beviskjede', definition: 'Dokumentasjonen av hvem som har håndtert bevis fra funn til overlevering, for å sikre bevisets gyldighet.' },
    { term: 'Personbeskrivelse', definition: 'Presis beskrivelse av en persons utseende (høyde, hårfarge, klær, kjennetegn) for identifisering.' },
  ],
};
