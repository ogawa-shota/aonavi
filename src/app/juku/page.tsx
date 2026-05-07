import Link from "next/link";
import {
  jukus,
  type Juku,
  type JukuFormat,
  type JukuGoal,
} from "@/lib/sample-data";

const regionOrder: Juku["region"][] = [
  "北海道・東北",
  "関東",
  "中部",
  "近畿",
  "中国・四国",
  "九州・沖縄",
  "全国",
];

const advancedFilters = [
  { id: "format", label: "授業形式", options: ["オンライン", "個別", "集団", "家庭教師", "ハイブリッド"] },
  { id: "goal", label: "対策目的", options: ["志望理由書", "小論文", "面接", "口頭試問", "探究活動"] },
  { id: "grade", label: "対象学年", options: ["高1", "高2", "高3", "既卒"] },
  { id: "exam", label: "対応入試", options: ["総合型選抜", "公募推薦", "学校推薦型", "特別入試"] },
  { id: "price", label: "月額", options: ["〜2万", "2〜3万", "3〜5万", "5万〜"] },
  { id: "feature", label: "特徴", options: ["無料体験", "オンライン対応", "通信添削", "保証制度", "夜間対応", "週末対応"] },
];

const sortTabs = [
  { id: "review", label: "口コミ評価順" },
  { id: "new", label: "新着順" },
  { id: "result", label: "合格実績順" },
];

export default function JukuHub() {
  const byRegion = regionOrder.map((r) => {
    const list = jukus
      .filter((j) => j.region === r)
      .sort((a, b) => b.rate - a.rate || a.pref.localeCompare(b.pref, "ja"));
    return { region: r, list };
  });

  return (
    <>
      <Breadcrumb />
      <PageTitle />
      <Disclaimer />
      <FilterPanel />
      <SortBar total={jukus.length} />
      <RegionJump groups={byRegion.map((r) => ({ region: r.region, count: r.list.length }))} />

      <section className="bg-section-soft py-10 md:py-14">
        <div className="container-aonavi space-y-12">
          {byRegion.map(({ region, list }) =>
            list.length === 0 ? null : (
              <section key={region} id={anchor(region)} className="scroll-mt-32">
                <RegionHeader label={region} count={list.length} />
                <ul className="mt-5 space-y-5">
                  {list.map((j) => (
                    <JukuRow key={j.slug} j={j} />
                  ))}
                </ul>
              </section>
            )
          )}
        </div>
      </section>

      <BottomNote />
    </>
  );
}

function anchor(r: Juku["region"]) {
  const map: Record<string, string> = {
    "北海道・東北": "hokkaido",
    関東: "kanto",
    中部: "chubu",
    近畿: "kinki",
    "中国・四国": "chugoku",
    "九州・沖縄": "kyushu",
    全国: "online",
  };
  return map[r];
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
          <Link href="/juku" className="hover:text-brand-deep">
            Juku Search
          </Link>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-ink">総合型選抜 対策塾</span>
        </p>
      </div>
    </section>
  );
}

