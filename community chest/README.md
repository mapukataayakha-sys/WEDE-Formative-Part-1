Community Chest Website

A multi-page site of Community Chest of the Western Cape, which is a nonprofit making organization offering grants, training and community development services. Constructed using HTML and CSS - no frameworks or JavaScript needed.

Quick Start

Serve locally:
python -m http.server 8000
Then visit http://localhost:8000

Project Structure

- index.html - Homepage that includes hero, impact statistics, programs overview, and success stories.
- about.html - Mission, values, history of organization and leadership.
- programs.html - Funding programs (health, education, community development, income generation) in detail.
- stories.html - Impact stories of funded organizations.
- contact.html - Department-routed contact form.
- style.css - common stylesheet containing CSS variables.

What's Inside

- 5 pages of multiple-page navigation.
- Impact statistics section
- 6 program cards in detail of funding programs.
- Bold highlighted case studies including quotation.
- Department routing contact form.
- Responsive design with hamburger menu.
- Accessible design (WCAG 2.1)
- Skip-to-content link to use with the keyboard.
- Focus states for all interactive elements
- header, main, footer (semantic HTML)

Browser Support

- Contemporary browsers (Chrome, Firefox, Safari, Edge)
- Mobile-first responsive design

Customization

Colors
CSS variables can be edited, at the top of style.css:
:root {
    --navy: #1B3A8A;
    --green: #2D7A4C;
    --gold: #D4A844;
}

Contact Form
Modify the action in the form in the contact.html:
<form method="POST" action="https://your-form-service.com/submit">

Deployment

- Netlify: Drag the folder to netlify.com.
- GitHub Pages: Add to repository, turn Pages on in Settings.
- Any host: FTP upload the files