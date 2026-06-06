# Landing Page UI Rules — Kiến Trẻ

> **Source of truth**: Figma file `hpENQm1ppwt6pQqTZHjL4P` — sections `2439:21902` (Vượt trội landing) and `4971:29939` (Ôn thi chuyên landing).
> **Purpose**: This document captures the existing visual system so future sections can be generated consistently. **Do not redesign — only extend.**

---

## 0. Source Files & Token Origin

- All design tokens listed below are defined as Figma variables in the source file. Use the variable name in Figma (e.g. `Primary/500 (Main)`) — do not hard-code hex when a token exists.
- Both landing pages share the same token library, the same 1440 grid, and the same Montserrat type scale. Anything observed on one is valid on the other.
- Reference component file: `KIEN TRE` library (key `lk-73e2b…dcb78259`). Reference home library: `Vtest (New home🏠)`. **Use components from these libraries before drawing anything from scratch.**

---

## 1. Layout System

### 1.1 Page grid

| Property | Value | Notes |
|---|---|---|
| Outer page width | **1440 px** | Fixed desktop frame. Every section is full-bleed at 1440. |
| Content container width | **1240 px** | Centered, 100 px gutter on left and right (`x = 100`, `right = 100`). |
| Side gutter | **100 px** | Never inset less than 100 px. |
| Section vertical rhythm | **Section heights between 520–1364 px** | Sections are not auto-stacked with a global gap; each section frame includes its own top/bottom padding (typically 80–120 px). |
| Section top padding (typical) | **80–120 px** | Header block sits 80–120 px from section top edge. |
| Section bottom padding (typical) | **80–120 px** | CTA / last row sits 80–120 px above the bottom edge. |

### 1.2 Vertical rhythm

- Section header (title + subtitle) to content body: **40–60 px** gap.
- Title to subtitle: **16 px** gap.
- Eyebrow chip (if used) to title: **16 px** gap.
- Body content to CTA: **40–60 px** gap.
- Card grids: **16–24 px** gap between cards; **24 px** is the default.

### 1.3 Alignment behavior

- Section headers (title + subtitle) are **always centered** horizontally inside the 1240 container.
- Body content can be centered (stats, news, testimonials, hat giống) or split into left/right halves (hero, form). No 3+ column asymmetry.
- Vertical alignment inside a card row is **TOP-aligned** for content cards; **CENTER-aligned** for stat tiles and CTA bars.

### 1.4 Common section composition patterns

Every section follows one of these skeletons. Pick the closest match before designing.

1. **Centered text + centered visual + CTA**
   - Hero replacements, intro sections (e.g. hat giống, hôm nay/news).
2. **Centered text + grid of cards (3-up, 2×3, 5-radial, 4-up)**
   - List program, teacher list, students, news.
3. **Split 50/50** — text left / visual right (or vice versa)
   - Hero (text L / photo collage R), Form (form L / illustration R).
4. **Navy panel block** — full-width navy rounded panel with stats / list / table inside
   - 3 trụ cột vàng, FinalCTA selectors, footer top strip.
5. **Centered diagram** (table / pathway / hat giống wheel)
   - Pathway (curriculum table), Hạt giống (radial diagram).

### 1.5 Responsive layout patterns

> Desktop is the authoritative canvas. The source file does not contain dedicated mobile frames; existing responsive behavior is implicit:

- 1440 → fluid up to ~1280 by **proportional scale of the 1240 container only** (gutters absorb the difference).
- Below ~1024 px: 3-up grids collapse to 1-up, 2×3 stat grids collapse to 2-up. **Card widths flex; vertical spacing is preserved.**
- Hero split becomes stacked (text above, illustration below).
- **Forbidden**: introducing a 4-column desktop grid or making the container wider than 1240.

---

## 2. Typography System

Family: **Montserrat** for everything. No serif. No display font swap.

### 2.1 Heading hierarchy (Montserrat variable refs verbatim)

