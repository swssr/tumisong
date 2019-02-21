// @ts-nocheck
var controls = document.querySelectorAll(".ctrls .icon"),
  slideLeft = controls[0],
  slideRight = controls[1],
  currentIndex = 0,
  lastIndex = imgs.length,
  safeIndex = index => index % lastIndex,
  indexedSrc = currIndex => imgs[currIndex].src

slideLeft.addEventListener("click", _ => {
  if (currentIndex >= 0 && currentIndex < lastIndex) {
    currentIndex--;
  } else {
    currentIndex = lastIndex - 1;
  }
  modalImgs.src = indexedSrc(safeIndex(currentIndex));
  
});
slideRight.addEventListener("click", () => {
  if (currentIndex >= 0 && currentIndex < lastIndex) {
    currentIndex++;
    modalImgs.src = indexedSrc(safeIndex(currentIndex));
  } else {
    currentIndex = 0;
  }
});

//Start navigation

//Side menu toggle
const menu__toggle = document.querySelector('.icon--menu');
const nav_links = document.querySelectorAll('.nav__link');

menu__toggle.addEventListener('click', () => {
    nav.classList.toggle('nav--opened')
    console.log(nav.classList);
})  
nav_links.forEach(link => {
    link.addEventListener('click', (e) => {
        nav.classList.remove('nav--opened')
    })
})

document.querySelector('.main').addEventListener('click', () => nav.classList.remove('nav--opened') )