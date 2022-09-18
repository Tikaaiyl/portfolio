const collapsedMenu = document.querySelector(".menu");
const navLinks = document.querySelector(".links");
const link = document.querySelectorAll(".nav-links li");

collapsedMenu.addEventListener('click', () => {
    navLinks.classList.toggle("open");
})