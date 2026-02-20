import { TheoryContent } from '@/types';
import { introduksjonTheory } from './01-introduksjon';
import { kommunikasjonTheory } from './02-kommunikasjon';
import { kulturforstaelseTheory } from './03-kulturforstaelse';
import { yrkesetikkTheory } from './04-yrkesetikk';
import { serviceTheory } from './05-service';
import { hmsTheory } from './06-hms';
import { risikovurderingTheory } from './07-risikovurdering';
import { tiltakTheory } from './08-tiltak';
import { beredskapTheory } from './09-beredskap';
import { rapportlaereTheory } from './10-rapportlaere';
import { samarbeidTheory } from './11-samarbeid';
import { forstehjelpTheory } from './12-forstehjelp';
import { rusTheory } from './13-rus';
import { brannvernTheory } from './14-brannvern';
import { jussTheory } from './15-juss';

export const allTheory: Record<string, TheoryContent> = {
  introduksjon: introduksjonTheory,
  kommunikasjon: kommunikasjonTheory,
  kulturforstaelse: kulturforstaelseTheory,
  yrkesetikk: yrkesetikkTheory,
  service: serviceTheory,
  hms: hmsTheory,
  risikovurdering: risikovurderingTheory,
  tiltak: tiltakTheory,
  beredskap: beredskapTheory,
  rapportlaere: rapportlaereTheory,
  samarbeid: samarbeidTheory,
  forstehjelp: forstehjelpTheory,
  rus: rusTheory,
  brannvern: brannvernTheory,
  juss: jussTheory,
};

export function getTheoryBySubjectId(subjectId: string): TheoryContent | undefined {
  return allTheory[subjectId];
}
