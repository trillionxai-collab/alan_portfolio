
# Alan Sebastian George — Portfolio

A vibrant, single-page TanStack Start portfolio with strong personality: deep engineering credibility paired with community-builder warmth.

## Design Direction

- **Aesthetic**: Bold editorial-tech. Dark slate background with electric accents (cyan + magenta gradient — evoking RF signals / Wi-Fi waves) and warm orange highlights for the human/community side.
- **Typography**: Display headings in `Syne` (geometric, distinctive), body in `Plus Jakarta Sans`. Loaded via `<link>` in `__root.tsx`.
- **Motion**: Framer Motion — blur/fade-in on scroll, animated signal-wave SVG behind hero, subtle hover lifts on cards.
- **Texture**: Animated grid pattern background in hero (signal-tower vibe), gradient orbs, glassmorphic cards.

## Page Structure (single route `/`)

1. **Nav** — name mark + section anchors + "Get in touch" CTA.
2. **Hero** — name, headline "Where Deep Engineering Meets Multi-Disciplinary Innovation", short tagline, primary CTAs (Contact / LinkedIn). Portrait (lake photo) framed on the right with gradient ring. Animated Wi-Fi wave SVG backdrop.
3. **About** — full bio paragraphs, two-column with a second portrait (Rotary award photo) showing leadership context.
4. **Expertise** — two cards: "Wireless Engineering" and "Leadership & Education" with bullet highlights from background section. Stat strip: 4+ yrs WLAN QA · UN Millennium Fellowship · B.Tech EEE · Ex-Synaptics.
5. **Services** — 3 large feature cards with icons (lucide: `Wifi`, `BookOpen`, `Users`) for WLAN Consulting, Curriculum Design, Peer Learning Systems. Each lists deliverables.
6. **Moments** — small gallery (community selfie + gym photo) showing range beyond work. Captions.
7. **Contact** — big gradient block with email button + social row (LinkedIn, Instagram, TinkerHub).
8. **Footer** — copyright + repeat socials.

## Technical Details

- Single route file: `src/routes/index.tsx` with per-section components co-located or split into `src/components/portfolio/*`.
- SEO in route `head()`: title "Alan Sebastian George — Hardware Validation Engineer & Community Builder", description, og:title/description, og:image (hero portrait).
- Photos uploaded → register via `lovable-assets` CLI from `/mnt/user-uploads/` → import the `.asset.json` pointers.
- Update `src/styles.css` with new semantic tokens (dark theme by default): `--background` deep slate, accent `--signal` cyan, `--pulse` magenta, `--ember` orange. Add gradient + shadow tokens. Keep light mode tokens but apply `dark` class on `<html>`.
- Add fonts via `<link rel="stylesheet">` in `__root.tsx` head (Google Fonts: Syne 600/800, Plus Jakarta Sans 400/500/700).
- Install `framer-motion`.
- Update `__root.tsx` meta + favicon left as-is.

## Out of Scope

- No backend, no contact form submission (mailto: link only).
- No CMS — content hardcoded.
- No dark/light toggle — dark only for vibrancy.
