// Table of Friends - Main JavaScript
// Handles mobile navigation toggle

(function () {
  'use strict';

  var navToggle = document.getElementById('nav-toggle');
  var navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('change', function () {
      navMenu.classList.toggle('active', navToggle.checked);
    });
  }
})();
