import Link from "next/link";
import { selectionLegend, universities } from "@/lib/content/universities";

const sections = [
  { id: "overview", label: "概要", en: "Overview" },
  { id: "matrix", label: "学部 × 入試", en: "Matrix" },
  { id: "docs", label: "提出書類", en: "Docs" },
  { id: "stories", label: "合格体験記", en: "Stories" },
  { id: "columns", label: "関連コラム", en: "Columns" },
  { id: "access", label: "アクセス", en: "Access" },
];

export default async function UniversityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const u = universities.find((x) => x.slug === slug) ?? universities[0];

  const upcoming = [...u.faculties].sort((a, b) => a.deadline.localeCompare(b.deadline))[0];
  const admissionsSet = Array.from(new Set(u.faculties.map((f) => f.admission)));
  const facultyNames = Array.from(new Set(u.faculties.map((f) => f.name)));
  const enName = u.name.replace(/^サンプル(国立|公立)?大学/, "Sample Univ ").toUpperCase();

  return (
    <>
      <Breadcrumb name={u.name} />
      <Hero u={u} enName={enName} admissionsSet={admissionsSet} facultyNames={facultyNames} />
      <Disclaimer />
      <SectionNav />

      <section className="bg-section-soft py-10 md:py-14">
        <div className="container-aonavi grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-12 min-w-0">
            <Overview u={u} />
            <MatrixSection u={u} />
            <DocsSection />
            <StoriesSection slug={u.slug} />
            <ColumnsSection />
            <AccessSection u={u} />
          </div>

          <aside className="space-y-5">
            <DeadlineCard
              deadline={upcoming?.deadline ?? "—"}
              label={`${upcoming?.name ?? ""}・${upcoming?.admission ?? ""}`}
            />
            <SidebarNav />
            <RelatedJukuCard />
          </aside>
        </div>
      </section>

      <RelatedUniversitiesRail current={u} />
      <NextActionCTA />
    </>
  );
}

