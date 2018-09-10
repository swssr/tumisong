// @ts-nocheck

let nav = document.querySelector(".nav--left");

let col = document.querySelector(".col");
let calEvents = document.querySelectorAll(".event");
let clck = document.querySelectorAll(".click");
let modal = document.querySelector(".modal");
var imgs = document.querySelectorAll('.feed__img');

var tempSrc;
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
let modalImgs = document.querySelector('.img--bigger');
imgs.forEach((img, i) => {
  img.addEventListener("click", e => {
    modal.classList.add("visible");
    main.classList.add(`blurred`);
    navleft.classList.add(`blurred`);
    tempSrc = imgs[i].src.toString();
    console.log(tempSrc);
    modalImgs.src = tempSrc;
  });
});

document.querySelector(`.modal__inner button`).addEventListener('click', _ => {
  modal.classList.remove('visible');
  main.classList.remove(`blurred`);
  navleft.classList.remove(`blurred`);
});

let observer;
//Lazy load images
let feed = document.querySelector(".feed");
var options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0
};
observer = new IntersectionObserver(renderImgs, options);

function renderImgs(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      imgs.forEach((img) => {
        img.src = img.dataset.src;
      });
    } else return
    observer.unobserve(entry.target);
  });
}
observer.observe(feed);
//End lazy load

//Show hide footer
let fObserver;
let fOptions = {
  rootMargin: '0px',
  treshold: 1.0
}
let footer = document.querySelector(`.footer`);
let navleft = document.querySelector(`.nav--left`);
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
      footer.classList.add(`accent`);
    }
  });
}
fObserver = new IntersectionObserver(showFooter, fOptions);
fObserver.observe(document.querySelector(`.bridge`));

//Image preview
//Image scroller 
// let slideCntrls = document.querySelectorAll(`.ctrls .icon`);
// let slideLeft = slideCntrls[0];
// let slideRight = slideCntrls[1];
// let imgsData = document.querySelectorAll(`[data-src]`);
// let imgSources = [];
// let currIndex;
// let lastIndex;
// //add ALL image url to preview modal list
// imgsData.forEach(img => {
//   imgSources.push(img.dataset.src);
// });
// // console.table(imgSources);s
// lastIndex = imgSources.length - 1;
// //Handle images click
// newTempSrc = tempSrc.substr(tempSrc.search("assets", tempSrc.lenghth)).trim();
// currIndex = imgSources.indexOf(parseInt(newTempSrc));

// slideLeft.addEventListener('click', (e) => {
//   //If button prev is clicked
//   currIndex = currIndex - 1;
//   //Controls
//   console.log(`current index: ${currIndex}, last index: ${lastIndex}, tempSrc: ${tempSrc}`);
// });
// slideRight.addEventListener('click', (e) => {
//   //If button prev is clicked
//   currIndex++;
//   //Controls
//   console.log(`current index: ${currIndex}, last index: ${lastIndex}, tempSrc: ${tempSrc}`);
// });