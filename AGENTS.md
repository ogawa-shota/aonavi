<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AOナビ

AOナビ is KYUTE's Japanese portal for students researching comprehensive admissions, universities, preparation schools, and application guidance.

## Architecture

- `src/app/`: Next.js App Router pages and route handlers
- `src/components/`: shared interface and authentication components
- `src/lib/content/`: typed, in-repository content data by domain
- `src/lib/auth/` and `auth.ts`: mock/real authentication switch and Auth.js configuration
- `src/app/globals.css`: current visual tokens and shared utilities

Read `README.md`, `site-structure-aonavi.md`, and `docs/AUTH-SETUP.md` before changing product scope or authentication. The site structure is a product plan; confirm the current route tree before assuming a planned route exists.

## Commands

- `npm run dev`: local development at `http://localhost:3000`
- `npm run build`: production build
- `npm run lint`: ESLint
- `npm run start`: serve a production build

Preserve the existing architecture and visual language. For meaningful UI changes, inspect the real page in a browser at desktop, tablet, and mobile sizes; check keyboard access, focus states, interactions, and console errors before finishing. Never commit secrets or real OAuth credentials.

## Shota AI OS entry point

Use [canonical orchestration](../shota-ai-os/core/orchestration.md) to select the workflow and completion gates. Read the relevant skill there; do not duplicate its methodology here. Keep this repository's architecture, constraints, commands, and local instructions in force. If the sibling checkout is unavailable, resolve `~/.agents/skills/context-router/SKILL.md` to its canonical directory.
