# Usluge — Accordion Redesign Spec
**Date:** 2026-06-04  
**Project:** c:\Users\Sava\Projekti\SalonLepote  
**Relates to:** [2026-05-31-salon-lotus-design.md](2026-05-31-salon-lotus-design.md)

---

## Summary

Redesign `usluge.html` — replace the 10-card grid with a full-width accordion list. Each service has a visible trigger row (icon + name + short tagline) and an expandable panel with a detailed description and bullet list of what is included. No pricing links anywhere on this page; the CTA in each panel links to `kontakt.html`.

---

## Layout

### Trigger row (always visible)
```
[ikona]  [Naziv usluge]                         [▼ strelica]
         [Kratki tagline — 1 rečenica]
```
- Full-width, padding: 24px 0
- Separated by `1px solid var(--border)`
- Hover: background transitions to `var(--bg-alt)`, arrow color → `var(--accent)`
- Cursor: pointer

### Expanded panel
```
[detaljan paragraf — 2-3 rečenice]

Šta je uključeno:
• Stavka  • Stavka  • Stavka
• Stavka  • Stavka  • Stavka

[Zakažite termin →]  (links to kontakt.html)
```
- Border-left: `3px solid var(--accent)`, padding-left: 32px
- Bullet grid: `display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))`
- CTA: class `btn btn-outline-dark`

### Animation
- CSS `grid-template-rows: 0fr → 1fr` transition (0.3s ease)
- Arrow: `transform: rotate(0deg) → rotate(180deg)` (0.25s)
- Only one panel open at a time — opening a new one closes the previous

---

## Content

### 1. Frizure
**Tagline:** Transformišemo vašu kosu uz stručno šišanje, bojenje i negu.

**Detalji:** Naš frizerski tim prati najnovije trendove i tehnike kako bi svaki stil bio savršeno prilagođen vašem licu, tipu kose i karakteru. Koristimo isključivo profesionalne proizvode koji neguju kosu tokom i posle svakog tretmana. Bez obzira da li tražite dramatičnu promenu ili suptilno osveženje, tu smo za vas.

**Šta je uključeno:**
- Šišanje i stilizovanje
- Bojenje (jednobojno, pramenovi)
- Balayage i ombre tehnika
- Keratinski tretman
- Proteinski tretman
- Feniranje i oblikovanje
- Svečane i venčane frizure

---

### 2. Manikir
**Tagline:** Savršeni nokti svakog dana — od klasičnog do umetničkog dizajna.

**Detalji:** Nega ruku i noktiju koja kombinuje preciznost i estetiku. Koristimo premium gel i akrilne materijale koji dugotrajno čuvaju lepotu vaših noktiju. Svaki tretman počinje negom ruku kako biste izašli sa potpuno odmorenim i prelepim rukama.

**Šta je uključeno:**
- Klasični manikir
- Gel lak i trajni lak
- Produžavanje noktiju (gel / akril)
- Skidanje gela i akrilika
- Nail art i ukrašavanje
- Spa manikir sa peelingom
- French i baby boomer

---

### 3. Pedikir
**Tagline:** Nežna i stručna nega stopala za vaš savršen korak.

**Detalji:** Vaša stopala zaslužuju jednaku pažnju kao i ostatak tela. Naši pedikir tretmani kombinuju medicinsku preciznost sa opuštajućom negom — savršena kombinacija zdravlja i lepote. Idealno pre letnje sezone, ali i tokom cele godine.

**Šta je uključeno:**
- Klasični pedikir
- Medicinski pedikir
- Gel lak na stopalima
- Spa pedikir sa kupkom i peelingom
- Uklanjanje žuljeva i kurjeg oka

---

### 4. Šminke
**Tagline:** Profesionalna šminka za svaku priliku — od prirodne do glamurozne.

**Detalji:** Svaki make-up tretman počinje razgovorom o vašim željama i prigodom. Koristimo vrhunske profesionalne proizvode dugotrajne formule koji ostaju savršeni tokom celog dana i noći. Naše šminkerke prate aktuelne trendove i prilagođavaju ih vašem tipu lica.

**Šta je uključeno:**
- Svečana šminka
- Naturalna i dnevna šminka
- Venčana šminka (bridal)
- Kreativna i editorijalna šminka
- Airbrush šminka

---

### 5. Trepavice i obrve
**Tagline:** Upečatljiv pogled bez truda — svaki dan.

**Detalji:** Oči govore više od reči — zato posvećujemo posebnu pažnju svakom detalju. Naši tretmani za trepavice i obrve dizajnirani su tako da naglase prirodnu lepotu vašeg pogleda i smanje dnevnu rutinu šminkanja. Rezultati traju nedeljama.

**Šta je uključeno:**
- Lift trepavica
- Laminacija trepavica
- Produžavanje trepavica (classic / volume / mega volume)
- Bojenje trepavica
- Laminacija obrva
- Bojenje obrva
- Dizajn i korekcija oblika obrva

