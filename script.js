// External JavaScript for interactivity

// Change styles when scrolled
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = "#ff8000";
    navbar.style.color = "white";
  } else {
    navbar.style.backgroundColor = "#333";
    navbar.style.color = "white";
  }
});

// Smooth scroll to the section when clicking on the menu links
const menuLinks = document.querySelectorAll('#navbar a[href^="#"]');

menuLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const offsetTop = targetSection.getBoundingClientRect().top;
      const headerOffset = 70; // Adjust this value if you have a fixed header

      // Smoothly scroll to the target section
      window.scrollBy({
        top: offsetTop - headerOffset,
        behavior: 'smooth'
      });
    }
  });
});
