"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/components/AuthProvider";
import { isMockAuth } from "@/lib/auth/config";

export default function MyPage() {
  const router = useRouter();
  const { user, status, signOut } = useAuth();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login?callbackUrl=/mypage");
    }
  }, [status, router]);

  if (status === "loading" || !user) {
    return (
      <div className="container-aonavi pt-32 pb-20">
        <p className="font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-ink-mute">
          Loading…
        </p>
      </div>
    );
  }

  const initial = user.name.charAt(0).toUpperCase();
  const joined = new Date(user.createdAt).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <section className="bg-aomaru relative overflow-hidden border-b-2 border-ink pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="container-aonavi">
          <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
            <Link href="/" className="hover:text-brand-deep">
              Home
            </Link>
            <span className="mx-2 opacity-40">/</span>
            <span className="text-ink">My Page</span>
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-5">
            <Avatar src={user.image} initial={initial} />
            <div>
              <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
                Welcome back
              </p>
              <h1 className="mt-1 font-latin text-3xl font-extrabold uppercase leading-tight text-ink md:text-5xl">
                {user.name.toUpperCase()}
              </h1>
              <p className="mt-1 text-sm font-bold text-ink-soft">{user.email}</p>
              <p className="mt-1 font-latin text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
                Member since {joined}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-soft py-14 md:py-20">
        <div className="container-aonavi grid gap-8 lg:grid-cols-[1fr_300px]">
          <div className="space-y-6">
            <Block en="Favorites" jp="お気に入りの大学・塾" empty="まだお気に入り登録した大学・塾はありません。" cta={{ label: "大学を探す →", href: "/universities" }} />
            <Block en="Resource History" jp="資料請求の履歴" empty="まだ資料請求の履歴がありません。" cta={{ label: "資料請求する →", href: "/resource-request" }} />
            <Block en="Diagnosis" jp="合格力診断の結果" empty="診断はまだ受けていません。" cta={{ label: "診断を受ける →", href: "/diagnosis" }} />
            <Block en="LINE Linkage" jp="LINE 連携" empty="LINE 連携で出願締切リマインドを受け取れます。" cta={{ label: "LINE と連携する →", href: "#" }} />
          </div>

          <aside className="space-y-5">
            <div className="border-2 border-ink bg-white p-5 shadow-[6px_6px_0_var(--color-ink)]">
              <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
                Profile
              </p>
              <dl className="mt-3 divide-y-2 divide-ink border-y-2 border-ink">
                {[
                  ["Name", user.name],
                  ["Email", user.email],
                  ["ID", user.id],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between py-2.5">
                    <dt className="font-latin text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
                      {k}
                    </dt>
                    <dd className="text-xs font-extrabold text-ink truncate max-w-[180px]" title={v}>
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
              <button className="mt-4 block w-full rounded-full border-2 border-ink bg-white py-2.5 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-ink hover:bg-accent">
                プロフィールを編集
              </button>
              <button
                onClick={() => signOut()}
                className="mt-3 block w-full rounded-full border-2 border-ink bg-ink py-2.5 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-white shadow-[3px_3px_0_var(--color-brand)] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
              >
                ログアウト
              </button>
            </div>

            {isMockAuth && (
              <div className="border-2 border-ink bg-bg p-4 text-xs">
                <p className="font-latin font-extrabold uppercase tracking-[0.14em] text-brand-deep">
                  Demo Mode
                </p>
                <p className="mt-1 font-bold leading-relaxed text-ink-soft">
                  現在は mock 認証モード。ユーザー情報はブラウザの localStorage に保存されています。
                </p>
              </div>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}

function Avatar({ src, initial }: { src: string | null; initial: string }) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={src}
        alt=""
        className="h-20 w-20 border-2 border-ink object-cover shadow-[5px_5px_0_var(--color-ink)]"
      />
    );
  }
  return (
    <div className="flex h-20 w-20 items-center justify-center border-2 border-ink bg-accent shadow-[5px_5px_0_var(--color-ink)]">
      <span className="font-latin text-4xl font-extrabold text-ink">{initial}</span>
    </div>
  );
}

function Block({
  en,
  jp,
  empty,
  cta,
}: {
  en: string;
  jp: string;
  empty: string;
  cta: { label: string; href: string };
}) {
  return (
    <section className="border-2 border-ink bg-white p-6 shadow-[6px_6px_0_var(--color-ink)] md:p-8">
      <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
        {en}
      </p>
      <h2 className="mt-1 text-xl font-black text-ink md:text-2xl">{jp}</h2>
      <div className="mt-5 border-2 border-line-soft bg-bg p-5 text-sm font-bold text-ink-soft">
        {empty}
      </div>
      <Link
        href={cta.href}
        className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-5 py-2 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-ink hover:bg-accent"
      >
        {cta.label}
      </Link>
    </section>
  );
}
