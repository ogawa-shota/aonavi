"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useAuth } from "@/components/AuthProvider";
import { GoogleButton } from "@/components/GoogleButton";
import { isMockAuth } from "@/lib/auth/config";

export default function LoginPage() {
  return (
    <Suspense fallback={<AuthPageFallback />}>
      <AuthPage mode="login" />
    </Suspense>
  );
}

function AuthPageFallback() {
  return (
    <div className="container-aonavi pt-32 pb-20">
      <p className="font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-ink-mute">
        Loading…
      </p>
    </div>
  );
}

export function AuthPageWithSuspense({ mode }: { mode: "login" | "signup" }) {
  return (
    <Suspense fallback={<AuthPageFallback />}>
      <AuthPage mode={mode} />
    </Suspense>
  );
}

export function AuthPage({ mode }: { mode: "login" | "signup" }) {
  const router = useRouter();
  const params = useSearchParams();
  const { user, status, signInWithEmail } = useAuth();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const callbackUrl = params.get("callbackUrl") ?? "/mypage";

  useEffect(() => {
    if (status === "authenticated") {
      router.replace(callbackUrl);
    }
  }, [status, callbackUrl, router]);

  const handleEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    try {
      await signInWithEmail(email, name);
    } finally {
      setSubmitting(false);
    }
  };

  const isSignup = mode === "signup";
  const titleEn = isSignup ? "SIGN UP" : "SIGN IN";
  const titleJp = isSignup ? "新規会員登録。" : "ログイン。";
  const lead = isSignup
    ? "Google アカウントで30秒登録。資料請求履歴・お気に入り・診断結果を保存できます。"
    : "Google アカウントでログイン。お気に入り・資料請求履歴・診断結果はそのまま引き継がれます。";

  if (status === "authenticated" && user) {
    return null; // redirecting
  }

  return (
    <>
      <section className="bg-aomaru relative overflow-hidden border-b-2 border-ink pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="container-aonavi">
          <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
            <Link href="/" className="hover:text-brand-deep">
              Home
            </Link>
            <span className="mx-2 opacity-40">/</span>
            <span className="text-ink">{isSignup ? "Sign Up" : "Sign In"}</span>
          </p>
          <p className="mt-6 inline-flex rotate-[-2deg] border-2 border-ink bg-accent px-3 py-1.5 font-latin text-xs font-extrabold uppercase tracking-[0.12em] text-ink shadow-[4px_4px_0_var(--color-ink)]">
            {isSignup ? "Get Started — Free" : "Welcome Back"}
          </p>
          <h1 className="mt-5 font-latin text-5xl font-extrabold uppercase leading-[0.9] text-ink md:text-7xl">
            <span className="block">{titleEn.split(" ")[0]}</span>
            <span className="block text-brand-deep">{titleEn.split(" ")[1]}.</span>
          </h1>
          <p className="mt-3 text-2xl font-black text-ink md:text-3xl">{titleJp}</p>
          <p className="mt-4 max-w-xl border-l-8 border-brand bg-white/90 p-4 text-sm font-bold leading-loose text-ink shadow-[5px_5px_0_var(--color-ink)]">
            {lead}
          </p>
        </div>
      </section>

      <section className="bg-section-soft py-14 md:py-20">
        <div className="container-aonavi grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
          <div className="border-2 border-ink bg-white p-6 shadow-[8px_8px_0_var(--color-ink)] md:p-10">
            {isMockAuth && <DemoNotice />}

            <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
              Step 1 · Quick Way
            </p>
            <p className="mt-1 text-base font-black text-ink">Google で {isSignup ? "登録" : "ログイン"}</p>
            <div className="mt-4">
              <GoogleButton label={`Google で${isSignup ? "登録" : "ログイン"}`} />
            </div>

            <div className="my-8 flex items-center gap-3 text-xs font-bold text-ink-mute">
              <span className="h-px flex-1 bg-line-soft" />
              <span className="font-latin uppercase tracking-[0.18em]">Or</span>
              <span className="h-px flex-1 bg-line-soft" />
            </div>

            <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-deep">
              Step 2 · By Email
            </p>
            <p className="mt-1 text-base font-black text-ink">メールアドレスで {isSignup ? "登録" : "ログイン"}</p>

            <form onSubmit={handleEmail} className="mt-4 space-y-3">
              {isSignup && (
                <Field label="お名前">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="山田 太郎"
                    className="w-full border-2 border-ink bg-white px-3 py-2.5 text-sm font-bold focus:outline-none focus:shadow-[3px_3px_0_var(--color-brand)]"
                  />
                </Field>
              )}
              <Field label="メールアドレス" required>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@aonavi.jp"
                  className="w-full border-2 border-ink bg-white px-3 py-2.5 text-sm font-bold focus:outline-none focus:shadow-[3px_3px_0_var(--color-brand)]"
                />
              </Field>

              <button
                type="submit"
                disabled={submitting || !email}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-ink bg-ink py-3 font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-white shadow-[5px_5px_0_var(--color-brand)] transition disabled:opacity-60 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                {submitting ? "処理中…" : isSignup ? "登録する →" : "ログインする →"}
              </button>
            </form>

            <p className="mt-6 text-[11px] font-bold leading-relaxed text-ink-mute">
              続行することで{" "}
              <Link href="#" className="text-brand-deep hover:underline">
                利用規約
              </Link>{" "}
              および{" "}
              <Link href="#" className="text-brand-deep hover:underline">
                プライバシーポリシー
              </Link>{" "}
              に同意したものとみなします。
            </p>

            <hr className="my-6 border-line-soft" />

            <p className="text-sm font-bold text-ink-soft">
              {isSignup ? "すでにアカウントをお持ちですか？" : "アカウントをお持ちでない方"}{" "}
              <Link
                href={isSignup ? "/login" : "/signup"}
                className="font-extrabold text-brand-deep hover:underline"
              >
                {isSignup ? "ログイン" : "新規登録"} →
              </Link>
            </p>
          </div>

          <aside className="space-y-5">
            <div className="border-2 border-ink bg-accent p-5 shadow-[6px_6px_0_var(--color-ink)]">
              <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink">
                Member Benefits
              </p>
              <p className="mt-1 text-base font-black text-ink">会員登録（無料）でできること</p>
              <ul className="mt-4 space-y-2 text-sm font-bold text-ink">
                {[
                  "気になる大学・塾をお気に入り保存",
                  "資料請求の履歴を保存",
                  "出願締切のリマインドをLINEで受信",
                  "合格力診断の結果を保存",
                  "限定キャンペーンへの応募",
                ].map((c) => (
                  <li key={c} className="flex items-start gap-2">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-2 border-ink bg-ink p-5 text-white shadow-[6px_6px_0_var(--color-brand)]">
              <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-accent">
                Privacy
              </p>
              <p className="mt-2 text-sm font-bold leading-loose">
                取得する情報は名前・メール・プロフィール画像のみ。第三者への提供は行いません。
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="font-latin text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink-soft">
        {label}
        {required && <span className="ml-1 text-brand-deep">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

function DemoNotice() {
  return (
    <div className="mb-6 border-2 border-ink bg-bg p-4 text-xs">
      <p className="font-latin font-extrabold uppercase tracking-[0.14em] text-brand-deep">
        Demo Mode
      </p>
      <p className="mt-1 font-bold leading-relaxed text-ink-soft">
        現在は <span className="font-extrabold text-ink">mock 認証</span> モードです。
        Google ボタン／メールフォームのいずれを押してもブラウザ上に仮ユーザーが作成されます（サーバーには保存されません）。
        Google OAuth を有効化する手順は <code className="bg-white border border-line-soft px-1">docs/AUTH-SETUP.md</code> を参照。
      </p>
    </div>
  );
}
