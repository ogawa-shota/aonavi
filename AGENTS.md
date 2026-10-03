<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AOナビ repository guidance

## Read first

- `docs/SITE.md` is the current route, purpose, navigation, CTA, and planned-route boundary.
- `docs/DESIGN.md` is the current observed implementation contract. It is neither user approval nor Gold.
- `docs/AUTH-SETUP.md` covers mock and real Auth.js setup.
- `README.md` records setup, architecture, and commands.
- Use [Shota AI OS orchestration](../shota-ai-os/core/orchestration.md) and its `web-product` skill for methodology.

## Local constraints

- Preserve the App Router structure in `src/app/`, shared UI in `src/components/`, typed in-repository content in `src/lib/content/`, and mock/real authentication boundary in `src/lib/auth/` and `auth.ts`.
- Confirm a route in `src/app/**/page.tsx` before describing it as implemented. Historical plans under `docs/archive/` are not current specifications.
- Preserve the pink/lime/black editorial system described in `docs/DESIGN.md` during scoped maintenance; do not revive archived blue/pastel proposals as current truth.
- Keep generic design and implementation methodology in Shota AI OS, not in this repository.
- Never commit secrets or real OAuth credentials.

## Change routing

Classify UI scope and run the corresponding workflow through the canonical Shota AI OS `web-product` skill. This repository contributes only the current contract in `docs/DESIGN.md`, local constraints, and commands; do not replace the current contract without an explicit redesign request.

## Commands

- `npm run dev`: local development at `http://localhost:3000`
- `npm run build`: production build
- `npm run lint`: ESLint
- `npm run start`: serve a production build

## Definition of done

- `npm run lint` and `npm run build` pass, or failures are reported.
- `docs/SITE.md` and `docs/DESIGN.md` remain accurate when routes, navigation, CTAs, or the visual system change.
- Technical QA and visual QA are reported separately. Affected UI is checked at desktop and mobile; add tablet for large changes.
- Small UI work preserves typography, color, spacing, shape, motion, navigation, and unaffected sections outside the requested scope.
- Authentication remains safe in mock mode unless real OAuth work is explicitly requested.
