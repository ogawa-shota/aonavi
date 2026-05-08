// ─────────────────────────────────────────────────────────────────────────────
// jukus.ts
// 対策塾データ（コース × 形式 × 目的マトリクス込み）。
// 新しい塾を追加するときは jukus 配列にエントリを追加してください。
// ─────────────────────────────────────────────────────────────────────────────

import type { RegionLabel } from "./taxonomies";

export type JukuFormat = "オンライン" | "個別" | "集団" | "家庭教師" | "ハイブリッド";
export type JukuGoal = "志望理由書" | "小論文" | "面接" | "口頭試問" | "探究活動";
export type JukuRegion = RegionLabel | "全国";

export type JukuFeature =
  | "無料体験"
  | "オンライン対応"
  | "通信添削"
  | "保証制度"
  | "夜間対応"
  | "週末対応";

export type JukuCourse = {
  name: string;
  format: JukuFormat;
  goals: JukuGoal[];
  target: string;
  duration: string;
  price: string;
};

export type Juku = {
  slug: string;
  name: string;
  catch: string;
  formats: JukuFormat[];
  pref: string;
  region: JukuRegion;
  goals: JukuGoal[];
  rate: number;
  reviews: number;
  free: boolean;
  pickup?: boolean;
  features?: JukuFeature[];
  courses: JukuCourse[];
};

