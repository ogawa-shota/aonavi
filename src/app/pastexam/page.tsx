import Link from "next/link";
import { PageHero } from "@/components/SectionHead";

const types = [
  { id: "essay", label: "志望理由書", en: "Essay", count: 412 },
  { id: "shoron", label: "小論文", en: "Shoron", count: 287 },
  { id: "interview", label: "面接想定問答", en: "Interview", count: 198 },
  { id: "presentation", label: "プレゼン課題", en: "Presentation", count: 64 },
  { id: "group", label: "グループ討論", en: "Discussion", count: 38 },
];

const samples = [
  {
    univ: "サンプル大学A 経済学部",
    type: "小論文",
    year: "2025年度",
    theme: "地方経済の活性化と若者の役割について（800字／60分）",
  },
  {
    univ: "サンプル大学C 国際学部",
    type: "プレゼン",
    year: "2025年度",
    theme: "あなたが世界で取り組みたい社会課題（5分・スライド可）",
  },
  {
    univ: "サンプル大学F 心理学部",
    type: "志望理由書",
    year: "2025年度",
    theme: "心理学を学ぶ意義と、卒業後にどう活かしたいか（1,200字）",
  },
  {
    univ: "サンプル大学D 工学部",
    type: "面接",
    year: "2024年度",
    theme: "高校で取り組んだ探究活動と、それを大学でどう発展させるか",
  },
];

export default function PastExamPage() {
  return (
    <>
      <PageHero
        eyebrow="Past Exam"
        en="PAST EXAM"
        jp="過去問・出題傾向。"
        lead="総合型選抜・公募推薦の小論文テーマ、面接質問、プレゼン課題、志望理由書テーマを大学別にアーカイブ。"
      />

      <section className="bg-section-soft py-14 md:py-20">
        <div className="container-aonavi">
          <div className="grid gap-3 md:grid-cols-5">
            {types.map((t, i) => (
              <Link
                key={t.id}
                href={`/pastexam/${t.id}`}
                className="border-2 border-ink bg-white p-5 transition hover:-translate-y-1 hover:bg-accent hover:shadow-[6px_6px_0_var(--color-ink)]"
              >
                <p className="font-latin text-2xl font-extrabold leading-none text-brand-deep">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink-mute">
                  {t.en}
                </p>
                <p className="mt-1 text-base font-black text-ink">{t.label}</p>
                <p className="mt-2 font-latin text-[10px] uppercase tracking-[0.14em] text-ink-soft">
                  {t.count} entries
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-14">
            <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
              Latest Themes
            </p>
            <h2 className="mt-1 text-2xl font-black text-ink md:text-3xl">最新の出題テーマ。</h2>
            <ul className="mt-6 grid gap-5 md:grid-cols-2">
              {samples.map((s, i) => (
                <li
                  key={i}
                  className="border-2 border-ink bg-white p-6 shadow-[6px_6px_0_var(--color-ink)] transition hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink-mute">
                        {s.year}
                      </p>
                      <p className="mt-1 text-base font-black text-ink">{s.univ}</p>
                    </div>
                    <span className="rotate-[-2deg] border-2 border-ink bg-accent px-2 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink">
                      {s.type}
                    </span>
                  </div>
                  <p className="mt-4 border-l-4 border-brand pl-4 text-sm font-bold leading-loose text-ink-soft">
                    {s.theme}
                  </p>
                  <Link
                    href="/resource-request"
                    className="mt-4 inline-block font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep hover:underline"
                  >
                    Request Materials →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t-2 border-ink py-14 md:py-20">
        <div className="container-aonavi">
          <div className="border-2 border-ink bg-ink p-8 text-white shadow-[10px_10px_0_var(--color-brand)] md:p-12">
            <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-accent">
              Pro Feedback
            </p>
            <h2 className="mt-3 text-2xl font-black md:text-4xl">
              過去問を解いたら、添削を。
            </h2>
            <p className="mt-4 max-w-xl text-sm font-bold leading-loose text-white/80">
              総合型選抜の対策塾は、過去のテーマに沿って志望理由書や小論文を仕上げてくれます。
            </p>
            <Link
              href="/juku"
              className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-white bg-accent px-7 py-3 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-ink shadow-[5px_5px_0_var(--color-brand)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              添削に強い塾を見る →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
