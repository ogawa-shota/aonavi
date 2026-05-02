import Link from "next/link";

const navItems = [
  { href: "/universities", label: "大学を探す" },
  { href: "/column", label: "コラム" },
  { href: "/resource-request", label: "資料請求" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-brand">AOナビ</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-700 hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/resource-request"
            className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-white hover:bg-accent-dark"
          >
            無料資料請求
          </Link>
        </nav>
      </div>
    </header>
  );
}
