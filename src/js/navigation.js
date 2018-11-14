//Side menu toggle
let menu__toggle = document.querySelector('a.icon--menu');

menu__toggle.addEventListener('click', () => {
    nav.classList.toggle('fullwidth')
    console.log(nav.classList);
})