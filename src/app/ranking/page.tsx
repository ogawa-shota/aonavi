import Link from "next/link";
import { PageHero } from "@/components/SectionHead";
import { popularRanking, rankingTabs } from "@/lib/content/ranking";

export default function RankingPage() {
  return (
    <>
      <PageHero
        eyebrow="Weekly Ranking"
        en="RANKING"
        jp="今週の注目ランキング。"
        lead="資料請求数・口コミ・出願締切などのデータをもとに編集部が集計。"
      />

      <section className="border-b-2 border-ink bg-white">
        <div className="container-aonavi flex gap-2 overflow-x-auto py-3">
          {rankingTabs.map((t, i) => (
            <button
              key={t.id}
              className={`shrink-0 border-2 border-ink px-4 py-2 font-latin text-xs font-extrabold uppercase tracking-[0.12em] transition ${
                i === 0
                  ? "bg-ink text-white shadow-[3px_3px_0_var(--color-brand)]"
                  : "bg-white text-ink hover:bg-accent"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-section-soft py-14 md:py-20">
        <div className="container-aonavi">
          <ol className="divide-y-2 divide-ink border-2 border-ink bg-white shadow-[8px_8px_0_var(--color-ink)]">
            {popularRanking.map((r) => (
              <li
                key={r.rank}
                className="grid grid-cols-[80px_1fr_auto] items-center gap-4 px-4 py-5 transition hover:bg-brand-soft md:px-6"
              >
                <span className="font-latin text-5xl font-extrabold leading-none text-brand-deep">
                  {r.rank}
                </span>
                <div>
                  <Link
                    href={r.href ?? `/universities/${r.name}`}
                    className="text-base font-black text-ink hover:text-brand-deep md:text-lg"
                  >
                    {r.name}
                  </Link>
                  <p className="mt-0.5 text-xs font-bold text-ink-soft">{r.note}</p>
                  {r.count && (
                    <p className="mt-1 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-brand-deep">
                      {r.count}
                    </p>
                  )}
                </div>
                {r.trend && (
                  <span className="border-2 border-ink bg-accent px-2 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink">
                    {r.trend}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
