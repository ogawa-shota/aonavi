import Link from "next/link";

const searchAxes = [
  { label: "エリアから", icon: "📍" },
  { label: "学問から", icon: "📚" },
  { label: "職業から", icon: "💼" },
  { label: "評定平均から", icon: "📊" },
  { label: "入試方式から", icon: "📝" },
];

const featuredUniversities = [
  { slug: "sample-univ-1", name: "サンプル大学A", area: "東京都", note: "総合型 5学部" },
  { slug: "sample-univ-2", name: "サンプル大学B", area: "大阪府", note: "公募推薦 3学部" },
  { slug: "sample-univ-3", name: "サンプル大学C", area: "愛知県", note: "総合型 7学部" },
];

const featuredColumns = [
  { slug: "essay-basics", title: "志望理由書の書き方 完全ガイド" },
  { slug: "interview-tips", title: "面接で差がつく 5つのポイント" },
  { slug: "schedule", title: "高2から始める総合型選抜スケジュール" },
];

export default function Home() {
  return (
    <div>
      <section className="bg-brand-light py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-3xl font-extrabold leading-tight text-zinc-900 md:text-5xl">
            あなたの「総合型選抜」を、<br className="md:hidden" />最短ルートで。
          </h1>
          <p className="mt-4 text-base text-zinc-700 md:text-lg">
            全国の大学・塾・記事から、自分に合う合格戦略が見つかる
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 md:flex-row">
            <Link
              href="/universities"
              className="rounded-full bg-brand px-6 py-3 text-base font-bold text-white hover:bg-brand-dark"
            >
              大学を探す
            </Link>
            <Link
              href="/resource-request"
              className="rounded-full bg-accent px-6 py-3 text-base font-bold text-white hover:bg-accent-dark"
            >
              無料で資料請求
            </Link>
          </div>
        </div>
      </section>

      <Section title="5つの切り口で大学を探す">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {searchAxes.map((axis) => (
            <div
              key={axis.label}
              className="rounded-2xl border border-zinc-200 bg-white p-6 text-center hover:border-brand"
            >
              <div className="text-3xl">{axis.icon}</div>
              <p className="mt-2 text-sm font-bold">{axis.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="総合型選抜とは？ 3STEPガイド">
        <ol className="grid gap-4 md:grid-cols-3">
          {["自分を知る", "大学を知る", "対策する"].map((step, i) => (
            <li
              key={step}
              className="rounded-2xl border border-zinc-200 bg-white p-6"
            >
              <p className="text-sm font-bold text-brand">STEP {i + 1}</p>
              <p className="mt-2 text-lg font-bold">{step}</p>
              <p className="mt-2 text-sm text-zinc-600">
                （ここに各STEPの解説テキストが入ります）
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="注目大学ピックアップ">
        <div className="grid gap-4 md:grid-cols-3">
          {featuredUniversities.map((u) => (
            <Link
              key={u.slug}
              href={`/universities/${u.slug}`}
              className="block rounded-2xl border border-zinc-200 bg-white p-6 hover:border-brand"
            >
              <p className="text-lg font-bold">{u.name}</p>
              <p className="mt-1 text-sm text-zinc-600">{u.area}</p>
              <p className="mt-2 text-sm text-zinc-700">{u.note}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="お役立ちコラム">
        <ul className="space-y-3">
          {featuredColumns.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/column/${c.slug}`}
                className="block rounded-xl border border-zinc-200 bg-white p-4 hover:border-brand"
              >
                <p className="text-base font-bold">{c.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <section className="bg-brand-light py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-extrabold">無料で資料請求</h2>
          <p className="mt-2 text-sm text-zinc-700">
            気になる大学の資料を、まとめてお届けします
          </p>
          <Link
            href="/resource-request"
            className="mt-6 inline-block rounded-full bg-accent px-8 py-3 font-bold text-white hover:bg-accent-dark"
          >
            資料請求はこちら
          </Link>
        </div>
      </section>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">
          {title}
        </h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
