const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

// Toggle mobile menu
hamburger.addEventListener("click", () => {
  // Animate Links
  navLinks.classList.toggle("active");

  // Hamburger Animation (optional, turns into an X)
  hamburger.classList.toggle("toggle");
});

// Close mobile menu when a link is clicked
links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("toggle");
  });
});
