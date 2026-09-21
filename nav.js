  document.addEventListener("DOMContentLoaded", function () {

    const nav = document.querySelector("nav");
    const menuButton = document.getElementById("mobile-menu-btn");
    const mobileNav = document.getElementById("mobile-nav");

    /*
    * ==========================================
    * NAVBAR SCROLL / SHRINK
    * ==========================================
    */

    function handleNavbarScroll() {
      if (!nav) return;

      const logoImage = document.getElementById("logo");
      const logoName = document.querySelector(".logo-name");

      if (window.scrollY > 50) {
        nav.classList.add("shrink");

        if (logoImage) {
          logoImage.src = "assets/white-logo.png";
        }

        if (logoName) {
          logoName.src = "assets/white-logo-name.png";
        }

      } else {
        nav.classList.remove("shrink");

        if (logoImage) {
          logoImage.src = "assets/logo.png";
        }

        if (logoName) {
          logoName.src = "assets/logo-name.png";
        }
      }
    }

    window.addEventListener("scroll", handleNavbarScroll);

    // Run once when page loads
    handleNavbarScroll();


    /*
    * ==========================================
    * DESKTOP ACTIVE NAVIGATION LINK
    * ==========================================
    */

    const navLinks = document.querySelectorAll(".nav-items a");

    navLinks.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add("active");
      }
    });


    /*
    * ==========================================
    * MOBILE NAVIGATION
    * ==========================================
    */

    if (menuButton && mobileNav) {

      menuButton.addEventListener("click", function () {

        const isOpen = mobileNav.classList.toggle("active");

        menuButton.setAttribute("aria-expanded", isOpen);

        const icon = menuButton.querySelector("i");

        if (isOpen) {
          icon.classList.remove("ri-menu-line");
          icon.classList.add("ri-close-line");
        } else {
          icon.classList.remove("ri-close-line");
          icon.classList.add("ri-menu-line");
        }

      });


      /*
      * Close mobile menu when a link is clicked
      */

      const mobileLinks = mobileNav.querySelectorAll("a");

      mobileLinks.forEach(link => {

        link.addEventListener("click", function () {

          mobileNav.classList.remove("active");

          menuButton.setAttribute("aria-expanded", "false");

          const icon = menuButton.querySelector("i");

          icon.classList.remove("ri-close-line");
          icon.classList.add("ri-menu-line");

        });

      });

    }


    /*
    * ==========================================
    * SCROLL-DOWN BUTTON
    * Only exists on the HOME PAGE
    * ==========================================
    */

    const scrollDown = document.getElementById("scroll-down");

    if (scrollDown) {

      scrollDown.addEventListener("click", function () {

        const targetSection = document.getElementById("main-container");

        if (targetSection && nav) {

          const navHeight = nav.getBoundingClientRect().height;

          const targetPosition =
            targetSection.getBoundingClientRect().top + window.scrollY - navHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
          });

        } else if (targetSection) {
          // fallback if nav isn't found for some reason
          targetSection.scrollIntoView({ behavior: "smooth" });
        }

      });

    }

  });