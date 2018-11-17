// @ts-nocheck

let nav = document.querySelector(".nav--left");

let col = document.querySelector(".col");
let clck = document.querySelectorAll(".click");
let modal = document.querySelector(".modal");
var imgs = document.querySelectorAll(".feed__img");

let tempSrc;

counter = 0;

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

//Lazy load images
//Social grid images
let feed__maker = document.querySelector('.feed__marker');
let feed__imgs = document.querySelectorAll('.feed__img');
let c_art = document.querySelector('.cover-art img'),
  v_tumb = document.querySelector('.thumbnail--video'),
  last__bg = document.querySelector('.last__bg'),
  b_art = document.querySelector('.form-img');
let other__images = [c_art, v_tumb, b_art, last__bg];

let feed_observer;

var img__options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0
};

const renderImgs = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      feed__imgs.forEach(img => {
        img.src = img.dataset.src;
      });
      feed_observer.unobserve(entry.target);
    }
  });
}
feed_observer = new IntersectionObserver(renderImgs, img__options);

feed_observer.observe(feed__maker);

//Other below-fold images
let other__observer;

const observeOtherFN = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      other__images.forEach(image => {
        image.src = image.dataset.src;
      });
      other__observer.unobserve(entry.target)
    } else {
      return;
    }
  })
}

other__observer = new IntersectionObserver(observeOtherFN, img__options);

other__images.forEach(img => other__observer.observe(img));

//Start events
const events = [
  {
  date: '12.10.17',
  name: 'Spring fiesta',
  descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
    odit voluptatum sunt asperiores!
    Cum voluptatum ducimus recusandae quod ratione, culpa explicabo in corrupti nisi sit
    optio
    eaque harum tenetur quos?`
},
  {
  date: '12.10.17',
  name: 'Jazz fiesta',
  descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
    odit voluptatum sunt asperiores!
    Cum voluptatum ducimus recusandae quod ratione, culpa explicabo in corrupti nisi sit
    optio
    eaque harum tenetur quos?`
},
  {
  date: '12.10.17',
  name: 'NYE explosive',
  descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
    odit voluptatum sunt asperiores!
    Cum voluptatum ducimus recusandae quod ratione, culpa explicabo in corrupti nisi sit
    optio
    eaque harum tenetur quos?`
},
  {
  date: '12.10.17',
  name: 'Dage whole thing',
  descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
    odit voluptatum sunt asperiores!
    Cum voluptatum ducimus recusandae quod ratione, culpa explicabo in corrupti nisi sit
    optio
    eaque harum tenetur quos?`
},
  {
  date: '12.10.17',
  name: 'Ke December',
  descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
    odit voluptatum sunt asperiores!
    Cum voluptatum ducimus recusandae quod ratione, culpa explicabo in corrupti nisi sit
    optio
    eaque harum tenetur quos?`
},
]
const DOMevents = document.querySelector('.calender-events')
const popEvents = (_events) => {
  DOMevents.innerHTML = events.slice(0, 5).map(event => {
    return `
    <div class="event">
        <h5 class="event__date">${event.date}</h5>
        <h3 class="event__name">${event.name}</h3>
        <p class="event__descr">${event.descr}</p>
    </div>
    `
  }).join('')
}

popEvents()

let calEvents = document.querySelectorAll(".event");

//Default active calender event
calEvents[0].classList.add('active')
//Onclick
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
//End Events