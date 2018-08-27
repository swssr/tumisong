// @ts-check

let nav = document.querySelector(".nav--left");

let col = document.querySelector(".col");
let calEvents = document.querySelectorAll(".event");
let clck = document.querySelectorAll(".click");
let observer;
let counter;

var options = {
  root: nav,
  rootMargin: "0px",
  threshold: 1.0
};

observer = new IntersectionObserver(handleIntersect, options);

function handleIntersect(entries) {}
observer.observe(col);

counter = 0;

calEvents.forEach((calEvent, i) => {
  calEvent.addEventListener('click', () => {
    calEvents.forEach(c => {
      c.classList.remove('active');
    })
    calEvents[i].classList.add('active')
  })
})

clck.forEach((c, i) => {
  c.addEventListener('click', _ => {
    clck.forEach(cl => {
      cl.classList.remove('active');
    });
    c.classList.add('active')
  })
})