# Interpaint Design Spec

This document is the current design handoff for the Interpaint site. It should let another agent understand the live structure, the visual system, and the implementation rules without reverse engineering the whole app.

Primary source files:

- [app/layout.tsx](../app/layout.tsx)
- [app/globals.css](../app/globals.css)
- [app/page.tsx](../app/page.tsx)
- [app/components/Shared.tsx](../app/components/Shared.tsx)
- [app/components/HomeSections.tsx](../app/components/HomeSections.tsx)
- [app/components/Gallery.tsx](../app/components/Gallery.tsx)
- [app/components/SeoServicePage.tsx](../app/components/SeoServicePage.tsx)
- [app/data/site.ts](../app/data/site.ts)

## What This Site Is

Interpaint is an industrial service site for sandblasting / surface preparation / protective coatings. The design should feel:

- industrial
- clean
- premium
- direct
- credible

It should not drift back toward a generic agency template, a blog layout, or a decorative landing page.

## App Structure

The app is an App Router site with a shared layout and route-specific sections.

`app/layout.tsx`
- mounts `Header` and `Footer` globally
- sets the global metadata
- sets `lang="sr"`

`app/page.tsx`
- renders the homepage composition from `HomePage`

Route pages:
- `/nase-usluge`
- `/eco-blasting`
- `/reference`
- `/kontakt`
- `app/[slug]/page.tsx` for SEO landing pages

## Route Map

Current SEO slugs generated from `seoPages`:

- `peskarenje`
- `peskarenje-metala`
- `peskarenje-auta`
- `peskarenje-felni`
- `peskarenje-drveta`
- `vodeno-mokro-peskarenje`
- `peskarenje-betona-i-kamena`
- `protivpozarna-zastita`
- `antikorozivna-zastita`

Route rules:
- every SEO slug uses the same reusable template
- each route gets its own metadata
- `generateStaticParams()` must stay aligned with `seoPages`

## Visual System

The design system is built around three things:

1. dark industrial surfaces
2. green accent color
3. condensed uppercase display typography

The look should stay consistent across:
- hero sections
- service rows and cards
- reference blocks
- contact forms
- CTA bands

### Color Tokens

Defined in `app/globals.css`.

| Token | Value | Purpose |
| --- | --- | --- |
| `--dark` | `#07100d` | Main dark background |
| `--dark-2` | `#101914` | Reserved dark tone |
| `--ink` | `#111b17` | Primary text on light sections |
| `--muted` | `#5e6b63` | Supporting body text |
| `--line` | `#d7e0d9` | Light borders |
| `--line-dark` | `rgba(255, 255, 255, 0.14)` | Borders on dark surfaces |
| `--smoke` | `#f3f6f2` | Soft section background |
| `--green` | `#70c043` | Main accent color |
| `--green-2` | `#4f992c` | Hover / darker accent |
| `--green-soft` | `#e7f3df` | Reserved highlight tone |
| `--steel` | `#24312c` | Reserved industrial tone |

### Typography

- Body font: `Manrope`
- Display font: `Roboto Condensed`
- Headings are uppercase, condensed, and tightly tracked
- Serif accents are intentionally not used in the current design

Guideline:
- keep headings strong and compact
- keep body copy readable and slightly restrained
- do not reintroduce editorial serif treatment unless there is a deliberate redesign decision

## Shared Layout Rules

Container:
- `.container`
- `min(100% - 64px, 1240px)`
- all sections align to this same width system unless explicitly full-bleed

Section backgrounds:
- `.section-dark`
- `.section-light`
- `.section-ice`

General section rhythm:
- most content bands use `112px` vertical padding on desktop
- mobile uses reduced spacing

## Shared Components

### `Header`

File: `app/components/Shared.tsx`

Behavior:
- absolute over the hero
- desktop nav visible
- mobile menu is a `details/summary` disclosure
- phone CTA is visible on desktop

Design notes:
- logo is the only brand mark in the header
- mobile menu should stay simple and functional, not decorative

### `Footer`

File: `app/components/Shared.tsx`

Contains:
- brand mark
- contact details
- navigation
- quick services

Important:
- footer is global, not page-specific
- it should stay dark and structured

### `Eyebrow`

Used for small uppercase labels above headings.

Rules:
- green
- condensed
- wider tracking
- always uppercase

### `SectionHeading`

This is the main section heading pattern across the site.

Behavior:
- eyebrow
- heading
- optional supporting paragraph

Design rules:
- use this before inventing a new heading block
- keep heading text short and direct
- use it for both light and dark sections

### `CTAButton`

Primary CTA style.

Rules:
- green filled button
- condensed uppercase label
- arrow icon
- used for phone-driven actions and important links

### `CheckList`

Used for quick benefit / feature bullets.

Rules:
- line items with icon
- green icon
- suitable for service explanations and SEO pages

### `PageHero`

