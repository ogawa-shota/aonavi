import Link from "next/link";
import { SectionHead } from "@/components/SectionHead";
import { TabbedTestimonials } from "@/components/TabbedTestimonials";
import { popularKeywords } from "@/lib/content/taxonomies";
import { columns } from "@/lib/content/columns";
import { newsItems } from "@/lib/content/news";
import { homeRanking } from "@/lib/content/ranking";

// ─────────────────────────────────────────────────────────────────────────────
// ページ内専用の表示メタデータ（データ層に置くほどではない UI 文言）
// ─────────────────────────────────────────────────────────────────────────────

const steps = [
  { n: "01", t: "探す", en: "Search", d: "全国の大学・塾を、エリア・学問・入試方式で絞り込む。" },
  { n: "02", t: "知る", en: "Learn", d: "合格体験記・コラム・過去問で、合格までの道筋を理解する。" },
  { n: "03", t: "挑戦する", en: "Apply", d: "資料請求・無料体験・診断で、自分に合う進路を選び取る。" },
];

const discoverPaths = [
  {
    href: "/universities",
    en: "University",
    jp: "大学を探す",
    d: "全国 612 大学から条件で絞り込み。学部 × 入試方式マトリクスで一目瞭然。",
    tag: "612 Univ.",
  },
  {
    href: "/juku",
    en: "Juku",
    jp: "塾を探す",
    d: "対策目的（志望理由書・面接・小論）から、最短で効く塾を比較。",
    tag: "284 Juku",
  },
  {
    href: "/diagnosis",
    en: "Diagnosis",
    jp: "合格力診断",
    d: "10問3分。あなたの強みから、いま狙える大学・伸ばせば届く大学を提案。",
    tag: "Free · 3 min",
    highlight: true,
  },
  {
    href: "/column",
    en: "Field & Career",
    jp: "学問・職業から探す",
    d: "16 学問分野・150 職種から、なりたい未来に近づく学部を発見。",
    tag: "16 Fields",
  },
];

const taxonomies = [
  { href: "/universities#kanto", count: 47, unit: "Pref.", label: "都道府県から", en: "Area" },
  { href: "/column", count: 16, unit: "Fields", label: "学問分野から", en: "Field" },
  { href: "/universities", count: 150, unit: "Jobs", label: "職業から", en: "Job" },
  { href: "/universities", count: 6, unit: "Range", label: "偏差値・評定から", en: "Score" },
];

