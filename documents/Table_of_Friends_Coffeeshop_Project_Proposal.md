# TABLE OF FRIENDS COFFEESHOP AND MORE — WEBSITE PROPOSAL

**Subject:** WEDE5020 — Web Design and Development Project Proposal
**Student Name:** Ayakha Mapukata
**Student Number:** ST10533919
**Date:** 19 May 2026

---

## Table of Contents

1. Executive Summary ................................................................................................................................ 2
2. Business Overview ................................................................................................................................ 3
3. Project Goals & Objectives ................................................................................................................... 3
4. Target Audience .................................................................................................................................. 4
5. Sitemap & Page Structure .................................................................................................................... 4
6. Wireframes ............................................................................................................................................ 5
7. Technical Requirements ....................................................................................................................... 6
8. Design Approach .................................................................................................................................. 6
9. Content Plan ......................................................................................................................................... 7
10. Timeline & Milestones ......................................................................................................................... 8
11. Budget & Costs .................................................................................................................................... 8
12. References ........................................................................................................................................... 9

---

## 1. Executive Summary

Table of Friends Coffeeshop and More is a small but beloved coffee shop operating out of the Old Castle Brewery in Woodstock, Cape Town. Since opening in 2021, the business has built a loyal community of regular customers through good coffee, fresh baking, and genuine hospitality. Currently, the business operates without a website — relying on Instagram and word-of-mouth for online presence — which makes it difficult for potential customers to find reliable information about opening hours, menu offerings, and location.

This proposal outlines the development of a modern, responsive, multi-page website that serves as a central hub for the business. The site will feature a full menu with prices, information about upcoming community events, a gallery of the space and food, and contact and enquiry forms for customers. The website is designed with a mobile-first approach to serve the majority of users browsing on their phones, and will be accessible to all visitors following WCAG 2.1 Level AA standards.

The estimated development cost is **R12,000**, with an additional **R8,050** for first-year hosting, domain, SSL, and maintenance. The project will be completed within six weeks, with the site going live by **15 May 2026**.

---

## 2. Business Overview

**Business Name:** Table of Friends Coffeeshop and More
**Founded:** 2021
**Location:** 6 Beach Road, Old Castle Brewery, Woodstock, Cape Town 7915
**Phone:** +27 76 662 9848
**Hours:** Monday – Friday: 7:00am – 4:30pm / Saturday & Sunday: Closed

**Description:** Table of Friends is a small café located in the historic Old Castle Brewery building in Woodstock, Cape Town. We serve specialty coffee, sandwiches and baked goods, and host community events including weekly open mic nights, monthly book clubs, and community breakfast mornings. The business has cultivated a loyal following of regulars among the creative and office community of Woodstock.

**Mission:** Good people, good food, and good coffee. That's essentially it.

**Vision:** To be the café that locals and visitors think of first — not because it is the most fashionable or best-marketed, but because it is the one people genuinely *go to*.

---

## 3. Project Goals & Objectives

| Goal | Metric |
|------|--------|
| G1: Replace inaccurate third-party listings with an authoritative source for hours, location, and menu | Website traffic: 1,500+ visits/month within the first 3 months |
| G2: Increase new customer discoveries through searchable, quotable online content | Menu page views tracked via basic analytics |
| G3: Enable event promotion and community engagement | Newsletter subscribers: 200+ within 6 months |
| G4: Capture catering and private event enquiries efficiently | 10+ email enquiries/month via enquiry form |
| G5: Integrate the website with existing social media presence | Social media references via prominent Instagram/Facebook links |

---

## 4. Target Audience

| Audience Segment | Needs & Expectations |
|-----------------|---------------------|
| Regulars & locals (Woodstock, Cape Town CBD) | Quick access to opening hours, menu, specials |
| Remote workers | Find a welcoming café with WiFi for a working session |
| Students & creatives | Community events calendar, pricing, atmosphere info |
| Tourists & visitors | Reliable address, opening hours, what to expect |
| Event/catering planners | Private event enquiry form and pricing information |

---

## 5. Sitemap & Page Structure

