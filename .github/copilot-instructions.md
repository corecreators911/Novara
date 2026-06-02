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

- **Framework:** React 19 with Vite 8
- **Language:** JavaScript (no TypeScript for this project)
- **Styling:** Tailwind CSS v3 — utility-first, no custom CSS files unless absolutely unavoidable
- **Routing:** React Router v7 — all pages are separate routes
- **Animations:** Framer Motion — use sparingly, only for meaningful transitions (page enters, card reveals, counter animations). No scroll-hijacking, no heavy sequences.
- **Icons:** Lucide React
- **Fonts:** Loaded via Google Fonts in index.html — DM Serif Display (headings), DM Sans (body/UI), Space Grotesk (stat numbers only), Syne (in config but unused — do not add new uses)
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
- `font-['Space_Grotesk']` — ONLY for large stat numbers (e.g. "500+"), referenced as `font-['Space_Grotesk']` in Tailwind classes
- Never mix heading font into body copy or UI elements
- Never use Inter, Roboto, or system fonts anywhere

---

## Folder Structure

```
src/
├── assets/          # images, SVGs, logo placeholder
├── components/
│   ├── layout/      # Navbar, Footer, PageWrapper
│   ├── ui/          # reusable: Button, Badge, SectionHeader, StatCounter
│   └── sections/    # intended for page-specific sections (currently empty — section
│                    # components are defined as functions inside each page file)
├── data/            # all dummy data as JS files: doctors.js, specialities.js,
│                    # blogs.js, patientInfo.js, patientStories.js
├── hooks/           # custom hooks: useTextScramble.js
├── pages/           # one file per route
└── main.jsx
```

---

## Pages & Routes

| Page | Route | Status |
|---|---|---|
| Home | `/` | ✅ Built |
| About | `/about` | ⚠️ Stub — needs content |
| Specialities Overview | `/specialities` | ✅ Built |
| Speciality Detail | `/specialities/:slug` | ✅ Built |
| Doctors Directory | `/doctors` | ✅ Built |
| Doctor Profile | `/doctors/:slug` | ✅ Built |
| Appointments | `/appointments` | ✅ Built |
| Patient Information | `/patient-information` | ✅ Built |
| Facilities | `/facilities` | ✅ Built |
| Patient Stories | `/patient-stories` | ⚠️ Stub — needs content |
| Health Blog | `/blog` | ✅ Built |
| Blog Post | `/blog/:slug` | ✅ Built (Lorem Ipsum body — demo only) |
| Contact | `/contact` | ✅ Built |
| 404 | `*` | ⚠️ Unstyled — needs proper component |

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

## Custom Hooks

### `useTextScramble(text, trigger)` — `src/hooks/useTextScramble.js`
A text scramble animation hook. Accepts a text string and a boolean trigger. When trigger becomes true, animates the text by cycling through random characters before resolving to the real text. Used inside `SectionHeader` to animate the small label text when it scrolls into view. Respects `prefers-reduced-motion`.

---

## Code Conventions

- Functional components only — no class components
- One component per file
- Props always destructured in function signature
- Dummy data always imported from `src/data/` — never hardcoded inside components
  - **Known violations:** `Facilities.jsx` (facilitiesData hardcoded), `Contact.jsx` (contactDetails hardcoded) — fix when refactoring
- All images use descriptive `alt` text
- All `<img>` tags outside hero sections should use `loading="lazy"`
- No inline styles — Tailwind classes only (minor exception: custom `select` dropdown arrow in `Doctors.jsx`)
- No `console.log` left in final code
- Framer Motion imports only from `framer-motion` — never animate with raw CSS keyframes for JS-driven motion
- Button component accepts `variant` prop: `primary`, `secondary`, `outline`
- All form inputs must have associated `<label>` elements with matching `htmlFor` and `id` attributes
- `SectionHeader` is exported both as named and default export — prefer named import `{ SectionHeader }`

---

## Data Files (src/data/)

| File | Exports | Used in |
|---|---|---|
| `doctors.js` | `doctors` array | `Home`, `Doctors`, `DoctorProfile`, `SpecialityDetail`, `Appointments` |
| `specialities.js` | `specialities` array | `Home`, `Specialities`, `SpecialityDetail`, `Appointments` |
| `blogs.js` | `blogs` array | `Home`, `Blog`, `BlogPost` |
| `patientStories.js` | `patientStories` array | `Home` (PatientStories page is a stub) |
| `patientInfo.js` | `visitingHours`, `admissionProcess`, `amenities`, `insuranceProviders`, `faqs` | `PatientInformation` |

### Known data gaps:
- `blogs.js` entries have no `image` field — blog listing page has no card images
- `blogs.js` entries have no `content` field — blog post body is Lorem Ipsum
- `doctors.js` includes Dr. Maya Iyer (Pediatrics) but `specialities.js` has no Pediatrics entry — she is an orphaned doctor

---

## Known Issues (Pending Fixes)

### Critical
- `About.jsx` — empty stub, only renders `<h1>About</h1>`
- `PatientStories.jsx` — empty stub, renders `<h1>Patient Stories</h1>`, ignores `patientStories.js`
- `App.jsx` 404 route — renders raw unstyled `<h1>404 - Page Not Found</h1>`
- `Facilities.jsx` L121 — CSS typo: `md:w-2/3text-center` (missing space) → should be `md:w-2/3 text-center`
- `Appointments.jsx` — default country code is `+1` (should be `+91` for an Indian hospital)
- Pediatrics speciality missing from `specialities.js` — Dr. Maya Iyer's route `/specialities/pediatrics` 404s

### Non-Critical (Polish)
- `facilitiesData` in `Facilities.jsx` should move to `src/data/facilities.js`
- `contactDetails` in `Contact.jsx` should move to `src/data/contactInfo.js`
- Blog images in `Home.jsx` are hardcoded inline — should be in `blogs.js`
- `iconMap` object is duplicated in `Home.jsx`, `Specialities.jsx`, `SpecialityDetail.jsx` — extract to `src/utils/iconMap.js`
- Doctor card JSX is duplicated (mobile + desktop) in `Home.jsx` FeaturedDoctorsSection — extract `DoctorCard` component
- Identical page hero markup in `Facilities.jsx`, `Blog.jsx`, `Contact.jsx` — extract `PageHero` component
- All `<img>` tags missing `loading="lazy"`
- `window.matchMedia` in `StatCounter.jsx` called at render scope — move to `useMemo`
- Missing `htmlFor` on labels in `Contact.jsx`, `Blog.jsx` newsletter, `Appointments.jsx`
- FAQ button in `PatientInformation.jsx` missing `aria-expanded` attribute
- "Request a Callback" button in `Doctors.jsx` is a dead `onClick={() => {}}` — link to `/contact`

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
