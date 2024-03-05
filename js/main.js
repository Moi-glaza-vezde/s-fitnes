//------------------запуск слайдера
$(document).ready(function () {
   $('.slider').slick({
      dots: true,
      speed: 1000,
      easing: 'ease',
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      waitForAnimate: true,
   });
});

//---------------меню бургер
const menuBtn = document.querySelector('#menuBtn');
const menuBurger = document.querySelector('.nav');
const bgOn = document.getElementById('bg-on');
const menuString = document.querySelector('.header__string-menu');
//---------контакты
const itemContact = document.querySelector('#itemContact');
const navContacts = document.querySelector('#navContacts');
const closeMenu = document.querySelector('#closeMenu');
menuBtn.addEventListener('click', menuActive);

function menuActive() {
   menuBurger.classList.toggle('nav-active');
   navContacts.classList.remove('nav__item-3-contact-active');

   if (menuBurger.closest('.nav-active')) {
      bgOn.style.display = 'block';
      menuString.classList.add('header__string-menu-active');
   } else {
      bgOn.style.display = 'none';
      menuString.classList.remove('header__string-menu-active');
   }
}
//-------------Попап контакты

itemContact.addEventListener('click', function showContact() {
   navContacts.classList.toggle('nav__item-3-contact-active');

   if (navContacts.closest('.nav__item-3-contact-active')) {
      bgOn.style.display = 'block';
   } else {
      bgOn.style.display = 'none';
   }

   if (menuBurger.closest('.nav-active')) {
      bgOn.style.display = 'block';
   }
});

closeMenu.addEventListener('click', function () {
   console.log(555);
   navContacts.classList.remove('nav__item-3-contact-active');
   if (navContacts.closest('.nav__item-3-contact-active')) {
      bgOn.style.display = 'block';
   } else {
      bgOn.style.display = 'none';
   }

   if (menuBurger.closest('.nav-active')) {
      bgOn.style.display = 'block';
   }
});