| Token | Size / LH | Weight | Use |
|---|---|---|---|
| `Montserrat/60 (Hero title)/Extrabold` | **60 / 72** | 800 | Hero H1 only |
| `Montserrat/60 (Hero title)/Bold (main)` | **60 / 72** | 700 | Hero H1 (alt weight) |
| `Montserrat/48 (Section title)/Bold (main)` | **48 / 60** | 700 | All section H2 titles |
| `Montserrat/36/Bold` | **36 / 44** | 700 | Sub-section / large card title |
| `Montserrat/30/Bold` `Montserrat/30/Extrabold` | **30 / 36** | 700–800 | Stat numbers, large emphasis |
| `Montserrat/24 (Sub heading)/Medium (main)` | **24 / 32** | 500 | Section subtitle (default) |
| `Montserrat/24 (Sub heading)/Semibold` | **24 / 32** | 600 | Card titles inside panels |
| `Montserrat/24 (Sub heading)/Bold` `Text-2xl/Bold` | **24 / 32** | 700 | Strong card title |
| `Montserrat/20/Bold` `Text-xl/Bold` | **20 / 28** | 700 | Stat label, table header |
| `Montserrat/20/Medium` `Text-xl/Semibold` | **20 / 28** | 500–600 | Quote text, prominent body |
| `Montserrat/18 (Body)/Regular (main)` | **18 / 28** | 400 | Default paragraph |
| `Montserrat/18 (Body)/Medium` | **18 / 28** | 500 | Slightly emphasised body |
| `Montserrat/18 (Body)/Semibold` `Body/Bold` | **18 / 28** | 600–700 | Card meta, strong inline |
| `Montserrat/16/Regular` `Medium` `Semibold` `Bold` | **16 / 24** | 400–700 | Card body, button text, footer links |
| `Montserrat/14/Bold` `Extrabold` | **14 / 20** | 700–800 | Eyebrow chip, small badge, footer head |
| `Montserrat/12/Medium` `Bold` | **12 / 16** | 500–700 | Tag pills, fine-print |

### 2.2 Spacing & widths

- Paragraph max width: **640–880 px** for centered subtitles (2 lines of 24/32 type). Never let body text run wider than ~880 px.
- Card body paragraph width: card inner width − 48 px (24 px padding on each side).
- Letter-spacing: **0** for every variable (no negative tracking, no expanded tracking).

### 2.3 Mixed-color heading pattern (mandatory)

Section titles always combine navy + orange to draw the eye. Examples that exist in-file:
- `"Khong có chuẩn mực chung cho một trí tuệ "` (navy) + `"VƯỢT TRỘI"` (orange).
- `"May lộ trình "` (navy) + `"Dệt"` (orange) + `" tương lai"` (navy).
- `"Lộ trình đào tạo "` (orange) + `"hệ sinh thái Kiến Trẻ"` (navy).
- `"Đội ngũ "` (navy) + `"\"Kiến thợ\""` (orange) + `" cần mẫn"` (navy).
- `"Lắng nghe câu chuyện "` (navy) + `"trưởng thành"` (orange) + `" của các "` (navy) + `"\"Chiến binh kiến\""` (orange).

**Rule**: at least one orange phrase per section title. Body subtitles are never orange.

### 2.4 Label / caption styles

- **Eyebrow chip** (above title): pill-shaped frame, `Montserrat/14/Bold` (orange text), `Secondary/50` fill with `Secondary/500` border at 25% alpha, 8 px vertical padding, 16 px horizontal padding, radius **1024**.
- **Tag pill** (on cards, e.g. "Lớp 1-3"): `Montserrat/14/Bold` white text on `Primary/500` / `Primary/600` / `Yellow/300` / `Secondary/500` fill, radius **6 px**, padding `4/10`.
- **Stat number caption** below the number: `Montserrat/18/Medium`, neutral subtle (`Neutral Blue/700`).
- **Footer headings**: `Montserrat/14/Bold` UPPERCASE, navy.

### 2.5 CTA text style

- Primary button text: `Montserrat/16/Bold` white, **center-aligned**.
- Secondary button text: `Montserrat/16/Semibold`, navy.
- Inline CTA link ("Xem chi tiết →"): `Montserrat/16/Semibold` navy, arrow appended in same color.

