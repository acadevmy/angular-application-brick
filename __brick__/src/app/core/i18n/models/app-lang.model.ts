export const supportedLanguages = {
  it: 'it',
  en: 'en',
} as const;

export type SupportedLanguage = keyof typeof supportedLanguages;
