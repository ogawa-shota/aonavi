import Link from "next/link";
import { SectionHead } from "@/components/SectionHead";

const pickup = [
  { slug: "sample-univ-1", name: "サンプル大学A", area: "東京都・私立", tag: "総合型選抜", deadline: "2026/09/15", note: "志望理由書 1,200字＋プレゼン" },
  { slug: "sample-univ-2", name: "サンプル大学B", area: "大阪府・私立", tag: "公募推薦", deadline: "2026/09/30", note: "評定3.8以上／小論文＋面接" },
  { slug: "sample-univ-3", name: "サンプル大学C", area: "愛知県・私立", tag: "総合型選抜", deadline: "2026/10/05", note: "活動報告書＋ディスカッション" },
  { slug: "sample-univ-4", name: "サンプル国立大学D", area: "福岡県・国立", tag: "学校推薦型", deadline: "2026/11/01", note: "共通テスト併用／評定 4.0" },
];

const ranking = [
  { rank: "01", name: "サンプル大学A", note: "志望理由書通過率 78%" },
  { rank: "02", name: "サンプル大学C", note: "資料請求 +120% 今月" },
  { rank: "03", name: "サンプル大学G", note: "評定不問の総合型を新設" },
  { rank: "04", name: "サンプル大学B", note: "小論文配点比率 50%" },
  { rank: "05", name: "サンプル大学F", note: "プレゼン重視・面接2回" },
];

const news = [
  { date: "5/06", tag: "速報", title: "2026年度 総合型選抜の出願日程が一部大学で前倒し" },
  { date: "5/02", tag: "改訂", title: "サンプル大学A、英語外部試験スコアの加点制度を導入" },
  { date: "4/28", tag: "イベント", title: "オンライン合同説明会｜参加大学50校が確定" },
];

const columnFeatures = [
  { slug: "essay-basics", cat: "Essay", title: "落ちる志望理由書の共通点と、改善の3ステップ", minutes: 8 },
  { slug: "interview-tips", cat: "Interview", title: "面接で聞かれる質問BEST20と回答フレーム", minutes: 6 },
  { slug: "schedule", cat: "Schedule", title: "高2春から逆算する 総合型選抜カレンダー", minutes: 10 },
  { slug: "research", cat: "Research", title: "探究テーマが思いつかない人へ｜決め方の型", minutes: 7 },
];

const jukuPicks = [
  { slug: "juku-a", name: "サンプル塾A", catch: "志望理由書を1on1で添削。総合型選抜 専門", format: "オンライン / 個別", rate: 4.8 },
  { slug: "juku-b", name: "サンプル塾B", catch: "面接・小論文・口頭試問まで通年カバー", format: "対面 / 集団", rate: 4.6 },
  { slug: "juku-c", name: "サンプル塾C", catch: "難関私大に特化｜合格率 84%", format: "ハイブリッド", rate: 4.7 },
];

const experiences = [
  { id: "exp-1", univ: "サンプル大学A 経済学部", name: "Sさん", score: "評定 3.4 → 合格", quote: "高3夏まで部活漬け。3ヶ月で志望理由書を仕上げた方法。" },
  { id: "exp-2", univ: "サンプル大学C 文学部", name: "Kさん", score: "評定 4.2 / プレゼン型", quote: "探究活動で扱った地域課題を、そのまま研究計画に。" },
  { id: "exp-3", univ: "サンプル大学F 国際学部", name: "Mさん", score: "TOEFL 78 / 公募推薦", quote: "英語外部試験のスコアアップが合否を分けた一年。" },
];