---

## 3. Color System

### 3.1 Primary (navy)

| Token | Hex | Usage |
|---|---|---|
| `Primary/50` | `#eff5fe` | Soft section backgrounds, illustration backdrops |
| `Primary/100` | `#d3deef` | Decorative dots, inactive chips |
| `Primary/200` | `#bbcae1` | Borders, dashed connectors on light bg |
| `Primary/400` | `#5c7dae` | Disabled / muted nav |
| `Primary/500 (Main)` | `#204983` | **Primary brand. All headings, primary cards on dark, default text emphasis.** |
| `Primary/600` | `#1a3a69` | Hover/active state of navy fills |
| `Primary/700` | `#132c4f` | Deepest navy — large dark panel fills |
| `Dark blue/50–900` (`#e5eeff`–`#001b4d`) | — | Secondary navy ramp for decorative variation (rare; do not introduce new ramps) |

### 3.2 Secondary (orange)

| Token | Hex | Usage |
|---|---|---|
| `Secondary/50` | `#fff7f2` | Eyebrow chip background, soft accent |
| `Secondary/100` | `#feefe5` | Card hover state, soft tag bg |
| `Secondary-Light` | `#fde7d5` | Hero illustration accents |
| `Secondary/200` | `#fbc299` | Light orange accents |
| `Secondary/300` | `#faa366` | Mid-tone fills, illustration |
| `Secondary/400` | `#f88533` | Hover lift of primary CTA |
| `Secondary/500 (Main)` | `#f66600` | **Primary CTA fill, accent text, sticker color, eyebrow text** |
| `Secondary/600` | `#c55200` | CTA pressed state, dark eyebrow text |
| `Secondary/700` | `#943d00` | Deepest orange (rare) |

### 3.3 Neutral / text

| Token | Hex | Usage |
|---|---|---|
| `Neutral Blue/0` | `#ffffff` | Section background (most common), card fill |
| `Neutral Blue/50` | `#f8fbff` | Section background (alt), secondary button bg |
| `Neutral Blue/100` | `#f3f6fa` | Soft surface |
| `Neutral Blue/200` | `#e7edf5` | Default card border, dividers |
| `Neutral Blue/500 (disabled)` | `#c2d2e5` | Disabled state |
| `Neutral Blue/700 (subtle)` | `#757e8a` | Subtitle, secondary body text |
| `Neutral Blue/800` | `#4e545c` | (rare) |
| `Neutral Blue/900 (primary)` | `#1f1f1f` | Default body text on light |

### 3.4 Accent (used sparingly for variety inside complex sections)

| Token | Hex | Where it appears |
|---|---|---|
| `Yellow/200` `300` `400` | `#ffe082` `#ffcb2e` `#ffbf00` | Star sparkles, pathway header pill, sun illustration |
| `Green/600 (main)` | `#29bb6e` | Success state (rare) |
| `Red/50` `Red/500` | `#ffefef` `#e84141` | Error state, "LỚP" pill marker (red flag in pathway) |
| `Cyan/1/3/8` | `#E6FFFB` `#87E8DE` `#006D75` | Tag accent in pathway columns |
| `Calendula Gold/1/3/6/7` | `#FFFBE6` `#FFE58F` `#FAAD14` `#D48806` | Tag accent in pathway columns |
| `Light Blue/700` | `#0a91d6` | Accent links (rare) |

### 3.5 Background usage rules

- **Default section background**: `#ffffff` or `Neutral Blue/50` (`#f8fbff`).
- **Soft tinted section**: subtle linear gradient `#ffffff → Primary/50 (#eff5fe)` top→bottom or diagonal. Used for hero, intro, and emotional sections.
- **Dark panel section**: full `Primary/500` or `Primary/700` rounded panel inside a light section (radius 16, **never** the whole section background). Always inset 100 px from edges.
- **Forbidden**: a section painted edge-to-edge in navy; black backgrounds; pure pastel sections that don't include navy or orange.

