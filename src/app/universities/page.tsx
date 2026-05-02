import Link from "next/link";

const universities = [
  {
    slug: "sample-univ-1",
    name: "サンプル大学A",
    area: "東京都",
    faculties: 5,
    admissionTypes: 3,
    rating: "評定 3.5以上",
    deadline: "2026/09/15",
  },
  {
    slug: "sample-univ-2",
    name: "サンプル大学B",
    area: "大阪府",
    faculties: 3,
    admissionTypes: 2,
    rating: "評定 3.8以上",
    deadline: "2026/09/30",
  },
  {
    slug: "sample-univ-3",
    name: "サンプル大学C",
    area: "愛知県",
    faculties: 7,
    admissionTypes: 4,
    rating: "評定なし",
    deadline: "2026/10/05",
  },
];

const filters = [
  { label: "地域", placeholder: "全国" },
  { label: "学問分野", placeholder: "すべて" },
  { label: "入試方式", placeholder: "総合型選抜" },
  { label: "評定平均", placeholder: "指定なし" },
];

export default function UniversitiesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-extrabold">大学を探す</h1>
      <p className="mt-2 text-sm text-zinc-600">
        条件を絞って、あなたに合う大学を見つけましょう
      </p>

      <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6">
        <div className="grid gap-4 md:grid-cols-4">
          {filters.map((f) => (
            <label key={f.label} className="block">
              <span className="text-xs font-bold text-zinc-700">{f.label}</span>
              <select className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm">
                <option>{f.placeholder}</option>
              </select>
            </label>
          ))}
        </div>
        <button className="mt-4 rounded-full bg-brand px-6 py-2 text-sm font-bold text-white hover:bg-brand-dark">
          検索する
        </button>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <p className="text-sm text-zinc-600">
          全 {universities.length} 件
        </p>
        <select className="rounded-lg border border-zinc-300 px-3 py-1 text-sm">
          <option>人気順</option>
          <option>新着順</option>
          <option>締切が近い順</option>
        </select>
      </div>

      <ul className="mt-4 space-y-3">
        {universities.map((u) => (
          <li
            key={u.slug}
            className="rounded-2xl border border-zinc-200 bg-white p-6 hover:border-brand"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <Link
                  href={`/universities/${u.slug}`}
                  className="text-xl font-bold hover:text-brand"
                >
                  {u.name}
                </Link>
                <p className="mt-1 text-sm text-zinc-600">{u.area}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-zinc-100 px-3 py-1">
                    {u.faculties}学部
                  </span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1">
                    入試方式 {u.admissionTypes}
                  </span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1">
                    {u.rating}
                  </span>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-accent-dark">
                    締切 {u.deadline}
                  </span>
                </div>
              </div>
              <div className="flex shrink-0 flex-col gap-2">
                <Link
                  href="/resource-request"
                  className="rounded-full bg-accent px-4 py-2 text-xs font-bold text-white hover:bg-accent-dark"
                >
                  資料請求
                </Link>
                <Link
                  href={`/universities/${u.slug}`}
                  className="rounded-full border border-brand px-4 py-2 text-xs font-bold text-brand hover:bg-brand-light"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
