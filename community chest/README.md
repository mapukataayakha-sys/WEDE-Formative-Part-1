# Community Chest Website

A multi-page website for Community Chest of the Western Cape, a nonprofit organization providing grants, training, and community development programs. Built with HTML and CSS - no frameworks or JavaScript required.

## Quick Start

Serve locally:
```
python -m http.server 8000
```
Then visit http://localhost:8000

## Project Structure

- `index.html` - Homepage with hero, impact statistics, programs overview, and success stories
- `about.html` - Organization history, mission, values, and leadership
- `programs.html` - Detailed funding programs (health, education, community development, income generation)
- `stories.html` - Impact stories from funded organizations
- `contact.html` - Contact form with department routing
- `style.css` - Shared stylesheet with CSS variables

## What's Inside

- Multi-page navigation with 5 complete pages
- Impact statistics section
- 6 detailed funding program cards
- Featured impact stories with quotes
- Contact form with department routing
- Mobile-responsive layout with hamburger menu
- Accessible design (WCAG 2.1)
- Skip-to-content link for keyboard users
- Focus states for all interactive elements
- Semantic HTML landmarks (header, main, footer)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-first responsive design

## Customization

### Colors
CSS variables can be edited at the top of `style.css`:
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

- **Netlify**: Drag the folder to netlify.com
- **GitHub Pages**: Push to a repository, enable Pages in Settings
- **Any host**: FTP upload the files