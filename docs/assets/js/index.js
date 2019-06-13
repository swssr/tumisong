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
const events = [
  {
    date: "14.06.19",
    name: "Ultra South Africa",
    img_url:
      "https://images.unsplash.com/photo-1505842465776-3b4953ca4f44?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    descr: `Why are tickets so expensive. What do you have against Durban?`
  },
  {
    date: "14.06.19",
    name: "Cape Town International Jazz Festival",
    img_url:
      "https://images.unsplash.com/13/unsplash_523b1f5aafc42_1.JPG?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=754&q=80",
    descr: `Some call it Pretentious Coconut fest? I love jazz.`
  },
  {
    date: "14.06.19",
    name: "AfrikaBurn",
    img_url:
      "https://images.unsplash.com/photo-1557693116-fb9cff08f972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
    descr: `This is cool. I've actually dreamt of attending it.`
  },
  {
    date: "14.07.19",
    name: "Vodacom Durban July",
    img_url:
      "https://images.unsplash.com/photo-1526094798790-1df6f28275cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    descr: `Queue Jame Blunt, 'Goodbye My Lover'!`
  },
  {
    date: "14.06.19",
    name: "Umuzi Week of Festivals",
    img_url:
      "https://images.unsplash.com/photo-1520483691742-bada60a1edd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    descr: `Thought it said Umlazi fest, never heard of it.?`
  },
  {
    date: "14.06.19",
    name: "AfrikaBurn",
    img_url:
      "https://images.unsplash.com/photo-1557693116-fb9cff08f972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
    descr: `This is cool. I've actually dreamt of attending it.`
  },
  ,
  {
    date: "14.06.19",
    name: "AfrikaBurn",
    img_url:
      "https://images.unsplash.com/photo-1557693116-fb9cff08f972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
    descr: `This is cool. I've actually dreamt of attending it.`
  }
];
const DOMevents = document.querySelector(".events");
const popEvents = _events => {
  DOMevents.innerHTML = events
    .slice(0, 7)
    .map(event => {
      //Should remove tab index find something better.
      return `  
    <li class="event">
      <img class="event__bg" src="${event.img_url}" data-src="${
        event.img_url
      }" />
      <a href="#0"><h3 class="event__name">${event.name}</h3></a>
      <div class="event__details">
        <p class="paragraph text text--light">${event.descr}</p>
        <div class="event__date text text--light">${event.date}</div>
      </div>
    </li>
    `;
    })
    .join("");
};
//
popEvents();

let calEvents = document.querySelectorAll(".event");
let eventNames = document.querySelectorAll(".event__name");

//Default active calender event
calEvents[0].classList.add("event--active");

//Blur out overflowing events incrementally
// let value = 100;
// calEvents.forEach((v, index) => {
//   if (index > 0) {
//     v.style["filter"] = `brightness(${value}%)`;
//     value -= 20;
//   }
// });
//Onclick
calEvents.forEach((event, i) => {
  event.addEventListener("click", () => {
    console.log("Clicking");
    makeActive(calEvents, event, "event--active");
  });
  event.addEventListener("mouseenter", () => {
    console.log("hovering");
    setTimeout(() => makeActive(calEvents, event, "event--active"), 0);
  });
});

//Event focus
eventNames.forEach((v, i) => {
  v.addEventListener("focus", () => {
    console.log("focusing");
    makeActive(eventNames, v, "event--active");
  });
  v.addEventListener("blur", () => {
    console.log("blur");
  });
  console.log(v);
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
