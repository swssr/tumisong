// @ts-check

let nav = document.querySelector(".nav--left");

let col = document.querySelector(".col");
let observer;

var options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0
};

observer = new IntersectionObserver(handleIntersect, options);

function handleIntersect(entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      // TweenMax.to(nav, 1, { left: -500 })
      console.log(`hello its ${entry.isIntersecting}`);;
      nav.classList.add('nav-up')
    }
    if (entry.isIntersecting) {
      // TweenMax.to(nav, 1, { left: 0 });
      console.log(`hello its ${entry.isIntersecting}`);
      nav.classList.remove('nav-up')

    }
  });
}
observer.observe(col);