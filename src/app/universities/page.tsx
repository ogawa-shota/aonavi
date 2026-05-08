import Link from "next/link";
import { fieldList, regions } from "@/lib/content/taxonomies";
import {
  selectionLegend,
  universities,
  type University,
} from "@/lib/content/universities";

const groupRank: Record<University["type"], number> = { 国立: 0, 公立: 1, 私立: 2 };

const advancedFilters = [
  { id: "kubun", label: "設置区分", options: ["大学", "短大"] },
  { id: "founder", label: "国公私", options: ["国立", "公立", "私立"] },
  { id: "hensachi", label: "偏差値帯", options: ["〜45", "45〜55", "55〜60", "60〜65", "65〜"] },
  { id: "score", label: "評定平均", options: ["不問", "3.0〜", "3.5〜", "4.0〜", "4.5〜"] },
  { id: "type", label: "入試方式", options: ["総合型選抜", "公募推薦", "指定校推薦", "学校推薦型", "スポ・文化"] },
  { id: "deadline", label: "出願時期", options: ["8月", "9月", "10月", "11月", "12月以降"] },
  { id: "method", label: "選考方法", options: ["小論文あり", "面接あり", "プレゼンあり", "実技あり", "口頭試問あり"] },
  { id: "cost", label: "学費・奨学金", options: ["奨学金", "学費減免", "授業料免除"] },
  { id: "feature", label: "特徴", options: ["評定不問", "英語外部", "オンライン出願", "海外提携"] },
];

const sortTabs = [
  { id: "pref", label: "都道府県順" },
  { id: "aiueo", label: "50音順" },
  { id: "deadline", label: "締切順" },
];

export default function UniversitiesHub() {
  // Group universities by region → prefecture, sort 国立 → 公立 → 私立 within prefecture
  const byRegion = regions.map((r) => {
    const inRegion = universities
      .filter((u) => u.region === r.label)
      .sort((a, b) => groupRank[a.type] - groupRank[b.type] || a.pref.localeCompare(b.pref, "ja"));
    const byPref = r.prefs
      .map((p) => ({ pref: p, list: inRegion.filter((u) => u.pref === p) }))
      .filter((g) => g.list.length > 0);
    return { ...r, byPref, count: inRegion.length };
  });

  return (
    <>
      <Breadcrumb />
      <PageTitle />
      <Disclaimer />
      <FilterPanel />
      <SortBar total={universities.length} />
      <RegionJump groups={byRegion} />

      <section className="bg-section-soft py-10 md:py-14">
        <div className="container-aonavi space-y-12">
          {byRegion.map((r) =>
            r.count === 0 ? null : (
              <section key={r.id} id={r.id} className="scroll-mt-32">
                <RegionHeader label={r.label} count={r.count} />
                <div className="mt-5 space-y-8">
                  {r.byPref.map((g) => (
                    <PrefBlock key={g.pref} pref={g.pref} list={g.list} />
                  ))}
                </div>
              </section>
            )
          )}
        </div>
      </section>

      <BottomNote />
    </>
  );
}

function Breadcrumb() {
  return (
    <section className="border-b-2 border-ink bg-bg pt-24 md:pt-28">
      <div className="container-aonavi py-4">
        <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
          <Link href="/" className="hover:text-brand-deep">
            Home
          </Link>
          <span className="mx-2 opacity-40">/</span>
          <Link href="/universities" className="hover:text-brand-deep">
            University Search
          </Link>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-ink">総合型選抜</span>
        </p>
      </div>
    </section>
  );
}

function PageTitle() {
  return (
    <section className="bg-aomaru relative overflow-hidden border-b-2 border-ink">
      <div className="container-aonavi grid gap-6 py-10 md:grid-cols-[1fr_auto] md:items-end md:py-14">
        <div>
          <p className="inline-flex rotate-[-2deg] border-2 border-ink bg-accent px-3 py-1.5 font-latin text-xs font-extrabold uppercase tracking-[0.12em] text-ink shadow-[4px_4px_0_var(--color-ink)]">
            University · 総合型選抜
          </p>
          <h1 className="mt-5 font-latin text-5xl font-extrabold uppercase leading-[0.88] text-ink md:text-7xl">
            <span className="block">SOGO-GATA</span>
            <span className="block text-brand-deep">UNIV LIST.</span>
          </h1>
          <p className="mt-4 text-base font-black text-ink md:text-xl">
            総合型選抜を実施する全国の大学を、エリア・学問・条件で検索。
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 md:max-w-md">
          <Stat n={universities.length} k="Univ." />
          <Stat n={universities.reduce((s, u) => s + u.faculties.length, 0)} k="Facu." />
          <Stat n={regions.length} k="Region" />
        </div>
      </div>
    </section>
  );
}

