# Salon Lotus — Design Spec
**Date:** 2026-05-31  
**Project:** c:\Users\Sava\Projekti\SalonLepote  
**Reference:** c:\Users\Sava\Projekti\mockperionica

---

## Overview

Multi-page website for **Salon Lotus** — beauty salon offering hair, nail, facial, body, and wellness services. Modeled after mockperionica in tech stack, hosting, and code patterns, but with a feminine light-elegant visual identity.

---

## Tech Stack

- **HTML5 / CSS3 / Vanilla JavaScript** — no framework, no build tools, no npm
- **Google Fonts:** Cormorant Garamond (serif, headings) + Inter (sans-serif, body)
- **Hosting:** Netlify (publish dir: `.`, same `netlify.toml` pattern as mockperionica)
- **No external JS dependencies**

---

## Visual Identity

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--bg` | `#faf7f4` | Page background (warm cream) |
| `--bg-alt` | `#f0e6e8` | Alternate section backgrounds |
| `--accent-light` | `#d4b8bd` | Borders, dividers, subtle accents |
| `--accent` | `#7a4f5a` | Primary accent — buttons, links, highlights |
| `--accent-dark` | `#3d2830` | Dark text, footer background |
| `--text` | `#2d1a20` | Body text |
| `--text-muted` | `#7a6068` | Secondary text, captions |

### Typography
- **Headings:** Cormorant Garamond, serif — letter-spacing: 3–5px, uppercase for section titles
- **Body:** Inter, sans-serif — 400/500 weight, 1.6 line-height
- **Fluid sizing:** `clamp()` for responsive type scale

### Design Language
- Soft, feminine, elegant — not minimal-cold, not over-decorated
- Generous whitespace
- Subtle hover effects: lift shadow + color transition on cards
- Scroll-reveal animations via IntersectionObserver (same pattern as mockperionica)
- Thin borders (`1px solid var(--accent-light)`) instead of hard outlines

---

## Site Structure

### Pages

| File | Nav Label | Sections |
|------|-----------|----------|
| `index.html` | Pocetna | Hero, O nama, Highlights (3 ikone) |
| `usluge.html` | Usluge | Grid 10 service cards |
| `galerija.html` | Galerija | Pre/posle grid po kategorijama |
| `cenovnik.html` | Cenovnik | Price tables by category |
| `kontakt.html` | Kontakt | Info, working hours (highlight today), Google map |

### Navigation (all pages)
- Sticky navbar: logo left, nav links center/right, language switcher far right
- Mobile: hamburger toggle (same JS pattern as mockperionica)
- Active page link highlighted
- Language switcher: SR (default) · EN · RU — `localStorage` persistence

---

## Page Specs

### index.html — Hero + O nama

**Hero section:**
- Full-viewport-height background image (placeholder: Unsplash beauty/salon photo)
- Dark overlay (`rgba(61, 40, 48, 0.55)`) for text contrast
- Centered content: eyebrow label → LOTUS (large serif) → tagline → CTA button "Zakaži termin" (links to `kontakt.html`)
- Fade-up staggered animation on load (0.1s–0.4s delays)

**O nama section:**
- 2-column grid: text left (heading + 2–3 sentences about the salon) + decorative right (accent block or small image)
- Below: 3 highlight cards with icons — e.g. "Iskusni tim", "Premium oprema", "Prijatna atmosfera"

---

### usluge.html — Services

- Intro heading + subtitle
- 10-card grid (responsive: 4-col → 3-col → 2-col → 1-col)
- Each card: icon/emoji, service name, short description, hover lift effect
- Services:
  1. Frizure
  2. Manikir
  3. Pedikir
  4. Sminke
  5. Trepavice
  6. Tretmani lica
  7. Tretmani tela (kavitacija, radiofrekvencija)
  8. Depilacija / Laser
  9. Masaža
  10. Sauna & Solarijum
- Scroll-reveal on cards (staggered)

---

### galerija.html — Before/After Gallery

