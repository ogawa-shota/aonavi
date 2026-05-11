# 認証セットアップガイド

AOナビは **mock 認証**（デモ／ローカル確認用）と **real 認証**（next-auth v5 + Google OAuth）を環境変数で切り替えられる構成です。

---

## 1. mock 認証（デフォルト）

何も設定しなくても動きます。

```bash
npm run dev
```

- `/login` で「Google で続ける」または email を入力するとブラウザ上に仮ユーザーが作成される
- ユーザーは `localStorage` の `aonavi_user` キーに保存（サーバーには送信されない）
- 開発・デザイン確認・デモ用途向け

切替: `.env.local` で `NEXT_PUBLIC_AUTH_MODE=mock` または env 未設定。

---

## 2. real 認証（Google OAuth + next-auth v5）

### Step 1. Google OAuth クライアントを作成

1. [Google Cloud Console](https://console.cloud.google.com/) にログイン
2. 新しいプロジェクトを作成（または既存を選択）
3. **APIとサービス → OAuth 同意画面** を設定
   - User Type: 外部
   - アプリ名: `AOナビ`
   - サポートメール: 自分のメール
   - 承認済みドメイン: `localhost`（開発時）／本番ドメイン
   - スコープ: `userinfo.email`, `userinfo.profile`, `openid` （デフォルトでOK）
4. **APIとサービス → 認証情報 → 認証情報を作成 → OAuth クライアント ID**
   - アプリの種類: **ウェブアプリケーション**
   - 名前: `AOナビ Web`
   - 承認済みのリダイレクト URI:
     - `http://localhost:3001/api/auth/callback/google` （ローカル開発）
     - `https://your-domain.com/api/auth/callback/google` （本番）
5. 発行された **クライアント ID** と **クライアントシークレット** を控える

### Step 2. AUTH_SECRET を生成

```bash
openssl rand -base64 32
```

出力された文字列をメモ。

### Step 3. `.env.local` に設定

プロジェクトルートに `.env.local` を作成：

```env
NEXT_PUBLIC_AUTH_MODE=real
AUTH_SECRET=<openssl で生成した値>
AUTH_GOOGLE_ID=<Step1 のクライアント ID>
AUTH_GOOGLE_SECRET=<Step1 のクライアントシークレット>
```

### Step 4. dev サーバーを再起動

```bash
npm run dev
```

`/login` の「Google で続ける」を押すと Google の OAuth 画面に遷移し、認証後 `/mypage` に戻ります。

---

## 3. Vercel 本番デプロイ

Vercel ダッシュボードの **Settings → Environment Variables** に下記を設定：

| Key | Value |
|---|---|
| `NEXT_PUBLIC_AUTH_MODE` | `real` |
| `AUTH_SECRET` | `openssl rand -base64 32` の出力 |
| `AUTH_GOOGLE_ID` | Google OAuth クライアント ID |
| `AUTH_GOOGLE_SECRET` | Google OAuth クライアントシークレット |
| `AUTH_URL` | `https://your-domain.com` |

Google Cloud Console の OAuth クライアントの **承認済みリダイレクト URI** に `https://your-domain.com/api/auth/callback/google` を追加するのも忘れずに。

---

## 4. アーキテクチャ

```
src/
├── lib/auth/
│   ├── config.ts         モード判定（NEXT_PUBLIC_AUTH_MODE で分岐）
│   └── types.ts          User / AuthValue 型
├── components/
│   ├── AuthProvider.tsx  クライアント Context。mock / real 両ブリッジ
│   └── GoogleButton.tsx  共通の Google サインインボタン
└── app/
    ├── login/page.tsx    ログインページ
    ├── signup/page.tsx   新規登録ページ
    ├── mypage/page.tsx   ログイン後ダッシュボード
    └── api/auth/[...nextauth]/route.ts   next-auth API
auth.ts                   next-auth v5 設定（プロジェクト root）
```

ページ・コンポーネントから認証情報を取りたいときは：

```tsx
"use client";
import { useAuth } from "@/components/AuthProvider";

export function Foo() {
  const { user, status, signOut } = useAuth();
  // ...
}
```

mock / real のどちらでも同じ shape の値を返すので、ページコードは何も変えなくていいです。

---

## 5. 次の段階：DB 連携

JWT セッションのみだと「お気に入り大学」「資料請求履歴」「診断結果」などをサーバー側に持てません。永続化したくなったら：

1. **Vercel Postgres / Neon** をプロビジョニング
2. `npm install @auth/prisma-adapter prisma @prisma/client`
3. `prisma schema` で User / Account / Session / VerificationToken テーブル定義
4. `auth.ts` に `adapter: PrismaAdapter(prisma)` を追加
5. `session.strategy` を `"database"` に変更

詳細は [Auth.js 公式ドキュメント](https://authjs.dev/getting-started/adapters/prisma) 参照。
