const menuButton = document.querySelector(".menu-button-js");
const nav = document.querySelector(".nav-js");
console.log(nav)
function openMenu () {
  const menuLines = document.querySelectorAll('.menu-button-js span');
  menuLines.forEach((line) => {
    line.classList.toggle("open-menu");
  })

  nav.classList.toggle("nav-open")

};


menuButton.addEventListener('click', openMenu);