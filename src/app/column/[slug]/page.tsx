import Link from "next/link";
import { columns, columnPopular, columnTags, getColumn, getColumnCategory } from "@/lib/content/columns";

export default async function ColumnDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getColumn(slug);
  const cat = c ? getColumnCategory(c.category) : undefined;

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
            #{cat?.label ?? "コラム"}
          </p>
          <h1 className="mt-5 text-balance text-3xl font-black leading-tight text-ink md:text-5xl">
            {c?.title ?? "未公開のコラム"}
          </h1>
          <p className="mt-4 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-ink-mute">
            {c?.date ?? "—"} · {c?.author ?? "AOナビ編集部"} · {c?.minutes ?? 0} min read
          </p>
        </div>
      </section>

      <section className="bg-section-soft py-14 md:py-20">
        <div className="container-aonavi grid gap-10 lg:grid-cols-[1fr_300px]">
          <article className="border-2 border-ink bg-white p-6 shadow-[8px_8px_0_var(--color-ink)] md:p-10">
            {c?.body?.keyPoints && c.body.keyPoints.length > 0 && (
              <div className="border-l-8 border-brand bg-cream/60 p-5">
                <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
                  Key Points
                </p>
                <ul className="mt-3 space-y-1.5 text-sm font-bold text-ink-soft">
                  {c.body.keyPoints.map((k) => (
                    <li key={k}>・{k}</li>
                  ))}
                </ul>
              </div>
            )}

            {c?.body?.outline && c.body.outline.length > 0 && (
              <nav className="mt-8 border-2 border-ink bg-white p-5">
                <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
                  Index
                </p>
                <ol className="mt-3 list-inside list-decimal space-y-1 text-sm font-bold text-ink">
                  {c.body.outline.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ol>
              </nav>
            )}

            {c?.body?.sections && c.body.sections.length > 0 ? (
              <div className="mt-10 space-y-5 text-base leading-loose text-ink">
                {c.body.sections.map((s) => (
                  <div key={s.h2}>
                    <h2 className="font-latin text-2xl font-extrabold uppercase tracking-[0.04em] text-ink md:text-3xl">
                      {s.h2}
                    </h2>
                    {s.paragraphs.map((p, i) => (
                      <p key={i} className="mt-3">
                        {p}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-10 border-2 border-line-soft bg-bg p-6 text-sm font-bold text-ink-soft">
                <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
                  Coming Soon
                </p>
                <p className="mt-2">
                  この記事の本文は準備中です。`src/lib/content/columns.ts` の <code className="font-latin text-brand-deep">{c?.slug ?? slug}</code> エントリに `body` を追加すると公開されます。
                </p>
              </div>
            )}

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
                {columnPopular.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/column/${r.slug}`}
                      className="block py-3 text-xs font-bold leading-relaxed hover:text-brand-deep"
                    >
                      {r.title}
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
                {columnTags.map((t) => (
                  <li key={t}>
                    <Link
                      href={`/column?cat=${encodeURIComponent(t)}`}
                      className="border border-ink bg-white px-2 py-0.5 text-[11px] font-bold text-ink hover:bg-accent"
                    >
                      #{t}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <NextReadsRail currentSlug={c?.slug} />
      <NextActionCTA />
    </>
  );
}

function NextReadsRail({ currentSlug }: { currentSlug?: string }) {
  const items = columns.filter((c) => c.slug !== currentSlug).slice(0, 4);
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
                  #{c.categoryEn}
                </p>
                <p className="mt-1 text-base font-black leading-snug text-ink">{c.title}</p>
                <p className="mt-auto pt-4 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink-mute">
                  {c.minutes} min read
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
