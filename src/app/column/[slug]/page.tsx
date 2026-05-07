import Link from "next/link";

export default async function ColumnDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <>
      <section className="bg-aomaru relative overflow-hidden border-b-2 border-ink pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="container-aonavi relative">
          <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
            <Link href="/column" className="hover:text-brand-deep">
              Columns
            </Link>
            <span className="mx-2 opacity-40">/</span>
            <span className="text-ink">{slug}</span>
          </p>
          <p className="mt-6 inline-flex rotate-[-2deg] border-2 border-ink bg-accent px-3 py-1.5 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink">
            #志望理由書
          </p>
          <h1 className="mt-5 text-balance text-3xl font-black leading-tight text-ink md:text-5xl">
            落ちる志望理由書の共通点と、
            <br />
            改善の3ステップ。
          </h1>
          <p className="mt-4 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-ink-mute">
            2026/05/01 · AOナビ編集部 · 8 min read
          </p>
        </div>
      </section>

      <section className="bg-section-soft py-14 md:py-20">
        <div className="container-aonavi grid gap-10 lg:grid-cols-[1fr_300px]">
          <article className="border-2 border-ink bg-white p-6 shadow-[8px_8px_0_var(--color-ink)] md:p-10">
            <div className="border-l-8 border-brand bg-cream/60 p-5">
              <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
                Key Points
              </p>
              <ul className="mt-3 space-y-1.5 text-sm font-bold text-ink-soft">
                <li>・落ちる志望理由書には「学びたい理由」が抜けている</li>
                <li>・改善の3ステップは「経験 → 問い → 学び」の順で書く</li>
                <li>・大学の研究内容と接続するチェックリスト付き</li>
              </ul>
            </div>

            <nav className="mt-8 border-2 border-ink bg-white p-5">
              <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
                Index
              </p>
              <ol className="mt-3 list-inside list-decimal space-y-1 text-sm font-bold text-ink">
                <li>志望理由書とは</li>
                <li>落ちる志望理由書の共通点 3パターン</li>
                <li>改善の3ステップ</li>
                <li>大学研究との接続チェックリスト</li>
                <li>まとめ：書き出す前にやるべき1つのこと</li>
              </ol>
            </nav>

            <div className="mt-10 space-y-5 text-base leading-loose text-ink">
              <h2 className="font-latin text-2xl font-extrabold uppercase tracking-[0.04em] text-ink md:text-3xl">
                01 / 志望理由書とは
              </h2>
              <p>
                志望理由書は、総合型選抜・公募推薦で最も配点比率の高い書類のひとつです。書類審査だけで一次選考が行われる大学では、志望理由書の出来がそのまま面接に進めるかを決めます。
              </p>
              <p className="text-ink-mute">
                （※ 本文はサンプル。CMS連携後に動的取得に置き換え予定）
              </p>

              <h2 className="font-latin text-2xl font-extrabold uppercase tracking-[0.04em] text-ink md:text-3xl">
                02 / 落ちる志望理由書 3パターン
              </h2>
              <p>
                編集部が見てきた数百本の志望理由書のうち、惜しくも一次で落ちたものに共通する特徴を整理しました。
              </p>

              <h2 className="font-latin text-2xl font-extrabold uppercase tracking-[0.04em] text-ink md:text-3xl">
                03 / 改善の3ステップ
              </h2>
              <p>「経験 → 問い → 学び」の順で書くと、面接官に意欲が伝わりやすくなります。</p>
            </div>

            <section className="mt-12 border-2 border-ink bg-accent p-6 text-center shadow-[6px_6px_0_var(--color-ink)]">
              <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink">
                Get Pro Feedback
              </p>
              <h3 className="mt-3 text-xl font-black text-ink">志望理由書を添削してもらいたい。</h3>
              <p className="mt-2 text-sm font-bold text-ink">
                総合型選抜の対策塾なら、志望理由書の添削が中心の指導を受けられます。
              </p>
              <Link
                href="/juku"
                className="mt-5 inline-flex rounded-full border-2 border-ink bg-ink px-6 py-3 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-white shadow-[5px_5px_0_var(--color-brand)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                添削に強い塾を探す →
              </Link>
            </section>

            <section className="mt-6 border-2 border-ink bg-ink p-6 text-center text-white shadow-[6px_6px_0_var(--color-brand)]">
              <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-accent">
                Free Materials
              </p>
              <h3 className="mt-3 text-xl font-black">気になる大学の資料を、まとめて無料で。</h3>
              <Link
                href="/resource-request"
                className="mt-5 inline-flex rounded-full border-2 border-white bg-white px-6 py-3 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-ink shadow-[5px_5px_0_var(--color-brand)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                資料請求はこちら →
              </Link>
            </section>
          </article>

          <aside className="space-y-5">
            <div className="border-2 border-ink bg-white p-5 shadow-[6px_6px_0_var(--color-ink)]">
              <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
                Popular
              </p>
              <p className="mt-1 text-base font-black">人気記事</p>
              <ul className="mt-4 divide-y divide-line-soft">
                {[
                  { slug: "interview-tips", t: "面接で聞かれる質問BEST20と回答フレーム" },
                  { slug: "schedule", t: "高2春から逆算する 総合型選抜カレンダー" },
                  { slug: "research", t: "探究テーマが思いつかない人へ" },
                ].map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/column/${r.slug}`}
                      className="block py-3 text-xs font-bold leading-relaxed hover:text-brand-deep"
                    >
                      {r.t}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-2 border-ink bg-white p-5 shadow-[5px_5px_0_var(--color-brand)]">
              <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
                Tags
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {["志望理由書", "面接", "小論文", "総合型選抜 基礎"].map((c) => (
                  <li key={c}>
                    <Link
                      href={`/column?cat=${encodeURIComponent(c)}`}
                      className="border border-ink bg-white px-2 py-0.5 text-[11px] font-bold text-ink hover:bg-accent"
                    >
                      #{c}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <NextReadsRail />
      <NextActionCTA />
    </>
  );
}

function NextReadsRail() {
  const items = [
    { slug: "interview-tips", cat: "Interview", t: "面接で聞かれる質問BEST20と回答フレーム", min: 6 },
    { slug: "schedule", cat: "Schedule", t: "高2春から逆算する 総合型選抜カレンダー", min: 10 },
    { slug: "research", cat: "Research", t: "探究テーマが思いつかない人へ｜決め方の型", min: 7 },
    { slug: "shoron-format", cat: "Shoron", t: "小論文の構成テンプレート 4選", min: 9 },
  ];
  return (
    <section className="border-t-2 border-ink bg-white py-12 md:py-16">
      <div className="container-aonavi">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
              Next Reads
            </p>
            <h2 className="mt-1 font-latin text-2xl font-extrabold uppercase tracking-[0.02em] text-ink md:text-3xl">
              次に読みたいコラム
            </h2>
          </div>
          <Link
            href="/column"
            className="hidden font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-brand-deep hover:underline md:inline"
          >
            All Columns →
          </Link>
        </div>
        <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((c, i) => (
            <li key={c.slug}>
              <Link
                href={`/column/${c.slug}`}
                className="group flex h-full flex-col border-2 border-ink bg-white p-5 shadow-[5px_5px_0_var(--color-ink)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                <p className="font-latin text-3xl font-extrabold leading-none text-brand-deep">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-brand-deep">
                  #{c.cat}
                </p>
                <p className="mt-1 text-base font-black leading-snug text-ink">{c.t}</p>
                <p className="mt-auto pt-4 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink-mute">
                  {c.min} min read
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function NextActionCTA() {
  return (
    <section className="border-y-2 border-ink bg-section-soft py-12 md:py-16">
      <div className="container-aonavi">
        <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
          Take Action
        </p>
        <h2 className="mt-1 font-latin text-2xl font-extrabold uppercase tracking-[0.02em] text-ink md:text-3xl">
          読んだら、次の一歩へ。
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { en: "Diagnosis", t: "合格力診断", d: "あなたに合う大学・対策法を3分で診断", href: "/diagnosis", dark: true },
            { en: "Universities", t: "大学を探す", d: "総合型選抜の実施校を条件で絞り込み", href: "/universities" },
            { en: "Juku", t: "塾を探す", d: "志望理由書・面接・小論の対策塾を比較", href: "/juku" },
          ].map((c, i) => (
            <Link
              key={c.en}
              href={c.href}
              className={`group flex flex-col border-2 border-ink p-5 transition hover:-translate-y-1 ${
                c.dark
                  ? "bg-ink text-white shadow-[6px_6px_0_var(--color-brand)] hover:shadow-[3px_3px_0_var(--color-brand)]"
                  : "bg-white text-ink shadow-[6px_6px_0_var(--color-ink)] hover:shadow-[3px_3px_0_var(--color-ink)]"
              }`}
            >
              <p className={`font-latin text-2xl font-extrabold leading-none ${c.dark ? "text-accent" : "text-brand-deep"}`}>
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className={`mt-3 font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] ${c.dark ? "text-accent" : "text-brand-deep"}`}>
                {c.en}
              </p>
              <p className={`mt-1 text-base font-black ${c.dark ? "text-white" : "text-ink"}`}>{c.t}</p>
              <p className={`mt-2 text-xs font-bold leading-relaxed ${c.dark ? "text-white/75" : "text-ink-soft"}`}>{c.d}</p>
              <p className={`mt-auto pt-4 inline-flex items-center gap-1 font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] ${c.dark ? "text-accent" : "text-brand-deep"}`}>
                Open
                <span className="transition group-hover:translate-x-1">→</span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
