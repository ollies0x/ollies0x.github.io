---
title: "Build log: shipping this site"
description: "Astro, GitHub Pages, zero JavaScript frameworks, and a design system built from a colour picker and an X profile. What went into ollies0x."
date: 2026-08-07
tags: ["building", "design", "astro"]
---

Shipped this site in a day. The constraint was brutal on purpose: static only, no framework runtime, hosted free, and it still has to look like someone with design taste made it.

Here's what's under the hood.

## The stack

- **Astro** - static output, markdown content collections, zero client-side JavaScript by default. Pages ship as HTML+CSS. That's the whole trick to a sub-second load.
- **GitHub Pages** - free hosting, deploys from a git push via Actions. Owned enough that I can point a custom domain at it whenever I feel like it, portable enough that I can leave.
- **Self-hosted fonts** - Space Grotesk for display, Inter for body, JetBrains Mono for the machine bits, Newsreader italic when a sentence needs a suit. No Google Fonts request, so nothing phones home about my readers.

## The design system

The palette is two colours: near-black `#0A0A0A` and electric green `#00FF55`. Same combination as my X profile and Underdog Digital - one brand across every surface, which is how it should work.

The details doing the heavy lifting:

- A dot-grid atmosphere layer with a green glow bleeding down from the top edge
- Text selection in green with black text - small thing, feels expensive
- Post list as a ledger: mono dates, hairline rules, arrow slides in on hover
- Blinking cursor in the hero status line, disabled for reduced-motion users
- View transitions between pages, 200ms fades

## The SEO stack (obviously)

I do this for a living, so the boring boxes came pre-ticked:

- Sitemap, RSS feed, canonical URLs
- JSON-LD Person, WebSite and BlogPosting schema
- Per-post Open Graph images generated at build time with satori
- robots.txt that explicitly welcomes AI crawlers, plus an llms.txt
- Semantic HTML, one H1 per page, real alt text policy

The site you're reading is itself a demo of the argument in my last post: be crawlable, be structured, be citable.

## What took longest

The typography scale. Not choosing fonts - choosing sizes. Every personal blog looks identical because everyone picks the same 1rem body and calls it minimal. Minimal isn't small type and white space. Minimal is every element earning its place, including the big ones.

## What's next

Custom domain when I stop procrastinating. Then the fun part: writing things worth citing.
