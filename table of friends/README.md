Table of Friends Coffeeshop

An example of a community coffee-shop in Woodstock, Cape Town. Single HTML, no dependencies, no build process.

Quick Start

Open locally:
start table-of-friends-refactored.html

or run a local server:
python -m http.server 8000
Visit http://localhost:8000

What's Inside

- Navigation using anchor links.
- Hero section containing call-to-action.
- Address, opening hours and contact details.
- About section
- 5 full-category menu (25+ items in each menu)
- Core values section
- Daily specials
- Contact form
- Mobile-responsive

Customization

Colors
CSS variables: Edit at the top of style:
:root {
    --brown: #8B6F47;
    --terracotta: #D97634;
    --cream: #F5F1EA;
}

Menu Items
Locate menu menu in HTML and make updates:
<div class="menu-item">
    <h4>Item Name</h4>
    <p>Description</p>
    <span class="price">R00</span>
</div>

Contact Info
Change phone, address and hours in the Quick Info and Contact parts.

Logo
Alter the text on the logo:
Your Business Name a href=”#home”

Contact Form

Set up the form action:
<form method="POST" action="https://formspree.io/f/YOUR_ID">

Create a free email submission with formspree.io.

Deployment

Netlify: Drag the HTML file in netlify.com.

GitHub Pages: Push to a repo, turn on Pages in Settings

Any host: FTP upload.