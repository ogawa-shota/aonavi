import Link from "next/link";

export default async function ColumnDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <p className="text-xs text-zinc-500">コラム / {slug}</p>
      <p className="mt-4 text-xs font-bold text-brand">志望理由書</p>
      <h1 className="mt-1 text-3xl font-extrabold leading-snug">
        志望理由書の書き方 完全ガイド
      </h1>
      <p className="mt-3 text-xs text-zinc-500">
        2026年5月公開 / 編集部
      </p>

      <div className="mt-8 space-y-4 text-base leading-relaxed text-zinc-800">
        <p>（ここに本文が入ります。CMS連携後に動的取得に置き換え）</p>
        <h2 className="mt-6 text-xl font-bold">1. 志望理由書とは</h2>
        <p>
          ダミーの本文。志望理由書は総合型選抜・公募推薦で最も重要な書類です。
        </p>
        <h2 className="mt-6 text-xl font-bold">2. 構成のポイント</h2>
        <p>ダミーの本文。「結論 → 理由 → エピソード → 展望」の順で書く。</p>
      </div>

      <section className="mt-12 rounded-2xl bg-brand-light p-6 text-center">
        <h3 className="text-lg font-extrabold">無料で資料請求</h3>
        <Link
          href="/resource-request"
          className="mt-3 inline-block rounded-full bg-accent px-6 py-2 font-bold text-white hover:bg-accent-dark"
        >
          資料請求はこちら
        </Link>
      </section>
    </article>
  );
}
