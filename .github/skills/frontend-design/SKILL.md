---
name: frontend-design
description: Novara Hospital design system. Load this skill when building any UI component, page section, or layout for the Novara Hospital website. Covers color usage, typography application, component patterns, spacing, responsiveness, and what to avoid.
---

# Novara Hospital — Frontend Design Skill

This skill defines how every UI element on the Novara Hospital site should look, feel, and behave.
Before writing any component, read this fully. Every decision here is intentional.

---

## Design Philosophy

Novara Hospital's visual identity is: **calm authority**.
Not sterile. Not corporate. Not flashy.

Think: a premium private hospital in a major Indian city that a wealthy, educated patient would trust immediately.
The site should feel like the physical experience of walking into such a hospital — clean, spacious, quietly confident.

The two things that must come through on every page:
1. **Trust** — this place knows what it's doing
2. **Warmth** — these people care about you

Every layout decision, color choice, and typographic call must serve one of those two goals.

---

## Color System

```
Primary:    #1E3A5F  → Deep Slate Blue
Accent:     #0E8A7D  → Cool Teal
Background: #F4F6F8  → Cloud White
Surface:    #FFFFFF  → Pure White
Text:       #1C1C2E  → Graphite
Muted:      #5A6478  → Muted Slate
Border:     #E2E6ED  → Soft Gray
```

### How to use each:

