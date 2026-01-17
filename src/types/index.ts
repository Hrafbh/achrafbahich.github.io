// src/types/index.ts
export type Language = 'en' | 'fr' | 'es'; // Adaptez selon vos langues

export interface Project {
  slug: string;
  title: Record<Language, string>;
  summary: Record<Language, string>;
  category: Record<Language, string>;
  date: string;
  tags: string[];
  showcase?: {
    type: 'highlights' | 'iframe';
    bullets?: Record<Language, string[]>;
    url?: string;
  };
  links: {
    repo: string;
    demo?: string;
  };
}