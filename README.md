Table of Friends Coffeeshop Website

 1. Project Overview

Table of Friends Coffeeshop and More is a community coffee shop at Old Castle Brewery, Woodstock, Cape Town. Established in 2021, we sell artisan coffee, fresh food and conduct community events. It is so simple for our customers to locate our menu, hours, location and contact us – be they customers, new visitors or prospective catering customers.

 2. Website Goals and Objectives

- Make a reliable source of information available (menu, hours, location), so that customers are not turned off by the wrong information from third parties.
- Connect with visitors by sharing our story and community values
Provide customers with a complete menu and prices before they arrive to help them anticipate what to expect
- Promote community events (open mic night, book club, community breakfast)
Provide a dedicated enquiry form for catering and/or private events
- Connect with customers via newsletter and social media
- Capture customers' interest with content that is discoverable and searchable.

 3. Target Audience

Regulare/Southern Cape residents who live and/or work in the Woodstock and inner urban Cape area.
Students will read a short story about a group of remote workers who are looking for a welcoming workspace to meet over coffee.
- Office workers — order breakfast and lunch, enquire about team catering
Students & creatives — motivated by the non-conformist vibe of the town
- Tourists & visitors — looking for an authentic local café experience
- Hotel staff — requesting bookings and catering services for the hotel.- Travel agencies — booking private tours and packages.

 The key features and functions are described.The key features and functions are explained.

[x] Homepage with hero section and call-to-action buttons
- [x] Community page with history, mission and community events
[x] Full menu page with categorized items and pricing: Specialty Coffee, Breakfast, Lunch, Baked Goods, and Drinks.
Frequent weekly promotions on - [x] Specials/Deals page
We also have the option to place a contact form on the page with the location, directions (Google Maps embed), phone number, opening hours etc. if you want to.We also have the option of providing a contact form on the page with location, directions (Google Maps embed), phone number, opening hours, etc. if you want.
- [x] Enquiry page for other services
Showcase your café space and food in the image gallery on the homepage.Include your café space and food in the image gallery on the homepage.
- [ ] Newsletters (Offering, Literacy Newsletter, or Religious Education Newsletter)
Yes, Newsletters signup form in dedicated section: [x]
- [x] Chat section on the website (Chat, Skype, WhatsApp)
- [x] Fully responsive mobile-first design
- [x] Accessible navigation (WCAG 2.1 AA compliant)
- [x] Skip-to-content link is present on each page
- [x] Web-based progress tracker for tracking student work
- [x] Print stylesheet for browser printing
- [x] Supports `prefers-reduced-motion` for accessbility purposes
This is the final part of the series, which includes real-time form validation and showing error/success messages as you are filling out the form.
- [x] Part 4: Gallery for viewing images in a lightbox
- [x] Part 4: Scroll-to-bottom button (appears after scrolling 300px)
Smooth scrolling for anchor links (part 3): [x]
- [x] Part 3: Dynamic copyright year
Highlighting the current page in the navigation bar (Part 3)
The Sitemap.xml and Robots.txt files are included in the third part of the course, SEO.Sitemap.xml and robots.txt files are part of the SEO course.
- [ ] Part 3: Website deployed and live (pending deployment)

 Content Research

Documents containing research and sourcing information will be found in the file:documents/research_content.txt

 Deployment Link

