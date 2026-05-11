// ─────────────────────────────────────────────────────────────────────────────
// auth/config.ts
// 認証モードの判定。env で切り替える。
//
//   NEXT_PUBLIC_AUTH_MODE=real   → next-auth + Google OAuth（要 AUTH_GOOGLE_ID/SECRET）
//   NEXT_PUBLIC_AUTH_MODE=mock   → localStorage ベースのデモ認証
//   未設定                        → mock がデフォルト
//
// 切替手順は docs/AUTH-SETUP.md 参照。
// ─────────────────────────────────────────────────────────────────────────────

export const authMode: "mock" | "real" =
  process.env.NEXT_PUBLIC_AUTH_MODE === "real" ? "real" : "mock";

export const isRealAuth = authMode === "real";
export const isMockAuth = authMode === "mock";
