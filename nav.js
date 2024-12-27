// scroll-nav.js

window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.classList.add('shrink');
    } else {
      nav.classList.remove('shrink');
    }
  });

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-items a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
});

// JavaScript to change logo and logo name when navbar shrinks
window.onscroll = function() {
  const nav = document.querySelector('nav');
  const logoImage = document.getElementById('logo');
  const logoName = document.querySelector('.logo-name');
  
  if (window.scrollY > 50) {  // Adjust the scroll threshold as needed
    nav.classList.add('shrink');
    logoImage.src = 'assets/white-logo.png';  // Change logo to white logo when shrunk
    logoName.src = 'assets/white-logo-name.png';  // Change logo name to white version when shrunk
  } else {
    nav.classList.remove('shrink');
    logoImage.src = 'assets/logo.png';  // Reset logo back to the original
    logoName.src = 'assets/logo-name.png';  // Reset logo name back to the original
  }
};
