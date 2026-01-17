export const languages = {
  fr: { label: "FR", locale: "fr-FR" },
  en: { label: "EN", locale: "en-US" },
} as const;

export type Lang = keyof typeof languages;

export const allLangs = Object.keys(languages) as Lang[];

export function isLang(value: string): value is Lang {
  return value in languages;
}