Reusable hero block for inner pages and SEO pages.

Rules:
- full-bleed image background
- dark overlay
- strong headline
- supporting paragraph
- CTA below

Do not:
- make it visually weaker than a plain content band
- add extra chrome inside the hero

### `ContactStrip`

Dark CTA band used at the end of major pages.

Purpose:
- push the phone/email action
- close the page with a clear next step

## Page Recipes

### Homepage

File: `app/components/HomeSections.tsx`

Section order:
1. Hero
2. Intro
3. Services preview
4. Eco feature
5. References preview
6. Gallery
7. Contact strip

Hero behavior:
- full-bleed industrial image
- main title: `PESKARENJE / BEZ PRAŠINE`
- supporting copy is right-aligned on desktop
- lower cards surface operational strengths

Intro:
- 2-column explanation section
- left: summary + checklist
- right: layered image stack

Services preview:
- row-based list, not cards
- each row has number, title, summary, kicker, and arrow
- hover adds a subtle green wash

Eco feature:
- dark callout
- highlights dustless blasting
- includes floating caption card

References preview:
- partner logo grid
- short list of representative projects

Gallery:
- uniform grid
- category filters
- lightbox overlay

Contact strip:
- end-of-page CTA band with phone and email action

### `/nase-usluge`

Design goal:
- show the full service portfolio without turning it into a catalogue wall

Structure:
- strong hero
- card grid for services
- Eco feature
- gallery
- contact strip

### `/eco-blasting`

Design goal:
- make EcoBlasting feel like the differentiating offer

Structure:
- hero
- explanatory content block
- Eco feature
- gallery
- contact strip

### `/reference`

Design goal:
- proof of work, not marketing fluff

Structure:
- hero
- partner logos
- project list
- gallery
- contact strip

### `/kontakt`

Design goal:
- direct conversion

Structure:
- hero
- contact cards
- frontend-only form
- shared footer

### SEO Pages

Design goal:
- keep the same template while changing the title, summary, bullet list, and image

Pattern:
- hero
- content block
- related services
- gallery
- contact strip

## Content Model

All user-facing content lives in `app/data/site.ts`.

This file is the content source of truth for:
- contact data
- nav links
- gallery images
- service cards
- SEO page content
- references
- partner logos

Why this matters:
- another agent should edit `site.ts` before hardcoding content in components
- visual components should stay mostly reusable
- adding a new route should usually start with a new item in `seoPages`

## Gallery Rules

File: `app/components/Gallery.tsx`

Current behavior:
- filters are client-side
- categories are derived from the image data
- clicking opens a lightbox

Important design rule:
- the gallery is intentionally a uniform grid
- do not reintroduce masonry or spanning items unless the whole grid system is redesigned

Why:
- irregular spans created visual holes that looked like missing images
- the current layout avoids that problem by keeping each tile the same footprint

## Responsive Behavior

Desktop:
- strong full-width hero
- 2-column content sections where useful
- 3 or 4 column grids for support content

Tablet/mobile:
- header collapses to logo + menu
- hero content stacks vertically
- cards and reference grids collapse to single columns
- gallery collapses to fewer columns, then one column on small screens
- spacing is reduced to keep sections readable

Important mobile rule:
- the homepage hero uses normal flow on smaller screens instead of absolute-position-heavy composition

## Implementation Notes For Future Changes

If changing the design, keep these invariants:

- preserve the industrial green-on-dark identity
- preserve the condensed display typography
- keep CTA language direct and phone-forward
- keep the footer and header global and shared
- keep content in `app/data/site.ts` when possible
- keep gallery tiles uniform
- keep inner page heroes strong but more compact than the homepage hero

If adding a new SEO route:
1. add the content object to `seoPages`
2. add the slug to `generateStaticParams` automatically through that array
3. reuse `SeoServicePage`
4. verify metadata and hero copy

If adding a new gallery category:
1. add images with the category label in `galleryImages`
2. the filter list updates automatically
3. confirm the grid still remains uniform

If adding a new major page section:
1. prefer a reusable component in `app/components`
2. add section copy to `app/data/site.ts` when feasible
3. reuse existing tokens and heading patterns

## Known Constraints

- The site is currently static/export-friendly.
- The contact form is frontend-only.
- The mobile menu is intentionally simple.
- The global font import uses Google Fonts.
- There are two `package-lock.json` files in the workspace, which causes a Next root warning during build. This is non-blocking but worth knowing for future maintenance.

## What A Future Agent Should Not Break

- the global header/footer mounting in `app/layout.tsx`
- the `page-hero` and `section-heading` patterns
- the content-driven model in `app/data/site.ts`
- the gallery’s uniform tile sizing
- the condensed uppercase typography rules
- the green accent color as the only strong highlight color
- keep gallery cards uniform to avoid false missing-image gaps
- keep green as the only strong accent color
- use cards sparingly and only where they clarify content
