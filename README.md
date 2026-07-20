# Voyage — Around the World in One Scroll (v2)

A full rebuild of the original single-file HTML/CSS/JS site into a
production React app: Vite + React + Tailwind CSS + GSAP (ScrollTrigger) +
Framer Motion + Lenis smooth scroll.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in /dist
```

## What changed from v1

- **Signature transition**: `CloudBridge` — a real layered-cloud flythrough
  (three depth layers, parallax, a big plane with contrail flying in and
  fading into the cloud bank) between every country, instead of the old
  flat 56vh strip with dot clouds.
- **Loader**: rotating route ring that lights up a node per country as it
  loads, instead of a plain progress bar.
- **Flight progress**: one continuous route with the plane sliding along it
  and each city label lighting up on arrival (was five separate segments).
- **Cards**: glassmorphic, 3D tilt-on-hover (Framer Motion), radial hover
  glow tinted per country.
- **Passport**: opens with a 3D perspective flip; each stamp springs in with
  stagger + rotation instead of appearing instantly.
- **Ending**: a constellation (SVG path) connects the countries you actually
  visited, drawn in as you scroll to it.
- **Typography**: split-letter GSAP reveal on every country title.
- **Smooth scroll**: Lenis drives the whole page and is wired into GSAP's
  ticker so ScrollTrigger stays perfectly in sync — no more native-scroll
  jitter.

## Adding real photography (important)

I didn't bundle stock photos — I don't have redistribution rights to hand
you real photographs, and pulling in placeholder hotlinks tends to break
later. Instead, background photos are **drop-in**:

```
src/assets/images/japan.jpg
src/assets/images/india.jpg
src/assets/images/egypt.jpg
src/assets/images/italy.jpg
src/assets/images/brazil.jpg
```

Add a file with the exact name above (jpg/png/webp all work — just update
the extension in `src/data/countries.js` → `photo:` if needed) and
`CinematicBG` will automatically use it, with the dark cinematic overlay
already tuned for legibility. No file present → it falls back to the
layered gradient + SVG landmark art, which is why the site still looks
intentional out of the box. Good free-to-use sources: Unsplash, Pexels,
Pixabay — check each photo's specific license before shipping publicly.

## Adding sound

Same reasoning — no audio files included. There's a natural hook point in
`Hero.jsx` / `CloudBridge.jsx` if you want to wire up a `useAudio()` hook
around `<audio>` elements with your own licensed sound effects (wind,
temple bells, stamp thunk, etc).

## Structure

```
src/
  data/countries.js        content + palette + particle config per country
  components/
    Loader.jsx              boot sequence
    Hero.jsx                airport / takeoff scene
    CloudBridge.jsx          cinematic transition between countries
    CloudLayer.jsx           layered SVG cloud banks
    CinematicPlane.jsx       big plane + contrail, reused twice
    CountryScene.jsx         per-country scene shell
    CinematicBG.jsx          photo-or-gradient background + overlay
    Landmarks.jsx            per-country SVG landmark illustrations
    ParticleField.jsx        petals / lanterns / dust / mist / confetti
    InfoCard.jsx             tilt-on-hover glass card
    Modal.jsx                card detail popup
    FlightRoute.jsx          top progress bar
    PassportChip.jsx         bottom-corner stamp tracker
    Ending.jsx               passport + constellation + replay
  lib/useLenis.js            smooth scroll wired to GSAP ticker
```

## Notes

- Respects `prefers-reduced-motion` throughout (particles, loader duration,
  scroll behavior all degrade gracefully).
- Everything is a real component — no copy-paste section duplication — so
  adding a 6th country is: one object in `countries.js` + one SVG in
  `Landmarks.jsx`.
- Current bundle is ~430KB JS / ~150KB gzipped, all animation libraries
  included. Fine for a portfolio piece; if you want to trim it, GSAP
  ScrollTrigger + Framer Motion + Lenis are all doing distinct jobs so I'd
  profile before cutting.
