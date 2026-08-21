# ollies0x - Site Design (approved 2026-08-21)

## Direction
0x Editorial hybrid - editorial layout and rhythm on near-black, terminal/0x details as seasoning.

## Stack
Astro static + GitHub Pages (repo `ollies0x.github.io`, URL https://ollies0x.github.io). Deploys via withastro/action on push to main.

## Type system
- Display: Space Grotesk Variable (700)
- Body: Inter Variable
- Meta/code: JetBrains Mono 400/500
- Accent: Newsreader italic (blockquotes)
- All self-hosted via Fontsource

## Colour
- bg `#0A0A0A`, raised `#101010`, code panel `#0E120E`
- text `#E8E8E6` / dim `#A3A3A0` / faint `#6F6F6C`
- green `#00FF55` (interactive), deep `#00B43C` (hover)
- hairlines `rgba(255,255,255,.08)`
- selection: green bg / black text

## Signature details
- Dot-grid atmosphere + green glow from top edge
- Blinking cursor in hero status line (reduced-motion safe)
- Ledger-style post list, hover arrow slide
- View transitions (200ms fades)
- 404 = `0x404` easter egg

## SEO/AI stack
Sitemap, RSS, canonicals, JSON-LD (Person/WebSite/BlogPosting), per-post satori OG images at `/og/<slug>.png`, robots.txt welcoming AI crawlers, llms.txt.

## Content model
Markdown in `src/content/blog`. Frontmatter: title, description, date, tags, draft. Three seed posts shipped; replace freely.

## Privacy guardrails (from AGENTS.md)
Builder receipts in. Family, fitness, finances, street-level location out.
