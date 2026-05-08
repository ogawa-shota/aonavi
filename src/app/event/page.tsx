import Link from "next/link";
import { PageHero } from "@/components/SectionHead";
import { events } from "@/lib/content/events";

export default function EventPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        en="OPEN CAMPUS"
        jp="オープンキャンパス・説明会。"
        lead="対面・オンライン・ハイブリッド。気になる大学のイベントから雰囲気をつかみましょう。"
      />

      <section className="bg-section-soft py-14 md:py-20">
        <div className="container-aonavi">
          <div className="flex flex-wrap gap-2">
            {["すべて", "対面", "オンライン", "ハイブリッド", "今週開催"].map((t, i) => (
              <button
                key={t}
                className={`border-2 border-ink px-3 py-1.5 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] transition ${
                  i === 0
                    ? "bg-ink text-white shadow-[3px_3px_0_var(--color-brand)]"
                    : "bg-white text-ink hover:bg-accent"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <ul className="mt-8 space-y-5">
            {events.map((e, i) => (
              <li
                key={i}
                className="border-2 border-ink bg-white p-6 shadow-[6px_6px_0_var(--color-ink)] transition hover:-translate-y-1"
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-center">
                  <div className="flex shrink-0 flex-col items-start gap-1 border-2 border-ink bg-accent px-4 py-3 md:w-32 md:items-center md:text-center">
                    <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink">
                      {e.date.slice(0, 7)}
                    </p>
                    <p className="font-latin text-3xl font-extrabold leading-none text-ink">
                      {e.date.slice(8)}
                    </p>
                    <p className="font-latin text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink">
                      {e.time}
                    </p>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="border-2 border-ink bg-white px-2 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink">
                        {e.style}
                      </span>
                      <span className="border border-ink bg-white px-2 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink-soft">
                        {e.area}
                      </span>
                      <span className="font-latin text-[10px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
                        #{String(i + 1).padStart(3, "0")}
                      </span>
                    </div>
                    <p className="mt-2 text-base font-black leading-snug text-ink md:text-lg">{e.title}</p>
                    <p className="mt-1 text-xs font-bold text-ink-mute">{e.univ}</p>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <Link
                      href={e.href ?? "#"}
                      className="rounded-full border-2 border-ink bg-ink px-5 py-2 font-latin text-xs font-extrabold uppercase tracking-[0.12em] text-white shadow-[3px_3px_0_var(--color-brand)] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
                    >
                      申し込む
                    </Link>
                    <button className="rounded-full border-2 border-ink bg-white px-3 py-2 font-latin text-xs font-extrabold text-ink hover:bg-accent">
                      ★
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
