// @ts-nocheck

let nav = document.querySelector(".nav--left");

let modal = document.querySelector(".modal");
var imgs = document.querySelectorAll(".sc-feed__img");

let tempSrc;

counter = 0;

//Open/close modal mechanism
let modalImgs = document.querySelector(".img--bigger");
imgs.forEach((img, i) => {
  img.addEventListener("click", e => {
    //Show modal
    modal.classList.add("visible");
    main.classList.add(`blurred`);
    nav.classList.add(`blurred`);
    //End show modal

    tempSrc = img.src.toString();
    modalImgs.src = tempSrc;
  });
});
const dropModal = () => {
  modal.classList.remove("visible");
  main.classList.remove(`blurred`);
  nav.classList.remove(`blurred`);
};
document.querySelector(`.modal__inner button`).addEventListener("click", _ => {
  dropModal();
});
modal.addEventListener("click", e => {
  e.target === modal ? dropModal() : "";
});
//Instagram feed
const feedContainer = document.querySelector(".sc-feed__instagram");
const fromInsta = () => {
  //Change contents of social feed grid
  //1. Clear container grid then fill with cached API response
  const prequality = `low_resolution`;
  var feed = new Instafeed({
    get: "user",
    clientId: "8f3711841be74b09ad206b25c84c7cd7",
    userId: "1653183333",
    accessToken: `1653183333.8f37118.51b347ac8c074d7a954f9db1dd2fb931`,
    limit: "6",
    resolution: prequality,
    before: () =>
      (feedContainer.innerHTML = `
    <div class="fetch__msg error">
        <h1 class="msg__inner">
            Still loading
        </h1>
    </div>
    `),
    target: "instafeed",
    template: `
    <figure class="sc-feed__item">
        <img src="{{image}}" data-src="{{image}}" alt="" class="sc-feed__img thumbnail">
        <figcaption class="sc-feed__caption"></figcaption>
    </figure>
    `,
    error: err =>
      (feedContainer.innerHTML = `
    <div class="fetch__msg error">
        <h1 class="msg__inner">
          ${err}
        </h1>
    </div>
    `)
  });
  feed.run();
};

const fromOwn = () => {};

const instaBtn = document.getElementById("btnInsta");
let instC = 0;
instaBtn.addEventListener("click", () => {
  instC == 0 ? fromInsta() : null;
  instC++;
});

document.querySelector(".sc-feed__all").addEventListener("click", () => {
  fromOwn();
});
//End instagram feed
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
      footer.classList.add(`slide-up`);
      footer.classList.remove(`accent`);
    } else {
      footer.classList.remove(`slide-up`);
    }
  });
}
fObserver = new IntersectionObserver(showFooter, fOptions);
fObserver.observe(document.querySelector(`.marker`));

//Lazy load images
//Social grid images
var feed__imgs = document.querySelectorAll(".feed__img");
let c_art = document.querySelector(".cover-art img"),
  v_tumb = document.querySelector(".thumbnail--video"),
  last__bg = document.querySelector(".last__bg"),
  b_art = document.querySelector(".form-img");
let imgs_tag = document.querySelectorAll(".img");

let IO;

var IOoptions = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0
};

const renderImgs = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
    }
  });
};

IO = new IntersectionObserver(renderImgs, IOoptions);
imgs_tag.forEach(img => IO.observe(img));

//Start events
const getEvents = async () => {
  const res = await fetch("https://filr-server.appspot.com/api/events");
  const data = await res.json();
  return [...data].reverse() || [];
};
const DOMevents = document.querySelector(".events");
const popEvents = _events => {
  console.log(_events);
  const bgs = document.querySelectorAll(".event__bg");
  const names = document.querySelectorAll(".event__name");
  const descrs = document.querySelectorAll(".event__details p.text");
  const dates = document.querySelectorAll(".event__date");
  //
  for (let index = 0; index <= 7; index++) {
    bgs[index].src = _events[index].img;
    names[index].textContent = _events[index].name;
    descrs[index].textContent = _events[index].descr;
    dates[index].textContent = new Date(
      _events[index].date
    ).toLocaleDateString();
  }
};
//
(async () => {
  const events = await getEvents();
  popEvents(events);
})();

let calEvents = document.querySelectorAll(".event");
let eventNames = document.querySelectorAll(".event__name");

//Default active calender event
calEvents[0].classList.add("event--active");

//Onclick
calEvents.forEach((event, i) => {
  event.addEventListener("click", () => {
    makeActive(calEvents, event, "event--active");
  });
  event.addEventListener("mouseenter", () => {
    setTimeout(() => makeActive(calEvents, event, "event--active"), 0);
  });
});

//Event focus
eventNames.forEach((v, i) => {
  v.addEventListener("focus", () => {
    makeActive(eventNames, v, "event--active");
  });
  v.addEventListener("blur", () => {});
});

//Auto scroll

//End Events

//Social feed
//Clicking social link
let socialbtns = document.querySelectorAll(".click");

socialbtns.forEach((c, i) => {
  c.addEventListener("click", _ => {
    makeActive(socialbtns);
  });
});

//Utiity func
function makeActive(list, target = e.currentTarget, activeClass = "active") {
  const clearAllActive = _list =>
    _list.forEach(item => item.classList.remove(activeClass));

  clearAllActive(list);
  target.classList.toggle(activeClass);
}
