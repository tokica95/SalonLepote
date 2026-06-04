# Usluge — Bento Grid Redesign
**Date:** 2026-06-05
**Project:** c:\Users\Sava\Projekti\SalonLepote

---

## Summary

Replace the current split showcase layout (`showcase-wrap` / `showcase-stage`) on `usluge.html` with a bento grid of photo cards. Each card shows a service name by default; hovering reveals a pink overlay with tagline, bullet list, and a "Detaljnije" button that opens the existing modal. Manikir occupies the hero (2×2) position in the top-left corner.

---

## Grid Structure

4-column CSS grid, 3 rows. All 9 services:

```
col:  1         2         3           4
row1  [Manikir──────────] [Frizure   ] [Pedikir   ]
row2  [Manikir──────────] [Šminke    ] [Trepavice ]
row3  [Tretm. lica      ] [Tretm.tela] [Depilacija] [Masaža]
```

Row heights: 220px / 220px / 170px (desktop). Cards stretch to fill.

### Grid placement (CSS)
| Service        | `grid-column` | `grid-row` |
|----------------|---------------|------------|
| Manikir (hero) | 1 / 3         | 1 / 3      |
| Frizure        | 3             | 1          |
| Pedikir        | 4             | 1          |
| Šminke         | 3             | 2          |
| Trepavice      | 4             | 2          |
| Tretmani lica  | 1             | 3          |
| Tretmani tela  | 2             | 3          |
| Depilacija     | 3             | 3          |
| Masaža         | 4             | 3          |

---

## Card Anatomy

### Default state (always visible)
- Full-bleed photo background (existing Unsplash `src` from current `stage-img` elements)
- `object-fit: cover`, `object-position: center top`
- Permanent gradient overlay: `linear-gradient(160deg, rgba(40,5,20,0.25), rgba(10,2,8,0.55))`
- Bottom label: service number (e.g. `02`) + service name in Cormorant Garamond
- On hover: photo scales to 106% (`transform: scale(1.06)`) over 0.5s ease

### Hover state (desktop) / tap state (mobile)
- Full-card overlay: `linear-gradient(160deg, rgba(106,15,47,0.82), rgba(198,60,105,0.72))` + `backdrop-filter: blur(2px)`
- Entrance animation: `opacity: 0 → 1`, `translateY(8px → 0)`, 0.3s ease
- Bottom label fades out simultaneously
- Contents (hero card / small card):
  - Service name (h3, Cormorant Garamond)
  - Tagline — 1 sentence
  - Pill list: first 3–4 items from the existing "Šta je uključeno" list
  - "Detaljnije →" button — triggers existing `svc-modal` (no change to modal code)

### Hero card differences (Manikir)
- Name: `font-size: 1.55rem`
- Tagline: shown (hidden on small cards at row 3)
- Pill list: up to 6 items
- Button: larger padding

---

## Interaction

- **"Detaljnije" click**: reuses the existing `svc-modal` popup (no changes to modal HTML or JS). The button gets `data-service="manikir"` (etc.) exactly as `sp-btn-detail` does today.
- **Keyboard**: each card is `role="button"` + `tabindex="0"`. Enter/Space triggers hover state and opens modal.
- **Only one hover overlay visible at a time** — CSS handles this naturally (no JS needed).

---

## Responsive

| Breakpoint | Layout |
|------------|--------|
| ≥ 900px    | 4-col grid as above |
| 600–899px  | 2-col grid; Manikir spans 2 cols, 1 row (not 2×2); row heights auto |
| < 600px    | 1-col stack; all cards equal height 200px; hover → tap-to-toggle |

On mobile, tapping a card toggles the overlay (first tap = show, second tap or tap elsewhere = hide). This is handled by a small JS toggle class — not hover.

---

## CSS Changes

Remove all `.showcase-*`, `.stage-*`, `.smi-*`, `.sp-*`, `.sf-*` rules from `style.css` (they become dead code once the HTML is replaced).

New classes to add:
- `.bento-grid` — CSS grid container
- `.bc` — individual card (`position: relative; overflow: hidden; border-radius: 10px`)
- `.bc--hero`, `.bc--frizure`, … `.bc--massage` — grid placement modifiers
- `.bc__bg` — photo layer (`position: absolute; inset: 0; background-size: cover`)
- `.bc__dim` — permanent dark overlay
- `.bc__label` — bottom name strip (default visible)
- `.bc__hover` — full-card overlay (opacity 0 by default, 1 on `.bc:hover` / `.bc--active`)
- `.bc--active` — JS-added class for mobile tap state

---

## JS Changes

Remove `initShowcase()` from `script.js` (the tab-switching logic for the old layout).

Add `initBento()`:
- Queries all `.bc` elements
- On `click` (mobile): toggles `.bc--active`, removes it from all other cards
- On `keydown` Enter/Space: same as click + focuses the "Detaljnije" button inside
- Existing `initModal()` remains unchanged

---

## i18n

No new translation keys needed. All service text (names, taglines, pill items) is already in the existing translations object in `script.js` under `svc_*` keys. The JS for `initBento()` will populate card content from the same data structure used by `initShowcase()` today.

---

## Out of Scope

- Pricing on this page
- Category filter or search
- Lazy-loading images (they are already `loading="lazy"` in the current stage-img divs; reuse)
- Animations between page load and grid appearance (no stagger)
