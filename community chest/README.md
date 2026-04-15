Community Chest Website

A multi-page website for Community Chest of the Western Cape, a nonprofit organization providing grants, training, and community development programs. Built with HTML, CSS, and vanilla JavaScript - no frameworks or build steps.

Quick Start

Serve locally:
python -m http.server 8000
Then visit http://localhost:8000

Project Structure

- index.html - Homepage with hero, impact statistics, programs overview, and success stories
- about.html - Organization history, board, staff, and mission
- programs.html - Funding programs (health, education, community development, income generation)
- stories.html - Impact stories from funded organizations
- contact.html - Contact form and department information
- style.css - Shared stylesheet with CSS variables

What's Inside

- Multi-page navigation
- Impact statistics section
- 6 funding program cards
- Success stories carousel
- Contact form with department routing
- Mobile-responsive layout
- Accessible design (WCAG 2.1)

Customization

Colors
CSS variables can be edited at the top of style.css:
:root {
    --navy: #1B3A8A;
    --green: #2D7A4C;
    --gold: #D4A844;
}

Contact Form
Update the form action in contact.html:
<form method="POST" action="https://your-form-service.com/submit">

Deployment

Netlify: Drag the folder to netlify.com.

GitHub Pages: Push to a repository, enable Pages in Settings.

Any host: FTP upload the files.