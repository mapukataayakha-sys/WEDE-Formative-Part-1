# Table of Friends Coffeeshop Website

## 1. Project Overview

Table of Friends Coffeeshop and More is a community coffee shop located at Old Castle Brewery in Woodstock, Cape Town. Founded in 2021, we serve artisan coffee, fresh food, and host community events. Our website makes it easy for customers to find our menu, hours, location, and get in touch — whether they're regulars, new visitors, or potential catering clients.

## 2. Website Goals and Objectives

- Provide a reliable source of information (menu, hours, location) so customers don't rely on inaccurate third-party data
- Share our story and community values to build genuine connection with visitors
- Showcase our full menu with pricing so customers know what to expect before arriving
- Promote community events (open mic night, book club, community breakfast)
- Enable catering and private event enquiries through a dedicated enquiry form
- Connect with customers via newsletter and social media
- Attract new customers through discoverable, search-friendly content

## 3. Target Audience

- **Regulars & locals** — people who work or live in the Woodstock and inner-city Cape Town area
- **Remote workers** — seeking a welcoming workspace over coffee
- **Office workers** — order breakfast and lunch, enquire about team catering
- **Students & creatives** — drawn by the relaxed community feel
- **Tourists & visitors** — looking for an authentic local café experience
- **Event planners** — enquiring about private bookings and catering

## 4. Key Features and Functionality

- [x] Homepage with hero section and call-to-action buttons
- [x] About page with history, mission and community events
- [x] Full menu page with categorized items and pricing (Specialty Coffee, Breakfast, Lunch, Baked Goods, Drinks)
- [x] Specials/Deals page featuring weekly promotions
- [x] Contact page with location, directions (Google Maps embed), phone number, opening hours, and a contact form
- [x] Enquiry page for catering and private events
- [x] Image gallery on homepage showcasing the café space and food
- [x] Community Events section (Open Mic Night, Book Club, Community Breakfast)
- [x] Newsletters signup form in dedicated section
- [x] Social media links in the footer (Facebook, Instagram)
- [x] Fully responsive mobile-first design
- [x] Accessible navigation (WCAG 2.1 AA compliant)
- [x] Skip-to-content link on every page
- [x] CSS variables and custom properties for consistent theming
- [x] Print stylesheet for browser printing
- [x] Respects `prefers-reduced-motion` for accessibility

## 5. Design Approach

### Color Palette
- Primary Brown: `#2c1810` — warm, earthy tones for headers and navigation
- Terracotta/Gold: `#c4a74f` — accent colour for buttons and highlights
- Cream: `#F5F1EA` — soft background for sections
- White: `#FAFAF8` — clean content backgrounds
- Text: `#2C2C2C` — strong, readable dark text
- Gray: `#E0DCD8` — subtle borders and dividers

### Typography
- Font Family: Segoe UI (headings & body), Georgia serif support
- Primary Heading: 2rem–3rem
- Body Text: 1rem / 16px
- Line Height: 1.6

### Visual Style
- Warm, authentic and welcoming — reflects the real café atmosphere
- Mobile-first, clean minimalist layout
- Generous whitespace for readability
- Earthy, natural colour palette inspired by coffee and wood

## 6. Sitemap

```
Table of Friends Coffeeshop
├── 1. index.html          — Home (hero, quick-info, about, menu, specials, gallery, newsletter, contact)
├── 2. about.html          — About Us (story, values, community events, CTA)
├── 3. menu.html           — Our Menu (coffee, breakfast, lunch, baked goods, drinks)
├── 4. specials.html       — Daily & Weekly Specials
├── 5. contact.html        — Visit & Contact (form, map, address, contact details)
└── 6. enquiry.html        — Catering & Private Event Enquiry Form
```

## 7. Technology Stack

- **HTML5** — Semantic markup with proper heading hierarchy, ARIA attributes, and ARIA live regions
- **CSS3** — Custom properties (CSS variables), reset, responsive grid layouts, mobile-first media queries
- **JavaScript (ES6)** — Mobile hamburger navigation toggle
- **Assets** — Images sourced from Pexels.com (locally hosted)
- **Forms** — Placeholder mailto forms; can be connected to Formspree or similar service

## 8. Accessibility Features

