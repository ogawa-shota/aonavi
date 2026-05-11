"use client";

// ─────────────────────────────────────────────────────────────────────────────
// AuthProvider.tsx
// クライアント側の認証コンテキスト。mock / real 両モードに同じ API を提供する。
// ─────────────────────────────────────────────────────────────────────────────

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { SessionProvider, signIn as nextSignIn, signOut as nextSignOut, useSession } from "next-auth/react";
import { isRealAuth } from "@/lib/auth/config";
import type { AuthStatus, AuthValue, User } from "@/lib/auth/types";

const AuthContext = createContext<AuthValue | null>(null);
const STORAGE_KEY = "aonavi_user";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  if (isRealAuth) {
    return (
      <SessionProvider>
        <RealAuthBridge>{children}</RealAuthBridge>
      </SessionProvider>
    );
  }
  return <MockAuthBridge>{children}</MockAuthBridge>;
}

// ── real: next-auth の useSession を AuthContext にブリッジ ───────────────────
function RealAuthBridge({ children }: { children: React.ReactNode }) {
  const { data, status } = useSession();

  const value: AuthValue = useMemo(
    () => ({
      user: data?.user
        ? {
            id: (data.user as { id?: string }).id ?? data.user.email ?? "unknown",
            email: data.user.email ?? "",
            name: data.user.name ?? "",
            image: data.user.image ?? null,
            createdAt: new Date().toISOString(), // real モードでは DB に保存するまでは仮
          }
        : null,
      status:
        status === "loading" ? "loading" : status === "authenticated" ? "authenticated" : "unauthenticated",
      signInWithGoogle: async () => {
        await nextSignIn("google", { callbackUrl: "/mypage" });
      },
      signInWithEmail: async () => {
        // 実装予定: Magic Link（Resend）。当面は Google を案内。
        await nextSignIn("google", { callbackUrl: "/mypage" });
      },
      signOut: async () => {
        await nextSignOut({ callbackUrl: "/" });
      },
    }),
    [data, status]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// ── mock: localStorage に user を保存 ────────────────────────────────────────
function MockAuthBridge({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<AuthStatus>("loading");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as User;
        setUser(parsed);
        setStatus("authenticated");
      } else {
        setStatus("unauthenticated");
      }
    } catch {
      setStatus("unauthenticated");
    }
  }, []);

  const persist = useCallback((u: User | null) => {
    if (u) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
      setUser(u);
      setStatus("authenticated");
    } else {
      localStorage.removeItem(STORAGE_KEY);
      setUser(null);
      setStatus("unauthenticated");
    }
  }, []);

  const value: AuthValue = useMemo(
    () => ({
      user,
      status,
      signInWithGoogle: async () => {
        // Google OAuth を簡易シミュレート。本番に置き換わると実フローへ。
        await new Promise((r) => setTimeout(r, 600));
        const u: User = {
          id: `mock_${Date.now()}`,
          email: "demo@google.example",
          name: "デモ太郎",
          image: null,
          createdAt: new Date().toISOString(),
        };
        persist(u);
      },
      signInWithEmail: async (email: string, name?: string) => {
        await new Promise((r) => setTimeout(r, 400));
        const u: User = {
          id: `mock_${Date.now()}`,
          email,
          name: name?.trim() || email.split("@")[0],
          image: null,
          createdAt: new Date().toISOString(),
        };
        persist(u);
      },
      signOut: async () => {
        persist(null);
      },
    }),
    [user, status, persist]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within <AuthProvider>");
  }
  return ctx;
}
