// ─────────────────────────────────────────────────────────────────────────────
// ranking.ts
// 大学・塾のランキングデータ（資料請求数・口コミ・締切などから編集部集計）。
// ─────────────────────────────────────────────────────────────────────────────

export type RankingTrend = "↑" | "↓" | "→" | "NEW" | string;

export type RankingItem = {
  rank: string;        // "01" "02" ...
  name: string;
  note: string;
  trend?: RankingTrend;
  count?: string;      // "資料請求 1,240件"
  href?: string;
};

export const rankingTabs = [
  { id: "popular", label: "人気" },
  { id: "deadline", label: "締切間近" },
  { id: "free", label: "評定不問" },
  { id: "national", label: "国公立" },
  { id: "online-juku", label: "オンライン塾" },
];

export const popularRanking: RankingItem[] = [
  { rank: "01", name: "サンプル大学A", note: "経済・法学部の総合型が人気", trend: "↑3", count: "資料請求 1,240件" },
  { rank: "02", name: "サンプル大学C", note: "国際学部のプレゼン型選抜", trend: "↑1", count: "資料請求 980件" },
  { rank: "03", name: "サンプル大学F", note: "心理学部の小論文配点が高い", trend: "→", count: "資料請求 870件" },
  { rank: "04", name: "サンプル大学G", note: "メディア・デザイン領域に強い", trend: "NEW", count: "資料請求 720件" },
  { rank: "05", name: "サンプル大学B", note: "公募推薦で逆転合格者多数", trend: "↓2", count: "資料請求 690件" },
  { rank: "06", name: "サンプル大学H", note: "教育学部・地方創生型カリキュラム", trend: "→", count: "資料請求 612件" },
  { rank: "07", name: "サンプル大学E", note: "農学・生命科学のフィールド研究", trend: "↑4", count: "資料請求 580件" },
  { rank: "08", name: "サンプル大学D", note: "工学部の研究室配属が早期", trend: "→", count: "資料請求 521件" },
  { rank: "09", name: "サンプル大学I", note: "国際バカロレア対応型", trend: "NEW", count: "資料請求 488件" },
  { rank: "10", name: "サンプル大学J", note: "看護・医療系の総合型枠を拡大", trend: "↑2", count: "資料請求 461件" },
];

/** トップページの簡易ランキング（top 5） */
export const homeRanking: RankingItem[] = popularRanking.slice(0, 5).map((r) => ({
  rank: r.rank,
  name: r.name,
  note: r.note,
  trend: r.trend,
}));
