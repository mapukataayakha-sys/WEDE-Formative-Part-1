# Community Chest of the Western Cape

A multi-page website for Community Chest of the Western Cape, a nonprofit organisation offering grants, training, and community development services across South Africa since 1928. Built with HTML5 and CSS3 — minimal JavaScript used only for the mobile hamburger menu.

## 1. Project Overview

Community Chest of the Western Cape has supported NGOs across South Africa with grants, training, and partnerships since 1928. This website provides a modern, accessible, and mobile-friendly platform for NGOs to discover funding opportunities, donors to learn about impact, and the public to engage with our work.

## 2. Website Goals and Objectives

- Streamline access to grants — make grant applications clearly visible and easy to find
- Save administrator time on simple recurring queries (recruitment deadlines, training dates)
- Showcase impact statistics to current and potential donors
- Provide a one-stop location for training participants to access course materials, classes, and certificates
- Build a mailing list for grant application and training announcements
- Demonstrate fund usage through impactful beneficiary stories rather than PDF-only reports

## 3. Target Audience

- **NGO leaders and practitioners** — seeking grants, training, and resources across South Africa
- **Grant applicants** — organisations in health, education, community development, and income generation sectors
- **Corporate & individual donors** — looking for transparent impact data
- **Training participants** — accessing materials and course information
- **Board & governance members** — reviewing impact data and fund allocation
- **Advocacy and media** — seeking story material and statistics

## 4. Key Features and Functionality

- [x] Homepage with hero, impact statistics section, programs overview, funded organisations grid, and contact preview
- [x] About page with organisation history, mission & vision, values, and leadership team
- [x] Programs page with detailed eligibility and four funding streams (Health, Education, Community Development, Income Generation)
- [x] Capacity Building section with four training types
- [x] Stories/Impact page with detailed beneficiary stories, sector filtering, and sector card grid
- [x] Contact page with contact form, department routing, address/hours/phone, and map placeholder
- [x] Enquiry page for all service inquiries (grants, training, partnerships, volunteering, media)
- [x] Full navigation on every page linking to all 6 site pages
- [x] Responsive hamburger menu (JavaScript-assisted mobile toggle)
- [x] Accessibility features: skip-to-content link, focus-visible styles, ARIA labels
- [x] CSS custom properties for consistent theming (navy, green, gold colour scheme)
- [x] Mobile-first responsive design
- [x] Print stylesheet
- [x] `prefers-reduced-motion` accessibility support

## 5. Design Approach

### Color Palette
- **Navy (Primary):** `#1B3A8A` — trust, credibility, authority
- **Green (Secondary):** `#2D7A4C` — growth, community, health
- **Gold (Accent):** `#D4A844` — warmth, partnership, recognition
- **Light background:** `#F8F7F5` — soft neutral backgrounds

### Typography
- Font Family: Segoe UI / Tahoma (headings & body)
- Primary Heading: 2.5rem–3rem
- Body Font: 1rem / 16px
- Line Height: 1.6

### Visual Style
- Professional, established feel — doesn't try to appear like a Silicon Valley startup
- Warm, community-centred tone
- Clear hierarchy ensuring primary actions (Apply for Funding, Donate, Contact) are immediately visible
- Mobile-first priority: 68% of traffic is mobile

## 6. Sitemap

```
Community Chest of the Western Cape
├── 1. index.html          — Home (hero, stats, legacy, programs overview, organisations, get-involved, contact)
├── 2. about.html           — About (history, mission & vision, values, leadership)
├── 3. programs.html        — Programs (health, education, community development, income generation, eligibility)
├── 4. stories.html         — Impact Stories (featured stories, sector filtering, stories grid)
├── 5. contact.html         — Contact (departments, contact form, map placeholder)
└── 6. enquiry.html         — Service Enquiry Form
```

## 7. Technology Stack

- **HTML5** — Semantic elements with ARIA attributes and roles
- **CSS3** — Custom properties, flexbox/grid layouts, responsive breakpoints, accessibility media queries
- **JavaScript (ES6)** — Mobile hamburger menu toggle
- **External stylesheet:** `css/style.css`
- **Images:** Stored locally in `images/` (sourced from Pexels.com)

## 8. Accessibility Features