```
Table of Friends Coffeeshop
├── index.html          — Homepage (hero, quick-info bar, about excerpt, menu%, specials%, gallery%, contact%)
├── about.html          — About (our story, values, community events page)
├── menu.html           — Full Menu (Specialty Coffee, Breakfast, Lunch, Baked Goods, Drinks)
├── specials.html       — Daily & Weekly Specials + Newsletter Signup
├── contact.html        — Visit Us (address, hours, phone, Google Maps, contact form)
└── enquiry.html        — Catering & Private Events Enquiry Form
```

**Page Descriptions:**

| Page | Purpose |
|------|---------|
| `index.html` | Landing page — hero, quick-info, about excerpt with gallery, newsletter signup |
| `about.html` | Extended about — story, values, community events section (Open Mic, Book Club, Breakfasts) |
| `menu.html` | Full categorized menu with prices |
| `specials.html` | Daily/weekly specials with savings highlights and newsletter signup |
| `contact.html` | Location, opening hours, map, phone, email, and contact form |
| `enquiry.html` | Dedicated catering & private event enquiry form with date and guest fields |

---

## 6. Wireframes

Low-fidelity wireframes were created during the planning phase to establish the layout, content hierarchy, and responsive behaviour before development.

**Wireframe scope covered:**
- Homepage: hero banner, quick-info bar, about section, menu section, daily specials, contact section, footer
- Navigation: desktop (inline links) and mobile (hamburger menu)
- Responsive behaviour at 1024px, 768px, and 320px breakpoints

Wireframes were exported from the project's `wireframe.html` file and embedded into this proposal document as required.

---

## 7. Technical Requirements

| Requirement | Detail |
|-------------|--------|
| **Languages** | HTML5, CSS3, JavaScript (ES6) |
| **Mobile Responsive** | **Yes** — mobile-first responsive design (320px, 768px, 1024px+ tested) |
| **Browser Support** | Chrome, Firefox, Safari, Edge (latest 2 versions) |
| **Accessibility** | WCAG 2.1 Level AA — semantic HTML, ARIA labels, keyboard navigation, skip links |
| **Performance** | Lazy-loaded images, inline CSS/JS where needed, compressed JPEG/WebP images |
| **SSL** | HTTPS via hosting provider |
| **Form Handling** | Mailto-based forms (Part 1); can connect to Formspree in production |

---

## 8. Design Approach

### Color Palette

| Colour | Hex | Usage |
|--------|-----|-------|
| Primary Brown | `#2c1810` | Navigation bar, footer, headings |
| Terracotta/Gold | `#c4a74f` | CTA buttons, highlight text, taglines |
| Cream | `#F5F1EA` | Section backgrounds |
| White | `#FAFAF8` | Content backgrounds |
| Text (Black) | `#2C2C2C` | Body text |
| Light Gray | `#E0DCD8` | Borders/dividers |

### Typography

| Element | Font | Size |
|---------|------|------|
| Body Text | Segoe UI | 1rem / 16px (≈12pt) |
| H1, H2, H3 | Segoe UI Bold | 2–3rem |
| Line Spacing | 1.5 | — |

### Layout Principles

- Mobile-first: default stylesheet for mobile, `@media` queries add features for larger screens
- Generous whitespace: content does not feel crowded
- Content-first navigation: menu is on the left, logo left-aligned, clear browsing hierarchy
- Single-column on mobile; multi-column on desktop
- All colours defined as CSS custom properties — no hardcoded colour values

---

## 9. Content Plan

| Section | Content |
|---------|---------|
| **Hero** | Headline, tagline, description, CTA buttons (Visit Us / See Menu) |
| **Quick Info Bar** | Location, phone, opening hours, specialty |
| **About** | Our Story, Our Mission, What We Believe (4 values) |
| **Community Events** | Open Mic Night, Book Club, Community Breakfast — descriptions + schedule |
| **Menu** | 5 categories (Specialty Coffee, Breakfast, Lunch, Baked Goods, Drinks) — 20+ items with prices |
| **Daily Specials** | Mon / Wed / Fri / Weekend / First Thursday / Student Days — savings shown |
| **Values** | Community First, Quality, Authentic, Welcoming |
| **Gallery** | 4 images of café interior and atmosphere |
| **Newsletter Signup** | Email field + subscribe button + privacy note |
| **Contact** | Address, phone, email, opening hours, Google Maps embed, contact form |
| **Enquiry** | Catering/events form with name, email, event type, date, guests, message |
| **Footer** | About, Quick Links, Visit Us, Follow Us (Facebook, Instagram) |

