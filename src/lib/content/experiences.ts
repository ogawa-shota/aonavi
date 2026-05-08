// ─────────────────────────────────────────────────────────────────────────────
// experiences.ts
// 合格体験記。条件の近い先輩のリアルな合格ロードマップを蓄積していく。
// ─────────────────────────────────────────────────────────────────────────────

import type { AdmissionType } from "./universities";

export type Experience = {
  id: string;
  univ: string;
  type: AdmissionType;
  name: string;
  grade: string;
  score: string;
  headline: string;
  juku: string;
  /** 短い引用（カードに表示）。headlineと別軸の場合に使用。 */
  quote?: string;
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    univ: "サンプル大学A 経済学部",
    type: "総合型選抜",
    name: "Sさん",
    grade: "高3 春開始",
    score: "評定 3.4",
    headline: "高3夏まで部活漬け。3ヶ月で志望理由書を仕上げた方法",
    juku: "サンプル塾A",
    quote: "高3夏まで部活漬け。3ヶ月で志望理由書を仕上げた方法。",
  },
  {
    id: "exp-2",
    univ: "サンプル大学C 文学部",
    type: "公募推薦",
    name: "Kさん",
    grade: "高2 秋開始",
    score: "評定 4.2",
    headline: "探究活動で扱った地域課題を、そのまま研究計画に",
    juku: "サンプル塾D",
    quote: "探究活動で扱った地域課題を、そのまま研究計画に。",
  },
  {
    id: "exp-3",
    univ: "サンプル大学F 国際学部",
    type: "総合型選抜",
    name: "Mさん",
    grade: "高2 春開始",
    score: "評定 3.8 / TOEFL 78",
    headline: "英語外部試験のスコアアップが合否を分けた一年",
    juku: "サンプル塾D",
    quote: "英語外部試験のスコアアップが合否を分けた一年。",
  },
  {
    id: "exp-4",
    univ: "サンプル大学H 教育学部",
    type: "公募推薦",
    name: "Tさん",
    grade: "高3 夏開始",
    score: "評定 3.7",
    headline: "教育実習ボランティアの経験をどう書類に落とし込んだか",
    juku: "サンプル塾E",
  },
  {
    id: "exp-5",
    univ: "サンプル大学G メディア学部",
    type: "総合型選抜",
    name: "Yさん",
    grade: "高1 冬開始",
    score: "評定 3.2",
    headline: "自主制作動画のポートフォリオで一次選考を突破",
    juku: "独学",
  },
  {
    id: "exp-6",
    univ: "サンプル大学D 工学部",
    type: "学校推薦型",
    name: "Hさん",
    grade: "高3 春開始",
    score: "評定 4.5",
    headline: "数学の研究レポートで口頭試問を乗り切った話",
    juku: "サンプル塾E",
  },
];

export const experienceFilters = [
  { label: "受験方式", placeholder: "総合型選抜" },
  { label: "学部・分野", placeholder: "すべて" },
  { label: "開始時の評定", placeholder: "指定なし" },
  { label: "学習開始時期", placeholder: "指定なし" },
];

export function getExperience(id: string) {
  return experiences.find((e) => e.id === id);
}
