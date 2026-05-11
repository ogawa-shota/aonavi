// ─────────────────────────────────────────────────────────────────────────────
// auth/types.ts
// 認証関連の型定義。mock / real のいずれのモードでも同じ User / AuthValue を返す。
// ─────────────────────────────────────────────────────────────────────────────

export type User = {
  id: string;
  email: string;
  name: string;
  image: string | null;
  /** 登録日（ISO 8601） */
  createdAt: string;
};

export type AuthStatus = "loading" | "authenticated" | "unauthenticated";

export type AuthValue = {
  user: User | null;
  status: AuthStatus;
  /** Google OAuth でサインイン（mock モードではデモユーザーで仮サインイン） */
  signInWithGoogle: () => Promise<void>;
  /** メールでサインイン（mock モードでは即座にユーザー作成、real モードでは Magic Link 想定） */
  signInWithEmail: (email: string, name?: string) => Promise<void>;
  signOut: () => Promise<void>;
};
