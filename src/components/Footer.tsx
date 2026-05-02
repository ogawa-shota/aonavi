import Link from "next/link";

const sections = [
  {
    title: "サービス",
    links: [
      { href: "/universities", label: "大学を探す" },
      { href: "/column", label: "コラム" },
      { href: "/resource-request", label: "資料請求" },
    ],
  },
  {
    title: "受験情報",
    links: [
      { href: "/column", label: "総合型選抜" },
      { href: "/column", label: "学校推薦型" },
      { href: "/column", label: "一般選抜" },
    ],
  },
  {
    title: "運営情報",
    links: [
      { href: "/about", label: "運営会社" },
      { href: "/terms", label: "利用規約" },
      { href: "/privacy", label: "プライバシーポリシー" },
      { href: "/contact", label: "お問い合わせ" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <p className="text-xl font-extrabold text-brand">AOナビ</p>
            <p className="mt-2 text-sm text-zinc-600">
              総合型選抜の大学・塾検索ポータル
            </p>
          </div>
          {sections.map((section) => (
            <div key={section.title}>
              <p className="text-sm font-bold text-zinc-900">{section.title}</p>
              <ul className="mt-3 space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-600 hover:text-brand"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 text-xs text-zinc-500">
          © {new Date().getFullYear()} KYUTE合同会社
        </p>
      </div>
    </footer>
  );
}