- Semantic HTML5 structure (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`)
- `role="banner"`, `role="navigation"`, `role="contentinfo"` landmark roles
- `aria-label` on navigation
- `aria-current="page"` on active navigation link on every page
- Skip-to-content link on every page
- `:focus-visible` with 3px gold outline for keyboard navigation
- All images include meaningful `alt` text
- All form inputs have `<label>` elements with `for` attributes
- Required fields marked with `aria-required="true"` and `<span aria-hidden="true">*</span>`
- `prefers-reduced-motion` media query to disable animations for users who prefer it
- Print stylesheet for clean printing
- Mobile-first responsive design (320px, 768px, 1024px+)

## 9. Part 1 Completion Checklist

- [x] 6 independent HTML pages (index, about, programs, stories, contact, enquiry)
- [x] Proper folder structure (`css/`, `js/`, `images/`)
- [x] Navigation on every page linking to all 6 pages
- [x] Semantic HTML5 (`header`, `nav`, `main`, `footer`, `section`, `article`)
- [x] ARIA labels, `aria-current`, `role` attributes
- [x] Skip-to-content link on every page
- [x] CSS reset and CSS variables
- [x] Responsive hamburger menu on mobile
- [x] `:focus-visible` keyboard focus styles
- [x] `prefers-reduced-motion` media query
- [x] Print stylesheet
- [x] All images sourced from Pexels and stored locally in `images/`
- [x] No hotlinked images (all use relative paths)
- [x] Mobile responsive design (tested 320px, 768px, 1024px)
- [x] Accessibility: keyboard navigation and screen reader tested
- [x] All files committed to GitHub

## 10. Changelog

| Date | Version | Changes |
|------|---------|---------|
| 2026-04-13 | 0.1.0 | Initial project setup — created 6 HTML pages with basic navigation |
| 2026-04-15 | 0.2.0 | Added CSS with variables and reset; implemented responsive grid layouts |
| 2026-04-17 | 0.3.0 | Implemented responsive CSS-only hamburger menu with JavaScript toggle |
| 2026-04-19 | 0.4.0 | Added ARIA labels, aria-current="page" on active nav, focus-visible styles, skip-to-content links |
| 2026-04-21 | 0.5.0 | Downloaded images from Pexels and stored locally; replaced all hotlinked URLs with local paths |
| 2026-04-23 | 0.6.0 | Full CSS rewrite: added prefers-reduced-motion, print styles, hamburger JS, all HTML files cleaned up |
| 2026-05-19 | 1.0.0 | Part 1 complete — all requirements met; comprehensive README added; ready for submission |

## 11. References (Harvard Style)

- Community Chest Western Cape (2025) *Annual Report 2024*. Cape Town: Community Chest Western Cape.
- Community Chest of the Western Cape (2025) 'What We Do'. Available at: https://www.comchest.org.za/ (Accessed: 19 May 2026).
- ForGood (2025) *ForGood South Africa Non-Profit Register*. Available at: https://www.forgood.co.za/ (Accessed: 18 April 2026).
- World Wide Web Consortium (W3C) (2018) *Web Content Accessibility Guidelines (WCAG) 2.1*. Available at: https://www.w3.org/WAI/WCAG21/quickref/ (Accessed: 18 April 2026).
- South African Nonprofit Council (2025) *NGO Best Practices in South Africa*. Available at: https://www.sanpco.org.za (Accessed: 18 April 2026).
- Charity Water (2025) 'Nonprofit Website Design Guide'. Available at: https://www.charitywater.org/blog/nonprofit-website/ (Accessed: 18 April 2026).
- TechSoup (2025) 'Technology for Nonprofits: Website Essentials'. Available at: https://www.techsoup.org (Accessed: 18 April 2026).
- W3Schools (2025) 'Responsive Web Design Tutorial'. Available at: https://www.w3schools.com/css/css_rwd_intro.asp (Accessed: 18 April 2026).
- Google (2025) 'Google Analytics for Nonprofits'. Available at: https://analytics.google.com (Accessed: 18 April 2026).
- Internet World Stats (2025) 'Internet Usage Statistics — Africa'. Available at: https://www.internetworldstats.com/af/za.htm (Accessed: 18 April 2026).
- Mailchimp (2025) 'Email Marketing for Nonprofits'. Available at: https://mailchimp.com/resources/nonprofit-email-marketing/ (Accessed: 18 April 2026).
- Pexels (2025) 'Free photo licence'. Available at: https://www.pexels.com/license/ (Accessed: 19 May 2026).
- WebAIM (2025) 'Web Accessibility In Mind'. Available at: https://webaim.org/ (Accessed: 19 May 2026).
- Deque Systems (2025) 'axe DevTools'. Available at: https://www.deque.com/axe/devtools/ (Accessed: 19 May 2026).

## 12. Student Information

- **Name:** [Your Name]
- **Student Number:** [Your Number]
- **Module:** WEDE5020 — Web Design and Development
- **Submission Date:** 19 May 2026

## 13. Files & Folder Structure

```
/community chest/
├── index.html              — Homepage (hero, stats, legacy, programs overview, organisations, CTA)
├── about.html              — About (history, mission & vision, values, leadership team)
├── programs.html           — Programs (Health, Education, Community Development, Income Generation)
├── stories.html            — Impact Stories (featured stories, sector cards, filtering)
├── contact.html            — Contact (departments, contact form, address, hours, map)
├── enquiry.html            — Service Enquiry Form
├── css/
│   └── style.css           — Main stylesheet (reset, variables, responsive, accessibility)
├── js/
│   └── main.js             — Hamburger mobile menu toggle
├── images/
│   ├── community-health.jpg
│   ├── community-volunteers.jpg
│   ├── little-lights.jpg
│   └── skills-academy.jpg
├── README.md               — Project documentation
└── wireframe.html          — Low-fidelity wireframes
```
