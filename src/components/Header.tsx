"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const mainNav = [
  { href: "/universities", label: "大学を探す" },
  { href: "/juku", label: "塾を探す" },
  { href: "/admission", label: "入試スケジュール" },
  { href: "/pastexam", label: "過去問" },
  { href: "/experience", label: "合格体験記" },
  { href: "/column", label: "コラム" },
];

const subNav = [
  { href: "/news", label: "受験ニュース" },
  { href: "/event", label: "オープンキャンパス" },
  { href: "/diagnosis", label: "合格力診断" },
  { href: "/about", label: "運営会社" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b-2 border-ink bg-header backdrop-blur-xl"
          : "border-b-2 border-ink bg-header/80 backdrop-blur-md"
      }`}
    >
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
