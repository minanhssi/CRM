# Design Audit — kientre.click Revamp

> Audited against: [design-system.md](./design-system.md)  
> File: [kientre.click Revamp](https://www.figma.com/design/G4rPMIsYaWFa0obJ1Vdk3S/kientre.click--Revamp-)  
> Date: 2026-05-04

---

## TL;DR

| Category | Issues | Severity |
|----------|--------|----------|
| Typography — Font family | **100% wrong** (Inter, SF Pro instead of Roboto) | 🔴 Critical |
| Typography — Type scale | Sizes 10–16px undocumented in system | 🔴 Critical |
| Colors | 6 hardcoded custom values | 🟡 Medium |
| Component naming | 5 state labels in Vietnamese + 1 typo | 🟡 Medium |
| Custom components | 3 domain-specific, undocumented | 🟢 Low |

---

## 1. Typography Violations

### Font Family — Critical

Design system specifies **Roboto only**. Revamp uses two different fonts:

| Font found | Instances |
|------------|-----------|
| **Inter** | Inter/16/bold, Inter/14/regular, Inter/14/medium, Inter/12/regular, Inter/10/bold |
| **SF Pro** | Body/medium (14px), 12/description, 10/bold |

**Fix:** Replace all Inter and SF Pro references with Roboto equivalents.

### Type Scale — Critical

Design system only documents `90px ExtraBold` and `40px ExtraBold`. Revamp uses smaller sizes that are not defined anywhere:

| Size used | Weight | Status |
|-----------|--------|--------|
| 16px | 700 | ⚠ Undocumented |
| 14px | 400 / 500 / 510 | ⚠ Undocumented |
| 12px | 400 | ⚠ Undocumented |
| 10px | 700 | ⚠ Undocumented |

**Fix:** Add these sizes to the design system type scale, or create named text styles in Figma so they're shared tokens — not freeform values.

---

## 2. Color Violations

6 custom hex values that don't exist in the design system palette:

| Color | Where used | Closest system token | Action |
|-------|-----------|----------------------|--------|
| `#003268` | Drawer header text | — (no match) | Replace with `gray-10 #262626` or `blue-9 #003A8C` |
| `#7E7E7E` | Small text labels | `gray-7 #8C8C8C` | Replace with `gray-7` |
| `#1A1C20` | Body text | `gray-11 #141414` | Replace with `gray-11` |
| `#F3F4F6` | Neutral/2 bg | `gray-2 #FAFAFA` | Replace with `gray-2` |
| `#F1F5F9` | Avatar background | `gray-3 #F5F5F5` | Replace with `gray-3` |
| `#D1D5DC` | Neutral/4 border | `gray-5 #D9D9D9` | Replace with `gray-5` |

**Correctly used colors ✓**
- Green scale: `#F6FFED` → `#52C41A` ✓
- Red scale: `#FFF1F0` → `#F5222D` ✓
- Gold scale: `#FFFBE6` → `#FAAD14` ✓
- Orange scale: `#FFF7E6` → `#FA541C` ✓
- Geek blue scale: `#F0F5FF` → `#2F54EB` ✓
- Magenta scale: `#FFF0F6` → `#EB2F96` ✓

---

## 3. Component Naming Violations

### Vietnamese state labels — should be English

| Component | Issue |
|-----------|-------|
| `State=Chưa điểm danh` | → `State=pending` |
| `State=Đi trễ` | → `State=late` |
| `State=Hủy buổi` | → `State=cancelled` |
| `State=Vắng có phép` | → `State=excused` |
| `State=Có mặt` | → `State=present` |

### Typo

| Found | Fix |
|-------|-----|
| `Tag stuatus` | → `Tag status` |

---

## 4. Custom / Domain Components

These exist in the revamp but are not in the design system. They're acceptable as domain extensions — just need to be documented.

| Component | Notes |
|-----------|-------|
| `Student Item` | App-specific list item — document as extension |
| `Status present` | Attendance status — document as extension |
| `Drawer: Class detail` | Domain-specific drawer — document as extension |

---

## 5. What's Correct ✓

- Icon naming follows system pattern: `Icon/Regular/[name]` ✓
- Button variant model (type × shape × size × state) correctly applied ✓
- Semantic color palette (green, red, gold, orange, magenta) correctly used ✓
- Layout gaps (8px, 16px, 24px) match system spacing scale ✓
- Components use instances (not detached frames) ✓

---

## Action Checklist

- [ ] Replace **Inter** → Roboto across all text layers
- [ ] Replace **SF Pro** → Roboto across all text layers
- [ ] Create named text styles for 16/14/12/10px in design system
- [ ] Replace 6 custom gray hex values with system tokens (table above)
- [ ] Rename 5 Vietnamese state labels to English equivalents
- [ ] Fix typo: `stuatus` → `status`
- [ ] Document 3 domain components as design system extensions
