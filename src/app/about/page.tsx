import Link from "next/link";
import { PageHero } from "@/components/SectionHead";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        en="ABOUT KYUTE"
        jp="運営会社について。"
        lead="AOナビは、KYUTE合同会社が運営する総合型選抜（旧AO入試）特化の進路ポータルです。"
      />

      <section className="bg-section-soft py-14 md:py-20">
        <div className="container-aonavi">
          <section className="border-2 border-ink bg-white p-6 shadow-[8px_8px_0_var(--color-ink)] md:p-10">
            <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
              Mission
            </p>
            <h2 className="mt-2 text-2xl font-black text-ink md:text-3xl">KYUTE合同会社</h2>
            <p className="mt-4 border-l-8 border-brand bg-white pl-6 text-sm font-bold leading-loose text-ink-soft md:text-base">
              KYUTE は、総合型選抜メディア「AOナビ」を企画・開発・運営する会社です。全国の大学・対策塾とタッグを組み、高校生が「自分に合う合格戦略」を最短ルートで見つけられるサービスを目指しています。
            </p>

            <dl className="mt-10 divide-y-2 divide-ink border-y-2 border-ink">
              {[
                ["会社名", "KYUTE合同会社（KYUTE LLC）"],
                ["事業内容", "教育メディア運営 / 個別指導塾 / 教育AI開発"],
                ["所在地", "（記載予定）"],
                ["代表者", "（記載予定）"],
                ["設立", "2026年1月"],
                ["お問い合わせ", "contact@kyute.jp"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="grid gap-2 py-5 transition hover:bg-brand-soft sm:grid-cols-[180px_1fr] sm:gap-8 sm:px-4"
                >
                  <dt className="font-latin text-base font-extrabold uppercase tracking-[0.1em] text-brand-deep">
                    {k}
                  </dt>
                  <dd className="text-sm font-bold text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section
            id="partner"
            className="mt-10 border-2 border-ink bg-ink p-6 text-white shadow-[10px_10px_0_var(--color-brand)] md:p-12"
          >
            <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-accent">
              For Partners
            </p>
            <h2 className="mt-3 text-2xl font-black md:text-4xl">大学・塾の掲載をご検討の方へ。</h2>
            <p className="mt-4 max-w-xl text-sm font-bold leading-loose text-white/80">
              総合型選抜・公募推薦の高校生・保護者にリーチしたい大学・塾の皆さま向けに、掲載プランや広告メニューをご用意しています。
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { t: "大学掲載プラン", d: "学部別ページ・資料請求リード型" },
                { t: "塾掲載プラン", d: "対策目的別ランキング・口コミ・体験申込" },
                { t: "記事タイアップ", d: "編集部によるコラム制作・インタビュー" },
              ].map((p, i) => (
                <div
                  key={p.t}
                  className="border-2 border-white bg-white/5 p-5"
                >
                  <p className="font-latin text-2xl font-extrabold leading-none text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-base font-black">{p.t}</p>
                  <p className="mt-2 text-xs font-bold leading-relaxed text-white/70">{p.d}</p>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-white bg-accent px-7 py-3 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-ink shadow-[5px_5px_0_var(--color-brand)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              掲載のお問い合わせ →
            </Link>
          </section>
        </div>
      </section>
    </>
  );
}
