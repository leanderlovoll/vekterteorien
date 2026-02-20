export interface TheoryContent {
  subjectId: string;
  title: string;
  sections: TheorySection[];
  keyTerms: KeyTerm[];
}

export interface TheorySection {
  heading: string;
  content: string;
  bulletPoints?: string[];
}

export interface KeyTerm {
  term: string;
  definition: string;
}
