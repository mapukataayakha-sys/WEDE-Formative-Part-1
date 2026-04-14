Community Chest Website

An example of a single-page, minimalist web page of a nonprofit organization. Written in simple HTML and CSS- no frameworks, no build- steps, no dependencies.

Quick Start

You can simply open the HTML file in your browser:

start community-chest-refactored.html

Or serve it here about:
python -m http.server 8000
Then visit http://localhost:8000

What's Inside

- Fixed navigation with anchor links
- Impact statistics section
- 6 funding program cards
- Success stories
- Contact form
- Mobile-responsive layout

Customization

Colors
CSS variables can be edited at the top of <style> section:
css
:root {
    --navy: #1B3A8A;
    --green: #2D7A4C;
    --gold: #D4A844;
}

Content
Any material is in the HTML file. Directly edit organization name, contact information, programs, and success stories in the file.

Logo
Locate and substitute the text in the logo of the navigation:
html
Your Organization Name - a href id which is being searched is a home.

Contact Form

In order to update the form work, change the action of the form:
html
<form method="POST" action="https://your-form-service.com/submit">

Git Formspree (formspree.io) or Netlify Forms is a simple solution that does not require any display code.

Deployment

Netlify: Drop the HTML file on netlify.com.

GitHub Pages: Commit to a repository, turn on Pages in Settings.

Any host: FTP upload the file