### 3.6 Surface / card colors

- White (`#ffffff`) card on light section.
- `Primary/500`–`700` card on light section (for dark "spotlight" cards inside grids — e.g. center card of list program, all stat tiles).
- `Secondary/50` card for emotional / warm cards (rare).
- Card border (light card): `Neutral Blue/200` at 1 px.
- Dark card has no border, uses `Shadow-large`.

### 3.7 Text color hierarchy

| Level | Token | When |
|---|---|---|
| 1 (heading) | `Primary/500` | All H1/H2, card titles on white |
| 1 alt | `Secondary/500` | Highlighted phrase inside a heading |
| 2 (body emphasis) | `Neutral Blue/900` | Card body, paragraph |
| 3 (subtle) | `Neutral Blue/700` | Subtitles, meta text, captions |
| Inverse | `Neutral Blue/0` | All text on navy / orange fills |

### 3.8 Border / divider colors

- Default card stroke: `Neutral Blue/200` (`#e7edf5`), 1 px.
- Secondary button border: `Btn/Secondary/Border/Default` = `#e7edf5`.
- Dashed connectors / illustration lines: `Primary/200` or `Secondary/500 @ 60%`, dashed `[4, 6]`.
- Section divider line in footer: `Neutral Blue/200` at 1 px, full container width.

### 3.9 Accent usage rules

- Orange (`Secondary/500`) is **reserved for**: CTAs, eyebrow chip text, one phrase per section title, illustration stickers/dots, "play" badges on photos, and active state highlights. **Never** as a section background, never on body paragraphs.
- Yellow / cyan / calendula appear **only** in the pathway table and a handful of illustrations. Do not introduce them in new generic sections.

---

## 4. Component Patterns

### 4.1 Buttons

#### Primary (orange pill)
- Fill: `Secondary/500` (`#f66600`).
- Text: `Montserrat/16/Bold` white.
- Border radius: **1024** (full pill — token `button-kids/border-radius/all`).
- Padding: **16 / 28** (vertical / horizontal) at standard size.
- Height: **56 px** standard; **64 px** hero.
- Shadow: orange soft drop — `color #f66600 @ 35%, offset (0,6), radius 16, spread -2`.
- Optional trailing arrow `→` in same weight/color.
- Border thickness in some kid-styled variants: **3 px** (`button-kids/border-thickness/large (56)`) using `Secondary/600` border.

#### Secondary (light pill)
- Fill: `Btn/Secondary/BG/Default` = `Neutral Blue/50` (`#f8fbff`).
- Border: `Btn/Secondary/Border/Default` = `Neutral Blue/200` (`#e7edf5`), 1 px.
- Text: `Montserrat/16/Semibold` navy.
- Same height + radius as primary.

#### Tertiary / link
- No fill, no border.
- Text: `Montserrat/16/Semibold` navy with trailing `→`.

**Rules**
- Only **one primary CTA** per section.
- CTA always sits at the bottom of the section, centered, with at least 40 px above and 80 px below.
- Hover: lighten orange to `Secondary/400`. Pressed: deepen to `Secondary/600`.
- **Forbidden**: square-corner buttons, gradient fills, multiple primary CTAs in one section.

### 4.2 Cards

| Variant | Fill | Stroke | Radius | Shadow | Padding |
|---|---|---|---|---|---|
| Default content card | `#ffffff` | `Neutral Blue/200` 1 px | **16** (token `border radius/card`) | `Shadow-large` | 24 |
| Dark spotlight card | `Primary/500` / `Primary/700` | none | 16 | `Shadow-large` | 24–32 |
| Soft tinted card | `Primary/50` or `Secondary/50` | matching 50-ramp border @ 25% | 16 | `Shadow-medium` | 24 |
| Stat tile (inside navy panel) | `Primary/600` | `Primary/400` 1 px | 16 | none | 20–24 |

