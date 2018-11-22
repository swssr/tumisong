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
imgs.forEach((img, _i) => {
  img.addEventListener("click", _e => {
    //Show modal
    modal.classList.add("visible");
    main.classList.add(`blurred`);
    nav.classList.add(`blurred`);
    //End show modal

    tempSrc = img.src.toString();
    // console.log(tempSrc);
    modalImgs.src = tempSrc;
  });
});
const dropModal = () => {
  modal.classList.remove("visible");
  main.classList.remove(`blurred`);
  nav.classList.remove(`blurred`);
}
document.querySelector(`.modal__inner button`).addEventListener("click", _ => {
  dropModal()
});
modal.addEventListener('click', _e => {
  if (_e.target === modal) dropModal()
})

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
      footer.classList.remove(`slide-up`);
    }
  });
}
fObserver = new IntersectionObserver(showFooter, fOptions);
fObserver.observe(document.querySelector(`.marker`));

//Lazy load images
//Social grid images
let feed__marker = document.querySelector('.feed__marker');
var feed__imgs = document.querySelectorAll('.feed__img');
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

feed_observer.observe(feed__marker);

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
const events = [{
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
const popEvents = () => {
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
      c.classLists.remove("active");
    });
    calEvents[i].classList.add("active");
  });
});

//End Events

//#REGION Social feeds

//Clicking social link
clck.forEach((c, _i) => {
  c.addEventListener("click", _ => {
    const makeActive = () => {
      clck.forEach(cl => {
        cl.classList.remove("active"); //Reset on every click
      });
      cl.classList.add("active");
    }
    makeActive()
  });
});

//Instagram feed
const feedContainer = document.querySelector('.feed');
const fromInsta = () => {
  //Change contents of social feed grid
  //1. Clear container grid then fill with cached API response
  const accessToken = `1653183333.8f37118.51b347ac8c074d7a954f9db1dd2fb931`
  const INIT = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${accessToken}`
  let userURL;
  const prequality = `low_resolution`
  const temp = '<figure class="feed__item"><img src={{image}} class="feed__img thumbnail"></figure>';
  var feed = new Instafeed({
    get: 'user',
    userId: '1653183333',
    accessToken,
    limit: '6',
    resolution: prequality,
    before: () => feedContainer.innerHTML = `
    <div class="fetch__msg error">
        <h1 class="msg__inner">
            Still loading
        </h1>
    </div>
    `,
    template: temp,
    error: (error) => feedContainer.innerHTML = `
    <div class="fetch__msg error">
        <h1 class="msg__inner">
            ${error}
        </h1>
    </div>
    `,
  });
  feed.run();
}
//Show all images
let activeIndex = 0

const fromOwn = () => {
  //Enable pagination
  //Get pagination button, set 
  document.querySelectorAll(`.paginate .pager`)
    .forEach(btn => {
      btn.addEventListener('click', _ => {
        ++activeIndex
        console.log(activeIndex);
      })
    })
  //By default all feed containers  except the first in selection have a flex width of 0%
  feedContainers = document.querySelectorAll(`.moments .grid`);
  //
  switchFeed(feedContainers, currentIndex);
}

document.querySelector('#instagram').addEventListener('click', () => {
  // fromInsta()
  fromOwn()
  console.log('all');
})

document.querySelector('#all').addEventListener('click', () => {
  fromOwn()
  console.log('all');

})


function switchFeed(feedContainers, currentIndex) {
  feedContainers.forEach(f => f.style.width = '0%')
  feedContainers[currentIndex].style.width = '100%';
  console.log('switching feeds', feedContainers[currentIndex])
}
//Add intersection observer at the far end of each group or on each img
//Cache feed images 
//End instagram feed
//#ENDREGION social feeds