import Link from "next/link";
import { jukus, type Juku, type JukuGoal } from "@/lib/content/jukus";

const sections = [
  { id: "overview", label: "概要", en: "Overview" },
  { id: "courses", label: "コース", en: "Courses" },
  { id: "strengths", label: "強み", en: "Strengths" },
  { id: "mentors", label: "講師", en: "Mentors" },
  { id: "results", label: "合格実績", en: "Results" },
  { id: "reviews", label: "口コミ", en: "Reviews" },
  { id: "trial", label: "無料体験", en: "Trial" },
];

const goalCode: Record<JukuGoal, string> = {
  志望理由書: "志",
  小論文: "小",
  面接: "面",
  口頭試問: "口",
  探究活動: "探",
};

export default async function JukuDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const j = jukus.find((x) => x.slug === slug) ?? jukus[0];
  const cheapest = [...j.courses].sort((a, b) => a.price.localeCompare(b.price))[0];

  return (
    <>
      <Breadcrumb name={j.name} />
      <Hero j={j} />
      <Disclaimer />
      <SectionNav />

      <section className="bg-section-soft py-10 md:py-14">
        <div className="container-aonavi grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-12 min-w-0">
            <Overview j={j} />
            <CoursesSection j={j} />
            <StrengthsSection />
            <MentorsSection />
            <ResultsSection />
            <ReviewsSection />
            <TrialSection j={j} />
          </div>

          <aside className="space-y-5">
            <CTACard cheapest={cheapest} />
            <SidebarNav />
            <SupportsCard />
          </aside>
        </div>
      </section>

      <RelatedJukusRail current={j} />
      <NextActionCTA />
    </>
  );
}

