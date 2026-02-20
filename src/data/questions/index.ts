import { Question } from '@/types';
import { introduksjonQuestions } from './01-introduksjon';
import { kommunikasjonQuestions } from './02-kommunikasjon';
import { kulturforstaelseQuestions } from './03-kulturforstaelse';
import { yrkesetikkQuestions } from './04-yrkesetikk';
import { serviceQuestions } from './05-service';
import { hmsQuestions } from './06-hms';
import { risikovurderingQuestions } from './07-risikovurdering';
import { tiltakQuestions } from './08-tiltak';
import { beredskapQuestions } from './09-beredskap';
import { rapportlaereQuestions } from './10-rapportlaere';
import { samarbeidQuestions } from './11-samarbeid';
import { forstehjelpQuestions } from './12-forstehjelp';
import { rusQuestions } from './13-rus';
import { brannvernQuestions } from './14-brannvern';
import { jussQuestions } from './15-juss';

export const allQuestions: Record<string, Question[]> = {
  introduksjon: introduksjonQuestions,
  kommunikasjon: kommunikasjonQuestions,
  kulturforstaelse: kulturforstaelseQuestions,
  yrkesetikk: yrkesetikkQuestions,
  service: serviceQuestions,
  hms: hmsQuestions,
  risikovurdering: risikovurderingQuestions,
  tiltak: tiltakQuestions,
  beredskap: beredskapQuestions,
  rapportlaere: rapportlaereQuestions,
  samarbeid: samarbeidQuestions,
  forstehjelp: forstehjelpQuestions,
  rus: rusQuestions,
  brannvern: brannvernQuestions,
  juss: jussQuestions,
};

export function getQuestionsBySubject(subjectId: string): Question[] {
  return allQuestions[subjectId] || [];
}

export function getAllQuestionsFlat(): Question[] {
  return Object.values(allQuestions).flat();
}