**Inside a card** (default order, top→bottom):
1. Optional icon (24–48 px) **or** tag pill (top-left).
2. Title (`Montserrat/20/Bold` or `Montserrat/24/Bold`), 8 px below icon.
3. Body (`Montserrat/16/Regular`), 12 px below title.
4. Optional inline link/CTA (`Xem chi tiết →`), 16 px below body, bottom-anchored if card height is fixed.

### 4.3 Navbar (Header)

- Full-width 1440 × **96** px.
- Fill: white.
- Bottom border: `Neutral Blue/200` 1 px.
- Logo at left (`x = 100`), nav items centered, primary CTA (orange pill "Đăng nhập") at right (`x = 1340 − button width`).
- Nav items: `Montserrat/14/Bold` UPPERCASE navy with caret-down icon for menus.
- Spacing between nav items: **32 px**.
- Sticky position implied (no token, behavioral rule).

### 4.4 Footer

- Full-width 1440 × **680** px.
- Fill: `Neutral Blue/50` (`#f8fbff`).
- Top divider: `Neutral Blue/200` 1 px below the logo strip.
- Layout: 4 columns inside 1240 container — logo+contact (col 1), system addresses (col 2), nav (col 3), policy + back-to-top (col 4).
- Column heading: `Montserrat/14/Bold` UPPERCASE navy.
- Link list: `Montserrat/16/Regular` `Neutral Blue/900`, **24 px** row gap.
- Back-to-top button = orange pill primary, label "Lên đầu" with up-arrow icon.
- Address rows: pin icon (orange `Secondary/500`) + 2-line text (title 16 medium / detail 14 regular subtle).

### 4.5 Badges & tags

- **Eyebrow chip**: pill, radius 1024, `Secondary/50` bg, `Secondary/500` border @ 25%, padding `8/16`, optional 8 px orange dot prefix, text `Montserrat/14/Bold` `Secondary/600`.
- **Class badge** ("Lớp 1-3", "Lớp 4"): rectangle radius **6**, padding `4/10`, navy fill, white text `Montserrat/14/Bold`.
- **Status flag** (red "LỚP" pennant on pathway): radius 6 + bottom V-notch, `Red/500` fill, white text.
- **"Hot/New" callout** (on hero): rounded rectangle radius 8–12, `Yellow/300` fill, navy text, slight rotation `-6°` to feel sticker-like.

### 4.6 Inputs (Form)

- Single-field height: **56 px**.
- Fill: white.
- Border: `Neutral Blue/200` 1 px, radius **8 px** (smaller than card radius — inputs do not use card radius 16).
- Placeholder text: `Montserrat/16/Regular` `Neutral Blue/700`.
- Focused state: border `Primary/500`, shadow `Shadow-medium`.
- Inputs stacked vertically with **12 px** gap inside a form container.
- Submit button = primary CTA, full-width inside the form container, sits **16 px** below the last field.
- Disclaimer text below submit: `Montserrat/12/Medium` `Neutral Blue/700` italic.

### 4.7 Tabs / segmented selectors

- Pill row inside a card or dark panel.
- Each tab = pill radius 1024, padding `12/20`, text `Montserrat/16/Bold`.
- Inactive tab: transparent fill, navy text.
- Active tab: `Secondary/500` fill, white text, `Shadow-medium`.
- Spacing between tabs: **8 px**.
- Use in: FinalCTA grade-level selector, program selector inside `Container` section.

### 4.8 Accordion (FAQ-style — used in some variants)

- Container card (white, radius 16, border `Neutral Blue/200`).
- Header row: `Montserrat/20/Bold` navy text on left, chevron icon on right, padding `20/24`.
- Expanded body: `Montserrat/16/Regular` `Neutral Blue/900`, padding `0/24/20/24`.
- Divider between items: `Neutral Blue/200` 1 px.
- Active item: faint `Primary/50` background fill on header.

### 4.9 Testimonials (student quotes)

- Card layout: portrait photo top, quote body, name + school footer.
- Card fill: white, radius 16, `Shadow-large`.
- Decorative quote marks: large orange `"` icon at top-left of body, `Secondary/500`, ~48 px.
- Name: `Montserrat/16/Bold` navy.
- School line: `Montserrat/14/Bold` orange.
- Footer block sits in a soft `Primary/50` strip across the card bottom.