- Intro heading + subtitle
- No category filter tabs in v1 — all pairs shown in a single grid
- Grid of before/after pairs:
  - Each pair: two images side by side (pre | posle) with a thin divider line
  - Label below: category name (e.g. "Manikir", "Frizura", "Tretman lica")
  - Hover: subtle overlay with category label
- Placeholder images on launch — owner replaces with real photos
- Responsive: 2-pair grid → 1-pair on mobile

---

### cenovnik.html — Pricing

- Intro heading + subtitle
- Price tables grouped by category (same visual pattern as mockperionica's `.price-table`)
- Each row: service name | duration (optional) | price (RSD)
- Alternating row backgrounds for readability
- Category headings as separators
- Note: "Cene su informativne — za tačan cenovnik kontaktirajte salon"

---

### kontakt.html — Contact

- Two-column layout: info left, map right
- Left column:
  - Address
  - Phone (clickable `tel:` link)
  - Email (clickable `mailto:` link)
  - Working hours grid — highlights current day of week (same JS pattern as mockperionica)
  - Social media links (Instagram, Facebook — placeholder hrefs)
- Right column: embedded Google Maps iframe (placeholder — owner adds real embed)
- CTA section below: "Zakažite termin telefonom ili posetite nas"

---

## Internationalization (i18n)

Same pattern as mockperionica:
- `data-i18n` attributes on all text elements
- JS translations object with keys for SR / EN / RU
- Language switcher with flag labels
- `localStorage` persistence (`lotus_lang`)
- All user-facing strings translated (nav, headings, body text, button labels, service names, footer)

---

## Shared Components (all pages)

### Navbar
- Logo (text "LOTUS" in Cormorant Garamond or SVG logo placeholder)
- Nav links: Pocetna · Usluge · Galerija · Cenovnik · Kontakt
- Language switcher dropdown: 🇷🇸 SR · 🇬🇧 EN · 🇷🇺 RU
- Mobile hamburger: toggle `.nav-open` class, animate links in
- Sticky with subtle shadow on scroll

### Footer
- Background: `var(--accent-dark)` (#3d2830), text: light cream
- Logo + tagline
- Nav links repeated
- Social links
- Copyright: "© 2026 Salon Lotus. Sva prava zadržana."

---

## Animations & Interactions

| Pattern | Implementation |
|---------|----------------|
| Hero fade-up | CSS `@keyframes fadeUp` + JS timeout delays on load |
| Scroll reveal | `IntersectionObserver` adds `.visible` class, CSS handles transition |
| Card hover | `transform: translateY(-4px)` + `box-shadow` transition |
| Hamburger | Toggle class, transform hamburger bars to X |
| Language switch | Update `data-i18n` elements via `innerHTML` |
| Working hours | JS `new Date().getDay()` → highlight current row |
| Navbar shadow | `scroll` listener adds `.scrolled` class |

---

## File Structure

```
SalonLepote/
├── index.html
├── usluge.html
├── galerija.html
├── cenovnik.html
├── kontakt.html
├── styles/
│   └── style.css        (~900+ lines, complete design system)
├── scripts/
│   └── script.js        (i18n, navbar, animations, working hours)
├── assets/
│   ├── hero.jpg          (placeholder — replace with real photo)
│   └── gallery/          (before/after image pairs — placeholders)
├── netlify.toml
└── .gitignore
```

---

## Netlify Config

Add HTTP→HTTPS and www→non-www redirects (same as mockperionica):
```toml
[[redirects]]
  from = "http://salonlotus.rs/*"
  to   = "https://salonlotus.rs/:splat"
  status = 301

[[redirects]]
  from = "https://www.salonlotus.rs/*"
  to   = "https://salonlotus.rs/:splat"
  status = 301
```

Security headers: X-Frame-Options, X-Content-Type-Options, Referrer-Policy (same as existing `netlify.toml`).

---

## Out of Scope (v1)

- Online booking system (external widget can be added later)
- Real gallery photos (owner provides after launch)
- Real price data — owner populates cenovnik.html with actual RSD prices (kalinabeauty.rs prices not publicly accessible via scraping; owner provides the list)
- Blog / news section
- Cookie consent banner
- Analytics
