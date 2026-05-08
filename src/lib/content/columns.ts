// ─────────────────────────────────────────────────────────────────────────────
// columns.ts
// 受験ノウハウ・コラム記事のメタデータ＋本文。
// 新しいコラムを追加するときは columns 配列にエントリを追加してください。
// 本文は keyPoints / outline / sections の3要素で構造化します（Phase B で MDX 化予定）。
// ─────────────────────────────────────────────────────────────────────────────

export type ColumnCategoryId =
  | "basics"
  | "essay"
  | "shoron"
  | "interview"
  | "tankyu"
  | "field"
  | "parents"
  | "career";

export type ColumnCategory = {
  id: ColumnCategoryId;
  label: string;
  en: string;
  count: number;
};

export const columnCategories: ColumnCategory[] = [
  { id: "basics", label: "総合型選抜 基礎", en: "Basics", count: 24 },
  { id: "essay", label: "志望理由書", en: "Essay", count: 38 },
  { id: "shoron", label: "小論文対策", en: "Shoron", count: 26 },
  { id: "interview", label: "面接対策", en: "Interview", count: 22 },
  { id: "tankyu", label: "探究活動", en: "Research", count: 18 },
  { id: "field", label: "学部・学問解説", en: "Fields", count: 32 },
  { id: "parents", label: "親御さま向け", en: "Parents", count: 14 },
  { id: "career", label: "進路の悩み", en: "Career", count: 11 },
];

export type ColumnSection = { h2: string; paragraphs: string[] };

export type Column = {
  slug: string;
  category: ColumnCategoryId;
  /** 表示用の英字ラベル（例: "Essay" / "Schedule"） */
  categoryEn: string;
  title: string;
  excerpt: string;
  date: string;
  minutes: number;
  author?: string;
  /** 本文（任意）。設定すると `/column/[slug]` で動的にレンダリング。 */
  body?: {
    keyPoints?: string[];
    outline?: string[];
    sections?: ColumnSection[];
  };
};

export const columns: Column[] = [
  {
    slug: "essay-basics",
    category: "essay",
    categoryEn: "Essay",
    title: "落ちる志望理由書の共通点と、改善の3ステップ",
    excerpt:
      "総合型選抜の合否を分ける志望理由書。書き始める前にチェックすべき構成を解説。",
    date: "2026/05/01",
    minutes: 8,
    author: "AOナビ編集部",
    body: {
      keyPoints: [
        "落ちる志望理由書には「学びたい理由」が抜けている",
        "改善の3ステップは「経験 → 問い → 学び」の順で書く",
        "大学の研究内容と接続するチェックリスト付き",
      ],
      outline: [
        "志望理由書とは",
        "落ちる志望理由書の共通点 3パターン",
        "改善の3ステップ",
        "大学研究との接続チェックリスト",
        "まとめ：書き出す前にやるべき1つのこと",
      ],
      sections: [
        {
          h2: "01 / 志望理由書とは",
          paragraphs: [
            "志望理由書は、総合型選抜・公募推薦で最も配点比率の高い書類のひとつです。書類審査だけで一次選考が行われる大学では、志望理由書の出来がそのまま面接に進めるかを決めます。",
          ],
        },
        {
          h2: "02 / 落ちる志望理由書 3パターン",
          paragraphs: [
            "編集部が見てきた数百本の志望理由書のうち、惜しくも一次で落ちたものに共通する特徴を整理しました。",
          ],
        },
        {
          h2: "03 / 改善の3ステップ",
          paragraphs: [
            "「経験 → 問い → 学び」の順で書くと、面接官に意欲が伝わりやすくなります。",
          ],
        },
      ],
    },
  },
  {
    slug: "interview-tips",
    category: "interview",
    categoryEn: "Interview",
    title: "面接で聞かれる質問BEST20と回答フレーム",
    excerpt: "面接官の視点から、合格者が共通して実践している答え方の型を整理。",
    date: "2026/04/28",
    minutes: 6,
    author: "AOナビ編集部",
  },
  {
    slug: "schedule",
    category: "basics",
    categoryEn: "Schedule",
    title: "高2春から逆算する 総合型選抜カレンダー",
    excerpt: "高2の春から本番までを月単位で見える化。いつ何を準備するかが分かる。",
    date: "2026/04/22",
    minutes: 10,
    author: "AOナビ編集部",
  },
  {
    slug: "research",
    category: "tankyu",
    categoryEn: "Research",
    title: "探究テーマが思いつかない人へ｜決め方の型",
    excerpt: "「自分が面白いと思えるテーマ」を見つけるための問いかけリスト付き。",
    date: "2026/04/18",
    minutes: 7,
    author: "AOナビ編集部",
  },
  {
    slug: "shoron-format",
    category: "shoron",
    categoryEn: "Shoron",
    title: "小論文の構成テンプレート 4選",
    excerpt: "論述型・課題文型・データ型・テーマ型に分けたテンプレートと例文。",
    date: "2026/04/12",
    minutes: 9,
    author: "AOナビ編集部",
  },
  {
    slug: "juku-choice",
    category: "basics",
    categoryEn: "Basics",
    title: "対策塾の選び方｜後悔しない3つのチェック",
    excerpt: "合格実績・添削回数・面接練習相手。塾選びで見るべき本当に大事な指標。",
    date: "2026/04/05",
    minutes: 6,
    author: "AOナビ編集部",
  },
];

export const columnPopular = [
  { slug: "interview-tips", title: "面接で聞かれる質問BEST20と回答フレーム" },
  { slug: "schedule", title: "高2春から逆算する 総合型選抜カレンダー" },
  { slug: "research", title: "探究テーマが思いつかない人へ" },
];

export const columnTags = ["志望理由書", "面接", "小論文", "総合型選抜 基礎"];

export function getColumn(slug: string) {
  return columns.find((c) => c.slug === slug);
}

export function getColumnCategory(id: ColumnCategoryId) {
  return columnCategories.find((c) => c.id === id);
}
