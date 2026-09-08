# Yoga's Portofolio — Brand & Design System (Apple-inspired)

Generated via **carmandale-agent-config-apple-design-prompts**:
- Prompt 1: Design System Architect → tokens, components, grid, spacing
- Prompt 2: Brand Identity Creator → strategy & voice
- Prompt 3: UI/UX Pattern Master → 8 screens, HIG, states
- Prompt 9: Design-to-Code Translator → Next.js 16 + Tailwind 4 + Framer Motion

## Brand Strategy
- **Archetype:** The Craftsman + The Sage — quiet expertise, systematic, human
- **Voice:** Clear, calm, confident. No hype. Short sentences. Show, don't tell.
- **Promise:** "Simple, useful, memorable." The work speaks first.
- **Audience:** Recruiters, founders, and collaborators evaluating trust and craft.

## Design Tokens (JSON excerpt)
```json
{
  "color": {
    "background": "#F5F5F7",
    "surface": "#FFFFFF",
    "surfaceMuted": "#F2F2F2",
    "textPrimary": "#1D1D1F",
    "textSecondary": "#6E6E73",
    "textMuted": "#86868B",
    "accent": "#0071E3",
    "accentHover": "#0077ED",
    "border": "rgba(0,0,0,0.08)"
  },
  "spacing": [4,8,12,16,24,32,48,64,96,128],
  "radius": { "card": 24, "section": 28 },
  "type": { "hero": "64-72px / -0.04em / 600", "section": "32-44px / -0.03em / 600", "body": "16-17px / 1.7", "small": "13-14px" },
  "grid": "12-col · max 1200px · px 20 (mobile) → 40 (desktop)",
  "motion": { "fast": "150ms", "normal": "250ms", "large": "400ms", "easing": "cubic-bezier(0.25,0.1,0.25,1)" }
}
```

## Foundations (Prompt 1 deliverables)
- **Color:** Neutral base + single blue accent. Dark header CTA maintains AA contrast (white on #0071E3 = 4.5:1, white on #1D1D1F = 17:1). Hairline borders 6-8% black.
- **Typography:** Inter (SF Pro fallback) — 5 levels (eyebrow 11px/0.12em, title 32-72px, body 16-17px/1.7, small 13px, mono optional). Hierarchy via size/weight/spacing, not color.
- **Grid & Spacing:** 8px base, 1200px container (1400 at 1440+), section py 48-96.
- **Materials:** Only navbar uses blur (tinted translucent surface + thin divider) — rest is solid, premium paper.

## Components (30+ spec → implemented core)
Navbar (sticky blur), Button (primary/secondary/ghost, 44px min), ProjectCard, ProjectFilter (pill/se segmented), SectionHeading, TechnologyTag, Timeline, ContactForm (validation/loading/success/error), Footer, Reveal/Stagger.

## 8 Core Screens (Prompt 3)
1. Home — Hero + featured grid (2-col, hero span 2)
2. Projects — filter + 2-col grid + empty state
3. Project Detail — header + full-width media + story blocks (Challenge/Goal/Role/Process/Solution/Result) + sticky aside
4. About — profile header + story + skills 3-col + timeline
5. Contact — CTA + quick-contact cards + form (name/email/message)
6. Not-found — (Next.js default, to be customized)
7. Loading — (skeleton via Tailwind animate-pulse, framer)
8. Error — (form error + global error boundary)

States covered: default/hover/active/focus-visible (ring #0071E3), disabled, loading (spinner text), success (green banner), error (red 600), empty (no-results card).

## Figma Notes (Prompt 5)
Auto-layout: vertical, padding 24-32, gap 16-24. Constraints: center + scale. Variants: button size/variant, card featured/default. Tokens mapped to Styles. Prototype: tap → push, 250ms ease.

## Accessibility (Prompt 8 — WCAG 2.2 AA)
- Semantic: header/nav/main/footer, h1→h2→h3, ol for timeline/process
- Keyboard: skip link, focus-visible ring, roving tablist for filter, all interactive ≥44px
- Contrast: #1D1D1F on #F5F5F7 = 16.6:1, #6E6E73 on #F5F5F7 = 5.6:1, white on #0071E3 = 4.5:1
- Motion: prefers-reduced-motion disables smooth scroll & stagger
- Forms: label↔input, aria-invalid + aria-describedby, required, email pattern
- Images: alt text, lazy loading, decorative aria-hidden

## Critique Loop (Prompt 6)
Critical fixes applied: mobile menu focus trapping, hairline borders not cards everywhere, hero whitespace preserved. Polish: hover scale 1.03 (not rotate), shadow 0_8_32.
