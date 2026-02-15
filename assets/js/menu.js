document.addEventListener("DOMContentLoaded", function () {

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  const links = document.querySelectorAll(".nav a");

  function openMenu() {
    toggle.classList.add("active");
    nav.classList.add("active");
  }

  function closeMenu() {
    toggle.classList.remove("active");
    nav.classList.remove("active");
  }

  toggle.addEventListener("click", function (e) {
    e.stopPropagation();
    nav.classList.contains("active") ? closeMenu() : openMenu();
  });

  links.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".nav") && !e.target.closest(".menu-toggle")) {
      closeMenu();
    }
  });

});