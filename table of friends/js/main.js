// Table of Friends - Main JavaScript
// WEDE5020 Part 3 - JavaScript Functionality

(function () {
    'use strict';

    // ===== MOBILE NAVIGATION TOGGLE =====
    var navToggle = document.getElementById('nav-toggle');
    var navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('change', function () {
            navMenu.classList.toggle('active', navToggle.checked);
        });

        // Close menu when nav link is clicked
        var navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                navToggle.checked = false;
                navMenu.classList.remove('active');
            });
        });
    }

    // ===== DYNAMIC COPYRIGHT YEAR =====
    var yearElements = document.querySelectorAll('#year');
    yearElements.forEach(function (el) {
        el.textContent = new Date().getFullYear();
    });

    // ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                var target = document.querySelector(href);
                var offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== FORM VALIDATION =====
    var forms = document.querySelectorAll('form');
    forms.forEach(function (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var isValid = true;
            var requiredFields = form.querySelectorAll('[required]');

            requiredFields.forEach(function (field) {
                var fieldValue = field.value.trim();
                
                if (!fieldValue) {
                    isValid = false;
                    field.setAttribute('aria-invalid', 'true');
                } else if (field.type === 'email' && !isValidEmail(fieldValue)) {
                    isValid = false;
                    field.setAttribute('aria-invalid', 'true');
                } else if (field.type === 'tel' && fieldValue && !isValidPhone(fieldValue)) {
                    isValid = false;
                    field.setAttribute('aria-invalid', 'true');
                } else {
                    field.removeAttribute('aria-invalid');
                }
            });

            if (!isValid) {
                showMessage('error', 'Please fill in all required fields correctly.');
            } else {
                showMessage('success', 'Thank you! We will get back to you soon.');
                // Simulate form submission
                setTimeout(function () {
                    form.reset();
                }, 1000);
            }
        });
    });

    // Email validation function
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Phone validation function
    function isValidPhone(phone) {
        var phoneRegex = /^[\d\s\-\+\(\)]+$/;
        return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 9;
    }

    // Show message function
    function showMessage(type, message) {
        // Remove existing messages
        document.querySelectorAll('.message').forEach(function (el) {
            el.remove();
        });

        var messageDiv = document.createElement('div');
        messageDiv.className = 'message message-' + type;
        messageDiv.setAttribute('role', 'alert');
        messageDiv.setAttribute('aria-live', 'polite');
        messageDiv.style.cssText = 'padding: 1rem; margin-bottom: 1rem; border-radius: 6px; animation: slideDown 0.3s ease; ' +
            (type === 'success' ? 'background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb;' : 
             'background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;');
        messageDiv.textContent = message;

        var main = document.querySelector('main');
        if (main) {
            main.insertBefore(messageDiv, main.firstChild);
        }

        // Auto-remove after 5 seconds
        setTimeout(function () {
            messageDiv.remove();
        }, 5000);
    }

    // ===== SCROLL TO TOP BUTTON =====
    var scrollBtn = document.createElement('button');
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '&#8593;';
    scrollBtn.style.cssText = 'position:fixed;bottom:2rem;right:2rem;width:50px;height:50px;background-color:var(--terracotta);color:white;border:none;border-radius:50%;cursor:pointer;opacity:0;visibility:hidden;transition:all 0.3s ease;z-index:99;font-size:1.5rem;';
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });

    scrollBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ===== LIGHTBOX GALLERY =====
    function initLightbox() {
        var galleryItems = document.querySelectorAll('.gallery-item img');
        var lightbox = document.getElementById('lightbox');
        var lightboxImage = document.querySelector('.lightbox-image');
        var lightboxCaption = document.querySelector('.lightbox-caption');
        var lightboxClose = document.querySelector('.lightbox-close');

        if (!galleryItems.length || !lightbox || !lightboxImage) {
            return;
        }

        // Open lightbox when gallery image is clicked
        galleryItems.forEach(function (img) {
            img.addEventListener('click', function () {
                lightbox.style.display = 'block';
                lightboxImage.src = this.src;
                lightboxImage.alt = this.alt;
                if (lightboxCaption) {
                    lightboxCaption.textContent = this.alt;
                }
            });
        });

        // Close lightbox when close button is clicked
        if (lightboxClose) {
            lightboxClose.addEventListener('click', function () {
                lightbox.style.display = 'none';
            });
        }

        // Close lightbox when clicking outside the image
        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });

        // Close lightbox with Escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && lightbox.style.display === 'block') {
                lightbox.style.display = 'none';
            }
        });
    }

    // Initialize lightbox
    initLightbox();

    // ===== ACTIVE NAVIGATION HIGHLIGHT =====
    function updateActiveNav() {
        var currentPath = window.location.pathname;
        var currentFile = currentPath.split('/').pop() || 'index.html';

        document.querySelectorAll('nav a[href]').forEach(function (link) {
            var href = link.getAttribute('href');
            if (href === currentFile || (currentFile === '' && href === 'index.html')) {
                link.setAttribute('aria-current', 'page');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    }

    updateActiveNav();

})();