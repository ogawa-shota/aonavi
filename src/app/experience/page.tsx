import Link from "next/link";
import { PageHero } from "@/components/SectionHead";

const filters = [
  { label: "受験方式", placeholder: "総合型選抜" },
  { label: "学部・分野", placeholder: "すべて" },
  { label: "開始時の評定", placeholder: "指定なし" },
  { label: "学習開始時期", placeholder: "指定なし" },
];

const stories = [
  { id: "exp-1", univ: "サンプル大学A 経済学部", type: "総合型選抜", name: "Sさん", grade: "高3 春開始", score: "評定 3.4", headline: "高3夏まで部活漬け。3ヶ月で志望理由書を仕上げた方法", juku: "サンプル塾A" },
  { id: "exp-2", univ: "サンプル大学C 文学部", type: "公募推薦", name: "Kさん", grade: "高2 秋開始", score: "評定 4.2", headline: "探究活動で扱った地域課題を、そのまま研究計画に", juku: "サンプル塾D" },
  { id: "exp-3", univ: "サンプル大学F 国際学部", type: "総合型選抜", name: "Mさん", grade: "高2 春開始", score: "評定 3.8 / TOEFL 78", headline: "英語外部試験のスコアアップが合否を分けた一年", juku: "サンプル塾D" },
  { id: "exp-4", univ: "サンプル大学H 教育学部", type: "公募推薦", name: "Tさん", grade: "高3 夏開始", score: "評定 3.7", headline: "教育実習ボランティアの経験をどう書類に落とし込んだか", juku: "サンプル塾E" },
  { id: "exp-5", univ: "サンプル大学G メディア学部", type: "総合型選抜", name: "Yさん", grade: "高1 冬開始", score: "評定 3.2", headline: "自主制作動画のポートフォリオで一次選考を突破", juku: "独学" },
  { id: "exp-6", univ: "サンプル大学D 工学部", type: "学校推薦型", name: "Hさん", grade: "高3 春開始", score: "評定 4.5", headline: "数学の研究レポートで口頭試問を乗り切った話", juku: "サンプル塾E" },
];

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
              {filters.map((f) => (
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
            {stories.map((s, i) => (
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
