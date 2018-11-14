//Side menu toggle
const menu__toggle = document.querySelector('.icon--menu');
const nav_links = document.querySelectorAll('.nav__link');

menu__toggle.addEventListener('click', () => {
    nav.classList.toggle('fullwidth')
    console.log(nav.classList);
})
nav_links.forEach(link => {
    link.addEventListener('click', (e) => {
        nav.classList.remove('fullwidth')
    })
})