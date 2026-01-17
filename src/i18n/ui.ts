import type { Lang } from "./config";

export const LANGS = ["fr", "en"] as const;

export const ui = {
  fr: {
    site_title: "Portfolio — Achraf Bahich",
    nav_home: "Accueil",
    nav_projects: "Projets",
    lang_switch_label: "Changer de langue",
    choose_language: "Choisir la langue",
    choose_language_hint: "Ce site est disponible en français et en anglais.",
    hero_title: "Data Engineering • Data Science • Data Analytics",
    hero_subtitle:
      "Un portfolio orienté impact : pipelines, KPI, dashboards et modèles — avec un rendu adapté à chaque projet.",
    featured_title: "Projets en vedette",
    projects_title: "Projets",
    placeholder_project: "Projet",
    placeholder_desc:
      "Carte de démonstration (sera alimentée par la data dans le commit #2).",
    cta_view_all: "Voir tous les projets",
    stack: "Pile technologique",
    links: "Liens",
    repository: "Repository",
    liveDemo: "Démo",
    noDemo: "Aucune démo disponible pour le moment.",
  },
  en: {
    site_title: "Portfolio — Achraf Bahich",
    nav_home: "Home",
    nav_projects: "Projects",
    lang_switch_label: "Switch language",
    choose_language: "Choose language",
    choose_language_hint: "This site is available in French and English.",
    hero_title: "Data Engineering • Data Science • Data Analytics",
    hero_subtitle:
      "Impact-first portfolio: pipelines, KPIs, dashboards and models — with a tailored showcase per project.",
    featured_title: "Featured projects",
    projects_title: "Projects",
    placeholder_project: "Project",
    placeholder_desc:
      "Demo card (will be powered by data in commit #2).",
    cta_view_all: "View all projects",
    stack: "Tech Stack",
    links: "Links",
    repository: "Repository",
    liveDemo: "Live demo",
    noDemo: "No demo available yet.",
    
  },
} as const;

type UIKey = keyof (typeof ui)["en"];

export function t(lang: Lang, key: UIKey): string {
  return ui[lang]?.[key] ?? ui.en[key];
}
