//Lazy load images
let feed__maker = document.querySelector('.feed__marker');
let feed__imgs = document.querySelectorAll('.feed__item img');

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
    }else{
      console.log(entry.isIntersecting);
    }
  });
}
feed_observer = new IntersectionObserver(renderImgs, img__options);

feed_observer.observe(feed__maker);