function PageTitle() {
  const courseTotal = jukus.reduce((s, j) => s + j.courses.length, 0);
  return (
    <section className="bg-aomaru relative overflow-hidden border-b-2 border-ink">
      <div className="container-aonavi grid gap-6 py-10 md:grid-cols-[1fr_auto] md:items-end md:py-14">
        <div>
          <p className="inline-flex rotate-[-2deg] border-2 border-ink bg-accent px-3 py-1.5 font-latin text-xs font-extrabold uppercase tracking-[0.12em] text-ink shadow-[4px_4px_0_var(--color-ink)]">
            Juku · 総合型選抜
          </p>
          <h1 className="mt-5 font-latin text-5xl font-extrabold uppercase leading-[0.88] text-ink md:text-7xl">
            <span className="block">FIND THE</span>
            <span className="block text-brand-deep">RIGHT JUKU.</span>
          </h1>
          <p className="mt-4 text-base font-black text-ink md:text-xl">
            総合型選抜・公募推薦に強い対策塾を、目的・形式・エリアから一括比較。
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 md:max-w-md">
          <Stat n={jukus.length} k="Juku" />
          <Stat n={courseTotal} k="Course" />
          <Stat n={regionOrder.length - 1} k="Region" />
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
          コース・料金は変更になる場合があります。最新の正確な情報は資料請求または各塾の公式サイトでご確認ください。
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

        {/* Area */}
        <div className="mt-6 border-2 border-ink bg-white">
          <div className="border-b-2 border-ink bg-accent px-4 py-2">
            <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink">
              Area · エリア
            </p>
          </div>
          <div className="grid gap-1 p-3 sm:grid-cols-3 md:grid-cols-7">
            {regionOrder.map((r) => (
              <label
                key={r}
                className="flex cursor-pointer items-center gap-2 border border-line-soft px-3 py-2 text-xs font-bold transition hover:bg-brand-soft hover:border-ink"
              >
                <input type="checkbox" className="h-3.5 w-3.5 accent-brand-deep" />
                <span>{r === "全国" ? "オンライン全国" : r}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Advanced */}
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
          Result <span className="text-3xl text-brand-deep">{total}</span> Juku
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

function RegionJump({ groups }: { groups: { region: Juku["region"]; count: number }[] }) {
  return (
    <section className="border-b-2 border-ink bg-white">
      <div className="container-aonavi flex flex-wrap items-center gap-2 py-3">
        <span className="shrink-0 font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
          Jump to:
        </span>
        {groups.map((g) => (
          <a
            key={g.region}
            href={`#${anchor(g.region)}`}
            className={`border-2 border-ink px-3 py-1 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] transition ${
              g.count === 0
                ? "border-line-soft bg-bg text-ink-mute cursor-not-allowed"
                : "bg-white text-ink hover:bg-accent"
            }`}
          >
            {g.region === "全国" ? "オンライン全国" : g.region}
            <span className="ml-1.5 text-brand-deep">({g.count})</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function RegionHeader({ label, count }: { label: Juku["region"]; count: number }) {
  return (
    <header className="flex items-end justify-between border-b-2 border-ink pb-2">
      <h2 className="font-latin text-3xl font-extrabold uppercase tracking-[0.04em] text-ink md:text-5xl">
        {label === "全国" ? "Online Nationwide" : label}
      </h2>
      <p className="font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-brand-deep">
        {count} juku
      </p>
    </header>
  );
}

function JukuRow({ j }: { j: Juku }) {
  return (
    <li className="border-2 border-ink bg-white shadow-[6px_6px_0_var(--color-ink)] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_var(--color-ink)]">
      <header className="flex flex-col gap-3 border-b-2 border-ink bg-bg px-5 py-4 md:flex-row md:items-center md:justify-between">
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
          <Link
            href={`/juku/${j.slug}`}
            className="ml-1 text-lg font-black text-ink hover:text-brand-deep md:text-xl"
          >
            {j.name}
          </Link>
          <span className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
            ★ {j.rate} ／ 口コミ {j.reviews} 件 ／ {j.pref}
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
            href={`/juku/${j.slug}#trial`}
            className="rounded-full border-2 border-ink bg-accent px-4 py-2 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink hover:bg-white"
          >
            無料体験
          </Link>
          <Link
            href={`/juku/${j.slug}`}
            className="rounded-full border-2 border-ink bg-white px-4 py-2 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink hover:bg-accent"
          >
            詳細 →
          </Link>
        </div>
      </header>

      <div className="px-5 py-3 text-sm font-bold text-ink-soft">{j.catch}</div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-sm">
          <thead>
            <tr className="border-b-2 border-ink bg-white">
              {["コース", "形式", "対策目的", "対象", "回数", "料金"].map((h) => (
                <th
                  key={h}
                  className="px-4 py-2 text-left font-latin text-[10px] font-extrabold uppercase tracking-[0.14em] text-brand-deep"
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
                      <GoalBadge key={g} goal={g} />
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

      {j.features && j.features.length > 0 && (
        <footer className="flex flex-wrap items-center gap-2 border-t-2 border-line-soft px-5 py-3 text-xs">
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
        </footer>
      )}
    </li>
  );
}

const goalCode: Record<JukuGoal, string> = {
  志望理由書: "志",
  小論文: "小",
  面接: "面",
  口頭試問: "口",
  探究活動: "探",
};

function GoalBadge({ goal }: { goal: JukuGoal }) {
  return (
    <span
      title={goal}
      className="inline-flex h-6 items-center gap-0.5 border-2 border-ink bg-white px-1.5 font-latin text-[11px] font-extrabold text-brand-deep"
    >
      <span>{goalCode[goal]}</span>
    </span>
  );
}

function BottomNote() {
  const formats: JukuFormat[] = ["オンライン", "個別", "集団", "家庭教師", "ハイブリッド"];
  const goals: JukuGoal[] = ["志望理由書", "小論文", "面接", "口頭試問", "探究活動"];
  return (
    <section className="border-y-2 border-ink py-12 md:py-16">
      <div className="container-aonavi grid gap-6 md:grid-cols-2">
        <div className="border-2 border-ink bg-accent p-6 shadow-[8px_8px_0_var(--color-ink)]">
          <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink">
            Help
          </p>
          <p className="mt-2 text-lg font-black text-ink">記号 / 形式の早見表</p>
          <p className="mt-4 font-latin text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
            Goal
          </p>
          <ul className="mt-2 grid grid-cols-2 gap-2">
            {goals.map((g) => (
              <li key={g} className="flex items-center gap-2 text-xs font-bold text-ink">
                <span className="inline-flex h-6 w-6 items-center justify-center border-2 border-ink bg-white font-latin font-extrabold text-brand-deep">
                  {goalCode[g]}
                </span>
                <span>{g}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-latin text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
            Format
          </p>
          <p className="mt-2 text-xs font-bold text-ink">{formats.join(" ／ ")}</p>
        </div>
        <div className="border-2 border-ink bg-ink p-6 text-white shadow-[8px_8px_0_var(--color-brand)]">
          <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-accent">
            Tools
          </p>
          <p className="mt-2 text-lg font-black">塾選び 3つのチェック</p>
          <ol className="mt-3 list-inside list-decimal space-y-2 text-xs font-bold leading-relaxed text-white/85">
            <li>志望大学の合格実績があるか</li>
            <li>志望理由書の添削回数が十分か</li>
            <li>面接・口頭試問の練習相手がいるか</li>
          </ol>
          <Link
            href="/column/juku-choice"
            className="mt-5 inline-flex rounded-full border-2 border-white bg-accent px-5 py-2 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-ink shadow-[4px_4px_0_var(--color-brand)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            塾選びの詳細記事 →
          </Link>
        </div>
      </div>
    </section>
  );
}
