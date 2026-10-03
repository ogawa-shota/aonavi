---
Status: current observed implementation
Approval: Not proof of user approval
Gold: Not Gold
---

# AOナビ Web Design Contract

This document records the visual system currently observable in the code so future scoped changes do not accidentally redesign unrelated UI. It is not a proposal, quality endorsement, approved brand guide, or Gold deliverable.

## Scope

- **Status:** Current observed shared implementation.
- **Routes:** All current page routes listed in `docs/SITE.md` share the root layout, Header, Footer, global tokens, and common primitives.
- **Evidence:** `src/app/globals.css`, `src/app/layout.tsx`, `src/components/`, and current route components.

## Observed system

- **Typography:** Noto Sans JP is the Japanese/body face; Barlow Condensed drives Latin labels and many section headings; Archivo Black is used for display accents. Heavy `700–900` weights and uppercase English labels are common.
- **Colors:** Warm off-white background (`#fffdf8`), black/near-black ink (`#111111`), vivid pink (`#ff4f8b`, deeper `#e6005c`), acid lime (`#c8ff2e`), and cyan (`#71e7ff`). These are current implementation values, not accepted company-brand decisions.
- **Spacing:** Bounded `80rem` containers use `1.25rem` mobile and `2rem` desktop gutters. Sections commonly use generous `py-14` to `py-20` spacing, with denser card/list interiors.
- **Borders:** Strong black outlines, commonly `2px`, create hierarchy. Fine soft rules separate lists and navigation details.
- **Radius:** The system mixes hard-edged content cards and offset-shadow blocks with pill-shaped navigation, filters, and CTA controls. Do not normalize everything to one radius in a scoped change.
- **Motion:** Smooth scrolling, hover translations/shadow removal, and `fadeUp`, `float`, `drift`, and `shine` animations are present. No global `prefers-reduced-motion` override is currently defined in `src/app/globals.css`; do not claim otherwise, and do not expand motion during unrelated maintenance.
- **Section rhythm:** Large display headings, graphic chips, 48px grid/dot backgrounds, strong outlines, high-contrast CTA bands, and alternating off-white/white/black areas create an editorial-pop cadence.
- **Component language:** Bold editorial search portal: square information panels, offset hard shadows, pill actions, outlined chips, dense discovery lists, and high-visibility campaign banners.
- **Imagery:** University, school, article, and event imagery appears inside strongly framed editorial layouts. Preserve current aspect ratios, crops, overlays, and nearby typography when the image itself is not the requested scope.
- **CTA:** Free resource request is the dominant cross-site CTA. Diagnosis and account actions are supporting paths. Current forms and account surfaces may be demos; visual prominence does not prove backend completeness.
- **Responsive behavior:** Tailwind breakpoints govern most layouts, with the base/mobile state stacking content and shared gutters expanding at `768px`. Desktop navigation appears at large/xl widths, while smaller widths use the menu panel and mobile action layout.

## Preserve rules for small UI changes

1. Keep the pink/lime/black editorial palette and current font roles unless the requested element explicitly changes them.
2. Match the affected component's existing mix of border width, hard shadow, radius, and label treatment.
3. Preserve container width, grid background, section rhythm, and CTA hierarchy around the change.
4. Do not revive the archived blue/orange/pastel proposal or present it as current direction.
5. Do not restyle the Hero, Header, Footer, or neighboring sections when only one CTA, card, field, or section is requested.
