# COMMUNITY CHEST OF THE WESTERN CAPE — WEBSITE PROPOSAL

**Subject:** WEDE5020 — Web Design and Development Project Proposal
**Student Name:** [Your Name]
**Student Number:** [Your Number]
**Date:** 19 May 2026

---

## Table of Contents

1. Executive Summary ................................................................................................................................ 2
2. Business Overview ................................................................................................................................ 3
3. Project Goals & Objectives ................................................................................................................... 3
4. Target Audience .................................................................................................................................. 4
5. Technical Requirements ....................................................................................................................... 5
6. Design Approach .................................................................................................................................. 5
7. Sitemap & Page Structure .................................................................................................................... 6
8. Wireframes ............................................................................................................................................ 6
9. Content Plan ......................................................................................................................................... 7
10. Timeline & Milestones ......................................................................................................................... 8
11. Budget & Costs .................................................................................................................................... 8
12. References ........................................................................................................................................... 9

---

## 1. Executive Summary

Community Chest of the Western Cape has been a pillar of NGO support since 1928, providing grants, training, and capacity building to organisations across South Africa. Yet the current website — last redesigned in 2018 — no longer meets the needs of today's digital landscape. With 68% of web traffic coming from mobile devices and key processes such as grant applications still buried in the navigation, the site is preventing donors and NGO leaders from doing what they need to do efficiently.

This proposal details a comprehensive redesign of the Community Chest website. The new site will surface impact statistics (R14.2M awarded in 2024; 147 partner organisations), provide clear pathways to funding programmes and training, host impactful beneficiary stories, and enable direct contact and service enquiries. All of this will be delivered through a professional, accessible, mobile-first design that embodies the trust and warmth intrinsic to the Community Chest brand.

The estimated development cost is **R12,000**, with an additional **R8,650** for first-year hosting, domain, SSL, and ongoing support. The project will be completed within six weeks, with the site going live by **15 May 2026**.

---

## 2. Business Overview

**Organisation Name:** Community Chest of the Western Cape
**Established:** 1928 (originally Cape Town Welfare Board)
**Location:** 82 Bree Street, Cape Town City Centre, 8000, South Africa
**Registration:** PBO 930004040

**History:** Community Chest was founded in 1928 as the Cape Town Welfare Board, making it one of the oldest civil society organisations in South Africa. Over nearly a century it has evolved from a simple community fundraising fund into a comprehensive development partner — providing grants, training, strategic partnerships, and advocacy support across the Western Cape and beyond.

**Mission:** To improve lives by mobilising communities, business, and government to advance the common good through grants, training, and partnerships.

**Vision:** A South Africa where all people have the opportunity to participate fully in community life and access the resources they need to thrive.

**Activities:** Grant funding for health, education, community development, and income generation programmes; capacity building and governance training for NGOs; corporate and individual donor engagement; community dialogues.

---

## 3. Project Goals & Objectives

| Goal | Metric |
|------|--------|
| G1: Make grant applications visible and accessible | Grant applications: 35+ per month (currently ~25) |
| G2: Save administrator time on routine queries | Reduce admin call volume on recruitment and deadline questions |
| G3: Demonstrate donor impact through stories and statistics | 1,200+ newsletter subscribers within 6 months (currently ~600) |
| G4: Provide a central hub for training participants | 40+ registrations per training cohort (currently 32) |
| G5: Increase monthly website traffic | 5,000+ monthly visits with Google Analytics tracking enabled |
| G6: Improve mobile user experience | Page load time under 3 seconds on mobile devices |

---

## 4. Target Audience

The website serves multiple audience stakeholders, each with distinct priorities:

| Audience | Primary Needs |
|-----------|--------------|
| **NGO leaders & practitioners** | Find funding programmes, apply for grants, locate training resources |
| **Grant applicants** | Access eligibility criteria, deadlines, and application materials |
| **Donors (corporate & individual)** | Understand impact (statistics, stories), make donations, download annual reports |
| **Training participants** | Access course schedules, materials, registrations, certificates |
| **Board & governance members** | Review impact data, fund distribution statistics, governance policies |
| **General public & media** | Understand the organisation, find stories and impact data |

---

## 5. Technical Requirements

| Requirement | Detail |
|-------------|--------|
| **Languages** | HTML5, CSS3, JavaScript — straightforward codebase for in-house maintenance |
| **Mobile Responsive** | **Yes** — mobile-first responsive design with breakpoints at 320px, 768px, 1024px+ |
| **Browser Support** | Chrome, Firefox, Safari, Edge (latest 2 versions) |
| **Accessibility** | WCAG 2.1 Level AA — semantic HTML, ARIA labels, keyboard navigation support |
| **Performance** | Target: under 3 seconds page load on mobile networks (township use case) |
| **Security** | HTTPS, spam prevention on contact forms |
| **Domain** | comchest.org.za (to be retained) |
| **Hosting** | Reliable shared or managed hosting (currently on shared — recommended upgrade) |
| **Integrations** | Mailchimp (existing partnership); possible future donation gateway (board approval required) |

---

## 6. Design Approach

### Aesthetic Direction

The design vision is to communicate credibility, professionalism, and warmth — without appearing trendy or flashy. The site should read like an established, trusted institution rather than a startup. Most NGO stakeholders are long-time sector practitioners who value clear information and straightforward navigation over visual flair.

### Color Palette

| Colour | Hex | Usage |
|--------|-----|-------|
| Navy | `#1B3A8A` | Navigation, headers, primary text — trust and authority |
| Green | `#2D7A4C` | CTAs, positive indicators, section accents — growth and health |
| Gold | `#D4A844` | Highlight text, tags, nav active state — warmth and recognition |
| Light background | `#F8F7F5` | Soft neutral background for content sections |

