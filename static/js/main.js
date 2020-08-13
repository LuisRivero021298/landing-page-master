const menuBurger = document.getElementById('menu-burger');
const menuMobile = document.getElementById('menu-mobile');
const iconMenu = document.getElementById('icon-menu');
const iconClose = document.getElementById('icon-close');
const ipad = window.matchMedia('screen and (max-width: 768px)');

ipad.addListener(validSize);

function validSize (e) {
  if(e.matches){
    menuBurger.addEventListener('click', showHideMenu); 
  } else {
    menuBurger.removeEventListener('click', showHideMenu);
  }
};

function showHideMenu () {
  menuMobile.classList.toggle('menu-mobile-active');
  menuMobile.classList.toggle('menu-mobile-hidden');

  iconMenu.classList.toggle('icon-hidden');
  iconClose.classList.toggle('icon-hidden');
};

validSize(ipad);