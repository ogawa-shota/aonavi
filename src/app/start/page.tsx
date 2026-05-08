import Link from "next/link";
import { PageHero } from "@/components/SectionHead";

const what = [
  {
    n: "01",
    t: "学力試験の点数だけでは測られない",
    d: "志望理由書・面接・小論文・プレゼンなど、書類と実技で総合的に評価する入試方式です。",
  },
  {
    n: "02",
    t: "9〜11月に出願がピーク",
    d: "一般選抜の前に合否が決まる「年内入試」。合格すれば、その先の数ヶ月を有効に使えます。",
  },
  {
    n: "03",
    t: "評定不問の大学も多数",
    d: "実績や意欲を重視する選考が増えており、評定平均に自信がない人にもチャンスがあります。",
  },
];

const journey = [
  {
    n: "01",
    en: "Step 1 · Search",
    t: "探す",
    d: "全国の大学・対策塾を、エリア・学問・入試方式・評定で絞り込み。条件に合う候補をリストアップ。",
    actions: [
      { href: "/universities", label: "大学を探す" },
      { href: "/juku", label: "塾を探す" },
    ],
  },
  {
    n: "02",
    en: "Step 2 · Learn",
    t: "知る",
    d: "大学詳細・コラム・過去問で、合格までの道筋を理解。志望理由書のヒントもここで得る。",
    actions: [
      { href: "/column", label: "コラム" },
      { href: "/pastexam", label: "過去問" },
    ],
  },
  {
    n: "03",
    en: "Step 3 · Apply",
    t: "挑戦する",
    d: "資料請求・無料体験・合格力診断で具体行動へ。気になる大学を比較しながら出願を準備。",
    actions: [
      { href: "/diagnosis", label: "合格力診断" },
      { href: "/resource-request", label: "資料請求（無料）" },
    ],
  },
];

const faqs = [
  {
    q: "AOナビの利用は無料ですか？",
    a: "完全に無料です。合格力診断・資料請求・コラム閲覧・体験記の閲覧まで、すべて高校生・保護者の皆さまへ無償で提供しています。",
  },
  {
    q: "高1・高2でも使えますか？",
    a: "むしろ早い段階の利用を推奨しています。総合型選抜は探究活動・志望理由書の準備が早いほど有利になるため、高1のうちから情報収集を始める受験生が増えています。",
  },
  {
    q: "評定平均が低くても受かりますか？",
    a: "評定不問の総合型選抜を実施する大学は年々増えています。AOナビの『評定平均から探す』フィルタで、自分の評定でも出願可能な大学を絞り込めます。",
  },
  {
    q: "一般選抜と並行できますか？",
    a: "可能です。総合型・公募推薦は出願が早いため、結果に応じて一般選抜の戦略を立てられるメリットがあります。専願制の入試は要注意です。",
  },
  {
    q: "塾選びで失敗しないコツは？",
    a: "「合格実績」「志望理由書の添削回数」「面接練習の回数」を必ず確認しましょう。AOナビの塾比較ページで一括比較できます。",
  },
];

const audience = [
  {
    en: "For Students",
    jp: "高校生・浪人生",
    d: "自分に合う大学・対策塾を見つけて、出願までを伴走するツールが揃っています。",
    cta: { href: "/diagnosis", label: "合格力診断から始める" },
  },
  {
    en: "For Parents",
    jp: "保護者の方",
    d: "総合型選抜の制度・スケジュール・費用感をまとめてご確認いただけます。",
    cta: { href: "/column?cat=親御さま向け", label: "保護者向けコラム" },
  },
  {
    en: "For Teachers",
    jp: "高校教員・進路指導",
    d: "進路指導用の最新入試情報・統計・資料請求ガイドをご覧いただけます。",
    cta: { href: "/contact", label: "お問い合わせ" },
  },
];