### Typography & Layout

- Font: Segoe UI / Tahoma — clean, readable, neutral (11pt / 1rem)
- Line spacing: 1.5
- Clear content hierarchy: major actions (Apply for Funding, Donate, Contact) immediately visible
- Mobile-first: default styles optimised for mobile, enhanced for larger screens

### Accessibility by Design

The site will be built to WCAG 2.1 Level AA from the ground up rather than retrofitted — ensuring:
- Skip-to-content navigation links
- Visible focus states for all keyboard users
- Semantic HTML structure (header, nav, main, footer, article, section)
- ARIA labels and roles at every touchpoint
- Colour contrast: 4.5:1 minimum for all text

---

## 7. Sitemap & Page Structure

```
Community Chest of the Western Cape
├── index.html          — Homepage (hero, stats, legacy, programmes overview, supported orgs, CTA cards, contact)
├── about.html          — About (history, mission & vision, values, leadership/board)
├── programs.html       — Funding programmes (Health, Education, Community Development, Income Generation)
├── stories.html        — Impact Stories (featured stories with quotes, sector cards, sector filter grid)
├── contact.html        — Contact (departments, contact form, address/hours, map)
└── enquiry.html        — Service Enquiry (grants, training, partnerships, volunteering, media)
```

**Approximately 6 primary pages.** The structure favours page-level navigation over single-page anchor scroll, as each content unit has sufficient depth to warrant its own URL.

---

## 8. Wireframes

Low-fidelity wireframes were produced in the planning phase to establish layout, content hierarchy, and session flow before development. Wireframes cover the homepage, the programmes/grants layout, and the contact/enquiry layout across desktop, tablet, and mobile viewports.

Key decisions captured in wireframes:
- Hero section with primary grant CTA positioned above the fold
- Impact statistics in a 4-column grid on desktop, stacking on mobile
- Programme overview in a 6-card grid with scroll-to detail sections on `programs.html`
- Stories in a 2-column layout (large featured story + 4-card grid)
- Contact with a two-column layout (info + form)

Wireframes were exported from the project's `wireframe.html` file.

---

## 9. Content Plan

| Section | Pages | Content |
|---------|-------|---------|
| **Impact Statistics** | `index.html` | Years active (96), projects funded yearly (258), leaders trained (10,000+), provinces reached (4) — displayed in a prominent 4-item grid above the fold |
| **Our Legacy / About** | `about.html` | 96-year history, mission & vision cards, values grid (Integrity, Collaboration, Excellence, Respect), leadership/board team cards |
| **Grant Programmes** | `programs.html` | Four funding streams (Health, Education, Community Development, Income Generation) — each with eligibility criteria, focus areas, and entry CTA; plus a Capacity Building section (governance, financial management, project management, fundraising) |
| **Impact Stories** | `stories.html` | Three detailed, quote-driven featured stories; four short sector-filter cards (Health, Education, Community Development, Income Generation) |
| **Contact & Enquiry** | `contact.html` | Department-coded contact cards, full name/email/phone/inquiry-type contact form, Google Maps embed |
| **Enquiry Form** | `enquiry.html` | First name/last name/email/phone/enquiry type/date/guests/message; quick-contact cards (call, visit, email) |
| **Footer** | All pages | Organisation description, PBO registration, quick links, NGO links, donor links, copyright |

---

## 10. Timeline & Milestones

| Week | Dates | Deliverables |
|------|-------|--------------|
| 1 | 13–19 April | Project planning, content strategy, wireframes, file structure setup |
| 2 | 20–26 April | All 6 HTML pages built (index, about, programs, stories, contact, enquiry), navigation implemented |
| 3 | 27 April – 3 May | Full CSS styling, responsive design, hamburger menu, image sourcing from Pexels |
| 4 | 4–10 May | HTML validation, ARIA labels, `aria-current`, skip-to-content links, CSS variables, mobile testing |
| 5 | 11–17 May | Bug fixes, comprehensive README, commit history, axe DevTools testing, screen-reader testing |
| Launch | 15 May 2026 | Site deployed publicly and ready for production use |

---

## 11. Budget & Costs

| Item | Description | Cost (ZAR) |
|------|-------------|-----------|
| Web Design | Wireframes, mockups, colour system, branding alignment | R 3,000 |
| Development | 6 HTML pages + CSS + JavaScript, dev/testing | R 6,000 |
| Testing & QA | HTML validation, WCAG 2.1 AA audit, axe DevTools, browser testing | R 2,000 |
| Project Management | Planning, documentation, deployments, stakeholder updates | R 1,000 |
| **Subtotal — Development** | | **R 12,000** |
| Domain registration | comchest.org.za, annual renewal | R 350 |
| Hosting | Shared/managed, annual | R 3,500 |
| SSL Certificate | Annual renewal | R 1,200 |
| Support & Updates | Ongoing maintenance (per year) | R 3,000 |
| **Total — Year 1** | | **R 20,050** |

*Development budget capped at R12,000 as per board-approved scope. All prices in South African Rand (ZAR).*

---

## 12. References

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
- Deque Systems (2025) 'axe DevTools Accessibility Testing'. Available at: https://www.deque.com/axe/devtools/ (Accessed: 18 April 2026).
- WebAIM (2025) 'Web Accessibility In Mind — Contrast Checker'. Available at: https://webaim.org/resources/contrastchecker/ (Accessed: 19 May 2026).

---

## Student Information

- **Name:** [Your Name]
- **Student Number:** [Your Number]
- **Module:** WEDE5020 — Web Design and Development
- **Submission Date:** 19 May 2026
