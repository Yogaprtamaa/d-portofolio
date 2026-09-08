---
name: Portofolio Yoga Pratama — Yoga's Portofolio
description: Premium minimal Apple-inspired portfolio — typography, whitespace, and hierarchy over decoration
colors:
  background: "#F5F5F7"
  surface: "#FFFFFF"
  surface-muted: "#F2F2F2"
  foreground: "#1D1D1F"
  muted: "#6E6E73"
  muted-2: "#6E6E73"
  accent: "#0071E3"
  accent-hover: "#0077ED"
  accent-press: "#006EDB"
  border: "rgba(0,0,0,0.08)"
  border-strong: "rgba(0,0,0,0.12)"
  hairline: "rgba(0,0,0,0.06)"
typography:
  display:
    fontFamily: "Inter, SF Pro Display, SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(2.625rem, 6vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Inter, SF Pro Display, sans-serif"
    fontSize: "clamp(2rem, 4vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, SF Pro Text, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.688rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.12em"
rounded:
  xl: "20px"
  2xl: "24px"
  3xl: "28px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  4xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#FFFFFF"
    rounded: "{rounded.3xl}"
    padding: "0 28px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "#FFFFFF"
    rounded: "{rounded.3xl}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.3xl}"
    padding: "0 28px"
  chip:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.muted}"
    rounded: "{rounded.3xl}"
    padding: "6px 12px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.2xl}"
    padding: "28px"
---

# Design System: Portofolio Yoga Pratama — Yoga's Portofolio

## Overview

**Creative North Star: "The Quiet Gallery"**

A portfolio where the work hangs like prints in a calm gallery — vast whitespace, surgical typography, and a single blue thread of interaction. No chrome competes with the artifact. The interface is paper, not stage: neutral surfaces, hairline borders, and one authored moment of motion that guides the eye rather than performing.

Premium is earned through restraint: Apple-inspired hierarchy built on Inter (SF Pro Display fallback), tight tracking, and a disciplined 8px scale. Project imagery is large, un-cropped hero-first; cards lift with a soft offset shadow only on hover; navigation alone carries translucent blur. Every surface answers How quickly can a stranger understand who you are and whether to trust you?

**Key Characteristics:**
- Typography-first hierarchy, color in service of clarity
- Generous whitespace + tight groupings, 1200px max with 20px→40px insets
- Neutral paper system with single accent; flat by default, depth only on interaction
- Large media ratio (16:10), consistent 24–28px corners
- One authored motion per page (staggered reveal), exponential ease-out

## Colors

Pared-back paper palette that lets photography and work carry chroma. One voice only.

