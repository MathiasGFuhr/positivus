const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('header nav ul');
const menuClose = document.querySelector('.menu-close');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
});
