var menuOpen = document.querySelector(".j-menu-open");
var navMobile = document.querySelector(".nav__menu");
var itemMobile = document.querySelector(".nav__menu");

menuOpen.addEventListener("click", function(evt) {
    evt.preventDefault();
    navMobile.classList.toggle("nav__menu-open")
    itemMobile.classList.add("menu-mobile")
    menuOpen.classList.toggle("j-menu-close")
});
var menuClose = document.querySelector(".j-menu-close");
menuClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    // navMobile.classList.remove("nav__menu-open")
    itemMobile.classList.remove("menu-mobile")
});

