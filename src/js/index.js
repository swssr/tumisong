// @ts-nocheck

let nav = document.querySelector(".nav--left");

let col = document.querySelector(".col");
let calEvents = document.querySelectorAll(".event");
let clck = document.querySelectorAll(".click");
let modal = document.querySelector(".modal");
var imgs = document.querySelectorAll(".feed__img");

let tempSrc;

counter = 0;
calEvents.forEach((calEvent, i) => {
  calEvent.addEventListener("click", () => {
    calEvents.forEach(c => {
      c.classList.remove("active");
    });
    calEvents[i].classList.add("active");
  });
});

clck.forEach((c, i) => {
  c.addEventListener("click", _ => {
    clck.forEach(cl => {
      cl.classList.remove("active");
    });
    c.classList.add("active");
  });
});

//Open/close modal mechanism
let modalImgs = document.querySelector(".img--bigger");
imgs.forEach((img, i) => {
  img.addEventListener("click", e => {
    modal.classList.add("visible");
    main.classList.add(`blurred`);
    nav.classList.add(`blurred`);
    tempSrc = imgs[i].src.toString();
    console.log(tempSrc);
    modalImgs.src = tempSrc;
  });
});

document.querySelector(`.modal__inner button`).addEventListener("click", _ => {
  modal.classList.remove("visible");
  main.classList.remove(`blurred`);
  nav.classList.remove(`blurred`);
});

//Show hide footer
let fObserver;
let fOptions = {
  rootMargin: "0px",
  treshold: 1.0
};
let footer = document.querySelector(`.footer`);
let main = document.querySelector(`.main`);

function showFooter(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(`is inter`);
      footer.classList.add(`slide-up`);
      footer.classList.remove(`accent`);
    } else {
      console.log(`not`);
      footer.classList.remove(`slide-up`);
    }
  });
}
fObserver = new IntersectionObserver(showFooter, fOptions);
fObserver.observe(document.querySelector(`.marker`));