function RelatedJukusRail({ current }: { current: Juku }) {
  const related = jukus
    .filter((x) => x.slug !== current.slug)
    .map((x) => ({
      j: x,
      score:
        x.goals.filter((g) => current.goals.includes(g)).length * 2 +
        x.formats.filter((f) => current.formats.includes(f)).length * 2 +
        (x.region === current.region ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((x) => x.j);

  if (related.length === 0) return null;

  return (
    <section className="border-t-2 border-ink bg-white py-12 md:py-16">
      <div className="container-aonavi">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
              Related
            </p>
            <h2 className="mt-1 font-latin text-2xl font-extrabold uppercase tracking-[0.02em] text-ink md:text-3xl">
              同じ目的・形式の対策塾
            </h2>
          </div>
          <Link
            href="/juku"
            className="hidden font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-brand-deep hover:underline md:inline"
          >
            All Juku →
          </Link>
        </div>
        <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {related.map((r, i) => (
            <li key={r.slug}>
              <Link
                href={`/juku/${r.slug}`}
                className="group flex h-full flex-col border-2 border-ink bg-white p-5 shadow-[5px_5px_0_var(--color-ink)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                <p className="font-latin text-3xl font-extrabold leading-none text-brand-deep">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {r.formats.slice(0, 2).map((f) => (
                    <span
                      key={f}
                      className="border-2 border-ink bg-white px-2 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink"
                    >
                      {f}
                    </span>
                  ))}
                  {r.free && (
                    <span className="rotate-[-1deg] border-2 border-ink bg-accent px-2 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink">
                      無料体験
                    </span>
                  )}
                </div>
                <p className="mt-3 text-base font-black text-ink">{r.name}</p>
                <p className="mt-1 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-brand-deep">
                  ★ {r.rate} ／ {r.pref}
                </p>
                <p className="mt-2 text-xs font-bold leading-relaxed text-ink-soft line-clamp-2">
                  {r.catch}
                </p>
                <p className="mt-auto pt-4 inline-flex items-center gap-1 font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
                  詳細 →
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
          Next Actions
        </p>
        <h2 className="mt-1 font-latin text-2xl font-extrabold uppercase tracking-[0.02em] text-ink md:text-3xl">
          次にやること
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              en: "Diagnosis",
              t: "合格力診断",
              d: "あなたに合う塾の指導内容を診断結果から提案",
              href: "/diagnosis",
              dark: true,
            },
            {
              en: "Universities",
              t: "大学を探す",
              d: "塾と並行して志望校を絞り込もう",
              href: "/universities",
            },
            {
              en: "Columns",
              t: "塾選びコラム",
              d: "後悔しない塾選びの3つのチェック",
              href: "/column/juku-choice",
            },
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
              <p
                className={`font-latin text-2xl font-extrabold leading-none ${
                  c.dark ? "text-accent" : "text-brand-deep"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </p>
              <p
                className={`mt-3 font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] ${
                  c.dark ? "text-accent" : "text-brand-deep"
                }`}
              >
                {c.en}
              </p>
              <p className={`mt-1 text-base font-black ${c.dark ? "text-white" : "text-ink"}`}>
                {c.t}
              </p>
              <p
                className={`mt-2 text-xs font-bold leading-relaxed ${
                  c.dark ? "text-white/75" : "text-ink-soft"
                }`}
              >
                {c.d}
              </p>
              <p
                className={`mt-auto pt-4 inline-flex items-center gap-1 font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] ${
                  c.dark ? "text-accent" : "text-brand-deep"
                }`}
              >
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

function Breadcrumb({ name }: { name: string }) {
  return (
    <section className="border-b-2 border-ink bg-bg pt-24 md:pt-28">
      <div className="container-aonavi py-4">
        <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
          <Link href="/" className="hover:text-brand-deep">
            Home
          </Link>
          <span className="mx-2 opacity-40">/</span>
          <Link href="/juku" className="hover:text-brand-deep">
            Juku
          </Link>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-ink">{name}</span>
        </p>
      </div>
    </section>
  );
}

function Hero({ j }: { j: Juku }) {
  const enName = j.name.replace(/^サンプル塾/, "Sample Juku ").toUpperCase();
  return (
    <section className="bg-aomaru relative overflow-hidden border-b-2 border-ink">
      <div className="container-aonavi grid gap-8 py-10 md:grid-cols-[1fr_280px] md:py-14">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            {j.formats.map((f) => (
              <span
                key={f}
                className="border-2 border-ink bg-white px-2 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink"
              >
                {f}
              </span>
            ))}
            {j.free && (
              <span className="rotate-[-1deg] border-2 border-ink bg-accent px-2 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink">
                無料体験
              </span>
            )}
            {j.pickup && (
              <span className="rotate-[-1deg] border-2 border-ink bg-brand px-2 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-white">
                EDITOR&apos;S PICK
              </span>
            )}
          </div>

          <h1 className="mt-5 break-words font-latin text-4xl font-extrabold uppercase leading-[0.92] text-ink md:text-6xl">
            {enName}
          </h1>
          <p className="mt-3 text-2xl font-black text-ink md:text-3xl">{j.name}</p>
          <p className="mt-1 text-sm font-bold text-ink-soft">{j.catch}</p>

          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            <Meta label="評価" value={`★ ${j.rate}`} />
            <Meta label="口コミ" value={`${j.reviews}件`} />
            <Meta label="所在" value={j.pref} />
            <Meta label="コース" value={`${j.courses.length}種`} />
          </div>

          {j.features && j.features.length > 0 && (
            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
              <span className="font-latin text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
                Features:
              </span>
              {j.features.map((ft) => (
                <span
                  key={ft}
                  className="border border-ink bg-white px-2 py-0.5 text-[11px] font-bold text-ink"
                >
                  #{ft}
                </span>
              ))}
            </div>
          )}

          <div className="mt-7 flex flex-wrap gap-2">
            <Link
              href="#trial"
              className="rounded-full border-2 border-ink bg-ink px-5 py-2.5 font-latin text-[12px] font-extrabold uppercase tracking-[0.12em] text-white shadow-[4px_4px_0_var(--color-brand)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              無料体験を申し込む →
            </Link>
            <Link
              href="/resource-request"
              className="rounded-full border-2 border-ink bg-white px-5 py-2.5 font-latin text-[12px] font-extrabold uppercase tracking-[0.12em] text-ink hover:bg-accent"
            >
              資料請求
            </Link>
          </div>
        </div>

        <div className="border-2 border-ink bg-white p-5 shadow-[8px_8px_0_var(--color-ink)]">
          <p className="font-latin text-[10px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
            Quick Stats
          </p>
          <ul className="mt-4 divide-y-2 divide-ink">
            {[
              { k: "Region", v: j.region },
              { k: "Pref.", v: j.pref },
              { k: "Format", v: j.formats.length === 1 ? j.formats[0] : `${j.formats.length}種` },
              { k: "Goal", v: `${j.goals.length}種` },
              { k: "Trial", v: j.free ? "無料あり" : "—" },
            ].map((s) => (
              <li key={s.k} className="flex items-center justify-between py-2.5">
                <span className="font-latin text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
                  {s.k}
                </span>
                <span className="text-xs font-extrabold text-ink">{s.v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <span className="border-2 border-ink bg-white px-2.5 py-1 font-latin text-[11px] font-extrabold text-ink">
      <span className="text-ink-mute">{label}</span>
      <span className="mx-1.5 text-line-soft">|</span>
      <span className="text-brand-deep">{value}</span>
    </span>
  );
}

function Disclaimer() {
  return (
    <div className="border-b-2 border-ink bg-brand-soft">
      <div className="container-aonavi flex flex-col gap-2 py-3 text-xs md:flex-row md:items-center">
        <span className="rotate-[-1deg] border-2 border-ink bg-white px-2 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink">
          Notice
        </span>
        <p className="font-bold leading-relaxed text-ink">
          コース・料金は変更になる場合があります。最新の正確な情報は資料請求でご確認ください。
        </p>
      </div>
    </div>
  );
}

function SectionNav() {
  return (
    <nav
      aria-label="セクションナビ"
      className="sticky top-[65px] z-20 border-b-2 border-ink bg-white/95 backdrop-blur md:top-[112px]"
    >
      <div className="container-aonavi flex items-center gap-1 overflow-x-auto py-2">
        <span className="shrink-0 font-latin text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
          Jump:
        </span>
        {sections.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`shrink-0 border-2 border-ink px-3 py-1.5 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] transition ${
              i === 0
                ? "bg-ink text-white shadow-[3px_3px_0_var(--color-brand)]"
                : "bg-white text-ink hover:bg-accent"
            }`}
          >
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function Overview({ j }: { j: Juku }) {
  return (
    <section id="overview" className="scroll-mt-44">
      <BlockHead en="Overview" jp="基本情報" />
      <dl className="mt-6 grid gap-0 border-2 border-ink bg-white shadow-[6px_6px_0_var(--color-ink)] sm:grid-cols-2">
        {[
          ["所在地", j.pref],
          ["対応エリア", j.region === "全国" ? "オンラインで全国対応" : j.region],
          ["授業形式", j.formats.join(" ／ ")],
          ["対策目的", j.goals.join(" ／ ")],
          ["評価", `★ ${j.rate} ／ 口コミ ${j.reviews}件`],
          ["体験", j.free ? "無料体験あり" : "—"],
          ["設立", "2018年"],
          ["対応入試", "総合型選抜・公募推薦・学校推薦型"],
        ].map(([k, v], i) => (
          <div
            key={k}
            className={`flex items-center justify-between border-ink p-4 ${
              i < 6 ? "border-b-2" : "sm:border-b-0"
            } ${i % 2 === 0 ? "sm:border-r-2" : ""}`}
          >
            <dt className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
              {k}
            </dt>
            <dd className="text-sm font-black text-ink text-right">{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function CoursesSection({ j }: { j: Juku }) {
  return (
    <section id="courses" className="scroll-mt-44">
      <BlockHead en="Courses · Price" jp="コース・料金" />
      <p className="mt-2 text-xs font-bold text-ink-soft">
        対策目的・形式・料金をまとめたコース一覧。気になるコースは資料請求でご確認ください。
      </p>

      <div className="mt-4 hidden md:block">
        <div className="overflow-x-auto border-2 border-ink bg-white shadow-[6px_6px_0_var(--color-ink)]">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="border-b-2 border-ink bg-accent text-left">
                {["コース", "形式", "対策目的", "対象", "回数", "料金"].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-2.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line-soft">
              {j.courses.map((c, i) => (
                <tr key={i} className="hover:bg-brand-soft">
                  <td className="px-4 py-3 text-sm font-black text-ink">{c.name}</td>
                  <td className="px-4 py-3">
                    <span className="border-2 border-ink bg-white px-2 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink">
                      {c.format}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      {c.goals.map((g) => (
                        <span
                          key={g}
                          title={g}
                          className="inline-flex h-6 w-6 items-center justify-center border-2 border-ink bg-white font-latin text-[12px] font-extrabold text-brand-deep"
                        >
                          {goalCode[g]}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-xs font-bold text-ink-soft">{c.target}</td>
                  <td className="px-4 py-3 text-xs font-bold text-ink-soft">{c.duration}</td>
                  <td className="px-4 py-3 font-latin text-sm font-extrabold text-brand-deep">
                    {c.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ul className="mt-4 space-y-3 md:hidden">
        {j.courses.map((c, i) => (
          <li key={i} className="border-2 border-ink bg-white p-4 shadow-[4px_4px_0_var(--color-ink)]">
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-black text-ink">{c.name}</p>
              <span className="border-2 border-ink bg-white px-2 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink">
                {c.format}
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-1">
              {c.goals.map((g) => (
                <span
                  key={g}
                  className="inline-flex h-7 w-7 items-center justify-center border-2 border-ink bg-white font-latin text-[12px] font-extrabold text-brand-deep"
                >
                  {goalCode[g]}
                </span>
              ))}
            </div>
            <dl className="mt-3 grid grid-cols-3 gap-2 text-[11px]">
              <Cell k="対象" v={c.target} />
              <Cell k="回数" v={c.duration} />
              <Cell k="料金" v={c.price} accent />
            </dl>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        <span className="font-latin text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
          Goal Legend:
        </span>
        {Object.entries(goalCode).map(([label, code]) => (
          <span
            key={code}
            className="inline-flex items-center gap-1 border border-ink bg-white px-1.5 py-0.5 text-[10px] font-bold"
          >
            <span className="font-latin font-extrabold text-brand-deep">{code}</span>
            <span className="text-ink-mute">{label}</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function Cell({ k, v, accent }: { k: string; v: string; accent?: boolean }) {
  return (
    <div className={`border-2 border-ink p-2 ${accent ? "bg-accent" : "bg-white"}`}>
      <dt className="font-latin text-[9px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
        {k}
      </dt>
      <dd className="mt-0.5 text-[11px] font-black text-ink">{v}</dd>
    </div>
  );
}

function StrengthsSection() {
  return (
    <section id="strengths" className="scroll-mt-44">
      <BlockHead en="Strengths" jp="この塾の3つの強み" />
      <ol className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          { n: "01", t: "業界トップクラスの添削数", d: "1人あたり平均 18回の往復添削" },
          { n: "02", t: "面接官 経験者が指導", d: "元入試委員・現役講師による模擬面接" },
          { n: "03", t: "合格率 84%（直近3年）", d: "難関私大・国公立の合格実績多数" },
        ].map((p) => (
          <li
            key={p.n}
            className="border-2 border-ink bg-white p-5 shadow-[5px_5px_0_var(--color-ink)] transition hover:-translate-y-1"
          >
            <p className="font-latin text-4xl font-extrabold leading-none text-brand-deep">{p.n}</p>
            <p className="mt-4 text-base font-black text-ink">{p.t}</p>
            <p className="mt-2 text-xs font-bold text-ink-soft">{p.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function MentorsSection() {
  return (
    <section id="mentors" className="scroll-mt-44">
      <BlockHead en="Mentors" jp="講師紹介" />
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          { n: "田中講師", r: "元入試委員", d: "難関私大の総合型を10年指導" },
          { n: "鈴木講師", r: "教育学博士", d: "志望理由書のロジック指導が得意" },
          { n: "佐藤講師", r: "面接対策担当", d: "口頭試問・グループディスカッション" },
        ].map((t) => (
          <div
            key={t.n}
            className="border-2 border-ink bg-white p-5 shadow-[5px_5px_0_var(--color-ink)]"
          >
            <div className="flex h-16 w-16 items-center justify-center border-2 border-ink bg-accent">
              <span className="font-latin text-2xl font-extrabold text-ink">M</span>
            </div>
            <p className="mt-4 text-base font-black text-ink">{t.n}</p>
            <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-brand-deep">
              {t.r}
            </p>
            <p className="mt-2 text-xs font-bold text-ink-soft">{t.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ResultsSection() {
  return (
    <section id="results" className="scroll-mt-44">
      <BlockHead en="Track Record" jp="合格実績（直近）" />
      <ul className="mt-6 grid gap-2 border-2 border-ink bg-white p-5 text-sm font-bold shadow-[5px_5px_0_var(--color-ink)] md:grid-cols-2">
        {[
          "サンプル大学A 経済学部・法学部",
          "サンプル大学C 国際学部",
          "サンプル大学F 文学部",
          "サンプル大学H 教育学部",
        ].map((u) => (
          <li key={u} className="flex items-center gap-2 text-ink">
            <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-brand-deep" />
            {u}
          </li>
        ))}
      </ul>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section id="reviews" className="scroll-mt-44">
      <BlockHead en="Reviews" jp="口コミ" />
      <ul className="mt-6 space-y-3">
        {[
          {
            y: "高3・女子",
            s: 5,
            q: "志望理由書を10回以上書き直したけど、毎回的確なフィードバックをもらえました。",
          },
          {
            y: "高3・男子",
            s: 5,
            q: "面接練習で本番より厳しい質問を受けたおかげで、本番は落ち着いて答えられました。",
          },
          {
            y: "保護者",
            s: 4,
            q: "保護者面談で進捗を共有してくれて安心。料金は少し高めです。",
          },
        ].map((r, i) => (
          <li
            key={i}
            className="border-2 border-ink bg-white p-5 shadow-[4px_4px_0_var(--color-ink)]"
          >
            <p className="font-latin text-xs font-extrabold uppercase tracking-[0.12em] text-brand-deep">
              {"★".repeat(r.s)}
              <span className="ml-3 text-ink-mute">{r.y}</span>
            </p>
            <p className="mt-2 text-sm font-bold leading-loose text-ink">{r.q}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function TrialSection({ j }: { j: Juku }) {
  return (
    <section id="trial" className="scroll-mt-44">
      <div className="border-2 border-ink bg-ink p-8 text-center text-white shadow-[10px_10px_0_var(--color-brand)] md:p-12">
        <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-accent">
          Free Trial
        </p>
        <h3 className="mt-4 text-3xl font-black md:text-4xl">まずは無料体験から。</h3>
        <p className="mt-4 max-w-xl mx-auto text-sm font-bold leading-loose text-white/80">
          {j.free
            ? "60分の個別相談＋志望理由書 1回添削まで無料でお試しいただけます。"
            : "体験申込で、コース内容と相性をその場で確認できます。"}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/resource-request"
            className="rounded-full border-2 border-white bg-white px-7 py-3 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-ink shadow-[5px_5px_0_var(--color-brand)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            資料請求（無料） →
          </Link>
          <Link
            href="#"
            className="rounded-full border-2 border-white px-7 py-3 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-white hover:bg-white hover:text-ink"
          >
            体験を申し込む
          </Link>
        </div>
      </div>
    </section>
  );
}

function CTACard({
  cheapest,
}: {
  cheapest: { name: string; price: string } | undefined;
}) {
  return (
    <div className="sticky top-[140px] border-2 border-ink bg-white p-6 shadow-[8px_8px_0_var(--color-brand)]">
      <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
        Starting From
      </p>
      <p className="mt-3 font-latin text-3xl font-extrabold text-ink">
        {cheapest?.price ?? "—"}
      </p>
      <p className="text-xs font-bold text-ink-soft">{cheapest?.name ?? ""}</p>
      <Link
        href="#trial"
        className="mt-5 block rounded-full border-2 border-ink bg-ink py-3 text-center font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-white shadow-[4px_4px_0_var(--color-brand)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
      >
        無料体験を申し込む →
      </Link>
      <Link
        href="/resource-request"
        className="mt-3 block rounded-full border-2 border-ink bg-white py-3 text-center font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-ink hover:bg-accent"
      >
        資料請求
      </Link>
      <button className="mt-3 block w-full rounded-full border border-ink-mute bg-white py-2 text-center font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink-mute hover:border-ink hover:text-ink">
        ★ お気に入り
      </button>
    </div>
  );
}

function SidebarNav() {
  return (
    <div className="border-2 border-ink bg-white p-5 shadow-[5px_5px_0_var(--color-ink)]">
      <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
        On This Page
      </p>
      <ul className="mt-3 space-y-1 text-xs font-bold">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="flex items-center justify-between border-b border-line-soft py-1.5 hover:text-brand-deep"
            >
              <span>{s.label}</span>
              <span className="font-latin text-[10px] uppercase tracking-[0.14em] text-ink-mute">
                {s.en}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SupportsCard() {
  return (
    <div className="border-2 border-ink bg-accent p-5 shadow-[5px_5px_0_var(--color-ink)]">
      <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink">
        Supports
      </p>
      <p className="mt-1 text-base font-black text-ink">対応している入試</p>
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {["総合型選抜", "公募推薦", "学校推薦型", "特別入試（IB等）"].map((x) => (
          <li
            key={x}
            className="border border-ink bg-white px-2 py-0.5 text-[11px] font-bold text-ink"
          >
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BlockHead({ en, jp }: { en: string; jp: string }) {
  return (
    <header>
      <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
        {en}
      </p>
      <h2 className="mt-1 font-latin text-3xl font-extrabold uppercase tracking-[0.02em] text-ink md:text-4xl">
        {jp}
      </h2>
    </header>
  );
}
