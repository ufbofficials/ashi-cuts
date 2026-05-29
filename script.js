/* ========================= */
/* MOBILE MENU */
/* ========================= */

const menuBtn = document.getElementById('menuBtn');

const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {

  navLinks.classList.toggle('active');

});

/* ========================= */
/* NAVBAR SCROLL EFFECT */
/* ========================= */

window.addEventListener('scroll', () => {

  const navbar = document.querySelector('.navbar');

  if(window.scrollY > 50){

    navbar.style.background = 'rgba(0,0,0,0.95)';

  }else{

    navbar.style.background = 'rgba(0,0,0,0.7)';

  }

});
