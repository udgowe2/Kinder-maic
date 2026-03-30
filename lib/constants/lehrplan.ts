/**
 * Lehrplan 21 PDF mapping for Kinder-MAIC
 * Maps subjects and Zyklus to the correct PDF file
 */

export type Zyklus = 'zyklus-2' | 'zyklus-3';

export interface LehrplanSubject {
  id: string;
  name: string;
  emoji: string;
  zyklus2?: string;
  zyklus3?: string;
}

export const LEHRPLAN_SUBJECTS: LehrplanSubject[] = [
  {
    id: 'mathematik',
    name: 'Mathematik',
    emoji: '🔢',
    zyklus2: 'lehrplan-pdfs/zyklus-2/mathematik-z2.pdf',
    zyklus3: 'lehrplan-pdfs/zyklus-3/mathematik-z3.pdf',
  },
  {
    id: 'deutsch',
    name: 'Deutsch',
    emoji: '📖',
    zyklus2: 'lehrplan-pdfs/zyklus-2/deutsch-z2.pdf',
    zyklus3: 'lehrplan-pdfs/zyklus-3/deutsch-z3.pdf',
  },
  {
    id: 'englisch',
    name: 'Englisch',
    emoji: '🇬🇧',
    zyklus2: 'lehrplan-pdfs/zyklus-2/englisch-z2.pdf',
    zyklus3: 'lehrplan-pdfs/zyklus-3/englisch-z3.pdf',
  },
  {
    id: 'franzoesisch',
    name: 'Französisch',
    emoji: '🇫🇷',
    zyklus2: 'lehrplan-pdfs/zyklus-2/franzoesisch-z2.pdf',
    zyklus3: 'lehrplan-pdfs/zyklus-3/franzoesisch-z3.pdf',
  },
  {
    id: 'nmg',
    name: 'Natur, Mensch, Gesellschaft',
    emoji: '🌍',
    zyklus2: 'lehrplan-pdfs/zyklus-2/nmg-z2.pdf',
  },
  {
    id: 'natur-technik',
    name: 'Natur & Technik',
    emoji: '🔬',
    zyklus3: 'lehrplan-pdfs/zyklus-3/natur-technik-z3.pdf',
  },
  {
    id: 'geschichte-geografie',
    name: 'Geschichte & Geografie',
    emoji: '🗺️',
    zyklus3: 'lehrplan-pdfs/zyklus-3/rzg-z3.pdf',
  },
  {
    id: 'rke',
    name: 'Religionen & Kulturen',
    emoji: '🕌',
    zyklus3: 'lehrplan-pdfs/zyklus-3/rke-z3.pdf',
  },
  {
    id: 'wah',
    name: 'Wirtschaft, Arbeit, Haushalt',
    emoji: '🏠',
    zyklus3: 'lehrplan-pdfs/zyklus-3/wah-z3.pdf',
  },
  {
    id: 'medien-informatik',
    name: 'Medien & Informatik',
    emoji: '💻',
    zyklus2: 'lehrplan-pdfs/module/medien-informatik.pdf',
    zyklus3: 'lehrplan-pdfs/module/medien-informatik.pdf',
  },
];

/**
 * Get the correct PDF path for a subject and age
 * Age 9-12 = Zyklus 2, Age 12-15 = Zyklus 3
 */
export function getPdfForSubject(subjectId: string, age: number): string | undefined {
  const subject = LEHRPLAN_SUBJECTS.find(s => s.id === subjectId);
  if (!subject) return undefined;
  const zyklus: Zyklus = age <= 12 ? 'zyklus-2' : 'zyklus-3';
  return zyklus === 'zyklus-2' ? subject.zyklus2 : subject.zyklus3;
}
