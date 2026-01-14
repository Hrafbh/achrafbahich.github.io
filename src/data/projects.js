export const projects = [
  {
    slug: "github-issues-lakehouse",
    title: "GitHub Issues Lakehouse",
    category: "Data Engineering",
    date: "2026-01",
    tags: ["Python", "GitHub API", "Bronze/Silver/Gold", "Parquet", "KPI"],
    summary:
      "Pipeline lakehouse sur les issues de pandas : ingestion → dataset Silver → KPI Gold (flow, backlog, temps de résolution).",
    links: {
      repo: "https://github.com/Hrafbh/github-issues-lakehouse",
      demo: "", // on mettra l’URL quand ton dashboard projet est prêt
    },
    showcase: {
      type: "highlights",
      bullets: [
        "Bronze JSONL (raw) + Silver Parquet (curated) + Gold KPI mensuels.",
        "Classification adaptée GitHub : defect/enhancement/docs/question + priority tiers.",
        "Exports CSV/Parquet + exécution CLI (ingest/silver/gold).",
      ],
    },
  },
];
