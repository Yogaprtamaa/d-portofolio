# Product

<!-- impeccable:product-schema 1 -->

## Platform
web

## Users
Primary: Recruiters, hiring managers, and founders evaluating a Frontend Developer & UI/UX Designer for freelance or full-time roles — browsing on desktop (1440px) and mobile (<768px) to answer within seconds: who is Yoga Pratama, what he does, proof of work, and how to contact. Situations: hiring sprint, vendor shortlist, collaborator discovery. Secondary: peers and community reviewing process and craft.

## Product Purpose
Personal portfolio website for Yoga Pratama that acts as digital representation of a UI/UX Designer and Frontend Developer. Makes visitors quickly understand who he is, his core skills, projects delivered, working process, and contact path. Success = visitor can in seconds identify Who/What/Proof/Trust/Action and initiates contact.

## Positioning
Not a template gallery — a piece of product itself. Combines thoughtful UI/UX with scalable frontend implementation (Next.js, TypeScript, Tailwind) to show taste via typography, whitespace, and hierarchy rather than decoration. Work is the hero; interface recedes. Premium minimal Apple-inspired, neutral base + single blue accent.

## Operating Context
Routes: `/` (hero + featured 3), `/projects` (filtered gallery), `/projects/[slug]` (story: Challenge/Goal/Role/Process/Solution/Result), `/about` (profile + skills + timeline), `/contact` (quick contacts + short form). Desktop max 1200px (1400 large), mobile 20px padding. Sticky translucent nav with blur on scroll.

## Capabilities and Constraints
- Stack: Next.js 16 (App Router, src/), TypeScript, Tailwind 4, Framer Motion, Inter (SF Pro fallback)
- Must remain fast first load, smooth scroll, minimal JS, optimized images + lazy loading
- Accessibility target WCAG 2.2 AA (keyboard, focus, contrast, 44px targets, reduced-motion)
- Content: 6 placeholder projects (Istiqlal PMB, Sakinah, Nusantara DS, Warung Web3, Halal Travel, Koperasi) with tech/year/role
- Constraints: no excessive color/gradient/card/shadow/glassmorphism; rely on type + whitespace
- Undecided: live CMS vs static data, real contact endpoint, analytics

## Brand Commitments
Name: Portofolio Yoga Pratama — Yoga's Portofolio. Voice: premium, minimal, modern, clean, professional, personal. Palette locked: bg #F5F5F7, surface #FFFFFF/#F2F2F2, text #1D1D1F/#6E6E73/#86868B, accent blue #0071E3 for CTA/active/links. Type scale hero 64-80, section 40-56, card 20-24, body 16-18. No invented testimonials beyond resume facts.

## Evidence on Hand
Existing implementation at `src/app/*`, `src/components/*`, `src/lib/projects.ts`, `brand.md`. No real CMS data yet. Imagery via Unsplash placeholders with alt text; images must be lazy-loaded and responsive. Contact form currently simulated (1200ms mock).

## Product Principles
1. Work is the hero — interface never competes with portfolio content.
2. Clarity over cleverness — hierarchy via typography and space, not color or chrome.
3. Premium via restraint — one accent, consistent radii, subtle motion (150/250/400ms).
4. Trust via process — show Challenge→Result, not just screenshots.
5. Accessible by default — semantic HTML, AA contrast, keyboard and touch ready.

## Accessibility & Inclusion
Target WCAG 2.2 AA. Semantic headings H1-H3, visible focus rings, alt text, ARIA for forms/tabs, 44px min targets, reduced-motion support. Indonesian + English copy must remain concise (no long paragraphs).
