var toggleMobileMenuButton = document.querySelector(".nav__toggle-menu");
var nav = document.querySelector(".nav");
var menu = document.querySelector(".nav__menu");

var isMenuOpened = false;
var closingTimeout;
toggleMobileMenuButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!isMenuOpened) {
    clearTimeout(closingTimeout)
    nav.classList.add("nav--opened")
    menu.classList.remove("nav__menu--animation--closing")
    menu.classList.add("nav__menu--animation--opening")
  } else {
    menu.classList.remove("nav__menu--animation--opening")
    menu.classList.add("nav__menu--animation--closing")
    closingTimeout = setTimeout(() => nav.classList.remove("nav--opened"), 800)
  }
  isMenuOpened = !isMenuOpened
});

function funslid() {
  var rng=document.getElementById('slider1'); //rng - это Input
  var exafter=document.getElementById('exright'); // div - блок test
  var exbefore=document.getElementById('exleft'); // div - блок test
  exafter.style.paddingRight='calc(10px - ' + rng.value + 'px';
  exbefore.style.paddingLeft='calc(667px + ' + rng.value + 'px';
}