### 4.10 Pricing / program cards (list program section)

- 5-card radial: 4 outer white cards + 1 center dark navy card.
- Outer card width ≈ 280 px, height ≈ 200 px, 24 px padding.
- Center card highlighted with `Primary/500` fill, white text, primary CTA inside.
- Connecting dashed orange line (`Secondary/500 @ 60%`, dash `[4, 6]`) from center to each outer card.
- Each outer card: small color-tinted icon top-left, title `Montserrat/18/Bold` navy, body `Montserrat/16/Regular` `Neutral Blue/700`, optional `→` button bottom-right.

### 4.11 CTA blocks

Two reusable patterns:
1. **Inline CTA strip** (under section content): centered hint text `Montserrat/18/Medium` navy + primary pill button to its right, 16 px gap. Used in stats, list program, hat giong.
2. **Final CTA panel**: full-width `Primary/700` rounded panel inset 100 px, radius 16, contains pill-segmented control (grade selector), program list, and primary CTA. Padding 48 px.

### 4.12 Feature sections (5-radial / 2-column expandable / 4-grid)

Three reusable patterns appear:
- **5-radial** (List program): 1 center + 4 outer cards with dashed connectors.
- **2-column expandable list** (5 điểm khác biệt): photo card left, vertical list of accordions right, one always expanded.
- **2×3 stat grid** (Những con số biết nói): six tiles on navy panel, icon + number + label.
- **3+2 grid** (Teacher list): 3 in row 1, 2 centered in row 2.
- **3-up news/testimonial row**: equal-width cards, gap 24.

---

## 5. Visual Language

- **Style**: bright, premium EdTech with a playful sticker aesthetic. Friendly, not corporate.
- **UI density**: medium. Generous whitespace around section headers; tighter inside cards.
- **Illustration style**: a mix of (a) real student photography with hand-drawn orange sticker overlays (graduation cap, flowers, sparkles), and (b) flat vector spot illustrations (sun, books, seedlings) with navy + orange + yellow palette. **No 3D renders. No isometric. No photorealistic backgrounds.**
- **Icon usage**: minimal — only small line/filled icons inside chips, list items, and stat tiles. 24 px standard, 20 px small. Icons inherit the card's text color.
- **Imagery behavior**: photos are always inside a card with radius 16. Photos never bleed to the section edge. Each photo card may have one decorative orange sticker placed at a corner (rotated `±6°`).
- **Whitespace philosophy**: generous breathing room around section headers (≥80 px above title). Cards and grids breathe with 24 px gaps. Never crowd the right gutter — keep 100 px clear at all times.
- **Visual hierarchy**: 1) section title with orange highlight, 2) section subtitle in muted gray, 3) cards/grid with consistent stroke + shadow, 4) single primary CTA. The eye should be able to scan title → cards → CTA in three saccades.
- **Decoration motif**: soft "glow" rounded-rectangle blobs in section corners (low-opacity orange or navy, large blur), tiny 4-point yellow/orange stars as sparkles, dashed orange connector lines between related items.

---

## 6. Reusable Layout Patterns

Identify the closest existing pattern when generating a new section. Do not invent a new layout.

1. **Hero split (text L + visual R)** — `Hero banner direction` (3224:11860).
2. **Radial-5 feature** — `List program` (3673:18409).
3. **Radial diagram** — `hành trình hạt giống` (3275:13202): central illustration + 4 numbered corner cards + dashed connectors.
4. **2×3 stat panel on navy** — `Section: 3 trụ cột vàng` (8010:103974).
5. **Team / portrait grid 3+2** — `Teacher list` (7137:87471).
6. **Testimonial mosaic (3-up student + 4-up parent)** — `Students` (6584:101476).
7. **News / event 3-up** — `Kiến Trẻ hôm nay` (1386:6136).
8. **Curriculum matrix table** — `Pathway` (8034:119097).
9. **Stacked-selector CTA panel** — `FinalCTA` (2797:15485).
10. **Form + illustration split** — `Form/Tư vấn` (5154:18312).
11. **Footer (3-col link grid)** — `Footer` (1386:6243).
12. **Top navbar** — `Header` (2439:21096).
13. **2-column expandable list (photo + accordion list)** — `5 điểm khác biệt` (in `Ôn thi chuyên` page).
14. **Emotional bubble/tooltip section** — `Áp lực chuyển cấp` (just added; uses centered student illustration + question-mark bubbles + hover tooltip).

