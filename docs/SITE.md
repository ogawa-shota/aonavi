# AOナビ Site Contract

Status: current implemented route and product-surface map.

This document separates executable routes from historical or unresolved plans. `src/app/**/page.tsx` is authoritative for whether a page currently exists; if the code and this document differ, update this document.

## Purpose

The current implementation presents AOナビ as a Japanese portal for students researching comprehensive admissions, universities, preparation schools, entrance schedules, past-exam guidance, events, news, and application know-how. It also provides diagnosis, account, and resource-request demonstration surfaces.

## Navigation and main actions

- **Primary navigation:** `/universities`, `/juku`, `/admission`, `/pastexam`, `/column`.
- **Secondary/mobile navigation:** `/start`, `/news`, `/event`, `/diagnosis`, `/about`.
- **Primary conversion action:** free resource request at `/resource-request`.
- **Supporting actions:** diagnosis at `/diagnosis`, account entry through `/login`, `/signup`, and `/mypage`.
- **Shared chrome:** all current page routes use the shared Header and Footer from the root layout.

## Current implemented routes

| Route | Current role | Notes/status |
| --- | --- | --- |
| `/` | Portal home and discovery hub | Current; links to core discovery/content surfaces |
| `/start` | First-time visitor guide | Current |
| `/universities` | University search/list surface | Current; repository content is in-repository sample/static data |
| `/universities/[slug]` | University detail | Current dynamic route |
| `/juku` | Preparation-school search/list surface | Current; repository content is in-repository sample/static data |
| `/juku/[slug]` | Preparation-school detail | Current dynamic route |
| `/admission` | Admissions schedule/information | Current |
| `/pastexam` | Past-exam and question-trend guidance | Current |
| `/column` | Article index | Current |
| `/column/[slug]` | Article detail | Current dynamic route |
| `/event` | Open-campus/event surface | Current |
| `/news` | Admissions news surface | Current |
| `/ranking` | Ranking surface | Current |
| `/diagnosis` | Admissions-fit / readiness diagnosis | Current |
| `/resource-request` | Multi-school resource-request demonstration | Current UI; submission is explicitly unconnected/dummy |
| `/login` | Account login | Current; mock authentication is the default without OAuth configuration |
| `/signup` | Account registration | Current |
| `/mypage` | Account dashboard | Current |
| `/about` | Operator/company surface | Current; includes a link to unimplemented `/contact` |

### Route handler

| Route | Current role |
| --- | --- |
| `/api/auth/[...nextauth]` | Auth.js handler used when real authentication is configured |

## Planned or unresolved route signals

No new route in this section is an approved delivery commitment. These entries are retained only where the current UI or conventional legal navigation shows an unresolved destination.

| Route | Evidence | Status |
| --- | --- | --- |
| `/contact` | Current `/about` page links to this path, but no `page.tsx` exists | Planned/unresolved implementation gap |
| `/privacy` | Footer displays a privacy label but currently uses `#` | Unresolved; route not implemented |
| `/terms` | Footer displays a terms label but currently uses `#` | Unresolved; route not implemented |

The archived plan also proposed nested university/school filters, admission details, column categories, `/experience`, and `/interview`. There is no current route or active navigation evidence for those pages, so they remain archive-only rather than current planned scope.

## Current implementation boundaries

- Shared Header/Footer and global tokens apply across current page routes.
- Content under `src/lib/content/` is part of the current demo implementation; do not infer external CMS or production data synchronization.
- Mock authentication is expected when OAuth variables are absent.
- Resource-request submission is not connected. Visible form completion must not be described as a functioning delivery integration.

## Archive

- [`archive/2026-05-02_product-plan.md`](archive/2026-05-02_product-plan.md) is a historical product/design plan. Its blue/orange/pastel direction and unimplemented routes are not current truth.