function Stat({ n, k }: { n: number; k: string }) {
  return (
    <div className="border-2 border-ink bg-white px-3 py-3 text-center shadow-[4px_4px_0_var(--color-ink)]">
      <p className="font-latin text-3xl font-extrabold leading-none text-ink">{n}</p>
      <p className="mt-1 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-brand-deep">
        {k}
      </p>
    </div>
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
          掲載は前年度の入試情報を含みます。最新の正確な情報は必ず各大学公式サイトでご確認ください。
        </p>
      </div>
    </div>
  );
}

function FilterPanel() {
  return (
    <section className="border-b-2 border-ink bg-white">
      <div className="container-aonavi py-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
              Filter
            </p>
            <p className="text-base font-black text-ink md:text-lg">条件で絞り込む</p>
          </div>
          <button className="rounded-full border-2 border-ink bg-white px-4 py-1.5 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink hover:bg-accent">
            すべての条件をクリア
          </button>
        </div>

        {/* Top quick area filter */}
        <div className="mt-6 border-2 border-ink bg-white">
          <div className="border-b-2 border-ink bg-accent px-4 py-2">
            <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink">
              Area · エリア
            </p>
          </div>
          <div className="grid gap-1 p-3 sm:grid-cols-3 md:grid-cols-6">
            {regions.map((r) => (
              <label
                key={r.id}
                className="flex cursor-pointer items-center gap-2 border border-line-soft px-3 py-2 text-xs font-bold transition hover:bg-brand-soft hover:border-ink"
              >
                <input type="checkbox" className="h-3.5 w-3.5 accent-brand-deep" />
                <span>{r.short}</span>
                <span className="ml-auto font-latin text-[10px] uppercase tracking-[0.1em] text-ink-mute">
                  {r.prefs.length}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Field filter */}
        <div className="mt-4 border-2 border-ink bg-white">
          <div className="border-b-2 border-ink bg-accent px-4 py-2">
            <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink">
              Field · 学問分野
            </p>
          </div>
          <div className="grid gap-1 p-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {fieldList.map((f) => (
              <label
                key={f.id}
                className="flex cursor-pointer items-center gap-2 border border-line-soft px-3 py-2 text-xs font-bold transition hover:bg-brand-soft hover:border-ink"
              >
                <input type="checkbox" className="h-3.5 w-3.5 accent-brand-deep" />
                <span>{f.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Advanced filters */}
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {advancedFilters.map((f) => (
            <div key={f.id} className="border-2 border-ink bg-white">
              <div className="border-b-2 border-ink bg-bg px-3 py-1.5">
                <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
                  {f.label}
                </p>
              </div>
              <div className="flex flex-wrap gap-1 p-2">
                {f.options.map((o) => (
                  <label
                    key={o}
                    className="flex cursor-pointer items-center gap-1 border border-line-soft px-2 py-1 text-[11px] font-bold hover:border-ink hover:bg-brand-soft"
                  >
                    <input type="checkbox" className="h-3 w-3 accent-brand-deep" />
                    <span>{o}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button className="rounded-full border-2 border-ink bg-ink px-7 py-2.5 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-white shadow-[5px_5px_0_var(--color-brand)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            この条件で検索 →
          </button>
          <button className="rounded-full border-2 border-ink bg-white px-7 py-2.5 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-ink hover:bg-accent">
            条件を保存
          </button>
          <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
            Selected · 0
          </p>
        </div>
      </div>
    </section>
  );
}

function SortBar({ total }: { total: number }) {
  return (
    <section className="border-b-2 border-ink bg-bg">
      <div className="container-aonavi flex flex-wrap items-center justify-between gap-3 py-3">
        <p className="font-latin text-sm font-extrabold uppercase tracking-[0.14em] text-ink">
          Result <span className="text-3xl text-brand-deep">{total}</span> Universities
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-latin text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
            Sort:
          </span>
          {sortTabs.map((s, i) => (
            <button
              key={s.id}
              className={`border-2 border-ink px-3 py-1.5 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] transition ${
                i === 0
                  ? "bg-ink text-white shadow-[3px_3px_0_var(--color-brand)]"
                  : "bg-white text-ink hover:bg-accent"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function RegionJump({ groups }: { groups: ({ count: number } & (typeof regions)[number])[] }) {
  return (
    <section className="border-b-2 border-ink bg-white">
      <div className="container-aonavi flex flex-wrap items-center gap-2 py-3">
        <span className="shrink-0 font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
          Jump to:
        </span>
        {groups.map((r) => (
          <a
            key={r.id}
            href={`#${r.id}`}
            className={`border-2 border-ink px-3 py-1 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] transition ${
              r.count === 0
                ? "border-line-soft bg-bg text-ink-mute cursor-not-allowed"
                : "bg-white text-ink hover:bg-accent"
            }`}
          >
            {r.short}
            <span className="ml-1.5 text-brand-deep">({r.count})</span>
          </a>
        ))}
        <span className="ml-auto hidden md:flex md:items-center md:gap-2">
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
        </span>
      </div>
    </section>
  );
}

function RegionHeader({ label, count }: { label: string; count: number }) {
  return (
    <header className="flex items-end justify-between border-b-2 border-ink pb-2">
      <h2 className="font-latin text-3xl font-extrabold uppercase tracking-[0.04em] text-ink md:text-5xl">
        {label}
      </h2>
      <p className="font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-brand-deep">
        {count} universities
      </p>
    </header>
  );
}

function PrefBlock({ pref, list }: { pref: string; list: University[] }) {
  return (
    <section>
      <div className="flex items-center gap-3">
        <span className="rotate-[-1deg] border-2 border-ink bg-accent px-3 py-1 font-latin text-xs font-extrabold uppercase tracking-[0.12em] text-ink shadow-[3px_3px_0_var(--color-ink)]">
          {pref}
        </span>
        <span className="h-[2px] flex-1 bg-ink" />
        <span className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
          {list.length} univ.
        </span>
      </div>

      <ul className="mt-4 space-y-4">
        {list.map((u) => (
          <UniversityRow key={u.slug} u={u} />
        ))}
      </ul>
    </section>
  );
}

function UniversityRow({ u }: { u: University }) {
  return (
    <li className="border-2 border-ink bg-white shadow-[6px_6px_0_var(--color-ink)] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_var(--color-ink)]">
      <header className="flex flex-col gap-3 border-b-2 border-ink bg-bg px-5 py-4 md:flex-row md:items-center md:justify-between">
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
          <span className="border border-ink bg-white px-2 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink-soft">
            {u.pref}
          </span>
          {u.pickup && (
            <span className="rotate-[-1deg] border-2 border-ink bg-brand px-2 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-white">
              EDITOR'S PICK
            </span>
          )}
          <Link
            href={`/universities/${u.slug}`}
            className="ml-1 text-lg font-black text-ink hover:text-brand-deep md:text-xl"
          >
            {u.name}
          </Link>
          <span className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
            偏差値 {u.hensachi[0]}–{u.hensachi[1]} ／ 評定 {u.scoreMin ? `${u.scoreMin}〜` : "不問"}
          </span>
        </div>
        <div className="flex shrink-0 gap-2">
          <Link
            href="/resource-request"
            className="rounded-full border-2 border-ink bg-ink px-4 py-2 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-white shadow-[3px_3px_0_var(--color-brand)] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
          >
            資料請求
          </Link>
          <Link
            href={`/universities/${u.slug}`}
            className="rounded-full border-2 border-ink bg-white px-4 py-2 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink hover:bg-accent"
          >
            詳細 →
          </Link>
        </div>
      </header>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] text-sm">
          <thead>
            <tr className="border-b-2 border-ink bg-white">
              {["学部・学科", "入試方式", "選考方法", "出願締切", "募集人数", "評定基準"].map(
                (h) => (
                  <th
                    key={h}
                    className="px-4 py-2 text-left font-latin text-[10px] font-extrabold uppercase tracking-[0.14em] text-brand-deep"
                  >
                    {h}
                  </th>
                )
              )}
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
                  {f.scoreMin ? `${f.scoreMin}以上` : "不問"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {u.features && u.features.length > 0 && (
        <footer className="flex flex-wrap items-center gap-2 border-t-2 border-line-soft px-5 py-3 text-xs">
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
        </footer>
      )}
    </li>
  );
}

function BottomNote() {
  return (
    <section className="border-y-2 border-ink py-12 md:py-16">
      <div className="container-aonavi grid gap-6 md:grid-cols-2">
        <div className="border-2 border-ink bg-accent p-6 shadow-[8px_8px_0_var(--color-ink)]">
          <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink">
            Help
          </p>
          <p className="mt-2 text-lg font-black text-ink">記号の意味</p>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {selectionLegend.map((l) => (
              <li key={l.code} className="flex items-center gap-2 text-xs font-bold text-ink">
                <span className="inline-flex h-6 w-6 items-center justify-center border-2 border-ink bg-white font-latin font-extrabold text-brand-deep">
                  {l.code}
                </span>
                <span>{l.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-2 border-ink bg-ink p-6 text-white shadow-[8px_8px_0_var(--color-brand)]">
          <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-accent">
            Tools
          </p>
          <p className="mt-2 text-lg font-black">うまく見つからない？</p>
          <p className="mt-2 text-xs font-bold leading-relaxed text-white/80">
            条件が多すぎる・絞れない場合は、3分で完了する合格力診断から自分に合う大学を提案してもらうのが近道です。
          </p>
          <Link
            href="/diagnosis"
            className="mt-4 inline-flex rounded-full border-2 border-white bg-accent px-5 py-2 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-ink shadow-[4px_4px_0_var(--color-brand)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            合格力診断（無料） →
          </Link>
        </div>
      </div>
    </section>
  );
}
