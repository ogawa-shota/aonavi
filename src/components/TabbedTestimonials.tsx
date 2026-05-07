"use client";

import Link from "next/link";
import { useState } from "react";

type Item = {
  id: string;
  univ: string;
  who: string;
  meta: string;
  quote: string;
  href: string;
};

const groups: Record<"freshman" | "alumni", { label: string; en: string; items: Item[] }> = {
  freshman: {
    label: "現役合格者",
    en: "Freshmen",
    items: [
      {
        id: "exp-1",
        univ: "サンプル大学A 経済学部",
        who: "Sさん（高3）",
        meta: "評定 3.4 / 総合型選抜",
        quote: "高3夏まで部活漬け。3ヶ月で志望理由書を仕上げた方法。",
        href: "/experience/exp-1",
      },
      {
        id: "exp-2",
        univ: "サンプル大学C 文学部",
        who: "Kさん（高3）",
        meta: "評定 4.2 / 公募推薦",
        quote: "探究活動で扱った地域課題を、そのまま研究計画に。",
        href: "/experience/exp-2",
      },
      {
        id: "exp-5",
        univ: "サンプル大学G メディア学部",
        who: "Yさん（高3）",
        meta: "評定 3.2 / 評定不問枠",
        quote: "自主制作動画のポートフォリオで一次選考を突破。",
        href: "/experience/exp-5",
      },
    ],
  },
  alumni: {
    label: "在学生インタビュー",
    en: "Alumni",
    items: [
      {
        id: "int-1",
        univ: "サンプル大学A 経済学部 2年",
        who: "M.Tさん",
        meta: "総合型選抜で入学",
        quote: "入学後に活きた「探究活動」のテーマ選びの考え方。",
        href: "/column/research",
      },
      {
        id: "int-2",
        univ: "サンプル大学F 国際学部 3年",
        who: "R.Hさん",
        meta: "TOEFL併用型",
        quote: "面接で英語ディスカッションを乗り切った準備の話。",
        href: "/column/interview-tips",
      },
      {
        id: "int-3",
        univ: "サンプル大学C 国際学部 2年",
        who: "A.Sさん",
        meta: "プレゼン型",
        quote: "高校時代のプレゼン経験を志望理由書にどう活かしたか。",
        href: "/column/essay-basics",
      },
    ],
  },
};

export function TabbedTestimonials() {
  const [tab, setTab] = useState<"freshman" | "alumni">("freshman");
  const data = groups[tab];

  return (
    <div>
      <div className="flex flex-wrap gap-1">
        {(Object.keys(groups) as (keyof typeof groups)[]).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setTab(k)}
            className={`border-2 border-b-0 border-ink px-4 py-2 font-latin text-xs font-extrabold uppercase tracking-[0.12em] transition ${
              tab === k ? "bg-ink text-white" : "bg-white text-ink hover:bg-accent"
            }`}
          >
            {groups[k].label}
            <span className="ml-2 opacity-70">{groups[k].en}</span>
          </button>
        ))}
      </div>
      <div className="border-2 border-ink bg-white p-5 shadow-[6px_6px_0_var(--color-ink)] md:p-6">
        <ul className="grid gap-4 md:grid-cols-3">
          {data.items.map((it, i) => (
            <li key={it.id}>
              <Link
                href={it.href}
                className="group flex h-full flex-col border-2 border-ink bg-white p-5 transition hover:-translate-y-1 hover:shadow-[5px_5px_0_var(--color-brand)]"
              >
                <p className="font-latin text-3xl font-extrabold leading-none text-brand-deep">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-5 text-base font-black leading-snug text-ink">「{it.quote}」</p>
                <div className="mt-auto pt-5">
                  <p className="text-sm font-extrabold text-ink">{it.univ}</p>
                  <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-brand-deep">
                    {it.meta}
                  </p>
                  <p className="text-xs font-bold text-ink-mute">— {it.who}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