export const jukus: Juku[] = [
  {
    slug: "juku-a",
    name: "サンプル塾A",
    catch: "志望理由書を1on1で添削。総合型選抜 専門の老舗",
    formats: ["オンライン", "個別"],
    pref: "東京都",
    region: "関東",
    goals: ["志望理由書", "面接", "探究活動"],
    rate: 4.8,
    reviews: 312,
    free: true,
    pickup: true,
    features: ["無料体験", "オンライン対応", "通信添削"],
    courses: [
      { name: "志望理由書 集中", format: "個別", goals: ["志望理由書"], target: "高2〜高3", duration: "週1×60分", price: "¥29,800/月" },
      { name: "合格パッケージ", format: "ハイブリッド", goals: ["志望理由書", "面接", "小論文"], target: "高3", duration: "週2×60分＋添削無制限", price: "¥58,000/月" },
      { name: "オンライン総合型コース", format: "オンライン", goals: ["志望理由書", "面接"], target: "高2〜高3", duration: "週1×90分", price: "¥34,800/月" },
    ],
  },
  {
    slug: "juku-b",
    name: "サンプル塾B",
    catch: "面接・小論文・口頭試問まで通年カバー",
    formats: ["個別", "集団"],
    pref: "大阪府",
    region: "近畿",
    goals: ["小論文", "面接", "口頭試問"],
    rate: 4.6,
    reviews: 188,
    free: true,
    pickup: true,
    features: ["無料体験", "週末対応"],
    courses: [
      { name: "小論文マスター", format: "集団", goals: ["小論文"], target: "高2〜高3", duration: "週1×120分", price: "¥24,000/月" },
      { name: "面接・口頭試問対策", format: "個別", goals: ["面接", "口頭試問"], target: "高3直前期", duration: "全6回", price: "¥48,000(一括)" },
    ],
  },
  {
    slug: "juku-c",
    name: "サンプル塾C",
    catch: "難関私大に特化｜独自カリキュラムで合格率 84%",
    formats: ["ハイブリッド", "個別"],
    pref: "東京都",
    region: "関東",
    goals: ["志望理由書", "小論文", "面接"],
    rate: 4.7,
    reviews: 254,
    free: false,
    pickup: true,
    features: ["保証制度", "夜間対応"],
    courses: [
      { name: "難関私大 総合型", format: "ハイブリッド", goals: ["志望理由書", "小論文", "面接"], target: "高3", duration: "週2×90分", price: "¥72,000/月" },
      { name: "プレゼンテーション特訓", format: "個別", goals: ["志望理由書"], target: "高3", duration: "全8回", price: "¥96,000(一括)" },
    ],
  },
  {
    slug: "juku-d",
    name: "サンプル塾D",
    catch: "全国どこでも。オンライン特化の総合型選抜塾",
    formats: ["オンライン"],
    pref: "全国対応",
    region: "全国",
    goals: ["志望理由書", "面接", "探究活動"],
    rate: 4.5,
    reviews: 421,
    free: true,
    features: ["無料体験", "オンライン対応", "通信添削", "夜間対応"],
    courses: [
      { name: "ベーシックプラン", format: "オンライン", goals: ["志望理由書"], target: "高1〜高3", duration: "月2×60分", price: "¥19,800/月" },
      { name: "プロプラン", format: "オンライン", goals: ["志望理由書", "面接", "探究活動"], target: "高3", duration: "月4×60分", price: "¥39,800/月" },
      { name: "探究活動 伴走", format: "オンライン", goals: ["探究活動"], target: "高1〜高2", duration: "月2×60分", price: "¥18,000/月" },
    ],
  },
  {
    slug: "juku-e",
    name: "サンプル塾E",
    catch: "国公立の学校推薦・面接対策に強い",
    formats: ["集団", "個別"],
    pref: "愛知県",
    region: "中部",
    goals: ["面接", "小論文"],
    rate: 4.3,
    reviews: 96,
    free: true,
    features: ["無料体験", "週末対応"],
    courses: [
      { name: "国公立 推薦対策", format: "集団", goals: ["面接", "小論文"], target: "高3", duration: "週1×120分", price: "¥22,000/月" },
      { name: "個別フォロー", format: "個別", goals: ["面接"], target: "高3直前期", duration: "全4回", price: "¥32,000(一括)" },
    ],
  },
  {
    slug: "juku-f",
    name: "サンプル塾F",
    catch: "プロ家庭教師が伴走するマンツーマン指導",
    formats: ["家庭教師", "オンライン"],
    pref: "東京都",
    region: "関東",
    goals: ["志望理由書", "面接", "口頭試問"],
    rate: 4.4,
    reviews: 67,
    free: false,
    features: ["夜間対応", "週末対応"],
    courses: [
      { name: "家庭教師 標準", format: "家庭教師", goals: ["志望理由書", "面接"], target: "高2〜高3", duration: "週1×90分", price: "¥48,000/月" },
      { name: "オンライン家庭教師", format: "オンライン", goals: ["志望理由書", "口頭試問"], target: "高2〜高3", duration: "週1×60分", price: "¥36,000/月" },
    ],
  },
  {
    slug: "juku-g",
    name: "サンプル塾G",
    catch: "京都発・関西エリア最大級の総合型選抜専門校",
    formats: ["集団", "個別", "ハイブリッド"],
    pref: "京都府",
    region: "近畿",
    goals: ["志望理由書", "小論文", "面接"],
    rate: 4.5,
    reviews: 142,
    free: true,
    features: ["無料体験", "週末対応"],
    courses: [
      { name: "関西難関 総合型", format: "ハイブリッド", goals: ["志望理由書", "小論文", "面接"], target: "高3", duration: "週2×90分", price: "¥54,000/月" },
    ],
  },
  {
    slug: "juku-h",
    name: "サンプル塾H",
    catch: "九州・沖縄の高校生に最適化したローカル指導",
    formats: ["個別", "オンライン"],
    pref: "福岡県",
    region: "九州・沖縄",
    goals: ["志望理由書", "面接", "小論文"],
    rate: 4.2,
    reviews: 58,
    free: true,
    features: ["無料体験", "オンライン対応"],
    courses: [
      { name: "九州 国公立推薦", format: "個別", goals: ["面接", "小論文"], target: "高3", duration: "週1×60分", price: "¥26,000/月" },
      { name: "オンライン補講", format: "オンライン", goals: ["志望理由書"], target: "高2〜高3", duration: "月2×60分", price: "¥16,000/月" },
    ],
  },
  {
    slug: "juku-i",
    name: "サンプル塾I",
    catch: "東北6県をカバー。志望理由書添削が強み",
    formats: ["オンライン", "個別"],
    pref: "宮城県",
    region: "北海道・東北",
    goals: ["志望理由書", "面接"],
    rate: 4.1,
    reviews: 41,
    free: true,
    features: ["無料体験", "通信添削"],
    courses: [
      { name: "東北 総合型コース", format: "個別", goals: ["志望理由書", "面接"], target: "高3", duration: "週1×60分", price: "¥28,000/月" },
    ],
  },
  {
    slug: "juku-j",
    name: "サンプル塾J",
    catch: "中国・四国地方の総合型選抜に対応",
    formats: ["集団", "個別"],
    pref: "広島県",
    region: "中国・四国",
    goals: ["小論文", "面接"],
    rate: 4.0,
    reviews: 38,
    free: true,
    features: ["無料体験"],
    courses: [
      { name: "標準コース", format: "集団", goals: ["小論文", "面接"], target: "高3", duration: "週1×120分", price: "¥21,000/月" },
    ],
  },
];
