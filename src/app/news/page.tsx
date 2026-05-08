import Link from "next/link";
import { PageHero } from "@/components/SectionHead";
import { newsItems, newsTags } from "@/lib/content/news";

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
            {newsTags.map((t, i) => (
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
            {newsItems.map((n, i) => (
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
                  href={n.href ?? "#"}
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
