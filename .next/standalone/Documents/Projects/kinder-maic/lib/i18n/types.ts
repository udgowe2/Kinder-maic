export type Locale = 'zh-CN' | 'en-US' | 'de-DE';

export const defaultLocale: Locale = 'de-DE';

export const localeNames: Record<Locale, string> = {
  'zh-CN': '中文',
  'en-US': 'English',
  'de-DE': 'Deutsch',
};