- Live URL: (https://github.com/mapukataayakha-sys/WEDE-Formative-Part-1)

 6. Design Approach

 Color Palette
- Primary Brown: `2c1810` — warm, earthy hues for headers and navigation
- Set the accent colour for buttons and highlights: `Terracotta/Gold: c4a74f`
- Background: `36E9573C` — soft background for sections
- White: `FAFAF8` — remove background from content.
- Text: 2C2C2C — a dark color used for text that is easy to read.
A subtle border and divider tone, complementary to gray.A subtle border and divider tone, complementary to gray.

 Typography
- Font Family: Segoe UI (headings and body), Georgia (serif) support
- Primary Heading: 2rem–3rem
- Body Text: 1rem / 16px
- Line Height: 1.6

 Visual Style
- Clean and comfortable — indicates to the customer that the establishment is sanitary and inviting
- Responsive design with a clean, minimalist layout (as it is a mobile-first site)
- Space for readability
- Vintage style, with a coffee and wood-inspired colour palette of earthy, natural hues.

 6. Sitemap
Table of Friends Coffeeshop
├── 1. index.html          — Home (hero, quick-info, about, menu, specials, gallery, newsletter, contact)
├── 2. about.html          — About Us (story, values, community events, CTA)
├── 3. menu.html           — Our Menu (coffee, breakfast, lunch, baked goods, drinks)
├── 4. specials.html       — Daily & Weekly Specials
├── 5. contact.html        — Visit & Contact (form, map, address, contact details)
└── 6. enquiry.html        — Catering & Private Event Enquiry Form


 7. Technology Stack

- HTML5 — Semantic marking—proper use of headings, ARIA attributes, and ARIA live regions
Custom properties (CSS variables), reset, responsive grid layouts, media queries (mobile-first) — CSS3
Mobile hamburger navigation, form validation, lightbox gallery, scroll-to-top, smooth scrolling – JavaScript (ES6)
Educators can find images from Pexels.com (locally hosted) to post on their online platforms.
- Forms — Client side validation, success and error messages (mailtoless)
8. Accessibility Features

- Semantic HTML5 structure (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`)
Appropriate landmarks in the roles of: banner, navigation, contentinfo
Aria labels for navigation
This attribute is used to indicate the current page in a navigation link on each page.
A keyboard user-friendly skip-to-content link at the top of each page.
- `:focus-visible` with 3px gold focused outline on all interactive elements
- All images have meaningful descriptions in the 'alt' attribute
All form inputs have a `<label>` element.
Help text is used with the appropriate attribute when needed (see aria-describedby)
- `prefers-reduced-motion` media query can disable the appearance of animations/flashing!
The stylesheet for printing to a browser.
The navigation by keyboard is tested on all pages.Navigation by keyboard is tested on all pages.

 9. Part 1 Completion Checklist

- [x] A link to the About page (which explains the site) was added to the top of the Home page.A link to the About page (which explains the site) was added to the top of the Home page.
- [x] Proper folder structure (`css/`, `js/`, `images/`)
- [x] All 6 pages have navigation in place and inter-page linking is complete
Every page is built using Semantic HTML5.All pages are developed with Semantic HTML5.
- [x] All styles reset and/or adjusted using the CSS variables.- [x] All styles reset and/or adjusted using CSS variables.
- [x] All styles are applied to the elements using CSS variables, not hard coded colour values.
- [x] Mobile responsive design (tested at 320px, 768px, 1024px)
All images are taken from Pexels and stored locally in the `images/` folder.
- [x] Accessibility tested (keyboard nav, screen readers)
- [x] Image attribution comments in HTML
This is a list of implemented ARIA attributes.This is a list of ARIA attributes implemented.
[x] Media query prefers-reduced-motion present:
Applied print stylesheet and great success.Applied print stylesheet and success!
All pages (footer role="contentinfo" and header role="banner")
All files with meaningful commit messages pushed to GitHub.

 10. Part 2 CSS Checklist

- [x] CSS reset applied (margin, padding, box-sizing)
- [x] CSS custom properties (variables) defined for colors, typography, and spacing
- [x] Color palette implemented using CSS variables
- [x] Typography styles consistent across all pages (fonts, sizes, weights)
- [x] Responsive design with mobile-first approach and media queries
- [x] Flexbox used for navigation and button groups
- [x] CSS Grid used for info-grid, about-grid, menu-grid, and other layouts
- [x] Hover and focus states styled for interactive elements
- [x] Button styles with hover transitions
- [x] Navigation styles with active state indication
- [x] Footer styling with grid layout
- [x] Print stylesheet included
- [x] prefers-reduced-motion media query for accessibility

 11. Part 3 Completion Checklist

- [x] Form validation with delayed feedback
(a) Validate email and phone numbers on regex patterns (Matches) 
- [x] Validate email and phone numbers on regex patterns (Matches)
- [x] Success/error messages with role="alert" and aria-live
- [x] Lightbox gallery and click to open mode of operation.Escape key and click outside of lightbox for closing.Escape key & click outside to close lightbox.
- [x] Scroll-to-top button (after 300px scroll)
Smooth scrolling for anchor links (often needed for mobile devices).
- [x] Use of the "Language" setting with a default choice (auto-detects)No comments.
- [x] Active navigation state management via JavaScript
- [x] Map of the site for SEO.
-[x] sitemap.xml for SEO.
-[x] robots.txt for SEO

 12. Changelog

| Date | Version | Changes |
|------|---------|---------|
Project planning and structure set up for 6 pages (index, about, menu, specials, contact, enquiry) |
Added HTML5 semantic structure (header, nav, main, footer, skip-to-content links, ARIA attributes). |
2026-04-17 | 0.3.0 | Full CSS variables, reset, responsive hamburger menu, and mobile first media queries were added. |
Added ARIA labels, aria-current="page" on active nav, focus-visible styles, accessibility features |
Separated all content to real standalone HTML pages, added contact and enquiry pages 2026-04-21, 0.5.0
2026-05-19 - 1.0.0 — Part 1: All files ready for submission, downloaded images locally, added comprehensive README. |
2026-05-29: Part 3 complete — JavaScript functions: form validation, lightbox gallery, scroll-to-top, smooth scroll, dynamic year, added meta keywords to all pages; added documentation of research |

 13. References (Harvard Style)

Pexels (2025) 'Free coffee shop photos'. Coffee shop image retrieved from: https://www.pexels.com/search/coffee%20shop/ (Accessed: 19 May 2026).
To promote web accessibility, World Wide Web Consortium (W3C) (2018) has created Web Content Accessibility Guidelines (WCAG) 2.1. Retrieved from: https://www.w3.org/WAI/WCAG21/quickref/ (Accessed: 19 May 2026).
HTML: HyperText Markup Language' by MDN Web Docs (2025) Links are available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: 19 May 2026).
The content is available under the Pexels License 2025 'Pexels License Overview'. The text, photos, videos, and information provided on this website are for general information purposes only.
Nielsen Norman Group (2020) Website Usability: What Users Want. The article can be found on the following website: https://www.nngroup.com/articles/website-usability/ (Accessed: 19 May 2026).
Google 'Google Maps Embed API' (2025). Retrieved from: https://developers.google.com/maps/documentation/embed/overview (Accessed: 19 May 2026).
WCAG Overview (2023): 'How to meet WCAG (Quick Reference)'. WCAG 2.1 – WCAG Quick Reference Guide is available at: https://www.w3.org/WAI/WCAG21/quickref/ (Accessed: 19 May 2026).

 14. Student Information

- Name: Ayakha Mapukata
- Student Number: ST10533919
- Course: Learning to design websites and web applications.WEDE5020 introduces you to the design of websites and web applications.
- Submission Date: 19 May 2026

 15. Files & Folder Structure

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
