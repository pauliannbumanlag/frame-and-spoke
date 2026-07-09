# Frame & Spoke — Bicycle Shop Landing Page

A responsive landing page for a fictional independent bicycle repair and custom-build shop. Built with vanilla HTML, CSS, and JavaScript — no framework, no build step.

**[Live demo →](#)** *(add your deployed link here once hosted)*

![Frame & Spoke screenshot](#) *(add a screenshot or GIF here)*

## Why this project

This is a portfolio piece meant to demonstrate frontend fundamentals a client or hiring manager can evaluate at a glance: layout and typography chops, a working contact form with real validation, dark mode, and a page that holds together from a wide desktop down to a small phone — without leaning on a component library to do the work.

## Features

- **Fully responsive** — custom breakpoints for tablet and mobile, including a collapsible nav menu
- **Dark mode toggle** — respects system preference on first load, remembers your choice via `localStorage`
- **Scroll-triggered reveal animations** — via `IntersectionObserver`, with a `prefers-reduced-motion` fallback that disables them
- **Client-side form validation** — required fields, email format checking, inline error messages, accessible `aria-live` status updates
- **Custom SVG illustration** — a hand-built spoke-wheel graphic used as the hero visual and echoed in the nav mark
- **Semantic, accessible markup** — skip link, labeled form fields, visible focus states, sensible heading structure

## Tech stack

- HTML5 (semantic elements, inline SVG)
- CSS3 (custom properties for theming, CSS Grid/Flexbox, `color-mix()`, no framework)
- Vanilla JavaScript (ES6+, no dependencies)

## Project structure

```
frame-and-spoke/
├── index.html    # Markup, content, and inline SVG graphics
├── styles.css    # Design tokens + component styles + dark mode + responsive rules
├── script.js     # Nav toggle, dark mode, scroll reveal, form validation
└── README.md
```

## Running locally

Open `index.html` directly, or serve it locally:

```bash
python3 -m http.server 8000
# or
npx serve .
```

Visit `http://localhost:8000`.

## Deploying for free

Static site, zero config needed:

- **GitHub Pages** — push to a repo, enable Pages on `main`
- **Netlify** — drag-and-drop the folder into Netlify's deploy UI
- **Vercel** — `vercel deploy` from inside the folder

## Design notes

The visual identity is drawn from the subject itself rather than a generic template: a radial spoke-wheel motif anchors the hero and the nav logo, a repeating diagonal stripe (echoing shop hazard tape) marks the footer, and the numbered repair process is genuinely sequential — so numbering it communicates something real, not just decoration. Typography pairs a condensed industrial display face (Oswald) with a plain, readable body face (Work Sans) and a monospace utility face (Space Mono) for specs, prices, and labels — mirroring how a workshop actually marks measurements and part numbers.

## Notes on the contact form

The form validates and shows a success state on submit, but isn't wired to a real backend or email service — this is intentional for a static portfolio demo. To make it functional, connect it to a form service (e.g. Formspree, Netlify Forms) or a small backend endpoint.

## Possible next steps

- Wire the contact form to a real form-handling service
- Add a lightweight image gallery of past builds
- Add a booking calendar for tune-up slots
- Swap in real photography once available

---

Built as a portfolio piece to demonstrate responsive design, accessible form handling, and vanilla CSS/JS craft without relying on a framework.