**Primary (#1E3A5F)**
- Navbar background
- Footer background
- Primary CTA button background
- Section headings on light backgrounds
- Doctor/speciality card header strips

**Accent (#0E8A7D)**
- Hover states on primary buttons
- Icon colors
- Badge backgrounds (e.g. "Cardiology", "Available Today")
- Underline accents on headings
- Active nav link indicator
- Link text color

**Background (#F4F6F8)**
- Page-level background — every page sits on this
- Alternating section backgrounds (surface and bg alternate to create rhythm)

**Surface (#FFFFFF)**
- Cards
- Modals
- Form backgrounds
- Navbar on scroll (with shadow)

**Text (#1C1C2E)**
- All body copy
- Headings when on light background

**Muted (#5A6478)**
- Captions, meta text (date, specialty label, read time)
- Placeholder text in forms
- Secondary descriptions

**Border (#E2E6ED)**
- Card borders
- Input field borders
- Dividers between sections
- Table row separators

### Color rules:
- Never use more than 2 colors in a single component (excluding text/border)
- Accent color appears maximum 2-3 times per page — it loses power if overused
- No gradients between Primary and Accent — they clash. Use solid fills only.
- Subtle gradient allowed: Primary → slightly lighter Primary, for hero or navbar
- No random color additions outside this palette

---

## Typography System

```
Headings:   DM Serif Display  (Google Font)
Body/UI:    DM Sans           (Google Font)
Stats only: Syne              (Google Font)
```

### Scale & application:

| Element | Font | Size (desktop) | Size (mobile) | Weight |
|---|---|---|---|---|
| H1 (hero) | DM Serif Display | 56–64px | 36–40px | 400 (regular) |
| H2 (section) | DM Serif Display | 40–48px | 28–32px | 400 |
| H3 (card/sub) | DM Serif Display | 24–28px | 20–22px | 400 |
| Body large | DM Sans | 18px | 16px | 400 |
| Body regular | DM Sans | 16px | 15px | 400 |
| Body small | DM Sans | 14px | 13px | 400 |
| Label/Badge | DM Sans | 12px | 12px | 500 |
| Nav links | DM Sans | 15px | 15px | 500 |
| Button text | DM Sans | 15px | 14px | 600 |
| Stat numbers | Syne | 48–64px | 36–40px | 700 |
| Stat labels | DM Sans | 14px | 13px | 400 |

### Typography rules:
- DM Serif Display always renders at font-weight 400 — it has no bold variant, don't force it
- Never use DM Serif Display for body copy, labels, buttons, or form elements
- Line height for headings: 1.15. For body: 1.65. For UI elements: 1.2
- Letter spacing for H1/H2: -0.02em (slight tightening looks premium)
- Letter spacing for labels/badges: 0.04em (slight opening reads clearly at small sizes)
- Max line length for body paragraphs: 65–70 characters (use max-w-prose or max-w-2xl)

---

## Component Patterns

### Buttons

Three variants only:

**Primary** — solid Primary background, white text
```
bg-[#1E3A5F] text-white px-6 py-3 rounded-lg font-['DM_Sans'] font-semibold text-[15px]
hover: bg-[#0E8A7D] transition-colors duration-200
```

**Secondary** — solid Accent background, white text (for less prominent but still action-forward CTAs)
```
bg-[#0E8A7D] text-white px-6 py-3 rounded-lg font-['DM_Sans'] font-semibold text-[15px]
hover: opacity-90 transition-opacity duration-200
```

**Outline** — transparent, Primary border and text (for secondary actions like "Learn More")
```
border border-[#1E3A5F] text-[#1E3A5F] px-6 py-3 rounded-lg font-['DM_Sans'] font-semibold text-[15px]
hover: bg-[#1E3A5F] text-white transition-all duration-200
```

Mobile: all buttons minimum 44px height, full-width on mobile if standalone CTA.

### Cards

Base card pattern:
```
bg-white rounded-xl border border-[#E2E6ED] shadow-sm
hover: shadow-md transition-shadow duration-200
```

- Always use rounded-xl (12px) — not rounded-lg or rounded-2xl
- Subtle shadow on default, slightly deeper on hover
- Never add colored backgrounds to cards — white only
- Card padding: p-6 desktop, p-4 mobile
- Card image (if any): always rounded-t-xl, object-cover, fixed height (don't let images dictate card height)

### Section Headers

Every major section uses this pattern:
- Small teal label above heading (e.g. "OUR SPECIALITIES" in DM Sans, 12px, tracking-widest, accent color)
- H2 heading below in DM Serif Display
- Optional short descriptor paragraph in DM Sans muted color, max-w-2xl, centered or left-aligned

```jsx
<div className="mb-12">
  <span className="text-[#0E8A7D] font-['DM_Sans'] text-xs font-medium tracking-widest uppercase">
    Our Specialities
  </span>
  <h2 className="font-['DM_Serif_Display'] text-[#1C1C2E] text-4xl mt-2 leading-tight tracking-tight">
    World-Class Care Across Every Discipline
  </h2>
  <p className="text-[#5A6478] font-['DM_Sans'] text-base mt-4 max-w-2xl leading-relaxed">
    Supporting description here.
  </p>
</div>
```

### Badges / Tags

```
bg-[#0E8A7D]/10 text-[#0E8A7D] px-3 py-1 rounded-full
font-['DM_Sans'] text-xs font-medium tracking-wide
```

Use for: speciality labels on doctor cards, blog categories, availability status.

### Stat Counters

Trust stat block (used on Home, About):
```
Syne font, 48–64px, Primary color for number
DM Sans, 14px, Muted color for label below
Accent colored thin line or icon above
```

Group in a 4-column grid desktop, 2-column tablet, 2-column mobile.

### Navigation

**Desktop:**
- Fixed top, full width
- Primary background (#1E3A5F), white text links
- Logo left, nav links center-right, "Book Appointment" CTA button rightmost
- On scroll: add subtle shadow, slight opacity increase
- Active link: teal underline 2px below text

**Mobile:**
- Hamburger icon (Lucide Menu icon), white
- Slide-in drawer from right, full height, Primary background
- Links stacked vertically with generous padding (py-4 each)
- "Book Appointment" button at bottom of drawer, full width
- Smooth Framer Motion slide transition (x: 100% → 0)

### Hero Section (Homepage)

- Full viewport height (min-h-screen)
- Left side: text content (H1, tagline, two CTAs, trust badges)
- Right side: hero image (doctor/hospital imagery placeholder — use a high-quality gradient placeholder or SVG illustration if no image)
- On mobile: image becomes full-bleed background with dark overlay, text centered over it
- Trust badges below headline: small icons + "25+ Specialities", "500+ Doctors", "Est. 2004"

### Footer

- Primary background (#1E3A5F), white text
- 4-column grid: Logo+tagline | Quick Links | Specialities | Contact Info
- Bottom bar: copyright, small muted text
- On mobile: single column stack, centered text

---

## Spacing System

Use Tailwind spacing scale consistently:
- Between sections: `py-20` desktop, `py-12` mobile
- Between card grids and their headers: `mt-12` desktop, `mt-8` mobile
- Inside cards: `p-6` desktop, `p-4` mobile
- Between heading and body in a section: `mt-4`
- Between two body paragraphs: `mt-4`

Never use arbitrary spacing values unless absolutely unavoidable.

---

## Responsive Layout Patterns

### Grid → Horizontal Scroll (mobile)
Doctor cards, speciality cards, blog cards on desktop: `grid grid-cols-3 gap-6`
On mobile: `flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory`
Each card: `min-w-[280px] snap-start`

### Side-by-side → Stacked with overlay (mobile)
Hero, feature sections with image+text:
Desktop: `grid grid-cols-2 gap-12 items-center`
Mobile: `relative min-h-[80vh]` with image as absolute background, dark overlay, text on top

### Multi-column → Single column (mobile)
Stats, footer, about section:
Desktop: `grid grid-cols-4`
Tablet: `grid grid-cols-2`
Mobile: `grid grid-cols-2` (stats stay 2-col on mobile, they're short enough)

### Tables → Cards (mobile)
Any tabular data (doctor availability, appointment details):
Desktop: standard table with borders
Mobile: each row becomes a card with label-value pairs stacked

---

## Animation Guidelines (Framer Motion)

Use Framer Motion only for:
1. **Page transition** — subtle fade + slight upward translate on page enter
2. **Card reveals** — staggered fade-in as cards enter viewport (use `whileInView`)
3. **Stat counters** — count-up animation when stats scroll into view
4. **Mobile nav drawer** — slide-in from right

Pattern for card reveals:
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, delay: index * 0.1 }}
>
```

Do NOT animate:
- Navbar links
- Buttons (use CSS hover transitions only)
- Form elements
- Anything that moves on scroll continuously

---

## What to Avoid

- Inter, Roboto, system-ui, or any font not in the defined stack
- Purple, orange, red, or any color outside the palette
- Gradients between Primary and Accent
- Box shadows that are too heavy (shadow-lg or higher on cards)
- Rounded corners larger than rounded-xl on cards
- All-caps headings in DM Serif Display (looks wrong)
- Centered body paragraphs longer than 2 lines
- Stock-photo style placeholder images (use CSS gradient placeholders with icon overlays instead)
- Generic section patterns: "icon grid of 6 features" with no visual hierarchy
- Padding so tight that mobile feels claustrophobic
- Any layout that looks identical on desktop and mobile
