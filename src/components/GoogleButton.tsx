"use client";

// Google "G" ロゴ＋"Google で続ける" のサインインボタン。
// AOナビ（KYUTE）デザインに合わせて 2px 黒枠＋オフセット影。

import { useState } from "react";
import { useAuth } from "@/components/AuthProvider";

export function GoogleButton({
  label = "Google で続ける",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  const { signInWithGoogle } = useAuth();
  const [loading, setLoading] = useState(false);

  return (
    <button
      type="button"
      disabled={loading}
      onClick={async () => {
        setLoading(true);
        try {
          await signInWithGoogle();
        } finally {
          setLoading(false);
        }
      }}
      className={`group inline-flex w-full items-center justify-center gap-3 border-2 border-ink bg-white px-6 py-3 font-bold text-ink shadow-[5px_5px_0_var(--color-ink)] transition disabled:opacity-60 hover:translate-x-1 hover:translate-y-1 hover:shadow-none ${className}`}
    >
      <GoogleG />
      <span>{loading ? "サインイン中…" : label}</span>
    </button>
  );
}

function GoogleG() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 18 18"
      width="18"
      height="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z"
        fill="#4285F4"
      />
      <path
        d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2c-.71.48-1.62.78-2.7.78-2.08 0-3.84-1.4-4.47-3.29H1.83v2.07A8 8 0 0 0 8.98 17z"
        fill="#34A853"
      />
      <path
        d="M4.5 10.55a4.8 4.8 0 0 1 0-3.1V5.38H1.83a8 8 0 0 0 0 7.24l2.67-2.07z"
        fill="#FBBC05"
      />
      <path
        d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 8.98 1a8 8 0 0 0-7.15 4.38l2.67 2.07c.63-1.9 2.39-3.27 4.48-3.27z"
        fill="#EA4335"
      />
    </svg>
  );
}
