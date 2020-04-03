const menuMobileButton = document.querySelector('.mobile-btn');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('header');
const menu = document.querySelector('.menu');


menuMobileButton.addEventListener('click', () => {

    menu.classList.toggle('menu--hidden');
    header.classList.toggle('open-header');

    console.log(header)
});