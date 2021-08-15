var toggleMobileMenuButton = document.querySelector(".nav__toggle-menu");
var nav = document.querySelector(".header");
var menu = document.querySelector(".nav__menu");
var x = false;

toggleMobileMenuButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (x === true) {
        nav.classList.add("nav--opened")
        menu.classList.remove("move-up")
        menu.classList.add("move-down")
        x = false;
      } else {
        menu.classList.remove("move-down")
        menu.classList.add("move-up")
        x = true;
        if (x == false) {
        nav.classList.remove("nav--opened")
        }
      }
});

