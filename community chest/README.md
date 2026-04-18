# Community Chest of the Western Cape

A multi-page website for Community Chest of the Western Cape, a nonprofit organization offering grants, training, and community development services across South Africa. Built with HTML5 and CSS3 - no JavaScript required.

## Quick Start

Serve locally:
```bash
python -m http.server 8000
```
Then visit http://localhost:8000

## Project Structure

- `index.html` - Homepage with hero, impact statistics, programs overview, and success stories
- `about.html` - Organization history, mission, vision, values, and management team
- `programs.html` - Funding programs (health, education, community development, income generation) with eligibility criteria
- `stories.html` - Impact stories of funded organizations with sector filtering
- `contact.html` - Contact form with department routing based on inquiry type

## Features Implemented

- Multi-page navigation with real HTML pages
- Responsive hamburger menu (CSS-only, no JavaScript)
- Accessibility features:
  - Skip-to-main-content link for keyboard navigation
  - Visible focus indicators (3px gold outline)
  - Semantic HTML elements (header, main, footer, nav, article, section)
  - ARIA labels on navigation and interactive elements
  - WCAG 2.1 compliant design
- Impact statistics section
- Program cards with detailed eligibility information
- Testimonials and success stories with quotations
- Department-routed contact form
- Responsive mobile-first design
- CSS custom properties for theming (navy, green, gold)

## Technical Stack

- HTML5 + CSS3 (no JavaScript needed for core functionality)
- Mobile-first responsive design
- CSS-only hamburger menu using checkbox hack
- External stylesheet: `style.css`

## Customization

### Colors

CSS variables are defined in `style.css`:
```css
:root {
    --navy: #1B3A8A;
    --green: #2D7A4C;
    --gold: #D4A844;
}
```

### Contact Form

Update the form action in `contact.html`:
```html
<form method="POST" action="https://your-form-service.com/submit">
```

## Deployment

- **Netlify**: Drag and drop the folder to netlify.com
- **GitHub Pages**: Push to a repository and enable Pages in Settings
- **Any host**: Upload files via FTP

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-first responsive design
