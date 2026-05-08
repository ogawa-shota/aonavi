// ─────────────────────────────────────────────────────────────────────────────
// universities.ts
// 大学データ（学部 × 入試方式マトリクス込み）。
// 新しい大学を追加するときは universities 配列にエントリを追加してください。
// ─────────────────────────────────────────────────────────────────────────────

import type { RegionLabel } from "./taxonomies";

export type AdmissionType =
  | "総合型選抜"
  | "公募推薦"
  | "指定校推薦"
  | "AO継続枠"
  | "学校推薦型"
  | "スポーツ・文化推薦";

export type SelectionMethod = "書" | "面" | "小" | "プ" | "口" | "実" | "活" | "英";

export type Faculty = {
  name: string;
  admission: AdmissionType;
  methods: SelectionMethod[];
  deadline: string;
  capacity: number;
  scoreMin: number | null;
};

export type UniversityType = "国立" | "公立" | "私立";

export type UniversityFeature =
  | "奨学金"
  | "英語外部"
  | "オンライン出願"
  | "評定不問"
  | "学費減免"
  | "海外提携";

export type University = {
  slug: string;
  name: string;
  pref: string;
  region: RegionLabel;
  type: UniversityType;
  faculties: Faculty[];
  fields: string[];
  hensachi: [number, number];
  scoreMin: number | null;
  rating: number;
  pickup?: boolean;
  features?: UniversityFeature[];
};

export const selectionLegend: { code: SelectionMethod; label: string }[] = [
  { code: "書", label: "書類" },
  { code: "面", label: "面接" },
  { code: "小", label: "小論文" },
  { code: "プ", label: "プレゼン" },
  { code: "口", label: "口頭試問" },
  { code: "実", label: "実技" },
  { code: "活", label: "活動報告" },
  { code: "英", label: "英語外部" },
];

const M = (...m: SelectionMethod[]) => m;

