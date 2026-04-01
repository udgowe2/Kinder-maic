'use client';

import { useEffect } from 'react';
import { useSettingsStore } from '@/lib/store/settings';

/**
 * Fetches server-configured providers on mount and merges into settings store.
 * Resets autoConfigApplied before each fetch so the auto-select logic always
 * re-runs — this ensures that a server-configured Gemini key is picked up
 * even on returning visits where localStorage has stale/empty model state.
 * Renders nothing — purely a side-effect component.
 */
export function ServerProvidersInit() {
  const fetchServerProviders = useSettingsStore((state) => state.fetchServerProviders);

  useEffect(() => {
    // Reset the guard so fetchServerProviders always re-evaluates auto-select
    useSettingsStore.setState({ autoConfigApplied: false });
    fetchServerProviders();
  }, [fetchServerProviders]);

  return null;
}
