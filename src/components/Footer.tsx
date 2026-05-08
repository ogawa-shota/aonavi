import Link from "next/link";

const cols = [
  {
    heading: "Find",
    links: [
      { href: "/universities", label: "大学を探す" },
      { href: "/juku", label: "塾を探す" },
      { href: "/admission", label: "入試スケジュール" },
      { href: "/pastexam", label: "過去問・出題傾向" },
      { href: "/ranking", label: "ランキング" },
    ],
  },
  {
    heading: "Read",
    links: [
      { href: "/column", label: "受験コラム" },
      { href: "/news", label: "受験ニュース" },
      { href: "/event", label: "オープンキャンパス" },
    ],
  },
  {
    heading: "More",
    links: [
      { href: "/diagnosis", label: "合格力診断" },
      { href: "/resource-request", label: "無料 資料請求" },
      { href: "/about", label: "運営会社" },
      { href: "/about#partner", label: "掲載のお問い合わせ" },
    ],
  },
];

const sns = [
  { label: "LINE", href: "#" },
  { label: "X", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-white">
      <section className="border-b border-white/10">
        <div className="container-aonavi flex flex-col items-start gap-5 py-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-baseline gap-3">
            <p className="font-latin text-2xl font-extrabold uppercase tracking-[0.05em]">
              Stay updated.
            </p>
            <span className="rotate-[-3deg] bg-accent px-2 py-1 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink">
              line
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm font-bold text-white/80">
              出願締切のリマインドや新着情報を、LINEでお届け。
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-white px-5 py-2.5 text-sm font-extrabold text-ink shadow-[4px_4px_0_var(--color-brand)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              LINE友だち登録
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="container-aonavi py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-baseline gap-3">
              <span className="font-latin text-4xl font-extrabold tracking-normal">AOナビ</span>
              <span className="rotate-[-3deg] bg-accent px-2 py-1 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink">
                sogo-gata navi
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm font-bold leading-loose text-white/70">
              総合型選抜（旧AO入試）に挑戦する受験生のための、大学・塾・体験談・対策ノウハウが集まる進路ポータルです。
            </p>

            <div className="mt-10">
              <p className="font-latin text-[10px] tracking-[0.32em] text-white/40">CONTACT</p>
              <p className="mt-2 font-latin text-base text-white/85">contact@kyute.jp</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {sns.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className="rounded-full border border-white/30 px-3 py-1.5 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-white/70 transition hover:border-white hover:text-white"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            {cols.map((col) => (
              <div key={col.heading}>
                <p className="font-latin text-lg font-extrabold uppercase tracking-[0.14em] text-accent">
                  {col.heading}
                </p>
                <ul className="mt-5 space-y-3 text-sm font-bold text-white/80">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="transition hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/45">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="#" className="hover:text-white">プライバシーポリシー</Link>
            <Link href="#" className="hover:text-white">利用規約</Link>
            <Link href="#" className="hover:text-white">特定商取引法に基づく記載</Link>
          </div>
          <p className="font-latin text-sm font-extrabold tracking-wider">
            © {new Date().getFullYear()} KYUTE LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
