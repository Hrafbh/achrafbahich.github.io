/**
 * @typedef {"fr"|"en"} Lang
 *
 * @typedef {{ fr: string; en: string }} I18nText
 *
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
    category: { fr: "Data Engineering", en: "Data Engineering" },
    date: "2026-01",
    tags: ["Python", "GitHub API", "Bronze/Silver/Gold", "Parquet", "KPI"],
    title: {
      fr: "GitHub Issues Lakehouse",
      en: "GitHub Issues Lakehouse",
    },
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
];
