import Link from "next/link";
import { PageHero } from "@/components/SectionHead";

const items = [
  { date: "2026/05/06", tag: "速報", title: "2026年度 総合型選抜の出願日程が一部大学で前倒し", body: "サンプル大学A・Bを含む計12校で、出願期間を2週間早める動きが確定しました。" },
  { date: "2026/05/02", tag: "改訂", title: "サンプル大学A、英語外部試験スコアの加点制度を導入", body: "TOEFL iBT 70以上で書類点に最大10点加点。2027年度入試から適用予定。" },
  { date: "2026/04/28", tag: "イベント", title: "オンライン合同説明会｜参加大学50校が確定", body: "AOナビ主催のオンライン合同説明会、5月25日開催。事前申込で過去問題集をプレゼント。" },
  { date: "2026/04/22", tag: "コラム", title: "高2の今からはじめる「探究テーマ」の見つけ方", body: "総合型選抜で評価される探究活動の始め方を、現役大学生のロードマップ付きで解説。" },
  { date: "2026/04/15", tag: "改訂", title: "サンプル大学C、評定平均要件を撤廃", body: "国際学部で評定平均要件を撤廃。志望理由書とプレゼンの配点比率が見直されました。" },
  { date: "2026/04/01", tag: "速報", title: "総合型選抜の応募者数、前年比 +12%", body: "全国主要私大の総合型選抜・公募推薦の応募総数は5年連続で増加傾向に。" },
];

const tags = ["速報", "改訂", "イベント", "コラム", "塾"];

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        en="JUKEN NEWS"
        jp="受験ニュース。"
        lead="総合型選抜・公募推薦の制度変更、入試イベント、合格事例など、編集部が選んだ最新情報。"
      />

      <section className="bg-section-soft py-14 md:py-20">
        <div className="container-aonavi">
          <div className="flex flex-wrap gap-2">
            {tags.map((t, i) => (
              <button
                key={t}
                className={`border-2 border-ink px-3 py-1.5 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] transition ${
                  i === 0
                    ? "bg-ink text-white shadow-[3px_3px_0_var(--color-brand)]"
                    : "bg-white text-ink hover:bg-accent"
                }`}
              >
                #{t}
              </button>
            ))}
          </div>

          <ul className="mt-8 space-y-5">
            {items.map((n, i) => (
              <li
                key={i}
                className="border-2 border-ink bg-white p-6 shadow-[6px_6px_0_var(--color-ink)] transition hover:-translate-y-1"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="font-latin font-extrabold uppercase tracking-[0.14em] text-ink-mute">
                    {n.date}
                  </span>
                  <span
                    className={`rotate-[-1deg] border-2 border-ink px-2 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] ${
                      n.tag === "速報"
                        ? "bg-brand text-white"
                        : n.tag === "改訂"
                        ? "bg-accent text-ink"
                        : n.tag === "イベント"
                        ? "bg-ink text-white"
                        : "bg-white text-ink"
                    }`}
                  >
                    {n.tag}
                  </span>
                  <span className="font-latin text-[10px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
                    #{String(i + 1).padStart(3, "0")}
                  </span>
                </div>
                <Link
                  href="#"
                  className="mt-3 block text-xl font-black leading-snug text-ink hover:text-brand-deep md:text-2xl"
                >
                  {n.title}
                </Link>
                <p className="mt-3 text-sm font-bold leading-loose text-ink-soft">{n.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
