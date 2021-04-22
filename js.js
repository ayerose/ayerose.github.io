// scroll to top btn
const btnScrollToTop = document.querySelector('#btnScrollToTop');
btnScrollToTop.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});
// side  menu trigger

jQuery(document).ready(function ($) {
  var jPM = $.jPanelMenu({
    menu: '.side-menu',
    trigger: '#side-menu-trigger',
    direction: 'right',
  });
  jPM.on();
  $('.side-menu a').click(function () {
    jPM.close();
  });
});

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelector('nav-links li');
  //toggle nav
  burger.addEventListener('click', () => {
    //toggle nav
    nav.classList.toggle('nav-active');

    //animate links

    navLinks.forEach((link, index) => {
      //console.log(index);

      if (link.style.animation) {
        ink.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1.5
        }s`;
      }
    });

    //burger animation
    burger.classList.toggle('toggle');
  });
};

navSlide();
