# Table of Friends Coffeeshop

A single-page website for Table of Friends Coffeeshop and More, a community coffee shop in Woodstock, Cape Town. Built with HTML5 and CSS3 - minimal JavaScript optional.

## Quick Start

Serve locally:
```bash
python -m http.server 8000
```
Then visit http://localhost:8000

## Project Structure

- `index.html` - Single-page homepage containing all content sections:
  - Hero with call-to-action
  - About section (cafe story and values)
  - Quick info bar (location, hours, phone)
  - Full menu (coffee, tea, breakfast, lunch, baked goods, drinks)
  - Daily specials
  - Values section
  - Contact form
  - Image gallery
  - Footer with social links
- `about.html` - Redirects to `index.html#about`
- `menu.html` - Redirects to `index.html#menu`
- `specials.html` - Redirects to `index.html#specials`
- `contact.html` - Redirects to `index.html#contact`

## Features Implemented

- Single-page design with smooth-scrolling anchor navigation
- Vanity URL redirect pages for direct linking to sections
- Responsive navigation with CSS-only hamburger menu
- Quick info bar displaying location, hours, and phone number
- Complete menu with categorized items and prices (25+ items)
- Daily specials section with rotating deals
- Values/About section describing the cafe's mission
- Image gallery showcasing the space, food, and regulars
- Contact form with inquiry routing
- Responsive footer with social media links
- Mobile-first responsive design

## Technical Stack

- HTML5 + CSS3 (no JavaScript required)
- Mobile-first responsive design
- CSS-only hamburger menu
- External stylesheet: `style.css`
- Anchor-based navigation with smooth scrolling

## Customization

### Colors

CSS variables are defined in `style.css`:
```css
:root {
    --brown: #8B6F47;
    --terracotta: #D97634;
    --cream: #F5F1EA;
}
```

### Menu Items

Menu items are defined in `index.html` within the menu section:
```html
<div class="menu-item">
    <h4>Item Name</h4>
    <p>Description</p>
    <span class="price">R00</span>
</div>
```

### Contact Form

Update the form action in `index.html`:
```html
<form method="POST" action="https://formspree.io/f/YOUR_ID">
```

## Deployment

- **Netlify**: Drag and drop the folder to netlify.com
- **GitHub Pages**: Push to a repository and enable Pages in Settings
- **Any host**: Upload files via FTP

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-first responsive design
