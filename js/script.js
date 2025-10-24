const openMenuButtons = document.querySelectorAll(".open-menu");
const navContent = document.querySelector(".nav-content");

openMenuButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    navContent.classList.toggle("active");
  });
});

