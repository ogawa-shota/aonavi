# AOナビ

総合型選抜（旧AO入試）に特化した、年内入試マッチング × 対策塾検索 × ノウハウメディアのハイブリッドポータル。

運営：KYUTE合同会社

## ドキュメント

- [サイト構成書](./site-structure-aonavi.md)
- [認証セットアップ](./docs/AUTH-SETUP.md)

サイト構成書はプロダクト全体の計画を含みます。現在実装済みの画面は `src/app/` のルート構成を正としてください。

## スタック

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4
- Auth.js / next-auth v5（mock認証とGoogle OAuthを切替）
- Vercel（ホスティング）

## セットアップ

Node.js 20.9以上を使用してください。

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) を開きます。環境変数を設定しない場合はmock認証で動作します。Google OAuthを利用する場合は[認証セットアップ](./docs/AUTH-SETUP.md)に従って `.env.local` を設定してください。

## コマンド

```bash
npm run dev    # 開発サーバー
npm run build  # 本番ビルド
npm run start  # 本番ビルドを起動
npm run lint   # ESLint
```

## 主な構成

```text
src/app/          ページとRoute Handler
src/components/   共通UIと認証コンポーネント
src/lib/content/  大学・塾・記事等のドメインデータ
src/lib/auth/     mock / real認証の切替
```

重要なUI変更では、実ブラウザでDesktop・Tablet・Mobileを確認し、表示、操作、アクセシビリティ、console errorを検証してください。
