export interface ChildProfile {
  id: string;
  name: string;
  geburtsdatum: string; // YYYY-MM-DD
  avatar: string;
  farbe: string;
  completedLessons: string[];
  quizScores: Record<string, number>;
  streakDays: number;
  lastLoginDate: string;
}

/**
 * Calculates the current age based on the geburtsdatum.
 */
export function calculateAge(geburtsdatum: string): number {
  const birthDate = new Date(geburtsdatum);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

/**
 * Determines the Zyklus based on age:
 * Age <= 12 = Zyklus 2
 * Age > 12 = Zyklus 3
 */
export function getZyklus(age: number): 'zyklus-2' | 'zyklus-3' {
  return age <= 12 ? 'zyklus-2' : 'zyklus-3';
}

/**
 * Approximates the school class (Klasse) based on age.
 */
export function getApproximateKlasse(age: number): number {
  // Typical Swiss rule of thumb for HarmoS: class = age - 6 for correct HarmoS counting usually, 
  // or simply Primary 1st grade starts at ~7. We use age - 6 as requested.
  const klasse = age - 6;
  return Math.max(1, klasse); // At least 1. Klasse
}

/**
 * Checks if today is the child's birthday (day and month match).
 */
export function isBirthdayToday(geburtsdatum: string): boolean {
  const today = new Date();
  const birthDate = new Date(geburtsdatum);
  
  return (
    today.getDate() === birthDate.getDate() &&
    today.getMonth() === birthDate.getMonth()
  );
}

/**
 * Checks if the last login was yesterday.
 * Used for streak calculation.
 */
export function wasLogged_inYesterday(lastLoginDate: string): boolean {
  if (!lastLoginDate) return false;
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const lastLogin = new Date(lastLoginDate);
  lastLogin.setHours(0, 0, 0, 0);
  
  const diffTime = Math.abs(today.getTime() - lastLogin.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  
  return diffDays === 1;
}

/**
 * Get current date string in YYYY-MM-DD format
 */
export function getTodayString(): string {
  const today = new Date();
  return today.toISOString().split('T')[0];
}
