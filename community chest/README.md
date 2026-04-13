# Community Chest Website

A simple, single-file website for a nonprofit organization. Built with plain HTML and CSS—no frameworks, no build process, no dependencies.

## Quick Start

Open the HTML file directly in your browser:
```
start community-chest-refactored.html
```

Or serve it locally:
```
python -m http.server 8000
# Then visit http://localhost:8000
```

## What's Inside

- Fixed navigation with anchor links
- Impact statistics section
- 6 funding program cards
- Success stories
- Contact form
- Mobile-responsive layout

## Customization

### Colors
Edit CSS variables at the top of the `<style>` section:
```css
:root {
    --navy: #1B3A8A;
    --green: #2D7A4C;
    --gold: #D4A844;
}
```

### Content
All content is in the HTML file. Edit the organization name, contact details, programs, and success stories directly in the file.

### Logo
Find and replace the logo text in the navigation:
```html
<a href="#home" class="logo">Your Organization Name</a>
```

## Contact Form

To make the form work, update the form action:
```html
<form method="POST" action="https://your-form-service.com/submit">
```

Use Formspree (formspree.io) or Netlify Forms for a simple solution without backend code.

## Deployment

**Netlify:** Drag the HTML file onto netlify.com

**GitHub Pages:** Push to a repo, enable Pages in Settings

**Any host:** FTP upload the file

## Files

- `community-chest-refactored.html` — The complete website
- `REFACTORING_NOTES.md` — Technical notes on the code