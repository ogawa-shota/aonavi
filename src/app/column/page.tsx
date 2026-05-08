import Link from "next/link";
import { PageHero } from "@/components/SectionHead";
import { columnCategories, columns } from "@/lib/content/columns";

export default function ColumnPage() {
  return (
    <>
      <PageHero
        eyebrow="Columns"
        en="READ THE NAVI"
        jp="合格に効くノウハウコラム。"
        lead="志望理由書・小論文・面接・探究活動。AOナビ編集部と現役指導者がお届けする実践的記事。"
      />

      <section className="bg-section-soft py-14 md:py-20">
        <div className="container-aonavi">
          <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
            Categories
          </p>
          <h2 className="mt-1 text-2xl font-black text-ink md:text-3xl">カテゴリから探す。</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-4">
            {columnCategories.map((c, i) => (
              <Link
                key={c.id}
                href={`/column/category/${c.id}`}
                className={`border-2 border-ink bg-white p-5 transition hover:-translate-y-1 hover:bg-accent ${
                  i % 2 === 0
                    ? "shadow-[5px_5px_0_var(--color-ink)]"
                    : "shadow-[5px_5px_0_var(--color-brand)]"
                }`}
              >
                <p className="font-latin text-2xl font-extrabold leading-none text-brand-deep">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink-mute">
                  {c.en}
                </p>
                <p className="mt-1 text-base font-black text-ink">{c.label}</p>
                <p className="mt-2 font-latin text-[10px] uppercase tracking-[0.14em] text-ink-soft">
                  {c.count} articles
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-14">
            <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
              Latest
            </p>
            <h2 className="mt-1 text-2xl font-black text-ink md:text-3xl">最新の記事。</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {columns.map((a, i) => (
                <Link
                  key={a.slug}
                  href={`/column/${a.slug}`}
                  className="group flex gap-5 border-2 border-ink bg-white p-5 shadow-[6px_6px_0_var(--color-ink)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center border-2 border-ink bg-accent">
                    <span className="font-latin text-3xl font-extrabold text-ink">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em]">
                      <span className="text-brand-deep">#{a.categoryEn}</span>
                      <span className="text-ink-mute">{a.date}</span>
                    </div>
                    <p className="mt-2 text-base font-black leading-snug text-ink">{a.title}</p>
                    <p className="mt-2 text-xs font-bold leading-loose text-ink-soft">{a.excerpt}</p>
                    <p className="mt-3 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink-mute">
                      {a.minutes} min read
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t-2 border-ink py-14 md:py-20">
        <div className="container-aonavi">
          <div className="border-2 border-ink bg-ink p-8 text-white shadow-[10px_10px_0_var(--color-brand)] md:p-12">
            <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-accent">
              From Column to Win
            </p>
            <h2 className="mt-3 text-2xl font-black md:text-4xl">
              読んで終わりにしない。
              <br />
              添削で、合格レベルに。
            </h2>
            <p className="mt-4 max-w-xl text-sm font-bold leading-loose text-white/80">
              志望理由書・小論文・面接の対策は、添削とフィードバックで一気に伸びます。
            </p>
            <Link
              href="/juku"
              className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-white bg-accent px-7 py-3 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-ink shadow-[5px_5px_0_var(--color-brand)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              対策塾を探す →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
