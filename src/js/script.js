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



var rng=document.getElementById('slider1'); //rng - это Input

noUiSlider.create(rng, {
    start: [-460],
    connect: true,
    range: {
        'min': -600,
        'max': 0
    }
});


var exafter=document.getElementById('exright'); // div - блок test
var exbefore=document.getElementById('exleft'); // div - блок test
var rng=document.getElementById('slider1'); //rng - это Input

function funslid() {
  exafter.style.paddingRight='calc(10px - ' + rng.value + 'px)';
  exbefore.style.paddingLeft='calc(667px + ' + rng.value + 'px)';
}

var isSecondPicture = true;
var exafter = document.getElementById('exright')
var exbefore = document.getElementById('exleft')
var isinitedCarousel = false;
var changeButtonIndicator = document.querySelector(".slider__indicator");


function toggleCarousel (evnt) {
  evnt.preventDefault();
  if (isSecondPicture == true) {
    exbefore.style.transition = "transform 1s"
    exbefore.style.transform = "translate(-100%, 0)"
    exafter.style.transform = "translate(0, 0)"
    changeButtonIndicator.style.transform = "translate(38px, 0)"
  } 
  else {
    exafter.style.transition = "transform 1s"
    exbefore.style.transform = "translate(0, 0)"
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

var mobileResize = false;
var desktopResize = false;
window.addEventListener('resize', function() {
  if (window.innerWidth > 767) {
    if (mobileResize === true) {
      exbefore.style.paddingLeft = "211px"
      exafter.style.paddingRight = "465px"
      rng.value = "-460"
    }
    exbefore.style.transition = "transform 0s"
    exafter.style.transition = "transform 0s"
    if (isinitedCarousel == true) {
      exafter.removeEventListener("click", toggleCarousel);
      exbefore.removeEventListener("click", toggleCarousel);
      exbefore.style.transform = "unset"
      exafter.style.transform = "unset"
    }
    else {
      exafter.removeEventListener("click", toggleCarousel);
      exbefore.removeEventListener("click", toggleCarousel);
      exbefore.style.transform = "unset"
      exafter.style.transform = "unset"
      exbefore.style.transform = "translate(0, 0)"
      exafter.style.transform = "translate(0, 0)"
    }
    mobileResize = false
    desktopResize = true
    isSecondPicture = true;
  } 
  else {
    // exafter.style.transition = "unset"
    if (desktopResize === true) {
      exbefore.style.transform = "translate(0, 0)"
      exafter.style.transform = "translate(100%, 0)"
      changeButtonIndicator.style.transform = "translate(0px, 0)"
    }
    exafter.addEventListener("click", toggleCarousel);
    exbefore.addEventListener("click", toggleCarousel);
    if (isinitedCarousel == true) {
      exafter.addEventListener("click", toggleCarousel);
      exbefore.addEventListener("click", toggleCarousel);
      initMobileCarousel()
      exbefore.style.paddingLeft = "0"
      exafter.style.paddingRight = "0"
      // exbefore.style.transition = "transform 1s"
    }
    else {
      initMobileCarousel()
      exbefore.style.paddingLeft = "0"
      exafter.style.paddingRight = "0"
    }
    mobileResize = true
    desktopResize = false
  }
}
);