function RelatedUniversitiesRail({ current }: { current: (typeof universities)[number] }) {
  const related = universities
    .filter((x) => x.slug !== current.slug)
    .map((x) => ({
      u: x,
      score:
        x.fields.filter((f) => current.fields.includes(f)).length * 3 +
        (x.region === current.region ? 2 : 0) +
        (x.type === current.type ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((x) => x.u);

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
              同じ学問・エリアの大学
            </h2>
          </div>
          <Link
            href="/universities"
            className="hidden font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-brand-deep hover:underline md:inline"
          >
            All Universities →
          </Link>
        </div>
        <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {related.map((r, i) => (
            <li key={r.slug}>
              <Link
                href={`/universities/${r.slug}`}
                className="group flex h-full flex-col border-2 border-ink bg-white p-5 shadow-[5px_5px_0_var(--color-ink)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                <p className="font-latin text-3xl font-extrabold leading-none text-brand-deep">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <span
                    className={`border-2 border-ink px-2 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] ${
                      r.type === "国立"
                        ? "bg-ink text-white"
                        : r.type === "公立"
                        ? "bg-accent text-ink"
                        : "bg-white text-ink"
                    }`}
                  >
                    {r.type}
                  </span>
                  <span className="border border-ink bg-white px-2 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink-soft">
                    {r.pref}
                  </span>
                </div>
                <p className="mt-3 text-base font-black text-ink">{r.name}</p>
                <p className="mt-2 text-xs font-bold leading-relaxed text-ink-soft">
                  {r.fields.slice(0, 3).map((f) => `#${f}`).join(" ")}
                </p>
                <p className="mt-auto pt-4 inline-flex items-center gap-1 font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
                  Read →
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
          次に読みたい・やりたいこと
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              en: "Diagnosis",
              t: "合格力を診断する",
              d: "あなたに合う他の大学候補も提案",
              href: "/diagnosis",
              dark: true,
            },
            {
              en: "Stories",
              t: "合格体験記を読む",
              d: "条件の近い先輩の合格ロードマップ",
              href: "/experience",
            },
            {
              en: "Past Exam",
              t: "過去問・出題傾向",
              d: "小論文・面接・プレゼンの傾向を確認",
              href: "/pastexam",
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
          <Link href="/universities" className="hover:text-brand-deep">
            Universities
          </Link>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-ink">{name}</span>
        </p>
      </div>
    </section>
  );
}

function Hero({
  u,
  enName,
  admissionsSet,
  facultyNames,
}: {
  u: (typeof universities)[number];
  enName: string;
  admissionsSet: string[];
  facultyNames: string[];
}) {
  return (
    <section className="bg-aomaru relative overflow-hidden border-b-2 border-ink">
      <div className="container-aonavi grid gap-8 py-10 md:grid-cols-[1fr_280px] md:py-14">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`border-2 border-ink px-2 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] ${
                u.type === "国立"
                  ? "bg-ink text-white"
                  : u.type === "公立"
                  ? "bg-accent text-ink"
                  : "bg-white text-ink"
              }`}
            >
              {u.type}
            </span>
            {admissionsSet.map((a) => (
              <span
                key={a}
                className="border-2 border-ink bg-accent px-2 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink"
              >
                {a}
              </span>
            ))}
            {u.pickup && (
              <span className="rotate-[-1deg] border-2 border-ink bg-brand px-2 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-white">
                EDITOR&apos;S PICK
              </span>
            )}
          </div>

          <h1 className="mt-5 break-words font-latin text-4xl font-extrabold uppercase leading-[0.92] text-ink md:text-6xl">
            {enName}
          </h1>
          <p className="mt-3 text-2xl font-black text-ink md:text-3xl">{u.name}</p>
          <p className="mt-1 text-sm font-bold text-ink-soft">
            {u.pref}・{u.region} ／ {facultyNames.length} 学部
          </p>

          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            <Meta label="偏差値" value={`${u.hensachi[0]}–${u.hensachi[1]}`} />
            <Meta label="評定平均" value={u.scoreMin ? `${u.scoreMin}〜` : "不問"} />
            <Meta label="満足度" value={`★ ${u.rating}`} />
            <Meta label="入試方式" value={`${admissionsSet.length} 種`} />
          </div>

          {u.features && u.features.length > 0 && (
            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
              <span className="font-latin text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
                Features:
              </span>
              {u.features.map((ft) => (
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
            <a
              className="rounded-full border-2 border-ink bg-white px-4 py-2 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink hover:bg-accent"
              href="#"
            >
              公式サイト ↗
            </a>
            <a
              className="rounded-full border-2 border-ink bg-white px-4 py-2 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink hover:bg-accent"
              href="#"
            >
              入試要項 PDF ↗
            </a>
            <a
              className="rounded-full border-2 border-ink bg-white px-4 py-2 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink hover:bg-accent"
              href="/event"
            >
              オープンキャンパス
            </a>
          </div>
        </div>

        <div className="border-2 border-ink bg-white p-5 shadow-[8px_8px_0_var(--color-ink)]">
          <p className="font-latin text-[10px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
            Quick Stats
          </p>
          <ul className="mt-4 divide-y-2 divide-ink">
            {[
              { k: "Pref.", v: u.pref },
              { k: "Type", v: u.type },
              { k: "Faculty", v: `${facultyNames.length}学部` },
              { k: "Hensachi", v: `${u.hensachi[0]}–${u.hensachi[1]}` },
              { k: "Score", v: u.scoreMin ? `${u.scoreMin}〜` : "不問" },
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
          掲載は前年度の入試情報を含みます。最新の正確な情報は必ず大学公式サイトでご確認ください。
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

function Overview({ u }: { u: (typeof universities)[number] }) {
  return (
    <section id="overview" className="scroll-mt-44">
      <BlockHead en="Overview" jp="基本情報" />
      <dl className="mt-6 grid gap-0 border-2 border-ink bg-white shadow-[6px_6px_0_var(--color-ink)] sm:grid-cols-2">
        {[
          ["所在地", `${u.pref}`],
          ["設立", "1925年"],
          ["学部数", `${Array.from(new Set(u.faculties.map((f) => f.name))).length}学部`],
          ["学生数", "約 8,200名"],
          ["偏差値目安", `${u.hensachi[0]}〜${u.hensachi[1]}`],
          ["評定平均目安", u.scoreMin ? `${u.scoreMin}以上` : "不問"],
          ["学費（初年度）", "約 1,300,000円"],
          ["奨学金", u.features?.includes("奨学金") ? "独自奨学金あり" : "—"],
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
            <dd className="text-sm font-black text-ink">{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function MatrixSection({ u }: { u: (typeof universities)[number] }) {
  return (
    <section id="matrix" className="scroll-mt-44">
      <BlockHead en="Matrix" jp="学部 × 入試方式" />
      <p className="mt-2 text-xs font-bold text-ink-soft">
        学部 × 入試方式の組み合わせと選考方法をひと目で確認できます。
      </p>

      <div className="mt-4 hidden md:block">
        <div className="overflow-x-auto border-2 border-ink bg-white shadow-[6px_6px_0_var(--color-ink)]">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="border-b-2 border-ink bg-accent text-left">
                {["学部", "入試方式", "選考方法", "出願締切", "募集", "評定"].map((h) => (
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
              {u.faculties.map((f, i) => (
                <tr key={i} className="hover:bg-brand-soft">
                  <td className="px-4 py-3 text-sm font-black text-ink">{f.name}</td>
                  <td className="px-4 py-3">
                    <span className="border-2 border-ink bg-accent px-2 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink">
                      {f.admission}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      {f.methods.map((m) => (
                        <span
                          key={m}
                          className="inline-flex h-6 w-6 items-center justify-center border-2 border-ink bg-white font-latin text-[12px] font-extrabold text-brand-deep"
                          title={selectionLegend.find((l) => l.code === m)?.label}
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 font-latin text-sm font-extrabold text-ink">
                    {f.deadline}
                  </td>
                  <td className="px-4 py-3 text-xs font-bold text-ink-soft">{f.capacity}名</td>
                  <td className="px-4 py-3 text-xs font-bold text-ink-soft">
                    {f.scoreMin ? `${f.scoreMin}〜` : "不問"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile cards */}
      <ul className="mt-4 space-y-3 md:hidden">
        {u.faculties.map((f, i) => (
          <li key={i} className="border-2 border-ink bg-white p-4 shadow-[4px_4px_0_var(--color-ink)]">
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-black text-ink">{f.name}</p>
              <span className="border-2 border-ink bg-accent px-2 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink">
                {f.admission}
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-1">
              {f.methods.map((m) => (
                <span
                  key={m}
                  className="inline-flex h-7 w-7 items-center justify-center border-2 border-ink bg-white font-latin text-[12px] font-extrabold text-brand-deep"
                >
                  {m}
                </span>
              ))}
            </div>
            <dl className="mt-3 grid grid-cols-3 gap-2 text-[11px]">
              <Cell k="締切" v={f.deadline} accent />
              <Cell k="募集" v={`${f.capacity}名`} />
              <Cell k="評定" v={f.scoreMin ? `${f.scoreMin}〜` : "不問"} />
            </dl>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        <span className="font-latin text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
          Legend:
        </span>
        {selectionLegend.map((l) => (
          <span
            key={l.code}
            className="inline-flex items-center gap-1 border border-ink bg-white px-1.5 py-0.5 text-[10px] font-bold"
          >
            <span className="font-latin font-extrabold text-brand-deep">{l.code}</span>
            <span className="text-ink-mute">{l.label}</span>
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

function DocsSection() {
  return (
    <section id="docs" className="scroll-mt-44">
      <BlockHead en="Docs · Trends" jp="提出書類・出題傾向" />
      <ul className="mt-6 space-y-3 border-2 border-ink bg-white p-5 shadow-[6px_6px_0_var(--color-ink)]">
        {[
          { k: "志望理由書", v: "1,200字 ／ 過去テーマ：「あなたが学びたい理由」" },
          { k: "活動報告書", v: "課外活動・受賞歴・資格を時系列で記入" },
          { k: "小論文", v: "90分 ／ 時事問題・課題文型の出題が中心" },
          { k: "面接", v: "個人20分 ／ 志望理由書を起点とした深掘り質問" },
        ].map((d) => (
          <li key={d.k} className="flex items-start gap-3 border-l-4 border-brand pl-4">
            <span className="mt-1 font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep min-w-24 shrink-0">
              {d.k}
            </span>
            <span className="text-sm font-bold text-ink">{d.v}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/pastexam"
        className="mt-3 inline-block font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep hover:underline"
      >
        More Past Exams →
      </Link>
    </section>
  );
}

function StoriesSection({ slug }: { slug: string }) {
  void slug;
  return (
    <section id="stories" className="scroll-mt-44">
      <BlockHead en="Stories" jp="この大学の合格体験記" />
      <ul className="mt-6 grid gap-4 md:grid-cols-2">
        {[
          { id: "exp-1", year: "2025", exam: "総合型選抜", name: "Sさん", q: "高3夏まで部活漬けからの逆転合格" },
          { id: "exp-2", year: "2024", exam: "公募推薦", name: "Kさん", q: "評定3.8でも面接で勝負した記録" },
        ].map((e) => (
          <li key={e.id}>
            <Link
              href={`/experience/${e.id}`}
              className="group block border-2 border-ink bg-white p-5 shadow-[5px_5px_0_var(--color-ink)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
                {e.year} ／ {e.exam}
              </p>
              <p className="mt-2 text-base font-black text-ink">「{e.q}」</p>
              <p className="mt-2 text-xs font-bold text-ink-mute">— {e.name}</p>
              <p className="mt-3 inline-flex items-center gap-1 font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
                Read story →
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ColumnsSection() {
  return (
    <section id="columns" className="scroll-mt-44">
      <BlockHead en="Related Columns" jp="関連コラム" />
      <ul className="mt-6 divide-y-2 divide-ink border-2 border-ink bg-white shadow-[5px_5px_0_var(--color-ink)]">
        {[
          { slug: "essay-basics", t: "落ちる志望理由書の共通点と、改善の3ステップ" },
          { slug: "interview-tips", t: "面接で差がつく 5つのポイント" },
          { slug: "schedule", t: "高2春から逆算する 総合型選抜カレンダー" },
        ].map((c) => (
          <li key={c.slug}>
            <Link
              href={`/column/${c.slug}`}
              className="flex items-center justify-between p-4 text-sm font-bold text-ink hover:bg-brand-soft"
            >
              <span>{c.t}</span>
              <span className="font-latin text-[10px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
                Read →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function AccessSection({ u }: { u: (typeof universities)[number] }) {
  return (
    <section id="access" className="scroll-mt-44">
      <BlockHead en="Access · Contact" jp="アクセス・お問い合わせ" />
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="border-2 border-ink bg-white p-5 shadow-[5px_5px_0_var(--color-ink)]">
          <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
            Address
          </p>
          <p className="mt-2 text-sm font-bold text-ink">{u.pref} 〇〇区 〇〇1-2-3</p>
          <p className="mt-3 font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
            Tel
          </p>
          <p className="mt-2 text-sm font-bold text-ink">03-XXXX-XXXX</p>
        </div>
        <div className="border-2 border-ink bg-accent p-5 shadow-[5px_5px_0_var(--color-ink)]">
          <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink">
            Open Campus
          </p>
          <p className="mt-2 text-base font-black text-ink">来校・オンライン両方で開催</p>
          <Link
            href="/event"
            className="mt-4 inline-flex rounded-full border-2 border-ink bg-ink px-5 py-2 font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-white shadow-[4px_4px_0_var(--color-brand)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            イベントを見る →
          </Link>
        </div>
      </div>
    </section>
  );
}

function DeadlineCard({ deadline, label }: { deadline: string; label: string }) {
  return (
    <div className="sticky top-[140px] border-2 border-ink bg-white p-6 shadow-[8px_8px_0_var(--color-brand)]">
      <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
        Next Deadline
      </p>
      <p className="mt-3 font-latin text-4xl font-extrabold text-ink">{deadline}</p>
      <p className="text-xs font-bold text-ink-soft">{label}</p>
      <Link
        href="/resource-request"
        className="mt-5 block rounded-full border-2 border-ink bg-ink py-3 text-center font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-white shadow-[4px_4px_0_var(--color-brand)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
      >
        無料 資料請求 →
      </Link>
      <Link
        href="/event"
        className="mt-3 block rounded-full border-2 border-ink bg-white py-3 text-center font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-ink hover:bg-accent"
      >
        オープンキャンパス
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

function RelatedJukuCard() {
  return (
    <div className="border-2 border-ink bg-ink p-5 text-white shadow-[6px_6px_0_var(--color-brand)]">
      <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-accent">
        Related Juku
      </p>
      <p className="mt-1 text-base font-black">この大学に強い対策塾</p>
      <ul className="mt-4 divide-y divide-white/15">
        {[
          { slug: "juku-a", name: "サンプル塾A", note: "志望理由書1on1" },
          { slug: "juku-c", name: "サンプル塾C", note: "難関私大に特化" },
        ].map((j) => (
          <li key={j.slug}>
            <Link
              href={`/juku/${j.slug}`}
              className="flex items-center justify-between py-3 text-xs"
            >
              <span>
                <span className="font-black text-white">{j.name}</span>
                <span className="ml-2 text-white/60">{j.note}</span>
              </span>
              <span className="font-latin text-[10px] uppercase tracking-[0.14em] text-accent">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/juku"
        className="mt-3 inline-block font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-accent hover:underline"
      >
        More juku →
      </Link>
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