export default function StartPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Started"
        en="START HERE"
        jp="はじめての方へ。"
        lead="AOナビは、総合型選抜（旧AO入試）に挑戦する高校生・保護者・先生のための進路ポータル。3つのステップで、自分に合う進路と出会えます。"
      />

      <section className="border-b-2 border-ink bg-white py-14 md:py-20">
        <div className="container-aonavi">
          <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
            What is It?
          </p>
          <h2 className="mt-1 font-latin text-3xl font-extrabold uppercase tracking-[0.02em] text-ink md:text-4xl">
            総合型選抜とは？
          </h2>
          <p className="mt-4 max-w-2xl text-sm font-bold leading-loose text-ink-soft">
            旧AO入試の進化版。「点数」より「あなたという物語」を見る入試です。
          </p>

          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {what.map((w) => (
              <li
                key={w.n}
                className="border-2 border-ink bg-white p-6 shadow-[6px_6px_0_var(--color-ink)]"
              >
                <p className="font-latin text-4xl font-extrabold leading-none text-brand-deep">
                  {w.n}
                </p>
                <p className="mt-4 text-base font-black text-ink">{w.t}</p>
                <p className="mt-2 text-xs font-bold leading-relaxed text-ink-soft">{w.d}</p>
              </li>
            ))}
          </ol>

          <Link
            href="/column?cat=総合型選抜 基礎"
            className="mt-6 inline-flex items-center gap-2 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-brand-deep hover:underline"
          >
            総合型選抜の基礎コラムを読む →
          </Link>
        </div>
      </section>

      <section className="border-b-2 border-ink bg-section-soft py-14 md:py-20">
        <div className="container-aonavi">
          <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
            How to Use AOナビ
          </p>
          <h2 className="mt-1 font-latin text-3xl font-extrabold uppercase tracking-[0.02em] text-ink md:text-4xl">
            AOナビの使い方｜3ステップ
          </h2>

          <ol className="mt-8 space-y-5">
            {journey.map((s) => (
              <li
                key={s.n}
                className="grid gap-5 border-2 border-ink bg-white p-6 shadow-[6px_6px_0_var(--color-ink)] md:grid-cols-[100px_1fr] md:p-8"
              >
                <div>
                  <p className="font-latin text-6xl font-extrabold leading-none text-brand-deep">
                    {s.n}
                  </p>
                  <p className="mt-2 font-latin text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
                    {s.en}
                  </p>
                </div>
                <div className="min-w-0">
                  <p className="text-2xl font-black text-ink md:text-3xl">{s.t}</p>
                  <p className="mt-2 text-sm font-bold leading-loose text-ink-soft">{s.d}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.actions.map((a, i) => (
                      <Link
                        key={a.href}
                        href={a.href}
                        className={`inline-flex items-center gap-1 rounded-full border-2 border-ink px-5 py-2 font-latin text-xs font-extrabold uppercase tracking-[0.14em] transition ${
                          i === 0
                            ? "bg-ink text-white shadow-[3px_3px_0_var(--color-brand)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
                            : "bg-white text-ink hover:bg-accent"
                        }`}
                      >
                        {a.label} →
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b-2 border-ink bg-white py-14 md:py-20">
        <div className="container-aonavi">
          <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
            Audience
          </p>
          <h2 className="mt-1 font-latin text-3xl font-extrabold uppercase tracking-[0.02em] text-ink md:text-4xl">
            誰のためのサイト？
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {audience.map((a, i) => (
              <div
                key={a.en}
                className={`flex h-full flex-col border-2 border-ink p-6 ${
                  i === 0
                    ? "bg-accent shadow-[6px_6px_0_var(--color-ink)]"
                    : "bg-white shadow-[6px_6px_0_var(--color-ink)]"
                }`}
              >
                <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
                  {a.en}
                </p>
                <p className="mt-2 text-xl font-black text-ink">{a.jp}</p>
                <p className="mt-3 flex-1 text-sm font-bold leading-loose text-ink-soft">{a.d}</p>
                <Link
                  href={a.cta.href}
                  className="mt-5 inline-flex items-center gap-1 self-start rounded-full border-2 border-ink bg-white px-4 py-2 font-latin text-xs font-extrabold uppercase tracking-[0.12em] text-ink hover:bg-ink hover:text-white"
                >
                  {a.cta.label} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-2 border-ink bg-section-soft py-14 md:py-20">
        <div className="container-aonavi max-w-3xl">
          <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
            FAQ
          </p>
          <h2 className="mt-1 font-latin text-3xl font-extrabold uppercase tracking-[0.02em] text-ink md:text-4xl">
            よくあるご質問
          </h2>

          <ul className="mt-8 divide-y-2 divide-ink border-2 border-ink bg-white shadow-[6px_6px_0_var(--color-ink)]">
            {faqs.map((f, i) => (
              <li key={i}>
                <details className="group">
                  <summary className="flex cursor-pointer items-center gap-3 px-5 py-4 hover:bg-brand-soft">
                    <span className="font-latin text-2xl font-extrabold leading-none text-brand-deep">
                      Q
                    </span>
                    <span className="flex-1 text-sm font-extrabold text-ink">{f.q}</span>
                    <span className="font-latin text-lg font-extrabold text-ink transition group-open:rotate-45">
                      ＋
                    </span>
                  </summary>
                  <div className="border-t-2 border-line-soft bg-bg px-5 py-4">
                    <p className="text-sm font-bold leading-loose text-ink-soft">
                      <span className="mr-2 font-latin text-xl font-extrabold text-brand-deep">
                        A
                      </span>
                      {f.a}
                    </p>
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-aonavi">
          <div className="border-2 border-ink bg-ink p-8 text-white shadow-[10px_10px_0_var(--color-brand)] md:p-12">
            <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-accent">
              Ready?
            </p>
            <h2 className="mt-3 font-latin text-3xl font-extrabold uppercase tracking-[0.02em] text-white md:text-5xl">
              さあ、進路探しを始めよう。
            </h2>
            <p className="mt-3 max-w-xl text-sm font-bold leading-loose text-white/80">
              迷ったら、まず3分の合格力診断から。あなたに合う大学・塾・対策法をご提案します。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/diagnosis"
                className="rounded-full border-2 border-white bg-accent px-7 py-3 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-ink shadow-[5px_5px_0_var(--color-brand)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                合格力診断（無料）→
              </Link>
              <Link
                href="/universities"
                className="rounded-full border-2 border-white px-7 py-3 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-white hover:bg-white hover:text-ink"
              >
                大学を探す
              </Link>
              <Link
                href="/juku"
                className="rounded-full border-2 border-white px-7 py-3 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-white hover:bg-white hover:text-ink"
              >
                塾を探す
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
