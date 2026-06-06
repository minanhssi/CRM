# Design System — kientre.click

> Figma file: [Design system (click)](https://www.figma.com/design/VTzGNJPY0tSxCPMYJqTdtj/Design-system--click-)  
> Based on Ant Design patterns · 4,473 components

---

## Table of Contents

1. [Colors](#colors)
2. [Typography](#typography)
3. [Spacing & Layout](#spacing--layout)
4. [Gradients](#gradients)
5. [Components](#components)
   - [Buttons](#buttons)
   - [Icons](#icons)
   - [Typography Components](#typography-components)
   - [Other UI Components](#other-ui-components)
6. [Component Naming Convention](#component-naming-convention)
7. [Design Tokens](#design-tokens)

---

## Colors

### Primary — Blue

| Token | Hex | Usage |
|-------|-----|-------|
| blue-1 | `#F0F5FF` | Background hover |
| blue-2 | `#D2E0FA` | Light background |
| blue-3 | `#ADD2FF` | Disabled state |
| blue-4 | `#8CC8FF` | Border hover |
| blue-5 | `#40A9FF` | Hover |
| blue-6 | `#1890FF` | **Primary** (default) |
| blue-7 | `#096DD9` | Active / pressed |
| blue-8 | `#0050B3` | Dark |
| blue-9 | `#003A8C` | Darker |
| blue-10 | `#002766` | Darkest |

### Secondary — Cyan / Teal

| Token | Hex |
|-------|-----|
| cyan-1 | `#E6FFFB` |
| cyan-2 | `#B5F5EC` |
| cyan-3 | `#87E8DE` |
| cyan-4 | `#5CDBD3` |
| cyan-5 | `#36CFC9` |
| cyan-6 | `#13C2C2` |
| cyan-7 | `#08979C` |
| cyan-8 | `#006D75` |
| cyan-9 | `#00474F` |
| cyan-10 | `#002329` |

### Semantic — Red (Error / Danger)

| Token | Hex |
|-------|-----|
| red-1 | `#FFF1F0` |
| red-2 | `#FFCCC7` |
| red-3 | `#FFA39E` |
| red-4 | `#FF7875` |
| red-5 | `#FF4D4F` |
| red-6 | `#F5222D` |
| red-7 | `#CF1322` |
| red-8 | `#A8071A` |
| red-9 | `#820014` |
| red-10 | `#5C0011` |

### Semantic — Orange (Warning)

| Token | Hex |
|-------|-----|
| orange-1 | `#FFF7E6` |
| orange-2 | `#FFD8BF` |
| orange-3 | `#FFBB96` |
| orange-4 | `#FF9C6E` |
| orange-5 | `#FF7A45` |
| orange-6 | `#FA541C` |
| orange-7 | `#D4380D` |
| orange-8 | `#AD2102` |
| orange-9 | `#871400` |
| orange-10 | `#610B00` |

### Semantic — Yellow / Gold

| Token | Hex |
|-------|-----|
| gold-1 | `#FFFBE6` |
| gold-2 | `#FFF1B8` |
| gold-3 | `#FFE58F` |
| gold-4 | `#FFD666` |
| gold-5 | `#FFC53D` |
| gold-6 | `#FAAD14` |
| gold-7 | `#D48806` |
| gold-8 | `#AD6800` |
| gold-9 | `#874D00` |
| gold-10 | `#613400` |

### Semantic — Green (Success)

| Token | Hex |
|-------|-----|
| green-1 | `#F6FFED` |
| green-2 | `#D9F7BE` |
| green-3 | `#B7EB8F` |
| green-4 | `#95DE64` |
| green-5 | `#73D13D` |
| green-6 | `#52C41A` |
| green-7 | `#389E0D` |
| green-8 | `#237804` |
| green-9 | `#135200` |
| green-10 | `#092B00` |

### Purple / Violet

| Token | Hex |
|-------|-----|
| purple-1 | `#F9F0FF` |
| purple-2 | `#EBD7FA` |
| purple-3 | `#D3ADF7` |
| purple-4 | `#B37FEB` |
| purple-5 | `#9254DE` |
| purple-6 | `#722ED1` |
| purple-7 | `#531DAB` |
| purple-8 | `#391085` |

### Neutral — Gray

| Token | Hex | Usage |
|-------|-----|-------|
| gray-1 | `#FFFFFF` | White / page background |
| gray-2 | `#FAFAFA` | Table zebra / subtle bg |
| gray-3 | `#F5F5F5` | Disabled background |
| gray-4 | `#F0F0F0` | Border light |
| gray-5 | `#D9D9D9` | Border default |
| gray-6 | `#BFBFBF` | Placeholder text |
| gray-7 | `#8C8C8C` | Secondary text |
| gray-8 | `#595959` | Caption text |
| gray-9 | `#434343` | Body text |
| gray-10 | `#262626` | Heading |
| gray-11 | `#141414` | Strong heading |
| gray-12 | `#000000` | Black |

### Brand Accent

| Name | Hex |
|------|-----|
| Brand primary | `#0092FF` |
| Brand interaction | `#108EE9` |
| Geek blue | `#597EF7` |
| Geek blue light | `#85A5FF` |
| Geek blue lighter | `#ADC6FF` |

---

## Typography

### Font Families

| Family | Usage |
|--------|-------|
| **Roboto** | Primary — all headings and body |

### Type Scale

| Style | Size | Weight | Usage |
|-------|------|--------|-------|
| Large Title | 90px | 800 (ExtraBold) | Hero / thumbnail headings |
| Small Title | 40px | 800 (ExtraBold) | Section sub-headings |
| `.largeTitle` | Component | — | Reusable large title component |
| `.smallTitle` | Component | — | Reusable small title component |

### Text Alignment

- Horizontal: `CENTER`, `LEFT`, `RIGHT`
- Vertical: `TOP`, `CENTER`, `BOTTOM`

---

## Spacing & Layout

### Grid

- Canvas width: **1440px** (desktop)
- Column gutter spacing: ~**49px**
- Number of columns: ~**24** (Ant Design 24-column grid)

### Gap Scale (inferred from layout tokens)

| Size | Value |
|------|-------|
| xs | 8px |
| sm | 16px |
| md | 24px |
| lg | 60px |

### Border Radius

| Size | Value |
|------|-------|
| Card / Frame | 24px |
| Button (standard) | per variant |
| Button (circle) | 50% |
| Button (square) | 0 |

### Sizing Modes

| Mode | Description |
|------|-------------|
| `fixed` | Explicit width/height |
| `fill` | Stretch to parent |
| `hug` | Shrink-wrap content |

---

## Gradients

| Name | Definition |
|------|-----------|
| Primary gradient | `linear-gradient(180deg, rgba(32,73,131,1) 0%, rgba(26,58,105,1) 66%)` |

13 gradient definitions total, primarily linear gradients in blue/navy tones used for backgrounds and hero sections.

---

## Components

### Buttons

The button system uses a 3-axis variant model: **Type × Shape × Size**, plus **State** and boolean flags.

#### Types

| Type | Description |
|------|-------------|
| `primary` | Filled, high emphasis |
| `secondary` | Outlined / stroked |
| `dashed` | Dashed border |
| `text` | Ghost, no border |
| `link` | Hyperlink style |
| `danger` | Red destructive action |

#### Shapes

| Shape | Description |
|-------|-------------|
| `standard` | Rounded rectangle (default) |
| `square` | Sharp corners |
| `circle` | Pill / circular |

#### Sizes

| Size | Description |
|------|-------------|
| `large` | lg — prominent CTA |
| `medium` | md — default |
| `small` | sm — compact / inline |

#### States

| State | Description |
|-------|-------------|
| `normal` | Default resting |
| `hover` | Mouse over |
| `active` | Click / pressed |
| `press` | Touch press |
| `disabled` | Non-interactive |
| `animating` | Loading spinner active |

#### Boolean Flags

| Flag | Values |
|------|--------|
| `Danger` | `true` / `false` |
| `Ghost` | `true` / `false` |
| Icon included | `true` / `false` |

#### Key Component Names (Figma)

```
Button/.Button/Component 1/large/primary-icon-only
button/primary/circle/large/normal
button/primary/circle/medium/normal
button/primary/square/medium/normal
button/primary/square/small/normal
button/primary/square/small/disabled
button/primary/ghost/medium/normal
button/secondary/circle/medium/normal
button/secondary/ghost/medium/normal
button/secondary/ghost/medium/disabled
button/secondary/square/small/normal
button/dashed/circle/medium/normal
button/dashed/ghost/medium/normal
button/text/ghost/medium/normal
button/link/ghost/medium/normal
button/medium/standard/primary/normal/true
button/medium/standard/secondary/normal/true
button/medium/standard/dashed/normal/true
button/large/standard/primary/normal/true
button/small/standard/primary/normal/true
Type=primary, Shape=standard, Size=medium, State=normal, Danger=false, Ghost=false
Button-Group
```

---

### Icons

**1,344+ icon variants** organized by:

#### Size Variants

| Size token | Pixel size |
|------------|-----------|
| 14px | 14 × 14 |
| Regular | 16 × 16 (default) |
| Medium | 20 × 20 |
| Large | 24 × 24 |

#### State Variants

| State | Description |
|-------|-------------|
| `Union=false` | Default / standalone icon |
| `Union=true` | Grouped / combined icon |
| `Active` | Active / selected state |
| `Sorter` | Used in table sort controls |
| `Filter` | Used in table filter controls |

#### Color Variants

Icons support multi-color fills:
- Blue (`#1890FF`, `#0092FF`)
- Red (`#F5222D`)
- Green (`#52C41A`)
- Gray (`#8C8C8C`, `#BFBFBF`)

#### Special Icons (named)

```
Icon/Regular/circle
Search
Download
Loading
Poweroff
Setting
```

#### Wrapper Component

`Icon-Wrapper` — container component for consistent padding around icons with size variants.

---

### Typography Components

| Component | Description |
|-----------|-------------|
| `.largeTitle` | Reusable large heading block |
| `.smallTitle` | Reusable small heading block |

---

### Other UI Components

The system covers the full Ant Design component spectrum:

#### Form Controls
- Input, Textarea
- Select, Multi-select
- Checkbox, Radio
- Switch
- Slider
- DatePicker, TimePicker, RangePicker
- Upload

#### Data Display
- Table (with sort, filter, pagination)
- List
- Card
- Badge
- Tag
- Tooltip
- Popover

#### Navigation
- Menu (horizontal, vertical, inline)
- Breadcrumb
- Pagination
- Tabs
- Steps

#### Feedback / Overlay
- Modal / Dialog
- Drawer
- Alert (success, info, warning, error)
- Notification
- Message (toast)
- Spin / Loading
- Progress (line, circle)
- Skeleton

#### Layout
- Grid / Row / Col
- Divider
- Space
- Collapse / Accordion

---

## Component Naming Convention

Components follow a hierarchical slash-delimited naming system:

```
[category]/[type]/[shape]/[size]/[state]
```

Property-based variants use `=` notation:

```
Type=primary, Shape=standard, Size=medium, State=normal, Danger=false, Ghost=false
```

### Hierarchy Levels

| Level | Example values |
|-------|---------------|
| Category | `button`, `Icon`, `input`, `modal` |
| Type | `primary`, `secondary`, `dashed`, `text`, `link` |
| Shape | `standard`, `square`, `circle`, `ghost` |
| Size | `large`, `medium`, `small` |
| State | `normal`, `hover`, `active`, `disabled`, `animating`, `press` |
| Boolean flags | `true` / `false` |

---

## Design Tokens

### Token Naming (Internal Figma IDs)

| Prefix | Type |
|--------|------|
| `fill_[HASH]` | Color / fill value |
| `layout_[HASH]` | Layout / sizing |
| `style_[HASH]` | Typography style |
| `effect_[HASH]` | Shadow / blur |

### Token Categories

#### Color Fills

Direct hex assignments or arrays of hex values:

```yaml
fill_V36MU2: ['#FFFFFF']
fill_PDM0TY: ['#000000']
fill_HESVUE: ['#CADDFF']
fill_8LMWLF: ['#2456A0']
fill_YW0VNK: ['#5C7DAE']
```

#### Layout

```yaml
layout_YNOTIF:
  mode: column
  alignItems: stretch
  alignSelf: stretch
  gap: 24px
  sizing:
    horizontal: fill
    vertical: hug
```

#### Typography

```yaml
style_64XDHT:
  fontFamily: Roboto
  fontStyle: ExtraBold
  fontWeight: 800
  fontSize: 90
  textAlignHorizontal: CENTER
  textAlignVertical: TOP

style_67D9EV:
  fontFamily: Roboto
  fontStyle: ExtraBold
  fontWeight: 800
  fontSize: 40
  textAlignHorizontal: CENTER
  textAlignVertical: TOP
```

---

## Summary

| Dimension | Count / Value |
|-----------|--------------|
| Total components | **4,473** |
| Unique colors | **550+** |
| Color scales | 10 hues × 10 shades |
| Typography styles | 2 named + inline variants |
| Gradient definitions | 13 |
| Icon variants | 1,344+ |
| Button variants | 27+ core |
| Font family | Roboto |
| Grid width | 1440px desktop |
| Design base | Ant Design |
