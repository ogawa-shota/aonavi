import Link from "next/link";
import { PageHero } from "@/components/SectionHead";

const tabs = [
  { id: "popular", label: "人気" },
  { id: "deadline", label: "締切間近" },
  { id: "free", label: "評定不問" },
  { id: "national", label: "国公立" },
  { id: "online-juku", label: "オンライン塾" },
];

const popular = [
  { rank: "01", name: "サンプル大学A", note: "経済・法学部の総合型が人気", trend: "↑3", count: "資料請求 1,240件" },
  { rank: "02", name: "サンプル大学C", note: "国際学部のプレゼン型選抜", trend: "↑1", count: "資料請求 980件" },
  { rank: "03", name: "サンプル大学F", note: "心理学部の小論文配点が高い", trend: "→", count: "資料請求 870件" },
  { rank: "04", name: "サンプル大学G", note: "メディア・デザイン領域に強い", trend: "NEW", count: "資料請求 720件" },
  { rank: "05", name: "サンプル大学B", note: "公募推薦で逆転合格者多数", trend: "↓2", count: "資料請求 690件" },
  { rank: "06", name: "サンプル大学H", note: "教育学部・地方創生型カリキュラム", trend: "→", count: "資料請求 612件" },
  { rank: "07", name: "サンプル大学E", note: "農学・生命科学のフィールド研究", trend: "↑4", count: "資料請求 580件" },
  { rank: "08", name: "サンプル大学D", note: "工学部の研究室配属が早期", trend: "→", count: "資料請求 521件" },
  { rank: "09", name: "サンプル大学I", note: "国際バカロレア対応型", trend: "NEW", count: "資料請求 488件" },
  { rank: "10", name: "サンプル大学J", note: "看護・医療系の総合型枠を拡大", trend: "↑2", count: "資料請求 461件" },
];

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
          {tabs.map((t, i) => (
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
            {popular.map((r) => (
              <li
                key={r.rank}
                className="grid grid-cols-[80px_1fr_auto] items-center gap-4 px-4 py-5 transition hover:bg-brand-soft md:px-6"
              >
                <span className="font-latin text-5xl font-extrabold leading-none text-brand-deep">
                  {r.rank}
                </span>
                <div>
                  <Link
                    href={`/universities/${r.name}`}
                    className="text-base font-black text-ink hover:text-brand-deep md:text-lg"
                  >
                    {r.name}
                  </Link>
                  <p className="mt-0.5 text-xs font-bold text-ink-soft">{r.note}</p>
                  <p className="mt-1 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-brand-deep">
                    {r.count}
                  </p>
                </div>
                <span className="border-2 border-ink bg-accent px-2 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink">
                  {r.trend}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