---

### 6. Tretmani lica
**Tagline:** Sijajuća koža prilagođena upravo vašem tipu lica.

**Detalji:** Svaki tretman lica počinje analizom kože kako bismo izabrali protokol koji donosi vidljive rezultate. Kombinujemo savremenu opremu i aktivne sastojke koji deluju dubinski — od prvog tretmana osetićete razliku u teksturi, sjaju i elastičnosti kože.

**Šta je uključeno:**
- Dubinsko čišćenje lica
- Hidratacijski tretman
- Hemijski piling
- Anti-age tretman
- Mezoterapija
- Mikrodermoabrazija
- Tretman za pigmentaciju i bore

---

### 7. Tretmani tela
**Tagline:** Oblikujte i zategnite telo uz savremene tehnologije.

**Detalji:** Naši tretmani tela koriste najsavremenije aparature za neinvazivno oblikovanje i zatezanje. Kavitacija i radiofrekvencija deluju sinergistički — razlažu masno tkivo i istovremeno stimulišu produkciju kolagena za vidljivo zategnututu i glatkiju kožu već posle prvih tretmana.

**Šta je uključeno:**
- Kavitacija (ultrazvučno razlaganje masti)
- Radiofrekvencijsko zatezanje tela
- RF lifting lica i vrata
- Anti-celulit program
- Oblikovanje struka, trbuha i butina

---

### 8. Depilacija i laser
**Tagline:** Dugotrajno glatka koža uz bezbedne i efikasne metode.

**Detalji:** Od klasične voštane depilacije do laserskog uklanjanja dlačica — nudimo opcije za svaku potrebu i tip kože. Laser depilacija daje trajne rezultate već nakon nekoliko tretmana, dok voštana depilacija pruža trenutnu glatkoću. Svi tretmani se izvode u sterilnim uslovima sa najvećom pažnjom prema osjetljivosti kože.

**Šta je uključeno:**
- Voštana depilacija (svi delovi tela)
- Brazilska depilacija
- Šećerna depilacija (sugaring)
- Laser depilacija lica
- Laser depilacija tela

---

### 9. Masaža
**Tagline:** Potpuno opuštanje tela i duha uz stručne terapeutske masaže.

**Detalji:** Masaža nije luksuz — ona je neophodna nega tela i uma. Naši masažni terapeuti primenjuju različite tehnike prilagođene vašim potrebama — od dubokog otklanjanja napetosti do nežnog opuštanja uz aromaterapiju. Svaka sesija je personalizovano iskustvo.

**Šta je uključeno:**
- Relaksaciona masaža
- Sportska masaža
- Anti-celulit masaža
- Masaža leđa i ramena
- Masaža stopala (refleksologija)
- Masaža lica i glave
- Aromaterapija

---

### 10. Sauna i solarijum
**Tagline:** Opuštanje, detoksikacija i savršen ten — tokom cele godine.

**Detalji:** Naša finska sauna i moderni solarijum savršeni su za detoksikaciju organizma, opuštanje mišića i pripremu kože. Preporučujemo kombinovani program — sauna otvara pore i priprema kožu, a naši stručnjaci pomažu u odabiru sigurnog programa za solarijum prilagođenog vašem fototipu.

**Šta je uključeno:**
- Finska sauna (individualna sesija)
- Kombinovani program (sauna + masaža)
- Solarijum (po minutu ili paket)
- Savet za pripremu i zaštitu kože

---

## i18n

All new text nodes get `data-i18n` keys. EN and RU translations to be added in `script.js` under the existing translations object, following the same key naming pattern as existing service keys (`svc_*`).

---

## CSS Changes

New classes to add to `style.css`:
- `.services-accordion` — container, replaces `.services-grid`
- `.accordion-item` — single service row wrapper
- `.accordion-trigger` — clickable header (flex row)
- `.accordion-icon` — emoji icon, 2rem
- `.accordion-title-wrap` — flex column (name + tagline)
- `.accordion-name` — h3 styling
- `.accordion-tagline` — muted text, 0.95rem
- `.accordion-arrow` — SVG or `▾` character, transition rotate
- `.accordion-panel` — collapsible container, `display: grid`
- `.accordion-panel-inner` — inner wrapper for `overflow: hidden`
- `.accordion-detail` — paragraph text
- `.accordion-items-list` — bullet grid
- `.accordion-item--open` — state class, added by JS

## JS Changes

New `initAccordion()` function in `script.js`:
- Queries all `.accordion-trigger` elements
- On click: toggle `.accordion-item--open` on parent, close all siblings
- Pure class toggling — CSS handles all animation

---

## Out of Scope

- Pricing anywhere on this page
- Category filter or search
- Images per service (v1 — icons only)
- Separate sub-pages per service