### 6.1 Centered CTA block

Always: subtitle line in `Neutral Blue/900` (18 medium) **+** primary CTA pill to its right, centered horizontally. 16 px gap between text and button. Used at the bottom of nearly every section.

### 6.2 Alternating sections rule

Adjacent sections must alternate background: white → soft tinted → white → navy panel inside white → white. Never two identical backgrounds in a row.

---

## 7. Design Constraints

### 7.1 Must remain consistent

- **Font family**: Montserrat only.
- **Grid**: 1440 outer / 1240 inner / 100 px gutter.
- **Section title**: 48/60 Bold with one orange phrase.
- **Card radius**: 16.
- **Button radius**: 1024 (pill).
- **Primary CTA color**: `Secondary/500` (`#f66600`) — never blue, never green.
- **Body text color**: `Neutral Blue/900` on light, white on dark.
- **Shadows**: only the five tokens `Shadow`, `Shadow-medium`, `Shadow-large`, `Shadow-xl`, `Shadow-2xl`.

### 7.2 Must never change

- Never replace Montserrat with another typeface.
- Never use a square-corner button (8 px or below) for primary CTA.
- Never tint a whole section orange; orange is an accent only.
- Never let a body paragraph exceed ~880 px width.
- Never stack more than two CTAs in one section.
- Never use stock vector illustrations outside the navy/orange/yellow palette.
- Never apply a gradient to body text.
- Never reduce side gutters below 100 px.

### 7.3 Forbidden visual patterns

- Glassmorphism / heavy blur backgrounds.
- Skeuomorphic shadows (long, dark drop shadows).
- Neon / saturated gradients (purple→pink, teal→blue).
- Drop caps, all-caps long paragraphs, italic body text.
- Iconography in flat color outside the documented ramps.
- 3D-style stat tiles or buttons.

### 7.4 Forbidden spacing inconsistencies

- Don't mix 20 px and 24 px card gaps in the same grid.
- Don't change container padding mid-page (always 100 px gutters, always 24 px card padding).
- Don't introduce new vertical rhythm values (40 / 60 / 80 / 100 / 120 are the spacing scale).

### 7.5 Forbidden typography deviations

- No font sizes outside the documented Montserrat scale.
- No line-height other than what is bound to the variable.
- No letter-spacing other than 0.
- No uppercase on body text. Uppercase only on tiny eyebrow chip / nav / footer headings, all at 14 Bold.

---

## 8. Component Reuse Rules

1. **Search the library first.** Before drawing a new card, button, badge, tab, accordion, or stat tile, search the `KIEN TRE` and `Vtest (New home🏠)` libraries with the relevant keyword and reuse the component instance.
2. **Bind to variables.** When a property has a token (color, font, radius, shadow), bind it. Do not paste raw hex.
3. **Don't detach instances** unless you are creating a new permanent variant — and then promote it as a new component in the library.
4. **Preserve the section header anatomy**: optional eyebrow chip → title (48 Bold, mixed navy/orange) → subtitle (24 Medium, `Neutral Blue/700`). Always centered.
5. **Preserve CTA hierarchy**: one primary CTA per section, located in the inline CTA strip at the bottom. Secondary buttons only inside cards.
6. **Preserve grid rhythm**: 24 px gaps between cards, 80–120 px between sections, 40–60 px between header and body.
7. **Preserve responsive behavior**: cards must hug content width but never grow wider than the 1240 container; grids collapse 3→2→1 with the gap preserved.

---

## 9. Section Generation Guidance

When asked to add a new section, follow this checklist before placing a single shape.