export const universities: University[] = [
  {
    slug: "sample-univ-1",
    name: "サンプル大学A",
    pref: "東京都",
    region: "関東",
    type: "私立",
    fields: ["経済", "法", "文"],
    hensachi: [55, 62],
    scoreMin: 3.5,
    rating: 4.5,
    pickup: true,
    features: ["奨学金", "英語外部"],
    faculties: [
      { name: "経済学部", admission: "総合型選抜", methods: M("書", "面", "小"), deadline: "2026/09/15", capacity: 30, scoreMin: 3.5 },
      { name: "経済学部", admission: "公募推薦", methods: M("書", "面"), deadline: "2026/10/15", capacity: 20, scoreMin: 4.0 },
      { name: "文学部", admission: "総合型選抜", methods: M("書", "面", "小"), deadline: "2026/09/20", capacity: 25, scoreMin: null },
      { name: "法学部", admission: "公募推薦", methods: M("書", "小"), deadline: "2026/10/12", capacity: 18, scoreMin: 4.0 },
      { name: "理工学部", admission: "総合型選抜", methods: M("書", "口"), deadline: "2026/09/25", capacity: 25, scoreMin: 3.8 },
    ],
  },
  {
    slug: "sample-univ-2",
    name: "サンプル大学B",
    pref: "大阪府",
    region: "近畿",
    type: "私立",
    fields: ["文", "教育"],
    hensachi: [50, 58],
    scoreMin: 3.8,
    rating: 4.2,
    pickup: true,
    features: ["奨学金", "学費減免"],
    faculties: [
      { name: "文学部", admission: "公募推薦", methods: M("書", "小", "面"), deadline: "2026/09/30", capacity: 22, scoreMin: 3.8 },
      { name: "教育学部", admission: "公募推薦", methods: M("書", "小", "面"), deadline: "2026/10/05", capacity: 18, scoreMin: 3.8 },
      { name: "人間科学部", admission: "総合型選抜", methods: M("書", "面", "プ"), deadline: "2026/10/12", capacity: 15, scoreMin: 3.5 },
    ],
  },
  {
    slug: "sample-univ-3",
    name: "サンプル大学C",
    pref: "愛知県",
    region: "中部",
    type: "私立",
    fields: ["国際", "経済", "理工"],
    hensachi: [52, 65],
    scoreMin: null,
    rating: 4.6,
    pickup: true,
    features: ["評定不問", "英語外部", "海外提携"],
    faculties: [
      { name: "国際学部", admission: "総合型選抜", methods: M("書", "プ", "英", "面"), deadline: "2026/10/05", capacity: 20, scoreMin: null },
      { name: "経済学部", admission: "総合型選抜", methods: M("書", "面", "小"), deadline: "2026/09/22", capacity: 25, scoreMin: null },
      { name: "理工学部", admission: "公募推薦", methods: M("書", "口"), deadline: "2026/10/18", capacity: 22, scoreMin: 3.8 },
      { name: "文学部", admission: "指定校推薦", methods: M("書", "面"), deadline: "2026/10/25", capacity: 30, scoreMin: 4.0 },
    ],
  },
  {
    slug: "sample-univ-4",
    name: "サンプル国立大学D",
    pref: "福岡県",
    region: "九州・沖縄",
    type: "国立",
    fields: ["国際", "工"],
    hensachi: [58, 66],
    scoreMin: 4.0,
    rating: 4.4,
    features: ["奨学金"],
    faculties: [
      { name: "工学部", admission: "学校推薦型", methods: M("書", "面", "小"), deadline: "2026/11/01", capacity: 20, scoreMin: 4.0 },
      { name: "国際学部", admission: "総合型選抜", methods: M("書", "プ", "英"), deadline: "2026/10/28", capacity: 12, scoreMin: 4.0 },
    ],
  },
  {
    slug: "sample-univ-5",
    name: "サンプル国立大学E",
    pref: "北海道",
    region: "北海道・東北",
    type: "国立",
    fields: ["農・生命", "医療"],
    hensachi: [55, 62],
    scoreMin: 4.2,
    rating: 4.3,
    features: ["奨学金"],
    faculties: [
      { name: "農学部", admission: "総合型選抜", methods: M("書", "面", "実"), deadline: "2026/11/15", capacity: 14, scoreMin: 4.2 },
      { name: "獣医学部", admission: "学校推薦型", methods: M("書", "面"), deadline: "2026/11/20", capacity: 8, scoreMin: 4.5 },
    ],
  },
  {
    slug: "sample-univ-6",
    name: "サンプル大学F",
    pref: "京都府",
    region: "近畿",
    type: "私立",
    fields: ["国際", "心理"],
    hensachi: [54, 60],
    scoreMin: 3.7,
    rating: 4.7,
    features: ["英語外部", "海外提携"],
    faculties: [
      { name: "国際学部", admission: "総合型選抜", methods: M("書", "プ", "英", "面"), deadline: "2026/10/20", capacity: 16, scoreMin: 3.7 },
      { name: "心理学部", admission: "総合型選抜", methods: M("書", "小", "面"), deadline: "2026/10/15", capacity: 18, scoreMin: 3.7 },
      { name: "心理学部", admission: "公募推薦", methods: M("書", "面"), deadline: "2026/10/30", capacity: 12, scoreMin: 4.0 },
    ],
  },
  {
    slug: "sample-univ-7",
    name: "サンプル大学G",
    pref: "宮城県",
    region: "北海道・東北",
    type: "私立",
    fields: ["メディア", "デザイン"],
    hensachi: [48, 55],
    scoreMin: null,
    rating: 4.1,
    features: ["評定不問", "オンライン出願"],
    faculties: [
      { name: "メディア学部", admission: "総合型選抜", methods: M("書", "プ", "活"), deadline: "2026/09/22", capacity: 24, scoreMin: null },
      { name: "デザイン学部", admission: "総合型選抜", methods: M("書", "実", "面"), deadline: "2026/09/28", capacity: 18, scoreMin: null },
    ],
  },
  {
    slug: "sample-univ-8",
    name: "サンプル大学H",
    pref: "広島県",
    region: "中国・四国",
    type: "私立",
    fields: ["教育", "心理"],
    hensachi: [50, 56],
    scoreMin: 3.6,
    rating: 4.0,
    features: ["奨学金", "学費減免"],
    faculties: [
      { name: "教育学部", admission: "公募推薦", methods: M("書", "小", "面"), deadline: "2026/10/10", capacity: 20, scoreMin: 3.6 },
      { name: "心理学部", admission: "総合型選抜", methods: M("書", "面"), deadline: "2026/10/05", capacity: 16, scoreMin: 3.6 },
    ],
  },
  {
    slug: "sample-univ-9",
    name: "サンプル公立大学I",
    pref: "大阪府",
    region: "近畿",
    type: "公立",
    fields: ["医療", "看護"],
    hensachi: [56, 62],
    scoreMin: 4.0,
    rating: 4.3,
    features: ["奨学金"],
    faculties: [
      { name: "看護学部", admission: "学校推薦型", methods: M("書", "面", "小"), deadline: "2026/11/05", capacity: 12, scoreMin: 4.0 },
    ],
  },
  {
    slug: "sample-univ-10",
    name: "サンプル大学J",
    pref: "東京都",
    region: "関東",
    type: "私立",
    fields: ["医療", "看護"],
    hensachi: [50, 58],
    scoreMin: 3.5,
    rating: 4.2,
    features: ["奨学金"],
    faculties: [
      { name: "看護学部", admission: "総合型選抜", methods: M("書", "面", "小"), deadline: "2026/10/05", capacity: 20, scoreMin: 3.5 },
      { name: "医療技術学部", admission: "公募推薦", methods: M("書", "面"), deadline: "2026/10/15", capacity: 18, scoreMin: 3.8 },
    ],
  },
  {
    slug: "sample-univ-11",
    name: "サンプル大学K",
    pref: "神奈川県",
    region: "関東",
    type: "私立",
    fields: ["経済", "経営"],
    hensachi: [48, 55],
    scoreMin: 3.3,
    rating: 4.0,
    features: ["奨学金", "オンライン出願"],
    faculties: [
      { name: "経営学部", admission: "総合型選抜", methods: M("書", "面", "プ"), deadline: "2026/09/18", capacity: 28, scoreMin: 3.3 },
      { name: "経済学部", admission: "公募推薦", methods: M("書", "小", "面"), deadline: "2026/10/22", capacity: 22, scoreMin: 3.6 },
    ],
  },
  {
    slug: "sample-univ-12",
    name: "サンプル大学L",
    pref: "京都府",
    region: "近畿",
    type: "私立",
    fields: ["芸術", "デザイン"],
    hensachi: [45, 55],
    scoreMin: null,
    rating: 4.4,
    features: ["評定不問", "海外提携"],
    faculties: [
      { name: "芸術学部", admission: "総合型選抜", methods: M("書", "実", "面"), deadline: "2026/09/25", capacity: 22, scoreMin: null },
    ],
  },
  // ───────────────────────────────────────────────────────────────────────────
  // 慶應義塾大学 (Keio University)
  // ※ deadline / capacity / scoreMin は仮置き。最新の公式入試要項で要差し替え。
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "keio",
    name: "慶應義塾大学",
    pref: "東京都",
    region: "関東",
    type: "私立",
    fields: ["経済", "法", "商", "文", "理工", "総合政策", "環境情報", "医", "薬", "看護"],
    hensachi: [65, 75],
    scoreMin: null,
    rating: 4.8,
    pickup: true,
    features: ["奨学金", "英語外部", "海外提携"],
    faculties: [
      // SFC: AO入試（A方式：高校時代の活動実績重視）
      {
        name: "総合政策学部",
        admission: "総合型選抜",
        methods: M("書", "活", "面"),
        deadline: "2026/09/15",
        capacity: 150,
        scoreMin: null,
      },
      // SFC: AO入試（B方式：自由記述・課題重視）
      {
        name: "環境情報学部",
        admission: "総合型選抜",
        methods: M("書", "活", "面"),
        deadline: "2026/09/15",
        capacity: 150,
        scoreMin: null,
      },
      // 法学部 FIT入試（A方式）
      {
        name: "法学部",
        admission: "公募推薦",
        methods: M("書", "小", "面"),
        deadline: "2026/09/22",
        capacity: 80,
        scoreMin: 4.0,
      },
      // 文学部 自主応募制推薦
      {
        name: "文学部",
        admission: "公募推薦",
        methods: M("書", "小"),
        deadline: "2026/11/01",
        capacity: 50,
        scoreMin: 4.1,
      },
      // 理工学部 AO入試
      {
        name: "理工学部",
        admission: "総合型選抜",
        methods: M("書", "面", "口"),
        deadline: "2026/09/30",
        capacity: 25,
        scoreMin: 4.0,
      },
      // 商学部 一般選抜（推薦系の併設はないが関連項目として）
      // ※ 商学部の指定校推薦は校内のみのため掲載省略
    ],
  },
];
