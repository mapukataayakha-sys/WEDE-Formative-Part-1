# Table of Friends Coffeeshop

A simple website for a community coffeeshop in Woodstock, Cape Town. Single HTML file, no dependencies, no build process.

## Quick Start

Open locally:
```
start table-of-friends-refactored.html
```

Or run a local server:
```
python -m http.server 8000
# Visit http://localhost:8000
```

## What's Inside

- Navigation with anchor links
- Hero section with call-to-action
- Location, hours, and contact info
- About section
- Menu with 5 categories (25+ items)
- Core values section
- Daily specials
- Contact form
- Mobile-responsive

## Customization

### Colors
Edit CSS variables at the top of `<style>`:
```css
:root {
    --brown: #8B6F47;
    --terracotta: #D97634;
    --cream: #F5F1EA;
}
```

### Menu Items
Find the menu section in the HTML and update items:
```html
<div class="menu-item">
    <h4>Item Name</h4>
    <p>Description</p>
    <span class="price">R00</span>
</div>
```

### Contact Info
Update phone, address, and hours in the Quick Info and Contact sections.

### Logo
Change the logo text:
```html
<a href="#home" class="logo">Your Business Name</a>
```

## Contact Form

Set up the form action:
```html
<form method="POST" action="https://formspree.io/f/YOUR_ID">
```

Sign up at formspree.io for free email submissions.

## Deployment

**Netlify:** Drag the HTML file onto netlify.com

**GitHub Pages:** Push to a repo, enable Pages in Settings

**Any host:** FTP upload

## Files

- `table-of-friends-refactored.html` — The complete website