---

## 10. Timeline & Milestones

| Week | Dates | Deliverables |
|------|-------|--------------|
| 1 | 13–19 April (completed) | Content planning, image sourcing, wireframes, folder structure |
| 2 | 20–26 April (completed) | Build all 6 HTML pages with navigation and semantic structure |
| 3 | 27 April – 3 May (completed) | Complete CSS styling, responsive design, hamburger menu, image sourcing |
| 4 | 4–10 May (completed) | Add CSS variables, focus styles, skip-to-content, ARIA, form validation, accessibility testing |
| 5 | 11–17 May (completed) | Final bug fixes, README, commit history, validation, screen-reader testing |
| Launch | 15 May 2026 (completed) | Site deployed and ready for production |

---

## 11. Budget & Costs

| Item | Cost (ZAR) |
|------|-----------|
| Web Design (Wireframes, mockups, design system) | R 3,000 |
| Development (HTML, CSS, JavaScript, 6 pages) | R 6,000 |
| Testing & QA (accessibility, responsiveness, validation) | R 2,000 |
| Project Management & Documentation | R 1,000 |
| **Subtotal — Development** | **R 12,000** |
| Domain registration (first year) | R 350 |
| Hosting (first year) | R 2,000 |
| SSL Certificate (first year) | R 1,200 |
| Maintenance & Small Updates | R 1,500/year |
| **Total — Year 1** | **R 17,050** |

Note: Development costs are fixed; hosting/domain/SSL costs are standard market rates for small-business South African hosting.

---

## 12. References

- Pexels (2025) 'Free stock photo licence'. Available at: https://www.pexels.com/license/ (Accessed: 19 May 2026).
- World Wide Web Consortium (W3C) (2018) *Web Content Accessibility Guidelines (WCAG) 2.1*. Available at: https://www.w3.org/WAI/WCAG21/quickref/ (Accessed: 19 May 2026).
- Table of Friends (2025) Instagram Profile. Available at: https://instagram.com/tableoffriends (Accessed: 19 May 2026).
- Google (2025) 'Google Business Profile: Get Your Business on Google'. Available at: https://business.google.com (Accessed: 19 May 2026).
- Nielsen Norman Group (2020) 'Website Usability: What Users Want'. Available at: https://www.nngroup.com/articles/website-usability/ (Accessed: 19 May 2026).
- Statista (2025) 'Mobile Internet Usage in South Africa'. Available at: https://www.statista.com/statistics/1393976/mobile-internet-usage-in-south-africa/ (Accessed: 19 May 2026).
- W3Schools (2025) 'Responsive Web Design Tutorial'. Available at: https://www.w3schools.com/css/css_rwd_intro.asp (Accessed: 19 May 2026).
- Google (2025) 'PageSpeed Insights — Website Speed Test'. Available at: https://pagespeed.web.dev/ (Accessed: 19 May 2026).
- MDN Web Docs (2025) 'HTML reference'. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: 19 May 2026).
- WebAIM (2025) 'Contrast Checker'. Available at: https://webaim.org/resources/contrastchecker/ (Accessed: 19 May 2026).
- Deque Systems (2025) 'axe DevTools Accessibility Testing'. Available at: https://www.deque.com/axe/devtools/ (Accessed: 19 May 2026).
- Mapukata, A. (2026) 'WEDE Formative Part 1 — GitHub Repository'. Available at: https://github.com/mapukataayakha-sys/WEDE-Formative-Part-1 (Accessed: 19 May 2026).

---

## Student Information

- **Name:** Ayakha Mapukata
- **Student Number:** ST10533919
- **Module:** WEDE5020 — Web Design and Development
- **Submission Date:** 19 May 2026
