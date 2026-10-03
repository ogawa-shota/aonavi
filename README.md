# AOナビ

総合型選抜（旧AO入試）に特化した、年内入試情報、大学・対策塾検索、ノウハウメディアをまとめたポータルのNext.js実装です。

運営表記：KYUTE合同会社

## Current project truth

- [Current site and route contract](./docs/SITE.md)
- [Current observed design contract](./docs/DESIGN.md)
- [Authentication setup](./docs/AUTH-SETUP.md)

旧構成書は [2026-05-02 product plan](./docs/archive/2026-05-02_product-plan.md) として保存しています。そこにあるrouteやblue/pastel design proposalを、現在の実装済み仕様として扱わないでください。

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4
- Auth.js / next-auth v5（mock認証とGoogle OAuthを切替）
- Vercel（ホスティング）

## Setup

Node.js 20.9以上を使用してください。

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) を開きます。環境変数を設定しない場合はmock認証で動作します。Google OAuthを利用する場合は[認証セットアップ](./docs/AUTH-SETUP.md)に従って `.env.local` を設定してください。

## Commands

```bash
npm run dev    # 開発サーバー
npm run build  # 本番ビルド
npm run start  # 本番ビルドを起動
npm run lint   # ESLint
```

## Architecture

```text
src/app/          page routes and Auth.js route handler
src/components/   shared UI and authentication components
src/lib/content/  universities, schools, articles, and other typed demo content
src/lib/auth/     mock / real authentication switch
docs/             current contracts, authentication setup, and historical archive
```

The repository currently contains sample/static content and several incomplete integrations. In particular, the resource-request form identifies its submission as unconnected/dummy, and real OAuth is optional. Treat visible UI as current implementation evidence, not proof that a production workflow is complete.

UI change methodology lives in Shota AI OS. For scoped changes, use the project-specific preserve rules in `docs/DESIGN.md` and keep unrelated routes and sections unchanged.