const quickFinds = [
  { href: "/universities#kanto", en: "Kanto", jp: "関東の大学" },
  { href: "/universities#kinki", en: "Kinki", jp: "近畿の大学" },
  { href: "/universities#hokkaido", en: "Tohoku", jp: "東北の大学" },
  { href: "/universities#kyushu", en: "Kyushu", jp: "九州・沖縄" },
  { href: "/juku#kanto", en: "Juku · Kanto", jp: "関東の塾" },
  { href: "/juku#online", en: "Juku · Online", jp: "オンライン塾" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <NewsTicker />
      <PickupSection />
      <RankingScheduleSection />
      <JukuSection />
      <ExperienceSection />
      <ColumnSection />
      <DiagnosisCTA />
      <ResourceCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="bg-aomaru relative overflow-hidden border-b-2 border-ink pt-28 md:pt-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-4 top-24 hidden h-[60vh] w-[14vw] -rotate-12 bg-brand lg:block" />
        <div className="absolute right-[-4vw] top-32 hidden h-[40vh] w-[28vw] rotate-6 border-2 border-ink bg-accent lg:block" />
        <div className="absolute bottom-12 left-1/2 h-20 w-[140vw] -translate-x-1/2 -rotate-3 border-y-2 border-ink bg-white/80" />
      </div>

      <div className="container-aonavi relative pb-16 md:pb-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="inline-flex rotate-[-2deg] border-2 border-ink bg-accent px-4 py-2 font-latin text-base font-extrabold uppercase tracking-[0.1em] text-ink shadow-[5px_5px_0_var(--color-ink)]">
              SOGO-GATA SENBATSU NAVI
            </p>

            <h1 className="mt-7 text-balance font-latin text-[60px] font-extrabold uppercase leading-[0.85] text-ink sm:text-[84px] md:text-[112px] lg:text-[140px]">
              <span className="block">CHOOSE YOUR</span>
              <span className="block text-brand-deep">FUTURE.</span>
            </h1>

            <p className="mt-7 max-w-2xl whitespace-pre-line border-l-8 border-brand bg-white/90 p-6 text-base font-bold leading-loose text-ink shadow-[8px_8px_0_var(--color-ink)]">
              {`総合型選抜・学校推薦型選抜のすべてが、ひとつのナビに。
全国の大学 × 対策塾 × 合格体験記 × 出願ノウハウを横断検索。
あなたの「物語」で挑戦できる進路を、最短ルートで見つけよう。`}
            </p>

            <SearchBox />

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/universities"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-ink bg-ink px-7 py-3.5 text-sm font-black text-white shadow-[6px_6px_0_var(--color-brand)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                大学を探す
                <span className="transition group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/juku"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-7 py-3.5 text-sm font-black text-ink transition hover:bg-accent"
              >
                塾を探す
                <span className="transition group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/diagnosis"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-7 py-3.5 text-sm font-black text-ink transition hover:bg-accent"
              >
                合格力診断（無料）
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-4">
            <div className="relative mx-auto w-full max-w-md rotate-2 border-2 border-ink bg-white p-6 shadow-[10px_10px_0_var(--color-ink)] transition hover:rotate-0">
              <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-deep">
                Stats / 2026
              </p>
              <ul className="mt-4 divide-y-2 divide-ink">
                {[
                  { k: "612", s: "Univ.", l: "掲載大学" },
                  { k: "284", s: "Juku", l: "掲載塾" },
                  { k: "1840", s: "Stories", l: "合格体験記" },
                ].map((s) => (
                  <li key={s.l} className="flex items-baseline justify-between py-3">
                    <span>
                      <span className="font-latin text-4xl font-extrabold leading-none text-ink">
                        {s.k}
                      </span>
                      <span className="ml-2 font-latin text-xs font-extrabold uppercase tracking-[0.12em] text-brand-deep">
                        {s.s}
                      </span>
                    </span>
                    <span className="text-xs font-bold text-ink-soft">{s.l}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute -bottom-5 -left-3 hidden -rotate-6 border-2 border-ink bg-accent px-4 py-3 shadow-[6px_6px_0_var(--color-ink)] sm:block">
              <p className="font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-ink">
                Education × Media
              </p>
              <p className="mt-1 text-xs font-black text-ink">挑戦の入口、ここから。</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-3 text-ink">
          <span className="font-latin text-base font-extrabold tracking-[0.14em]">SCROLL</span>
          <span className="h-1 w-16 bg-ink" />
        </div>
      </div>
    </section>
  );
}

function SearchBox() {
  const tabs = [
    { id: "univ", label: "大学", placeholder: "大学名・学部・キーワードで検索", action: "/universities" },
    { id: "juku", label: "塾", placeholder: "塾名・地域・対策内容で検索", action: "/juku" },
    { id: "column", label: "コラム", placeholder: "志望理由書 / 面接 / 小論 / 探究", action: "/column" },
  ];
  return (
    <div className="mt-8 max-w-2xl">
      <div className="flex flex-wrap gap-1">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            className={`border-2 border-b-0 border-ink px-4 py-2 font-latin text-xs font-extrabold uppercase tracking-[0.12em] ${
              i === 0 ? "bg-ink text-white" : "bg-white text-ink hover:bg-accent"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <form
        action={tabs[0].action}
        className="flex w-full items-stretch border-2 border-ink bg-white shadow-[6px_6px_0_var(--color-ink)]"
      >
        <input
          type="search"
          placeholder={tabs[0].placeholder}
          className="flex-1 bg-transparent px-4 py-3 text-sm font-bold text-ink placeholder:text-ink-mute focus:outline-none"
        />
        <button
          type="submit"
          className="border-l-2 border-ink bg-brand px-6 font-latin text-sm font-extrabold uppercase tracking-[0.1em] text-white transition hover:bg-brand-deep"
        >
          Search →
        </button>
      </form>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        <span className="font-latin text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
          Popular:
        </span>
        {[
          "総合型選抜 評定なし",
          "公募推薦 国公立",
          "志望理由書 添削",
          "面接対策 塾",
          "オンライン",
        ].map((kw) => (
          <Link
            key={kw}
            href={`/universities?q=${encodeURIComponent(kw)}`}
            className="border-2 border-ink bg-white px-2.5 py-1 font-bold text-ink hover:bg-accent"
          >
            #{kw}
          </Link>
        ))}
      </div>
    </div>
  );
}

function NewsTicker() {
  return (
    <section className="border-b-2 border-ink bg-white">
      <div className="container-aonavi flex flex-col items-stretch gap-3 py-4 md:flex-row md:items-center md:gap-6">
        <div className="flex shrink-0 items-center gap-2">
          <span className="border-2 border-ink bg-brand px-3 py-1 font-latin text-xs font-extrabold uppercase tracking-[0.12em] text-white">
            News
          </span>
          <span className="font-latin text-xs font-extrabold uppercase tracking-[0.16em] text-ink-soft">
            受験速報
          </span>
        </div>
        <ul className="flex-1 space-y-1 md:space-y-0">
          {news.map((n) => (
            <li key={n.title} className="flex items-baseline gap-3 text-xs">
              <span className="font-latin font-extrabold text-ink-mute">{n.date}</span>
              <span className="rotate-[-1deg] border border-ink bg-accent px-1.5 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.1em] text-ink">
                {n.tag}
              </span>
              <Link href="/news" className="truncate font-bold text-ink hover:text-brand-deep">
                {n.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/news"
          className="shrink-0 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-brand-deep hover:underline"
        >
          More News →
        </Link>
      </div>
    </section>
  );
}

function PickupSection() {
  return (
    <section className="border-b-2 border-ink bg-white py-20 md:py-28">
      <div className="container-aonavi">
        <SectionHead en="Editor's Pick" jp="今シーズン、編集部が注目する大学。" eyebrow="Pickup" />

        <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
          <span className="font-latin text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
            Quick Find:
          </span>
          {quickFinds.map((q) => (
            <Link
              key={q.href}
              href={q.href}
              className="border-2 border-ink bg-white px-3 py-1.5 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink hover:bg-accent"
            >
              {q.jp}
              <span className="ml-1 text-brand-deep">→</span>
            </Link>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {pickup.map((u, i) => (
            <Link
              key={u.slug}
              href={`/universities/${u.slug}`}
              className={`group flex flex-col border-2 border-ink bg-white p-6 transition hover:-translate-y-1 hover:translate-x-1 ${
                i % 2 === 0
                  ? "shadow-[8px_8px_0_var(--color-ink)] hover:shadow-[6px_6px_0_var(--color-brand)]"
                  : "shadow-[8px_8px_0_var(--color-brand)] hover:shadow-[6px_6px_0_var(--color-ink)]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="rotate-[-2deg] border-2 border-ink bg-accent px-3 py-1 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink">
                  {u.tag}
                </span>
                <span className="font-latin text-xs font-extrabold uppercase tracking-[0.1em] text-brand-deep">
                  Deadline {u.deadline}
                </span>
              </div>
              <p className="mt-6 font-latin text-2xl font-extrabold uppercase tracking-[0.02em] text-ink-soft">
                #{String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-1 text-2xl font-black text-ink md:text-3xl">{u.name}</p>
              <p className="mt-1 text-xs font-bold text-ink-mute">{u.area}</p>
              <p className="mt-5 border-l-4 border-brand pl-4 text-sm font-bold leading-loose text-ink-soft">
                {u.note}
              </p>
              <div className="mt-6 inline-flex items-center gap-1 font-latin text-sm font-extrabold uppercase tracking-[0.1em] text-brand-deep">
                Read more
                <span className="transition group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/universities"
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-7 py-3 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-ink hover:bg-accent"
          >
            すべての大学を見る →
          </Link>
        </div>
      </div>
    </section>
  );
}

function RankingScheduleSection() {
  return (
    <section className="border-b-2 border-ink bg-section-soft py-20 md:py-28">
      <div className="container-aonavi grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHead en="Weekly Ranking" jp="今週の注目ランキング。" eyebrow="Ranking" />
          <ol className="mt-10 divide-y-2 divide-ink border-y-2 border-ink bg-white">
            {ranking.map((r) => (
              <li
                key={r.rank}
                className="grid grid-cols-[80px_1fr_auto] items-center gap-4 px-4 py-4 transition hover:bg-brand-soft"
              >
                <span className="font-latin text-4xl font-extrabold leading-none text-brand-deep">
                  {r.rank}
                </span>
                <div>
                  <p className="text-base font-black text-ink">{r.name}</p>
                  <p className="text-xs font-bold text-ink-soft">{r.note}</p>
                </div>
                <span className="font-latin text-xs font-extrabold uppercase tracking-[0.12em] text-ink-mute">
                  →
                </span>
              </li>
            ))}
          </ol>
          <Link
            href="/ranking"
            className="mt-6 inline-block font-latin text-sm font-extrabold uppercase tracking-[0.14em] text-brand-deep hover:underline"
          >
            View All Ranking →
          </Link>
        </div>

        <div>
          <SectionHead en="Schedule" jp="出願締切スケジュール。" eyebrow="Calendar" />
          <div className="mt-10 border-2 border-ink bg-white shadow-[8px_8px_0_var(--color-ink)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-ink bg-accent text-left">
                  <th className="px-4 py-3 font-latin text-xs font-extrabold uppercase tracking-[0.12em] text-ink">
                    Month
                  </th>
                  <th className="px-4 py-3 font-latin text-xs font-extrabold uppercase tracking-[0.12em] text-ink">
                    Move
                  </th>
                  <th className="px-4 py-3 font-latin text-xs font-extrabold uppercase tracking-[0.12em] text-ink">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-ink">
                {[
                  ["8月", "総合型 出願開始（最速校）", "志望理由書 仕上げ"],
                  ["9月", "出願ピーク・1次選考", "面接・小論直前演習"],
                  ["10月", "公募推薦 出願ピーク", "提出書類の最終確認"],
                  ["11月", "合格発表ラッシュ", "次の一手の判断"],
                  ["12月", "学校推薦型 確定", "共通テスト最終調整"],
                ].map((row) => (
                  <tr key={row[0]}>
                    <td className="px-4 py-3 font-latin text-base font-extrabold text-brand-deep">
                      {row[0]}
                    </td>
                    <td className="px-4 py-3 text-xs font-bold text-ink">{row[1]}</td>
                    <td className="px-4 py-3 text-xs font-bold text-ink-soft">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link
            href="/admission"
            className="mt-6 inline-block font-latin text-sm font-extrabold uppercase tracking-[0.14em] text-brand-deep hover:underline"
          >
            Full Calendar →
          </Link>
        </div>
      </div>
    </section>
  );
}

function JukuSection() {
  return (
    <section className="border-b-2 border-ink bg-white py-20 md:py-28">
      <div className="container-aonavi">
        <div className="border-2 border-ink bg-accent p-8 shadow-[10px_10px_0_var(--color-ink)] md:p-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="inline-flex rotate-[-2deg] border-2 border-ink bg-white px-3 py-1.5 font-latin text-xs font-extrabold uppercase tracking-[0.12em] text-ink">
                Juku Search
              </p>
              <h2 className="mt-6 font-latin text-5xl font-extrabold uppercase leading-[0.9] text-ink md:text-7xl">
                <span className="block">FIND THE</span>
                <span className="block text-brand-deep">RIGHT JUKU.</span>
              </h2>
              <p className="mt-6 max-w-xl border-l-8 border-ink bg-white/90 p-5 text-sm font-bold leading-loose text-ink shadow-[6px_6px_0_var(--color-ink)]">
                志望理由書・小論文・面接・口頭試問。あなたの弱点に最短で効く対策塾だけを比較できます。
              </p>
            </div>
            <div className="lg:col-span-5">
              <Link
                href="/juku"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-ink bg-ink px-7 py-4 text-sm font-black text-white shadow-[6px_6px_0_var(--color-brand)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                塾を一覧で見る
                <span className="transition group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {jukuPicks.map((j, i) => (
              <Link
                key={j.slug}
                href={`/juku/${j.slug}`}
                className="group border-2 border-ink bg-white p-5 transition hover:-translate-y-1 hover:shadow-[8px_8px_0_var(--color-ink)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-latin text-2xl font-extrabold text-brand-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-latin text-xs font-extrabold uppercase tracking-[0.1em] text-ink-soft">
                    ★ {j.rate}
                  </span>
                </div>
                <p className="mt-3 text-base font-black text-ink">{j.name}</p>
                <p className="mt-2 text-xs font-bold leading-loose text-ink-soft">{j.catch}</p>
                <p className="mt-3 font-latin text-[11px] font-extrabold uppercase tracking-[0.1em] text-brand-deep">
                  {j.format}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              { href: "/juku#kanto", label: "Kanto", jp: "関東" },
              { href: "/juku#kinki", label: "Kinki", jp: "近畿" },
              { href: "/juku#online", label: "Online", jp: "オンライン全国" },
              { href: "/juku", label: "All Juku", jp: "塾を見る" },
            ].map((b) => (
              <Link
                key={b.href}
                href={b.href}
                className="border-2 border-ink bg-white px-4 py-3 text-center transition hover:bg-brand hover:text-white"
              >
                <p className="font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-brand-deep group-hover:text-accent">
                  {b.label}
                </p>
                <p className="mt-1 text-xs font-black">{b.jp}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="border-b-2 border-ink bg-section-soft py-20 md:py-28">
      <div className="container-aonavi">
        <div className="flex items-end justify-between gap-4">
          <SectionHead en="Stories" jp="先輩たちの合格体験記。" eyebrow="Experience" />
          <Link
            href="/experience"
            className="hidden font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-brand-deep hover:underline md:inline"
          >
            All Stories →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {experiences.map((e, i) => (
            <Link
              key={e.id}
              href={`/experience/${e.id}`}
              className="group flex h-full flex-col border-2 border-ink bg-white p-6 shadow-[8px_8px_0_var(--color-ink)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              <p className="font-latin text-3xl font-extrabold leading-none text-brand-deep">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-6 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink-soft">
                {e.score}
              </p>
              <p className="mt-2 text-base font-black leading-snug text-ink">「{e.quote}」</p>
              <div className="mt-auto pt-6">
                <p className="text-sm font-extrabold text-ink">{e.univ}</p>
                <p className="text-xs font-bold text-ink-mute">{e.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ColumnSection() {
  return (
    <section className="border-b-2 border-ink bg-white py-20 md:py-28">
      <div className="container-aonavi">
        <div className="flex items-end justify-between gap-4">
          <SectionHead en="Columns" jp="合格に効くノウハウ。" eyebrow="Read" />
          <Link
            href="/column"
            className="hidden font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-brand-deep hover:underline md:inline"
          >
            All Columns →
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "総合型選抜 基礎",
            "志望理由書",
            "小論文",
            "面接",
            "探究活動",
            "学部・学問",
            "親御さま向け",
          ].map((c) => (
            <Link
              key={c}
              href={`/column?cat=${encodeURIComponent(c)}`}
              className="border-2 border-ink bg-white px-3 py-1.5 text-xs font-bold transition hover:bg-brand hover:text-white"
            >
              #{c}
            </Link>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {columnFeatures.map((c, i) => (
            <Link
              key={c.slug}
              href={`/column/${c.slug}`}
              className="group flex gap-5 border-2 border-ink bg-white p-5 transition hover:-translate-y-1 hover:shadow-[8px_8px_0_var(--color-ink)]"
            >
              <div className="flex h-24 w-24 shrink-0 items-center justify-center border-2 border-ink bg-accent">
                <span className="font-latin text-3xl font-extrabold text-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex-1">
                <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-brand-deep">
                  #{c.cat}
                </p>
                <p className="mt-1 text-base font-black leading-snug text-ink">{c.title}</p>
                <p className="mt-3 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink-mute">
                  {c.minutes} min read
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function DiagnosisCTA() {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink py-20 md:py-28">
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-ink" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:48px_48px]" />
        <div className="absolute -left-20 top-12 h-44 w-[120vw] -rotate-6 bg-brand" />
        <div className="absolute right-10 top-10 h-24 w-24 rotate-12 bg-accent" />
      </div>
      <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
        <p className="inline-flex rotate-[-3deg] border-2 border-white bg-accent px-3 py-2 font-latin text-base font-extrabold uppercase tracking-[0.12em] text-ink">
          Diagnosis
        </p>
        <p className="mt-8 font-latin text-2xl font-extrabold uppercase tracking-[0.08em] text-accent md:text-3xl">
          Find Your Match in 3 Min
        </p>
        <h2 className="mt-6 whitespace-pre-line text-balance text-3xl font-black leading-tight text-white md:text-5xl">
          {`あなたの合格力、\n3分で診断してみませんか。`}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm font-bold leading-loose text-white/80 md:text-base">
          評定平均・強み・志望分野から、いま狙える大学・少し頑張れば届く大学をご提案。会員登録で結果も保存できます。
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/diagnosis"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-white bg-white px-8 py-4 text-sm font-black text-ink shadow-[6px_6px_0_var(--color-brand)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            診断を始める（無料）
            <span className="transition group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/universities"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-sm font-black text-white transition hover:bg-white hover:text-ink"
          >
            まず大学を見る
          </Link>
        </div>
      </div>
    </section>
  );
}

function ResourceCTA() {
  return (
    <section className="bg-section-soft border-b-2 border-ink py-20 md:py-28">
      <div className="container-aonavi grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHead en="Resource Request" jp="気になる大学の資料を、まとめて無料で。" eyebrow="Free" />
          <p className="mt-8 max-w-xl border-l-8 border-brand bg-white p-6 text-sm font-bold leading-loose text-ink shadow-[6px_6px_0_var(--color-ink)]">
            1フォームで複数校に資料請求できるから、比較検討がスムーズ。会員登録すると資料履歴やお気に入りも保存できます。
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-2 text-sm font-bold text-ink-soft md:max-w-md">
            {["大学パンフ", "学部ガイド", "過去問題集（一部）", "オープンキャンパス案内"].map(
              (x) => (
                <li key={x} className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-brand" />
                  {x}
                </li>
              )
            )}
          </ul>
        </div>
        <div className="lg:col-span-5">
          <Link
            href="/resource-request"
            className="group inline-flex w-full items-center justify-between gap-2 border-2 border-ink bg-ink px-8 py-6 font-latin text-2xl font-extrabold uppercase tracking-[0.06em] text-white shadow-[8px_8px_0_var(--color-brand)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            <span>Request Free</span>
            <span className="transition group-hover:translate-x-1">→</span>
          </Link>
          <p className="mt-4 text-center text-xs font-bold text-ink-mute">
            ※ 送付は各大学から1〜2週間で順次お届け
          </p>
        </div>
      </div>
    </section>
  );
}
