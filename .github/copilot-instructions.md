# Novara Hospital — Copilot Instructions

You are building **Novara Hospital**, a fictional multispeciality hospital website.
This is a real-quality portfolio demo — treat every decision as if this were a live client project.
No shortcuts. No placeholder logic. No generic patterns.

---

## Project Identity

- **Name:** Novara Hospital
- **Tagline:** Where Expertise Meets Compassion
- **Type:** Multispeciality hospital (fictional, demo)
- **Established:** 2004
- **Trust Stats:** 25+ Specialities · 500+ Doctors · 2,00,000+ Patients Served
- **Specialities:** Cardiology, Neurology, Orthopaedics, Gastroenterology, Oncology

---

## Tech Stack

- **Framework:** React 18 with Vite
- **Language:** JavaScript (no TypeScript for this project)
- **Styling:** Tailwind CSS v3 — utility-first, no custom CSS files unless absolutely unavoidable
- **Routing:** React Router v6 — all pages are separate routes
- **Animations:** Framer Motion — use sparingly, only for meaningful transitions (page enters, card reveals, counter animations). No scroll-hijacking, no heavy sequences.
- **Icons:** Lucide React
- **Fonts:** Loaded via Google Fonts in index.html — DM Serif Display (headings), DM Sans (body/UI), Syne (stat numbers only)
- **Package manager:** npm
- **Deployment:** Vercel

---

## Brand & Design Tokens

Use these values consistently. Never hardcode colors outside of Tailwind config.

```js
// tailwind.config.js — extend colors with these exact values
colors: {
  novara: {
    primary: '#1E3A5F',      // Deep Slate Blue — headers, nav, primary buttons
    accent: '#0E8A7D',       // Cool Teal — CTAs, highlights, links, badges
    bg: '#F4F6F8',           // Cloud White — page backgrounds
    surface: '#FFFFFF',      // Pure White — cards, modals, sections
    text: '#1C1C2E',         // Graphite — primary body text
    muted: '#5A6478',        // Muted Slate — secondary text, captions
    border: '#E2E6ED',       // Soft Gray — dividers, card borders
  }
}
```

### Typography Rules
- `font-DM_Serif_Display` — all H1, H2, H3 headings
- `font-DM_Sans` — all body text, nav, buttons, labels, forms
- `font-Syne` — ONLY for large stat numbers (e.g. "500+")
- Never mix heading font into body copy or UI elements
- Never use Inter, Roboto, or system fonts anywhere

---

## Folder Structure

```
src/
├── assets/          # images, SVGs, logo placeholder
├── components/
│   ├── layout/      # Navbar, Footer, PageWrapper
│   ├── ui/          # reusable: Button, Card, Badge, SectionHeader, StatCounter
│   └── sections/    # page-specific sections: HeroSection, DoctorsGrid, etc.
├── data/            # all dummy data as JS files: doctors.js, specialities.js, blogs.js
├── pages/           # one file per route
└── main.jsx
```

---

## Pages & Routes

| Page | Route |
|---|---|
| Home | `/` |
| About | `/about` |
| Specialities Overview | `/specialities` |
| Speciality Detail | `/specialities/:slug` |
| Doctors Directory | `/doctors` |
| Doctor Profile | `/doctors/:slug` |
| Appointments | `/appointments` |
| Patient Information | `/patient-information` |
| Facilities | `/facilities` |
| Patient Stories | `/patient-stories` |
| Health Blog | `/blog` |
| Blog Post | `/blog/:slug` |
| Contact | `/contact` |

---

## Responsiveness — Non-Negotiable

Every component must be designed for three breakpoints:
- **Mobile** (`< 640px`) — single column, thumb-friendly, reimagined layouts
- **Tablet** (`640px – 1024px`) — gracefully compressed, 2-column where appropriate
- **Desktop** (`> 1024px`) — full spatial, multi-column experience

### Key responsive rules:
- A multi-column card grid on desktop becomes a **horizontal scroll row** on mobile — never a tall stacked column
- Side-by-side hero sections become **stacked with image as background overlay** on mobile
- Navigation becomes a **hamburger menu** on mobile — smooth slide-in drawer, not a dropdown
- Tables become **card-based lists** on mobile
- Font sizes scale down gracefully — never clip or overflow on small screens
- Tap targets minimum **44px height** on mobile
- Never assume desktop layout and just shrink it — actively redesign for mobile

---

## Code Conventions

- Functional components only — no class components
- One component per file
- Props always destructured in function signature
- Dummy data always imported from `src/data/` — never hardcoded inside components
- All images use descriptive `alt` text
- No inline styles — Tailwind classes only
- No `console.log` left in final code
- Framer Motion imports only from `framer-motion` — never animate with raw CSS keyframes for JS-driven motion
- Button component accepts `variant` prop: `primary`, `secondary`, `outline`
- All form inputs have associated `<label>` elements

---

## What This Site Is NOT

- Not a SPA with heavy scroll animations or shader effects
- Not a dark-themed site
- Not a portfolio site or agency site
- Not a booking system with real backend — all forms are UI only
- Not a CMS — all content lives in `src/data/` JS files

---

## Quality Bar

Every page must feel like it could be a real hospital's live website.
If something looks like an AI-generated template, rebuild it.
If a section looks empty or generic, add a trust signal, a real-looking stat, or a human detail.
The goal is that someone scrolling through this site for 30 seconds thinks: "This is real."
