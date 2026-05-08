import Link from "next/link";
import { PageHero } from "@/components/SectionHead";
import { experiences, experienceFilters } from "@/lib/content/experiences";

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Stories"
        en="SUCCESS STORIES"
        jp="先輩たちの合格体験記。"
        lead="評定・受験方式・学習開始時期。条件の近い先輩のリアルな合格ロードマップ。"
      />

      <section className="bg-section-soft py-14 md:py-20">
        <div className="container-aonavi">
          <div className="border-2 border-ink bg-white p-6 shadow-[6px_6px_0_var(--color-ink)]">
            <p className="font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-brand-deep">
              Filter
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-4">
              {experienceFilters.map((f) => (
                <label key={f.label} className="block">
                  <span className="font-latin text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink-soft">
                    {f.label}
                  </span>
                  <select className="mt-1 w-full border-2 border-ink bg-white px-3 py-2 text-sm font-bold focus:outline-none">
                    <option>{f.placeholder}</option>
                  </select>
                </label>
              ))}
            </div>
          </div>

          <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((s, i) => (
              <li key={s.id}>
                <Link
                  href={`/experience/${s.id}`}
                  className="group flex h-full flex-col border-2 border-ink bg-white p-6 shadow-[6px_6px_0_var(--color-ink)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                  <div className="flex items-start justify-between">
                    <p className="font-latin text-3xl font-extrabold leading-none text-brand-deep">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <span className="border-2 border-ink bg-accent px-2 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink">
                      {s.type}
                    </span>
                  </div>
                  <p className="mt-6 text-sm font-black text-ink">{s.univ}</p>
                  <p className="mt-1 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-brand-deep">
                    {s.score}
                  </p>
                  <p className="mt-4 text-base font-black leading-snug text-ink">「{s.headline}」</p>
                  <div className="mt-auto pt-5">
                    <div className="flex flex-wrap gap-1.5 text-[11px]">
                      <span className="border border-ink bg-white px-2 py-0.5 font-bold text-ink">
                        {s.name}
                      </span>
                      <span className="border border-ink bg-white px-2 py-0.5 font-bold text-ink">
                        {s.grade}
                      </span>
                    </div>
                    <p className="mt-3 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink-mute">
                      Juku: {s.juku}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