- Semantic HTML5 structure (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`)
- `role="banner"`, `role="navigation"`, `role="contentinfo"` on appropriate landmarks
- `aria-label` attributes on navigation
- `aria-current="page"` marks active navigation link on every page
- Skip-to-content link for keyboard users at top of every page
- `:focus-visible` with 3px gold outline on all interactive elements
- All images include meaningful `alt` text descriptions
- All form inputs have associated `<label>` elements
- Help text uses `aria-describedby` where applicable
- `prefers-reduced-motion` media query disables animations/flashing
- Print stylesheet for browser printing
- Keyboard navigation tested on all pages

## 9. Part 1 Completion Checklist

- [x] 6 independent HTML pages created (index, about, menu, specials, contact, enquiry)
- [x] Proper folder structure (`css/`, `js/`, `images/`)
- [x] Navigation implemented on all 6 pages with full inter-page linking
- [x] Semantic HTML5 used throughout
- [x] CSS reset and CSS variables applied
- [x] CSS variables used consistently (no hardcoded colour values)
- [x] Mobile responsive design (tested at 320px, 768px, 1024px)
- [x] All images sourced from Pexels and stored locally in `images/`
- [x] Accessibility tested (keyboard nav, screen readers)
- [x] Image attribution comments in HTML
- [x] ARIA attributes implemented
- [x] `prefers-reduced-motion` media query present
- [x] Print stylesheet implemented
- [x] `<footer role="contentinfo">` and `<header role="banner">` on all pages
- [x] All files committed to GitHub with descriptive messages

## 10. Changelog

| Date | Version | Changes |
|------|---------|---------|
| 2026-04-13 | 0.1.0 | Project planning and structure established for 6 pages (index, about, menu, specials, contact, enquiry) |
| 2026-04-15 | 0.2.0 | Implemented HTML5 semantic structure with header, nav, main, footer, skip-to-content links, and ARIA attributes |
| 2026-04-17 | 0.3.0 | Added full CSS with variables, reset, responsive hamburger menu, and mobile-first media queries |
| 2026-04-19 | 0.4.0 | Added ARIA labels, aria-current="page" on active nav, focus-visible styles, accessibility features |
| 2026-04-21 | 0.5.0 | Separated all content to real standalone HTML pages (replaced meta-refresh redirects), added contact and enquiry pages |
| 2026-05-19 | 1.0.0 | Part 1 complete — all files ready for submission; downloaded images locally; added comprehensive README |

## 11. References (Harvard Style)

- Pexels (2025) 'Free coffee shop photos'. Available at: https://www.pexels.com/search/coffee%20shop/ (Accessed: 19 May 2026).
- World Wide Web Consortium (W3C) (2018) 'Web Content Accessibility Guidelines (WCAG) 2.1'. Available at: https://www.w3.org/WAI/WCAG21/quickref/ (Accessed: 19 May 2026).
- MDN Web Docs (2025) 'HTML: HyperText Markup Language'. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: 19 May 2026).
- Pexels License (2025) 'Pexels License Overview'. Available at: https://www.pexels.com/license/ (Accessed: 19 May 2026).
- Nielsen Norman Group (2020) 'Website Usability: What Users Want'. Available at: https://www.nngroup.com/articles/website-usability/ (Accessed: 19 May 2026).
- Google (2025) 'Google Maps Embed API'. Available at: https://developers.google.com/maps/documentation/embed/overview (Accessed: 19 May 2026).
- WCAG Overview (2023) 'How to meet WCAG (Quick Reference)'. Available at: https://www.w3.org/WAI/WCAG21/quickref/ (Accessed: 19 May 2026).

## 12. Student Information

- **Name:** Ayakha Mapukata
- **Student Number:** ST10533919
- **Module:** WEDE5020 — Web Design and Development
- **Submission Date:** 19 May 2026

## 13. Files & Folder Structure

```
/table of friends/
├── index.html              — Homepage (hero, quick-info, about, menu, specials, gallery, newsletter, contact)
├── about.html              — About page (story, values, community events)
├── menu.html               — Menu page (coffee, breakfast, lunch, baked goods, drinks)
├── specials.html           — Specials/deals page
├── contact.html            — Contact page (form, directions, address, hours)
├── enquiry.html            — Catering & private event enquiry form
├── css/
│   └── style.css           — Main stylesheet (reset, variables, responsive, accessibility)
├── js/
│   └── main.js             — Hamburger mobile menu toggle
├── images/
│   ├── pexels-photo-18105587.webp   — Café interior
│   ├── pexels-photo-6646855.jpeg    — Coffee shop counter
│   ├── pexels-photo-29120540.webp   — Seating area
│   └── free-photo-of-interior-of-a-modern-cafe.jpeg  — Interior
├── README.md               — Project documentation
└── wireframe.html          — Low-fidelity wireframes
```
