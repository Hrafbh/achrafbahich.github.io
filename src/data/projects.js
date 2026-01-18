/**
 * @typedef {"fr"|"en"} Lang
 * @typedef {{ fr: string; en: string }} I18nText
 * @typedef {{ fr: string[]; en: string[] }} I18nBullets
 *
 * @typedef {{
 *   type: "highlights";
 *   bullets: I18nBullets;
 * }} ShowcaseHighlights
 *
 * @typedef {{
 *   type: "iframe";
 *   url: string;
 *   height?: number;
 * }} ShowcaseIframe
 *
 * @typedef {{
 *   type: "gallery";
 *   images: { src: string; alt: I18nText }[];
 * }} ShowcaseGallery
 *
 * @typedef {{
 *   type: "video";
 *   embedUrl: string;
 * }} ShowcaseVideo
 *
 * @typedef {{
 *   type: "notebook";
 *   url: string;
 *   provider?: "colab" | "nbviewer" | "github";
 * }} ShowcaseNotebook
 *
 * @typedef {ShowcaseHighlights | ShowcaseIframe | ShowcaseGallery | ShowcaseVideo | ShowcaseNotebook} Showcase
 *
 * @typedef {{
 *   slug: string;
 *   featured?: boolean;
 *   status?: "live" | "wip";
 *   category: I18nText;
 *   date: string;
 *   tags: string[];
 *   title: I18nText;
 *   summary: I18nText;
 *   links: { repo: string; demo?: string };
 *   showcase?: Showcase;
 * }} Project
 */

/** @type {Project[]} */
export const projects = [
  {
    slug: "github-issues-lakehouse",
    featured: true,
    status: "live",
    category: { fr: "Data Engineering", en: "Data Engineering" },
    date: "2026-01",
    tags: ["Python", "GitHub API", "Bronze/Silver/Gold", "Parquet", "KPI"],
    title: { fr: "GitHub Issues Lakehouse", en: "GitHub Issues Lakehouse" },
    summary: {
      fr: "Pipeline lakehouse sur les issues de pandas : ingestion → dataset Silver → KPI Gold (flow, backlog, temps de résolution).",
      en: "Lakehouse pipeline on pandas issues: ingestion → Silver dataset → Gold KPIs (flow, backlog, resolution time).",
    },
    links: {
      repo: "https://github.com/Hrafbh/github-issues-lakehouse",
      demo: "",
    },
    showcase: {
      type: "highlights",
      bullets: {
        fr: [
          "Bronze JSONL (raw) + Silver Parquet (curated) + Gold KPI mensuels.",
          "Classification adaptée GitHub : defect/enhancement/docs/question + priority tiers.",
          "Exports CSV/Parquet + exécution CLI (ingest/silver/gold).",
        ],
        en: [
          "Bronze JSONL (raw) + Silver Parquet (curated) + Gold monthly KPIs.",
          "GitHub-adapted classification: defect/enhancement/docs/question + priority tiers.",
          "CSV/Parquet exports + CLI runs (ingest/silver/gold).",
        ],
      },
    },
  },

  // --- WIP project #2 (placeholder propre, sans sur-vendre) ---
  {
    slug: "kpi-automation-wip",
    featured: true,
    status: "wip",
    category: { fr: "Data Analytics", en: "Data Analytics" },
    date: "2026",
    tags: ["ETL", "KPIs", "Dashboards", "SQL", "Python"],
    title: {
      fr: "KPI Automation (WIP)",
      en: "KPI Automation (WIP)",
    },
    summary: {
      fr: "Projet en cours : industrialisation d’un calcul KPI avec pipeline de données, contrôles qualité et reporting.",
      en: "Work in progress: KPI computation industrialization with a data pipeline, quality checks, and reporting.",
    },
    links: {
      repo: "https://github.com/Hrafbh", // à remplacer par le repo exact quand prêt
      demo: "",
    },
    showcase: {
      type: "highlights",
      bullets: {
        fr: ["Structure prête. Contenu détaillé à publier progressivement."],
        en: ["Structure ready. Details will be published progressively."],
      },
    },
  },

  // --- WIP project #3 (placeholder) ---
  {
    slug: "applied-ml-wip",
    featured: true,
    status: "wip",
    category: { fr: "Data Science", en: "Data Science" },
    date: "2026",
    tags: ["ML", "Python", "Notebook", "Evaluation", "Visualization"],
    title: {
      fr: "Applied ML (WIP)",
      en: "Applied ML (WIP)",
    },
    summary: {
      fr: "Projet en cours : expérimentation ML, itérations notebook → scripts, et mise en valeur des résultats.",
      en: "Work in progress: ML experiments, notebook-to-scripts iterations, and results storytelling.",
    },
    links: {
      repo: "https://github.com/Hrafbh", // à remplacer
      demo: "",
    },
    showcase: {
      type: "highlights",
      bullets: {
        fr: ["Structure prête. Résultats/figures à intégrer."],
        en: ["Structure ready. Results/figures to be added."],
      },
    },
  },
];
