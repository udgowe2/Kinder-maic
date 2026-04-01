import { create } from 'zustand';
import { ChildProfile, getTodayString, wasLogged_inYesterday } from '../utils/profile-helpers';

interface ProfilesState {
  profiles: ChildProfile[];
  activeProfileId: string | null;
  isLoading: boolean;
  error: string | null;
  // Actions
  fetchProfiles: () => Promise<void>;
  setActiveProfile: (id: string) => void;
  recordLessonCompletion: (lessonId: string, score: number) => Promise<void>;
  updateProfile: (updatedProfile: ChildProfile) => Promise<void>;
}

export const useProfilesStore = create<ProfilesState>((set, get) => ({
  profiles: [],
  activeProfileId: null,
  isLoading: true,
  error: null,

  fetchProfiles: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch('/api/profiles');
      if (!response.ok) throw new Error('Failed to fetch profiles');
      const data = await response.json();
      set({ profiles: data, isLoading: false });
    } catch (err: any) {
      set({ error: err.message, isLoading: false });
    }
  },

  setActiveProfile: (id: string) => {
    const { profiles } = get();
    const profile = profiles.find((p) => p.id === id);
    if (!profile) return;

    // Login logic for streaks
    const today = getTodayString();
    let updatedProfile = { ...profile };
    let needsUpdate = false;

    if (profile.lastLoginDate !== today) {
      needsUpdate = true;
      updatedProfile.lastLoginDate = today;
      
      if (!wasLogged_inYesterday(profile.lastLoginDate)) {
        // If not logged in yesterday, streak resets to 0 (or stays 0)
        // Note: Actual streak increment happens on lesson completion
        if (profile.lastLoginDate) {
           updatedProfile.streakDays = 0;
        }
      }
    }

    set({ activeProfileId: id });

    // Save to API if needed
    if (needsUpdate) {
      get().updateProfile(updatedProfile);
    }
  },

  recordLessonCompletion: async (lessonId: string, score: number) => {
    const { profiles, activeProfileId, updateProfile } = get();
    if (!activeProfileId) return;

    const profile = profiles.find((p) => p.id === activeProfileId);
    if (!profile) return;

    const today = getTodayString();
    
    // For Kinder-MAIC: increment streakDays when child completes at least one lesson per day.
    // We update lastLoginDate when the actual lesson is completed so we can safely track the day of last completed lesson.
    // If last completed lesson was today, don't increment streak again.
    // If it was yesterday, increment.
    // If earlier, reset to 1.
    
    let newStreak = profile.streakDays;
    let newCompletedLessons = [...profile.completedLessons, lessonId];
    
    // We use lastLoginDate here not just for login but to track the day they last LEARNED something.
    if (profile.lastLoginDate === today) {
        // Already did a lesson today, don't increment streak
    } else if (wasLogged_inYesterday(profile.lastLoginDate)) {
        newStreak += 1;
    } else {
        newStreak = 1; // missed a day, start fresh at 1
    }

    const updatedProfile: ChildProfile = {
      ...profile,
      completedLessons: newCompletedLessons,
      quizScores: {
        ...profile.quizScores,
        [lessonId]: score
      },
      streakDays: newStreak,
      lastLoginDate: today
    };

    await updateProfile(updatedProfile);
  },

  updateProfile: async (updatedProfile: ChildProfile) => {
    const { profiles } = get();
    const newProfiles = profiles.map((p) => p.id === updatedProfile.id ? updatedProfile : p);
    
    // Optimistic update
    set({ profiles: newProfiles });

    try {
      const response = await fetch('/api/profiles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProfiles),
      });
      if (!response.ok) throw new Error('Failed to update profiles');
    } catch (err: any) {
      console.error('Failed to update profile to API:', err);
      // Revert in real app, keeping it simple here
    }
  }
}));
