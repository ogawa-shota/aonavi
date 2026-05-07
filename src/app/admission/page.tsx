import Link from "next/link";
import { PageHero } from "@/components/SectionHead";

const months = [
  { m: "8月", title: "総合型 出願スタート", items: ["最速校で出願受付開始", "オープンキャンパス最終回", "志望理由書 仕上げ"] },
  { m: "9月", title: "出願ピーク", items: ["主要私大が一斉に出願", "1次選考（書類審査）", "面接・小論直前演習"] },
  { m: "10月", title: "公募推薦が本格化", items: ["公募推薦 出願ピーク", "総合型 1次合格発表", "2次選考（面接・口頭試問）"] },
  { m: "11月", title: "合格発表ラッシュ", items: ["総合型 最終合格発表", "公募推薦 結果", "学校推薦型 校内選考"] },
  { m: "12月", title: "学校推薦型 確定", items: ["指定校推薦 合格", "共通テスト最終調整", "一般選抜への切替判断"] },
];

const exams = [
  { univ: "サンプル大学A", faculty: "経済学部", type: "総合型選抜", deadline: "2026/09/15", interview: "2026/10/01" },
  { univ: "サンプル大学B", faculty: "文学部", type: "公募推薦", deadline: "2026/09/30", interview: "2026/10/20" },
  { univ: "サンプル大学C", faculty: "国際学部", type: "総合型選抜", deadline: "2026/10/05", interview: "2026/10/28" },
  { univ: "サンプル大学F", faculty: "心理学部", type: "総合型選抜", deadline: "2026/10/20", interview: "2026/11/10" },
  { univ: "サンプル大学D", faculty: "工学部", type: "学校推薦型", deadline: "2026/11/01", interview: "2026/11/22" },
];

export default function AdmissionPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar 2026"
        en="ADMISSION CALENDAR"
        jp="年内入試スケジュール 2026。"
        lead="総合型選抜・公募推薦・学校推薦型・指定校推薦の出願タイミングをひと目で。"
      />

      <section className="bg-section-soft py-14 md:py-20">
        <div className="container-aonavi">
          <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
            Monthly Moves
          </p>
          <h2 className="mt-1 text-2xl font-black text-ink md:text-3xl">月別 動きの早見表。</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {months.map((m, i) => (
              <div
                key={m.m}
                className={`border-2 border-ink bg-white p-5 ${
                  i % 2 === 0
                    ? "shadow-[6px_6px_0_var(--color-ink)]"
                    : "shadow-[6px_6px_0_var(--color-brand)]"
                }`}
              >
                <p className="font-latin text-4xl font-extrabold leading-none text-brand-deep">
                  {m.m}
                </p>
                <p className="mt-3 text-sm font-black text-ink">{m.title}</p>
                <ul className="mt-3 space-y-1 text-xs font-bold text-ink-soft">
                  {m.items.map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-2 border-ink bg-white py-14 md:py-20">
        <div className="container-aonavi">
          <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
            Upcoming
          </p>
          <h2 className="mt-1 text-2xl font-black text-ink md:text-3xl">出願締切が近い大学。</h2>

          <div className="mt-6 overflow-x-auto border-2 border-ink bg-white shadow-[8px_8px_0_var(--color-ink)]">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="border-b-2 border-ink bg-accent text-left">
                  {["大学・学部", "入試方式", "出願締切", "面接・試験日", ""].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-ink">
                {exams.map((e, i) => (
                  <tr key={i}>
                    <td className="px-4 py-4">
                      <p className="text-base font-black text-ink">{e.univ}</p>
                      <p className="text-xs font-bold text-ink-soft">{e.faculty}</p>
                    </td>
                    <td className="px-4 py-4">
                      <span className="border-2 border-ink bg-accent px-2 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink">
                        {e.type}
                      </span>
                    </td>
                    <td className="px-4 py-4 font-latin text-base font-extrabold text-brand-deep">
                      {e.deadline}
                    </td>
                    <td className="px-4 py-4 text-xs font-bold text-ink-soft">{e.interview}</td>
                    <td className="px-4 py-4">
                      <Link
                        href={`/universities/${e.univ}`}
                        className="rounded-full border-2 border-ink bg-white px-4 py-1.5 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink hover:bg-accent"
                      >
                        詳細 →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-aonavi">
          <div className="border-2 border-ink bg-accent p-8 shadow-[10px_10px_0_var(--color-ink)] md:p-12">
            <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink">
              Reminder
            </p>
            <h2 className="mt-3 text-2xl font-black text-ink md:text-4xl">
              気になる大学を登録。
              <br />
              出願1週間前にLINEでお知らせ。
            </h2>
            <p className="mt-4 max-w-xl text-sm font-bold leading-loose text-ink">
              会員登録（無料）で、お気に入り大学のリマインドを設定できます。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/signup"
                className="rounded-full border-2 border-ink bg-ink px-6 py-3 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-white shadow-[5px_5px_0_var(--color-brand)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                無料で会員登録 →
              </Link>
              <Link
                href="#"
                className="rounded-full border-2 border-ink bg-white px-6 py-3 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-ink hover:bg-white/80"
              >
                LINE友だち追加
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
