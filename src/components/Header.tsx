"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/components/AuthProvider";

const mainNav = [
  { href: "/universities", label: "大学を探す" },
  { href: "/juku", label: "塾を探す" },
  { href: "/admission", label: "入試スケジュール" },
  { href: "/pastexam", label: "過去問" },
  { href: "/column", label: "コラム" },
];

const subNav = [
  { href: "/start", label: "初めての方へ" },
  { href: "/news", label: "受験ニュース" },
  { href: "/event", label: "オープンキャンパス" },
  { href: "/diagnosis", label: "合格力診断" },
  { href: "/about", label: "運営会社" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, status } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isAuthed = status === "authenticated" && user;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b-2 border-ink bg-header backdrop-blur-xl"
          : "border-b-2 border-ink bg-header/80 backdrop-blur-md"
      }`}
    >
      <div className="hidden border-b border-line-soft bg-accent md:block">
        <div className="container-aonavi flex h-7 items-center justify-between gap-4 text-[11px]">
          <p className="flex items-center gap-2 font-bold text-ink">
            <span className="rotate-[-1deg] border border-ink bg-white px-1.5 py-0.5 font-latin text-[10px] font-extrabold uppercase tracking-[0.12em]">
              Now On
            </span>
            5校以上のまとめ請求でデジタルギフト 2,000円分プレゼント中
            <Link
              href="/resource-request"
              className="font-latin text-[10px] font-extrabold uppercase tracking-[0.14em] text-brand-deep hover:underline"
            >
              詳細 →
            </Link>
          </p>
          <div className="flex items-center gap-3 font-bold text-ink-soft">
            <Link href="/start" className="hover:text-brand-deep">
              初めての方へ
            </Link>
            <span className="opacity-30">/</span>
            {isAuthed ? (
              <Link href="/mypage" className="hover:text-brand-deep">
                マイページ
              </Link>
            ) : (
              <>
                <Link href="/login" className="hover:text-brand-deep">
                  ログイン
                </Link>
                <Link href="/signup" className="hover:text-brand-deep">
                  会員登録
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="container-aonavi flex items-center justify-between gap-4 py-3">
        <Link href="/" className="group flex items-baseline gap-2.5">
          <span className="font-latin text-3xl font-extrabold text-ink transition group-hover:text-brand-deep">
            AOナビ
          </span>
          <span className="hidden rotate-[-2deg] bg-accent px-2 py-1 font-latin text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink sm:block">
            sogo-gata navi
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="グローバルナビ">
          {mainNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full border border-transparent px-3 py-1.5 text-[12px] font-bold text-ink transition hover:border-ink hover:bg-brand hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/diagnosis"
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-2 text-[12px] font-extrabold text-ink transition hover:bg-accent"
          >
            合格力診断
          </Link>
          <Link
            href="/resource-request"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-ink bg-ink px-5 py-2.5 text-[13px] font-bold text-white shadow-[4px_4px_0_var(--color-brand)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            無料 資料請求
            <span className="transition group-hover:translate-x-0.5">→</span>
          </Link>
          {isAuthed ? (
            <UserMenu />
          ) : (
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-2 text-[12px] font-extrabold text-ink transition hover:bg-accent"
            >
              ログイン
            </Link>
          )}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink xl:hidden"
          aria-expanded={open}
          aria-label="メニュー"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-5 bg-current transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t-2 border-ink bg-bg px-5 pb-8 pt-4 xl:hidden">
          <div className="flex flex-col gap-1">
            <p className="font-latin text-[10px] font-extrabold uppercase tracking-[0.16em] text-ink-mute">
              Find
            </p>
            {mainNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block border-b border-line-soft px-1 py-3 text-sm font-bold text-ink transition hover:text-brand-deep"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <p className="mt-6 font-latin text-[10px] font-extrabold uppercase tracking-[0.16em] text-ink-mute">
              More
            </p>
            {subNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block border-b border-line-soft px-1 py-3 text-sm font-bold text-ink transition hover:text-brand-deep"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <p className="mt-6 font-latin text-[10px] font-extrabold uppercase tracking-[0.16em] text-ink-mute">
              Account
            </p>
            {isAuthed ? (
              <Link
                href="/mypage"
                onClick={() => setOpen(false)}
                className="block border-b border-line-soft px-1 py-3 text-sm font-bold text-ink hover:text-brand-deep"
              >
                マイページ（{user.name}）
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="block border-b border-line-soft px-1 py-3 text-sm font-bold text-ink hover:text-brand-deep"
                >
                  ログイン
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setOpen(false)}
                  className="block border-b border-line-soft px-1 py-3 text-sm font-bold text-ink hover:text-brand-deep"
                >
                  新規会員登録
                </Link>
              </>
            )}

            <div className="mt-5 grid grid-cols-2 gap-2">
              <Link
                href="/diagnosis"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full border-2 border-ink bg-white px-5 py-3 text-sm font-bold text-ink"
              >
                合格力診断
              </Link>
              <Link
                href="/resource-request"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-ink px-5 py-3 text-sm font-bold text-white shadow-[4px_4px_0_var(--color-brand)]"
              >
                資料請求 →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function UserMenu() {
  const { user, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  if (!user) return null;
  const initial = user.name.charAt(0).toUpperCase();

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="アカウントメニュー"
        className="flex h-10 w-10 items-center justify-center border-2 border-ink bg-accent shadow-[3px_3px_0_var(--color-ink)] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
      >
        {user.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={user.image} alt="" className="h-full w-full object-cover" />
        ) : (
          <span className="font-latin text-base font-extrabold text-ink">{initial}</span>
        )}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-60 border-2 border-ink bg-white shadow-[6px_6px_0_var(--color-ink)]">
          <div className="border-b-2 border-ink bg-bg px-4 py-3">
            <p className="font-latin text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
              Signed in as
            </p>
            <p className="mt-0.5 truncate text-sm font-extrabold text-ink" title={user.email}>
              {user.name}
            </p>
            <p className="truncate text-[11px] font-bold text-ink-mute" title={user.email}>
              {user.email}
            </p>
          </div>
          <ul className="divide-y divide-line-soft">
            <li>
              <Link
                href="/mypage"
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-sm font-bold text-ink hover:bg-brand-soft"
              >
                マイページ
              </Link>
            </li>
            <li>
              <Link
                href="/resource-request"
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-sm font-bold text-ink hover:bg-brand-soft"
              >
                資料請求
              </Link>
            </li>
            <li>
              <Link
                href="/diagnosis"
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-sm font-bold text-ink hover:bg-brand-soft"
              >
                合格力診断
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={async () => {
                  setOpen(false);
                  await signOut();
                }}
                className="block w-full px-4 py-2.5 text-left text-sm font-extrabold text-brand-deep hover:bg-brand-soft"
              >
                ログアウト
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