### 9.1 Match nearby sections

1. Look at the section directly **above** and **below** the insertion point.
2. Alternate background: pick the opposite tint of the section above (white ↔ soft `Primary/50` tint ↔ navy panel inside white).
3. Re-use the closest layout pattern from §6.
4. Match section height to neighbours (520, 800, 880, 1100, 1200, 1300 are common).

### 9.2 Inserting naturally

- Create a 1440 × auto-height frame, append it to the inner page frame (e.g. `1386:5906` for Vượt trội, `8052:119865` for Ôn thi chuyên) at the correct y-position. Push subsequent sections downward by the new section's height (or use auto-layout on the page if the file is configured that way).
- Always begin the section with the centered header block at y = 80–120 from the section top.
- End the section with the inline CTA strip at y = (section height − 80 − CTA height) — unless the section is intentionally header-only (e.g. illustrative interlude).

### 9.3 Maintain visual flow

- The section title should declare a **single message** in ≤ 12 words.
- The orange phrase must be the emotional anchor (verb, value, or named entity).
- The body grid must support that message — no decorative grids without text.
- The CTA must move the reader to a single next step ("Tư vấn", "Đặt câu hỏi", "Xem chi tiết", "Đăng ký").

### 9.4 Avoid introducing new styles

- Do **not** add a new font, color, radius, or shadow even if the new section seems to need one. If you feel the urge, you are designing the wrong section — pick a different existing pattern.
- Do **not** create a new component if a near-match exists in the library — extend the existing component with a new variant property instead.
- Do **not** introduce illustrations in a new color palette. Re-use existing flat-vector spot illustrations or commission new ones in navy / orange / yellow / cream.
- Do **not** put the new section above the hero or below the footer.

---

## Appendix A — Quick token cheat sheet

```text
Colors
  Navy    : Primary/500  #204983   (text + dark cards)
  Orange  : Secondary/500 #f66600  (CTA + accent)
  Body    : Neutral Blue/900 #1f1f1f
  Subtle  : Neutral Blue/700 #757e8a
  Surface : Neutral Blue/0 #ffffff  /  Neutral Blue/50 #f8fbff
  Tint    : Primary/50 #eff5fe     / Secondary/50 #fff7f2
  Border  : Neutral Blue/200 #e7edf5

Type (Montserrat, all letter-spacing 0)
  Hero        60 / 72 ExtraBold
  Section     48 / 60 Bold
  Sub         24 / 32 Medium
  Card title  20 / 28 Bold  or  24 / 32 Bold
  Body        18 / 28 Regular  or  16 / 24 Regular
  Eyebrow/Nav 14 / 20 Bold (UPPERCASE)

Radius
  Card      16
  Input      8
  Tag/badge  6
  Button   1024 (pill)

Shadow
  Card        Shadow-large
  Floating    Shadow-xl
  Section emp Shadow-2xl
  Subtle      Shadow / Shadow-medium

Layout
  Outer     1440
  Inner     1240
  Gutter    100
  Card gap   24
  Section pad 80–120 top/bottom
```

## Appendix B — Section node IDs (Vượt trội landing, page `1386:5906`)

| Section | Node | Height |
|---|---|---|
| Header | `2439:21096` | 96 |
| Hero | `3224:11860` | 800 |
| List program (5-radial) | `3673:18409` | 1176 |
| Hành trình hạt giống | `3275:13202` | 880 |
| Container (program selector) | `1627:9042` | 520 |
| 3 trụ cột vàng (stats) | `8010:103974` | 1292 |
| Teacher list | `7137:87471` | 1208 |
| Students (testimonials) | `6584:101476` | 1260 |
| Kiến Trẻ hôm nay (news) | `1386:6136` | 921 |
| Pathway (curriculum) | `8034:119097` | 865 |
| Final CTA | `2797:15485` | 1364 |
| Form/Tư vấn | `5154:18312` | 796 |
| Footer | `1386:6243` | 680 |
| Floating Call button | `3224:12861` | 60×208 |

---

_End of rules. When in doubt: re-use, don't redesign._
