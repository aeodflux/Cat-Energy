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

var exafter=document.getElementById('exright'); // div - блок test
var exbefore=document.getElementById('exleft'); // div - блок test

function funslid() {
  var rng=document.getElementById('slider1'); //rng - это Input
  exafter.style.paddingRight='calc(10px - ' + rng.value + 'px)';
  exbefore.style.paddingLeft='calc(667px + ' + rng.value + 'px)';
}

var isSecondPicture = true;
var exafter = document.getElementById('exright')
var exbefore = document.getElementById('exleft')
var isinitedCarousel = false;
var changeButtonIndicator = document.querySelector(".slider__indicator");


function toggleCarousel (evnt) {
  isinitedCarousel = true;
  evnt.preventDefault();
  if (isSecondPicture == true) {
    exbefore.style.transform = "translate(-100%, 0)"
    exbefore.style.transition = "transform 1s"
    exafter.style.transform = "translate(0, 0)"
    changeButtonIndicator.style.transform = "translate(38px, 0)"
  } 
  else {
    exbefore.style.transform = "translate(0, 0)"
    exafter.style.transition = "transform 1s"
    exafter.style.transform = "translate(100%, 0)"
    changeButtonIndicator.style.transform = "translate(0px, 0)"
  }
  isSecondPicture = !isSecondPicture;
}

function initMobileCarousel() {
  var changeButton = document.querySelector(".exemplum__input--mobile");
  if (window.innerWidth <= 767) {
    changeButton.addEventListener("click", toggleCarousel);
    exafter.addEventListener("click", toggleCarousel);
    exbefore.addEventListener("click", toggleCarousel);
  }
}

initMobileCarousel()

window.addEventListener('resize', function() {
  if (window.innerWidth > 767) {
    if (isinitedCarousel == true) {
      exafter.removeEventListener("click", toggleCarousel);
      exbefore.removeEventListener("click", toggleCarousel);
      exbefore.style.transform = "unset"
      exafter.style.transform = "unset"
      exbefore.style.paddingLeft = "211px"
      exafter.style.paddingRight = "465px"
    }
  } else {
    initMobileCarousel()
    exbefore.style.paddingLeft = "0"
    exafter.style.paddingRight = "0"
  }
}
);