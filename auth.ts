// ─────────────────────────────────────────────────────────────────────────────
// auth.ts (project root)
// next-auth v5 (Auth.js) の設定。
//
// このファイルは AUTH_SECRET / AUTH_GOOGLE_ID / AUTH_GOOGLE_SECRET が
// 設定されているとき（= NEXT_PUBLIC_AUTH_MODE=real）にだけ実質的に動作する。
// mock モードでは AuthProvider が SessionProvider を経由せずスキップする。
//
// セットアップ手順は docs/AUTH-SETUP.md を参照。
// ─────────────────────────────────────────────────────────────────────────────

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  // DB を持たない MVP 期間は JWT セッション（user 情報は cookie 内 JWT）。
  // DB 連携時は @auth/prisma-adapter 等の adapter を追加し strategy を "database" に。
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.id) {
        (session.user as { id?: string }).id = token.id as string;
      }
      return session;
    },
  },
});
