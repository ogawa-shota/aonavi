// ─────────────────────────────────────────────────────────────────────────────
// events.ts
// オープンキャンパス・説明会のイベントデータ。
// ─────────────────────────────────────────────────────────────────────────────

export type EventStyle = "対面" | "オンライン" | "ハイブリッド";

export type EventItem = {
  date: string;       // "YYYY/MM/DD"
  weekday: string;    // 表示用（"Sat" / "Sun" 等）
  time: string;       // "10:00–16:00"
  univ: string;
  title: string;
  area: string;
  style: EventStyle;
  href?: string;
};

export const events: EventItem[] = [
  { date: "2026/05/18", weekday: "Sat", time: "10:00–16:00", univ: "サンプル大学A", title: "オープンキャンパス（来校型）", area: "東京", style: "対面" },
  { date: "2026/05/25", weekday: "Sat", time: "13:00–15:00", univ: "AOナビ主催", title: "総合型選抜 合同説明会｜参加大学50校", area: "全国", style: "オンライン" },
  { date: "2026/06/02", weekday: "Sun", time: "10:00–17:00", univ: "サンプル大学C", title: "学部別 模擬授業デー", area: "愛知", style: "対面" },
  { date: "2026/06/08", weekday: "Sat", time: "14:00–16:00", univ: "サンプル大学F", title: "総合型選抜 出願ガイダンス", area: "京都", style: "ハイブリッド" },
  { date: "2026/06/15", weekday: "Sun", time: "10:00–15:00", univ: "サンプル大学D", title: "工学部 研究室公開デー", area: "福岡", style: "対面" },
  { date: "2026/06/22", weekday: "Mon", time: "19:00–20:30", univ: "サンプル大学G", title: "メディア学部 オンライン相談会", area: "全国", style: "オンライン" },
];