### Primary
- **Quiet Blue** (#0071E3): Primary CTA, active nav, links, focus rings, interactive states. Used on ≤8% of a viewport; its rarity is the signal. Hover #0077ED, press #006EDB.

### Neutral
- **Paper** (#F5F5F7): Primary background — the gallery wall.
- **Surface** (#FFFFFF): Cards, nav resting state, form fields on focus. Always bordered by hairline.
- **Surface Muted** (#F2F2F2): Secondary surface, tags, inline stats, about teaser inset.
- **Ink** (#1D1D1F): Primary text (16.6:1 on Paper).
- **Ink Muted** (#6E6E73): Secondary text, descriptions (5.6:1 on Paper).
- **Ink Faint** (#86868B): Tertiary/meta, captions. Never for body — use 4.5:1-safe secondary instead when it carries meaning.
- **Hairline** (rgba(0,0,0,0.06)) and **Border** (rgba(0,0,0,0.08)): Dividers, card edges. Thin, never colored.

### Named Rules
**The One Voice Rule.** The accent appears only on actionable elements. Never on headings, borders >1px, or decorative surfaces.
**The Paper Rule.** Surfaces are tonal (#F5F5F7 ↔ #FFFFFF ↔ #F2F2F2), never tinted blue. Depth is shadow or space, not hue.

## Typography

**Display Font:** Inter (with SF Pro Display, SF Pro Text fallback)
**Body Font:** Inter (with SF Pro Text fallback)
**Label Font:** Inter (uppercase, tracked)

**Character:** Surgical, not expressive. Weight does the talking (600 for display, 400 for body). No gradient text, no decorative display face sourced outside this stack — Inter's neutrality keeps work in front.

### Hierarchy
- **Display** (600, clamp 42px→72px, 0.9, -0.04em): Hero only — tight measure 22ch, balanced. One per page.
- **Headline** (600, clamp 32px→44px, 0.95, -0.03em): Section heads. No eyebrow above; the heading carries its own weight.
- **Title** (600, 20px, 1.2, -0.02em): Card and project titles.
- **Body** (400, 16–17px, 1.7): Narrative and challenge/goal copy. Max 65–75ch.
- **Label** (600, 11px, 0.12em, uppercase): Meta (year, role, category). Used sparingly; never as a kicker above a heading — deleted per craft floor.

### Named Rules
**The No-Eyebrow Rule.** Headings stand alone. Remove kicker labels; let scale and tracking create hierarchy.
**The Measure Rule.** Body never exceeds 75ch; headings wrap balanced.

## Layout

**Spatial model:** 12-column implicit grid, centered container `max-width: 1200px` (1400px on ≥1440 screens). Insets `20px` mobile → `40px` desktop. Density: generous vertical rhythm (section py 48→96), tight groupings (gap 12–24 within cards), larger gaps (32–64) between groups. More space above a heading than below it — 48 above, 16 below.

**Responsive:** 1440+ large spacing/type; 1024–1439 reduced gaps; 768–1023 2-col holds; <768 single column, nav → 44px hamburger, hero 42px. All touch targets ≥44px.

**Grid behaviors:** Featured projects 2-col with first span 2; about gallery 280px + 1fr; contact 1.1fr/0.9fr; project detail 1.7fr/0.9fr with sticky aside. Spacing scale `4,8,12,16,24,32,48,64,96,128` — no invented steps.

## Elevation & Depth

Flat by default. Depth is a response to state, not decoration.

Shadows carry offset + soft blur; zero-offset halos and hard 4px blocks are never used. Light comes from above — subtle, diffused.

### Shadow Vocabulary
- **Rest** (none): Cards and surfaces are flat with hairline border only.
- **Hover Lift** (`0 8px 32px rgba(0,0,0,0.08)`): Project cards on hover — offset 8, blur 32, very soft.
- **Window** (`0 20px 60px rgba(0,0,0,0.10)`): Hero preview window — the one elevated artifact on the hero.
- **Nav Float** (`0 1px 4px rgba(0,0,0,0.08)`): Sticky nav when scrolled, combined with translucent blur `backdrop-blur 20px` at `rgba(245,245,247,0.72)`.

### Named Rules
**The Flat-By-Default Rule.** No shadow at rest. Shadows appear only on hover/elevation or for the single hero window.
**The Soft-Blur Rule.** Every shadow must have both offset and blur; halo-only glows are banned.

## Shapes

Corners are consistently soft, never tight. System radius is generous to feel papered, not boxy.

- **Buttons:** fully pill (`9999px` visuallly, 28px spec) — distinct from cards.
- **Cards:** `24px` (project), `28px` (sections/windows), `20px` (inner insets). Never mixed sizes in same group.
- **Pills/Tags:** `9999px` pill.
- **Images:** clipped by parent radius; no geometric masks over photos. Derive alpha from image or omit mask entirely.

Borders: `1px` hairline `rgba(0,0,0,0.06–0.08)` only. No colored left/right thick borders. No hard-offset shadow as a border substitute.

## Components

### Buttons
- **Shape:** Pill.
- **Primary:** `#0071E3` on white, `h 48px` (`40px` compact), `px 28`, `600` weight. Hover `#0077ED`, active `#006EDB`, focus `2px solid #0071E3` offset 2. Disabled 50% opacity. Loading replaces label with `Sending…`.
- **Secondary:** White on ink, `border 1px rgba(0,0,0,0.08)`, hover `#F5F5F7`.
- **Ghost:** Transparent ink, hover `rgba(0,0,0,0.04)`.

### Chips
- **Style:** `#F2F2F2` bg, `#6E6E73` text, hairline border, `12px` pill, `0.75rem` medium, grouped with 6px gap.

### Cards / Containers
- **Corner Style:** 24px, 1px hairline, white bg, `p 28px` outer, `16px` inner. No nested cards.
- **Hover:** lift shadow only, image scales `1.03` over 700ms, arrow translates `4px`. No rotation, no glow.
- **Internal Padding:** 24–28 outer, 12–16 inner chips, 20 inset blocks.

### Inputs / Fields
- **Style:** Pill input `h 48`, `bg #F5F5F7`, `border rgba(0,0,0,0.10)`, radius `9999px`; textarea `24px`. Placeholder `#86868B`.
- **Focus:** `border #0071E3` + `ring 4px rgba(0,113,227,0.10)`, bg → white.
- **Error / Disabled:** Error text `red-600 12px` under field, `aria-invalid` + `aria-describedby`; disabled `opacity 50%`.

### Navigation
- Condensed pill tabs ( `px16 py8`, `13px 500` ) on translucent bar. At top transparent; on scroll `rgba(245,245,247,0.72)` + `blur 20px` + `1px rgba(0,0,0,0.06)` divider. Active is white pill with `0 1px 2px rgba(0,0,0,0.06)`. Mobile: 44px hamburger, full-width sheet with `rgba(245,245,247,0.95)` + blur, vertical 48px rows. `Skip to content` link is first focusable.

### Reveal / Stagger
- Single authored entrance: `opacity 0→1, y 16→0, 500ms easeOut`, viewport `margin -80px once`. Stagger `80ms` between cards, `50ms` delayChildren. `prefers-reduced-motion` disables. Beyond this, reach for `backdrop-filter` or `clip-path` if a second moment is needed — never a second identical entrance.

## Do's and Don'ts

### Do:
- **Do** let the hero photo and project thumbnails provide color; keep chrome neutral.
- **Do** theme browser surfaces from palette: `::selection rgba(0,113,227,0.18)`, `scrollbar #c7c7cc`, caret inherits ink, focus ring blue offset 2.
- **Do** use tabular numerals for stats (`font-variant-numeric: tabular-nums` where data-dense).
- **Do** keep copy as the product's own language: controls name action (`View Project →`), errors name problem + recovery (`Message should be at least 10 characters`).
- **Do** test at 320, 768, 1024, 1280, 1440 and at 200% zoom.

### Don't:
- **Don't** place a kicker/eyebrow above any heading — deleted per craft floor ban.
- **Don't** use gradient text, glass-as-decoration, or colored thick left borders on cards.
- **Don't** nest cards inside cards or build pages from same-size icon+heading+text grids.
- **Don't** render hero metrics as big-number-stat cards with accent halos — use tone, not glow.
- **Don't** ship emoji/unicode as icons; use drawn SVG with single stroke weight when icons are needed.
- **Don't** apply 4px hard-offset shadows or circular masks over photography.
- **Don't** animate every section identically — one moment per page, already-visible default, exponential ease-out.
