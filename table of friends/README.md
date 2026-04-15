Table of Friends Coffeeshop

A multi-page website for Table of Friends Coffeeshop and More, a community coffee shop in Woodstock, Cape Town. Built with HTML, CSS, and vanilla JavaScript - no frameworks or build process.

Quick Start

Serve locally:
python -m http.server 8000
Then visit http://localhost:8000

Project Structure

- index2.html - Homepage with hero, about, hours, and location
- about.html - Story of the cafe and what makes us different
- menu.html - Full menu categories (coffee, tea, breakfast, lunch, baking)
- specials.html - Daily specials section
- contact.html - Contact form, location, and catering inquiries
- All styles inline in HTML files

What's Inside

- Multi-page navigation
- Hero section with call-to-action
- Address, opening hours, and contact details
- About section with cafe story
- 5 full-category menu (25+ items each)
- Daily specials section
- Contact form
- Mobile-responsive layout

Customization

Colors
CSS variables can be edited at the top of style.css:
:root {
    --brown: #8B6F47;
    --terracotta: #D97634;
    --cream: #F5F1EA;
}

Menu Items
Locate menu items in menu.html and update:
<div class="menu-item">
    <h4>Item Name</h4>
    <p>Description</p>
    <span class="price">R00</span>
</div>

Contact Form
Set up the form action in contact.html:
<form method="POST" action="https://formspree.io/f/YOUR_ID">

Deployment

Netlify: Drag the folder to netlify.com.

GitHub Pages: Push to a repository, enable Pages in Settings.

Any host: FTP upload the files.