const campaigns = [
  {
    badge: "資料請求 特典",
    en: "Free Gift Campaign",
    title: "5校以上まとめて請求で\nデジタルギフト 2,000円分プレゼント",
    note: "対象期間：2026/05/01〜06/30 ／ 高校生・浪人生限定",
    href: "/resource-request",
    cta: "資料請求する",
  },
  {
    badge: "診断 限定",
    en: "Diagnosis Bonus",
    title: "合格力診断 完了で\n志望理由書テンプレート集をプレゼント",
    note: "会員登録（無料）後に配信 ／ 全国どこでも受診可能",
    href: "/diagnosis",
    cta: "診断を受ける",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// content/* から派生させたデータ（トップ表示用に整形）
// ─────────────────────────────────────────────────────────────────────────────

const news = newsItems.slice(0, 3).map((n) => ({
  date: n.shortDate,
  tag: n.tag,
  title: n.title,
}));

const ranking = homeRanking;

const columnFeatures = columns.slice(0, 4).map((c) => ({
  slug: c.slug,
  cat: c.categoryEn,
  title: c.title,
  minutes: c.minutes,
}));

// トップに出すオープンキャンパス。/event の events から抜粋しつつ表示用に整形。
const events = [
  { date: "5/18", weekday: "Sat", style: "対面", univ: "サンプル大学A", title: "学部別オープンキャンパス（来校型）", area: "東京" },
  { date: "5/25", weekday: "Sat", style: "オンライン", univ: "AOナビ主催", title: "総合型選抜 合同説明会｜参加大学50校", area: "全国" },
  { date: "6/02", weekday: "Sun", style: "対面", univ: "サンプル大学C", title: "学部別 模擬授業デー", area: "愛知" },
  { date: "6/08", weekday: "Sat", style: "ハイブリッド", univ: "サンプル大学F", title: "総合型選抜 出願ガイダンス", area: "京都" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <NewsTicker />
      <CampaignBanners />
      <DiscoverGrid />
      <TaxonomyTiles />
      <EventsAndScheduleSection />
      <PickupAndRankingSection />
      <TestimonialsSection />
      <ColumnSection />
      <ConnectSection />
      <ResourceCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="bg-aomaru relative overflow-hidden border-b-2 border-ink pt-24 md:pt-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-2 top-20 hidden h-[40vh] w-[12vw] -rotate-12 bg-brand lg:block" />
        <div className="absolute right-[-3vw] top-20 hidden h-[28vh] w-[24vw] rotate-6 border-2 border-ink bg-accent lg:block" />
      </div>

      <div className="container-aonavi relative pb-12 md:pb-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="inline-flex rotate-[-2deg] border-2 border-ink bg-accent px-4 py-2 font-latin text-base font-extrabold uppercase tracking-[0.1em] text-ink shadow-[5px_5px_0_var(--color-ink)]">
              Sogo-gata Senbatsu Navi
            </p>

            <h1 className="mt-6 text-balance font-latin text-[52px] font-extrabold uppercase leading-[0.86] text-ink sm:text-[72px] md:text-[100px] lg:text-[124px]">
              <span className="block">CHOOSE YOUR</span>
              <span className="block text-brand-deep">FUTURE.</span>
            </h1>

            <p className="mt-5 max-w-xl border-l-8 border-brand bg-white/90 p-5 text-base font-bold leading-loose text-ink shadow-[6px_6px_0_var(--color-ink)]">
              総合型選抜・学校推薦型選抜のすべてが、ひとつのナビに。あなたの「物語」で挑戦できる進路を、最短ルートで見つけよう。
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/universities"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-ink bg-ink px-6 py-3.5 font-latin text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-[6px_6px_0_var(--color-brand)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                大学を探す
                <span className="transition group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/juku"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-6 py-3.5 font-latin text-sm font-extrabold uppercase tracking-[0.12em] text-ink hover:bg-accent"
              >
                塾を探す
              </Link>
              <Link
                href="/start"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink-mute bg-white px-5 py-3.5 font-latin text-xs font-extrabold uppercase tracking-[0.12em] text-ink-soft hover:border-ink hover:text-ink"
              >
                初めての方へ →
              </Link>
            </div>

            <SearchTabs />
          </div>

          <div className="lg:col-span-5">
            <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-deep">
              How It Works · 3 Steps
            </p>
            <ol className="mt-3 grid gap-3">
              {steps.map((s) => (
                <li
                  key={s.n}
                  className="flex items-start gap-4 border-2 border-ink bg-white p-4 shadow-[5px_5px_0_var(--color-ink)]"
                >
                  <span className="font-latin text-4xl font-extrabold leading-none text-brand-deep">
                    {s.n}
                  </span>
                  <div className="min-w-0">
                    <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
                      {s.en}
                    </p>
                    <p className="text-base font-black text-ink">{s.t}</p>
                    <p className="mt-1 text-xs font-bold leading-relaxed text-ink-soft">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function SearchTabs() {
  return (
    <div className="mt-6 max-w-xl">
      <div className="flex flex-wrap gap-1">
        {[
          { id: "univ", label: "大学" },
          { id: "juku", label: "塾" },
          { id: "column", label: "コラム" },
        ].map((t, i) => (
          <button
            key={t.id}
            type="button"
            className={`border-2 border-b-0 border-ink px-4 py-1.5 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] ${
              i === 0 ? "bg-ink text-white" : "bg-white text-ink hover:bg-accent"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <form
        action="/universities"
        className="flex w-full items-stretch border-2 border-ink bg-white shadow-[5px_5px_0_var(--color-ink)]"
      >
        <input
          type="search"
          placeholder="大学名・学部・キーワードで検索"
          className="flex-1 bg-transparent px-3 py-2.5 text-sm font-bold text-ink placeholder:text-ink-mute focus:outline-none"
        />
        <button
          type="submit"
          className="border-l-2 border-ink bg-brand px-5 font-latin text-sm font-extrabold uppercase tracking-[0.1em] text-white transition hover:bg-brand-deep"
        >
          Search
        </button>
      </form>
      <div className="mt-3 flex flex-wrap items-center gap-1.5 text-[11px]">
        <span className="font-latin text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
          Popular:
        </span>
        {popularKeywords.map((kw) => (
          <Link
            key={kw}
            href={`/universities?q=${encodeURIComponent(kw)}`}
            className="border border-ink bg-white px-2 py-0.5 font-bold text-ink hover:bg-accent"
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
          More →
        </Link>
      </div>
    </section>
  );
}

function CampaignBanners() {
  return (
    <section className="border-b-2 border-ink bg-section-soft py-10 md:py-14">
      <div className="container-aonavi">
        <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
          Now On · 期間限定キャンペーン
        </p>
        <div className="mt-4 grid gap-5 md:grid-cols-2">
          {campaigns.map((c, i) => (
            <Link
              key={c.badge}
              href={c.href}
              className={`group flex flex-col border-2 border-ink p-6 transition hover:translate-x-1 hover:translate-y-1 ${
                i === 0
                  ? "bg-accent shadow-[8px_8px_0_var(--color-ink)] hover:shadow-[4px_4px_0_var(--color-ink)]"
                  : "bg-ink text-white shadow-[8px_8px_0_var(--color-brand)] hover:shadow-[4px_4px_0_var(--color-brand)]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`rotate-[-2deg] border-2 border-ink px-3 py-1 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] ${
                    i === 0 ? "bg-white text-ink" : "bg-accent text-ink"
                  }`}
                >
                  {c.badge}
                </span>
                <span
                  className={`font-latin text-xs font-extrabold uppercase tracking-[0.14em] ${
                    i === 0 ? "text-ink" : "text-accent"
                  }`}
                >
                  {c.en}
                </span>
              </div>
              <p
                className={`mt-5 whitespace-pre-line text-2xl font-black leading-tight md:text-3xl ${
                  i === 0 ? "text-ink" : "text-white"
                }`}
              >
                {c.title}
              </p>
              <p
                className={`mt-3 text-xs font-bold ${i === 0 ? "text-ink-soft" : "text-white/75"}`}
              >
                {c.note}
              </p>
              <p
                className={`mt-5 inline-flex items-center gap-1 font-latin text-sm font-extrabold uppercase tracking-[0.12em] ${
                  i === 0 ? "text-brand-deep" : "text-accent"
                }`}
              >
                {c.cta}
                <span className="transition group-hover:translate-x-1">→</span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function DiscoverGrid() {
  return (
    <section className="border-b-2 border-ink bg-white py-16 md:py-24">
      <div className="container-aonavi">
        <SectionHead en="Find Your Path" jp="自分に合う進路を、4つの入口から。" eyebrow="Discover" />
        <p className="mt-4 max-w-2xl text-sm font-bold text-ink-soft">
          条件で絞る・診断で見つける・分野や職業から逆算する。あなたの好きな入口で、最短で進路を発見できます。
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {discoverPaths.map((p, i) => (
            <Link
              key={p.href}
              href={p.href}
              className={`group flex flex-col border-2 border-ink p-6 transition hover:-translate-y-1 ${
                p.highlight
                  ? "bg-ink text-white shadow-[8px_8px_0_var(--color-brand)]"
                  : "bg-white text-ink shadow-[6px_6px_0_var(--color-ink)] hover:shadow-[6px_6px_0_var(--color-brand)]"
              }`}
            >
              <p
                className={`font-latin text-3xl font-extrabold leading-none ${
                  p.highlight ? "text-accent" : "text-brand-deep"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </p>
              <p
                className={`mt-5 font-latin text-xs font-extrabold uppercase tracking-[0.14em] ${
                  p.highlight ? "text-accent" : "text-brand-deep"
                }`}
              >
                {p.en}
              </p>
              <p className={`mt-1 text-xl font-black ${p.highlight ? "text-white" : "text-ink"}`}>
                {p.jp}
              </p>
              <p
                className={`mt-3 flex-1 text-xs font-bold leading-loose ${
                  p.highlight ? "text-white/80" : "text-ink-soft"
                }`}
              >
                {p.d}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span
                  className={`border-2 px-2 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.14em] ${
                    p.highlight
                      ? "border-accent text-accent"
                      : "border-ink bg-accent text-ink"
                  }`}
                >
                  {p.tag}
                </span>
                <span
                  className={`font-latin text-xs font-extrabold uppercase tracking-[0.14em] ${
                    p.highlight ? "text-accent" : "text-brand-deep"
                  }`}
                >
                  Open →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function TaxonomyTiles() {
  return (
    <section className="border-b-2 border-ink bg-section-soft py-16 md:py-24">
      <div className="container-aonavi">
        <SectionHead en="By Taxonomy" jp="タクソノミーで一発検索。" eyebrow="Browse" />
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {taxonomies.map((t) => (
            <Link
              key={t.label}
              href={t.href}
              className="group flex flex-col border-2 border-ink bg-white p-6 shadow-[6px_6px_0_var(--color-ink)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_var(--color-brand)]"
            >
              <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
                {t.en}
              </p>
              <p className="mt-3 font-latin text-6xl font-extrabold leading-none text-ink">
                {t.count}
              </p>
              <p className="mt-2 font-latin text-xs font-extrabold uppercase tracking-[0.12em] text-ink-mute">
                {t.unit}
              </p>
              <p className="mt-4 text-base font-black text-ink">{t.label}</p>
              <p className="mt-3 inline-flex items-center gap-1 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-brand-deep">
                Browse
                <span className="transition group-hover:translate-x-1">→</span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function EventsAndScheduleSection() {
  return (
    <section className="border-b-2 border-ink bg-white py-16 md:py-24">
      <div className="container-aonavi grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHead en="Open Campus" jp="オープンキャンパス・説明会。" eyebrow="Events" />
          <ul className="mt-8 divide-y-2 divide-ink border-2 border-ink bg-white shadow-[6px_6px_0_var(--color-ink)]">
            {events.map((e) => (
              <li
                key={`${e.date}-${e.title}`}
                className="grid grid-cols-[80px_1fr_auto] items-center gap-3 px-4 py-3 transition hover:bg-brand-soft md:gap-4 md:px-5"
              >
                <div className="border-2 border-ink bg-accent px-2 py-1.5 text-center">
                  <p className="font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink">
                    {e.weekday}
                  </p>
                  <p className="font-latin text-xl font-extrabold leading-none text-ink">
                    {e.date}
                  </p>
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="border border-ink bg-white px-1.5 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink">
                      {e.style}
                    </span>
                    <span className="border border-ink bg-white px-1.5 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink-soft">
                      {e.area}
                    </span>
                  </div>
                  <p className="mt-1 truncate text-sm font-black text-ink">{e.title}</p>
                  <p className="text-[11px] font-bold text-ink-mute">{e.univ}</p>
                </div>
                <span className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
                  →
                </span>
              </li>
            ))}
          </ul>
          <Link
            href="/event"
            className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-5 py-2 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-ink hover:bg-accent"
          >
            すべてのイベントを見る →
          </Link>
        </div>

        <div>
          <SectionHead en="Schedule" jp="出願締切スケジュール 2026。" eyebrow="Calendar" />
          <div className="mt-8 border-2 border-ink bg-white shadow-[6px_6px_0_var(--color-ink)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-ink bg-accent text-left">
                  {["月", "主な動き", "やること"].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-2.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink"
                    >
                      {h}
                    </th>
                  ))}
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
            className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-5 py-2 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-ink hover:bg-accent"
          >
            完全なカレンダーを見る →
          </Link>
        </div>
      </div>
    </section>
  );
}

function PickupAndRankingSection() {
  return (
    <section className="border-b-2 border-ink bg-section-soft py-16 md:py-24">
      <div className="container-aonavi grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHead en="Editor's Pick" jp="編集部が注目する大学。" eyebrow="Pickup" />
          <ul className="mt-8 grid gap-4">
            {[
              { slug: "sample-univ-1", name: "サンプル大学A", area: "東京都・私立", tag: "総合型選抜", deadline: "2026/09/15", note: "志望理由書 1,200字＋プレゼン" },
              { slug: "sample-univ-3", name: "サンプル大学C", area: "愛知県・私立", tag: "総合型選抜", deadline: "2026/10/05", note: "活動報告書＋ディスカッション" },
              { slug: "sample-univ-4", name: "サンプル国立大学D", area: "福岡県・国立", tag: "学校推薦型", deadline: "2026/11/01", note: "共通テスト併用／評定 4.0" },
            ].map((u, i) => (
              <li key={u.slug}>
                <Link
                  href={`/universities/${u.slug}`}
                  className="group flex border-2 border-ink bg-white p-5 shadow-[5px_5px_0_var(--color-ink)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                  <span className="font-latin text-4xl font-extrabold leading-none text-brand-deep mr-5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="border-2 border-ink bg-accent px-2 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink">
                        {u.tag}
                      </span>
                      <span className="font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink-mute">
                        Deadline {u.deadline}
                      </span>
                    </div>
                    <p className="mt-2 text-lg font-black text-ink md:text-xl">{u.name}</p>
                    <p className="text-xs font-bold text-ink-mute">{u.area}</p>
                    <p className="mt-2 text-xs font-bold leading-relaxed text-ink-soft">{u.note}</p>
                  </div>
                  <span className="ml-3 self-center font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-brand-deep">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/universities"
            className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-5 py-2 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-ink hover:bg-accent"
          >
            すべての大学を見る →
          </Link>
        </div>

        <div>
          <SectionHead en="Weekly Ranking" jp="今週の注目ランキング。" eyebrow="Ranking" />
          <ol className="mt-8 divide-y-2 divide-ink border-2 border-ink bg-white shadow-[6px_6px_0_var(--color-ink)]">
            {ranking.map((r) => (
              <li
                key={r.rank}
                className="grid grid-cols-[60px_1fr_auto] items-center gap-3 px-4 py-3 transition hover:bg-brand-soft"
              >
                <span className="font-latin text-3xl font-extrabold leading-none text-brand-deep">
                  {r.rank}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-black text-ink">{r.name}</p>
                  <p className="text-[11px] font-bold text-ink-soft">{r.note}</p>
                </div>
                <span className="border-2 border-ink bg-accent px-2 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink">
                  {r.trend}
                </span>
              </li>
            ))}
          </ol>
          <Link
            href="/ranking"
            className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-5 py-2 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-ink hover:bg-accent"
          >
            ランキング一覧 →
          </Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="border-b-2 border-ink bg-white py-16 md:py-24">
      <div className="container-aonavi">
        <div className="flex items-end justify-between gap-4">
          <SectionHead en="Stories" jp="先輩・在学生のリアルな声。" eyebrow="Voices" />
          <Link
            href="/experience"
            className="hidden font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-brand-deep hover:underline md:inline"
          >
            All Stories →
          </Link>
        </div>
        <p className="mt-4 max-w-2xl text-sm font-bold text-ink-soft">
          合格直後の体験談、入学後の生のリアル。タブを切り替えて自分に近い声を探せます。
        </p>
        <div className="mt-8">
          <TabbedTestimonials />
        </div>
      </div>
    </section>
  );
}

function ColumnSection() {
  return (
    <section className="border-b-2 border-ink bg-section-soft py-16 md:py-24">
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
        <div className="mt-6 flex flex-wrap gap-2">
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
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {columnFeatures.map((c, i) => (
            <Link
              key={c.slug}
              href={`/column/${c.slug}`}
              className="group flex gap-5 border-2 border-ink bg-white p-5 shadow-[5px_5px_0_var(--color-ink)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              <div className="flex h-20 w-20 shrink-0 items-center justify-center border-2 border-ink bg-accent">
                <span className="font-latin text-2xl font-extrabold text-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex-1">
                <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-brand-deep">
                  #{c.cat}
                </p>
                <p className="mt-1 text-base font-black leading-snug text-ink">{c.title}</p>
                <p className="mt-2 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink-mute">
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

function ConnectSection() {
  return (
    <section className="border-b-2 border-ink bg-white py-16 md:py-24">
      <div className="container-aonavi">
        <SectionHead en="Stay Connected" jp="LINEで進路情報をいち早く。" eyebrow="Connect" />
        <p className="mt-4 max-w-2xl text-sm font-bold text-ink-soft">
          出願締切リマインド・新着大学情報・限定コラムを、LINEとSNSでお届け。
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { en: "LINE Official", jp: "LINE友だち追加", d: "出願1週間前にリマインド配信", cta: "友だち追加", emoji: "💬" },
            { en: "X (Twitter)", jp: "Xをフォロー", d: "速報・受験ニュースを毎日配信", cta: "フォロー", emoji: "𝕏" },
            { en: "Instagram", jp: "Instagram", d: "合格者インタビュー・キャンパス写真", cta: "フォロー", emoji: "📷" },
          ].map((s, i) => (
            <Link
              key={s.en}
              href="#"
              className={`group flex flex-col border-2 border-ink p-6 transition hover:-translate-y-1 ${
                i === 0
                  ? "bg-accent text-ink shadow-[6px_6px_0_var(--color-ink)]"
                  : "bg-white text-ink shadow-[6px_6px_0_var(--color-ink)] hover:shadow-[6px_6px_0_var(--color-brand)]"
              }`}
            >
              <span className="font-latin text-3xl font-extrabold text-ink">{s.emoji}</span>
              <p className="mt-4 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-brand-deep">
                {s.en}
              </p>
              <p className="mt-1 text-base font-black text-ink">{s.jp}</p>
              <p className="mt-2 text-xs font-bold text-ink-soft">{s.d}</p>
              <p className="mt-auto pt-5 inline-flex items-center gap-1 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-brand-deep">
                {s.cta} →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResourceCTA() {
  return (
    <section className="bg-section-soft border-b-2 border-ink py-16 md:py-20">
      <div className="container-aonavi grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHead en="Resource Request" jp="気になる大学の資料を、まとめて無料で。" eyebrow="Free" />
          <p className="mt-6 max-w-xl border-l-8 border-brand bg-white p-5 text-sm font-bold leading-loose text-ink shadow-[5px_5px_0_var(--color-ink)]">
            1フォームで複数校に資料請求できるから、比較検討がスムーズ。会員登録すると履歴やお気に入りも保存できます。
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-2 text-sm font-bold text-ink-soft md:max-w-md">
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
          <p className="mt-3 text-center text-xs font-bold text-ink-mute">
            ※ 5校以上のまとめ請求でデジタルギフト 2,000円分プレゼント中
          </p>
        </div>
      </div>
    </section>
  );
}
