import Link from "next/link";

const categories = [
  "総合型選抜 基礎",
  "志望理由書",
  "小論文対策",
  "面接対策",
  "学部・学問解説",
  "親御さま向け",
];

const articles = [
  {
    slug: "essay-basics",
    title: "志望理由書の書き方 完全ガイド",
    category: "志望理由書",
    excerpt: "総合型選抜の合否を分ける志望理由書。基本構成から…",
  },
  {
    slug: "interview-tips",
    title: "面接で差がつく 5つのポイント",
    category: "面接対策",
    excerpt: "面接官の視点から、合格者が共通して実践している…",
  },
  {
    slug: "schedule",
    title: "高2から始める総合型選抜スケジュール",
    category: "総合型選抜 基礎",
    excerpt: "高2の春から逆算する、合格までの準備ステップ…",
  },
];

export default function ColumnPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-extrabold">受験ノウハウコラム</h1>

      <ul className="mt-6 flex flex-wrap gap-2">
        {categories.map((c) => (
          <li key={c}>
            <button className="rounded-full border border-zinc-300 bg-white px-4 py-1 text-xs hover:border-brand hover:text-brand">
              {c}
            </button>
          </li>
        ))}
      </ul>

      <ul className="mt-8 space-y-4">
        {articles.map((a) => (
          <li
            key={a.slug}
            className="rounded-2xl border border-zinc-200 bg-white p-6 hover:border-brand"
          >
            <p className="text-xs font-bold text-brand">{a.category}</p>
            <Link
              href={`/column/${a.slug}`}
              className="mt-1 block text-xl font-bold hover:text-brand"
            >
              {a.title}
            </Link>
            <p className="mt-2 text-sm text-zinc-600">{a.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
