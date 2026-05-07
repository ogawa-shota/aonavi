import Link from "next/link";

const steps = [
  { n: "01", t: "プロフィール", d: "学年・評定平均・通学希望エリア" },
  { n: "02", t: "強み発見", d: "あなたの得意・好き・経験を6問で診断" },
  { n: "03", t: "結果＋大学提案", d: "いま狙える大学、伸ばせば届く大学を提示" },
];

const examples = [
  { q: "英語外部試験のスコア（あれば）を教えてください", choices: ["TOEFL / IELTS", "英検", "なし"] },
  { q: "高校で力を入れた活動は？", choices: ["部活動", "委員会・生徒会", "ボランティア", "探究・研究", "資格", "その他"] },
  { q: "あなたの性格を表す言葉は？", choices: ["挑戦的", "粘り強い", "協調的", "分析的", "創造的"] },
  { q: "希望の入試方式は？", choices: ["総合型選抜", "公募推薦", "迷っている"] },
];

export default function DiagnosisPage() {
  return (
    <>
      <section className="bg-aomaru relative overflow-hidden border-b-2 border-ink pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute right-[-4vw] top-32 hidden h-[36vh] w-[24vw] rotate-6 border-2 border-ink bg-accent lg:block" />
          <div className="absolute left-[-2vw] bottom-12 hidden h-[20vh] w-[14vw] -rotate-6 bg-brand lg:block" />
        </div>
        <div className="container-aonavi relative">
          <p className="inline-flex rotate-[-2deg] border-2 border-ink bg-accent px-4 py-2 font-latin text-base font-extrabold uppercase tracking-[0.12em] text-ink shadow-[5px_5px_0_var(--color-ink)]">
            3 min · Free
          </p>
          <h1 className="mt-8 text-balance font-latin text-[56px] font-extrabold uppercase leading-[0.85] text-ink sm:text-[80px] md:text-[112px]">
            <span className="block">DIAGNOSIS</span>
            <span className="block text-brand-deep">YOUR MATCH.</span>
          </h1>
          <p className="mt-6 max-w-xl border-l-8 border-brand bg-white/90 p-5 text-sm font-bold leading-loose text-ink shadow-[6px_6px_0_var(--color-ink)] md:text-[15px]">
            10問に答えるだけで、いま狙える総合型選抜の大学・少し頑張れば届く大学を診断。あなたの強みを言語化するヒントもお届けします。
          </p>
          <Link
            href="#start"
            className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-ink px-8 py-4 font-latin text-sm font-extrabold uppercase tracking-[0.14em] text-white shadow-[6px_6px_0_var(--color-brand)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            無料で診断を始める →
          </Link>
        </div>
      </section>

      <section className="border-b-2 border-ink bg-white py-14 md:py-20">
        <div className="container-aonavi">
          <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
            How It Works
          </p>
          <h2 className="mt-1 text-2xl font-black text-ink md:text-3xl">3STEPで完了。</h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <li
                key={s.n}
                className={`border-2 border-ink bg-white p-6 ${
                  i % 2 === 0
                    ? "shadow-[6px_6px_0_var(--color-ink)]"
                    : "shadow-[6px_6px_0_var(--color-brand)]"
                }`}
              >
                <p className="font-latin text-5xl font-extrabold leading-none text-brand-deep">
                  {s.n}
                </p>
                <p className="mt-4 text-lg font-black text-ink">{s.t}</p>
                <p className="mt-2 text-sm font-bold text-ink-soft">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="start" className="bg-section-soft py-14 md:py-20">
        <div className="container-aonavi max-w-3xl">
          <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
            Sample Questions
          </p>
          <h2 className="mt-1 text-2xl font-black text-ink md:text-3xl">サンプル質問（一部）。</h2>
          <ul className="mt-8 space-y-5">
            {examples.map((e, i) => (
              <li
                key={i}
                className="border-2 border-ink bg-white p-6 shadow-[6px_6px_0_var(--color-ink)]"
              >
                <p className="font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-ink-mute">
                  Q{String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-1 text-base font-black text-ink">{e.q}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {e.choices.map((c) => (
                    <button
                      key={c}
                      className="border-2 border-ink bg-white px-4 py-2 font-latin text-xs font-extrabold text-ink hover:bg-accent"
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 text-center">
            <button className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-ink px-10 py-4 font-latin text-sm font-extrabold uppercase tracking-[0.14em] text-white shadow-[6px_6px_0_var(--color-brand)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              診断結果を見る →
            </button>
            <p className="mt-3 text-xs font-bold text-ink-mute">
              ※ 結果の保存・大学への資料請求には、無料の会員登録が必要です。
            </p>
          </div>
        </div>
      </section>

      <section className="border-t-2 border-ink py-14 md:py-20">
        <div className="container-aonavi">
          <div className="border-2 border-ink bg-accent p-6 shadow-[10px_10px_0_var(--color-ink)] md:p-10">
            <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink">
              What You Get
            </p>
            <h2 className="mt-3 text-2xl font-black text-ink md:text-3xl">診断結果でわかること。</h2>
            <ul className="mt-5 grid gap-2 text-sm font-bold text-ink md:grid-cols-2">
              {[
                "あなたの強み（言語化されたフレーズ）",
                "いま狙える大学（評定・条件マッチ度順）",
                "少し頑張れば届く大学",
                "向いている学問分野",
                "結果に合わせた対策塾サジェスト",
                "志望理由書の書き出しヒント",
              ].map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <span className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-ink" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
