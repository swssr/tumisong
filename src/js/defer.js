//Lazy load images
//Social grid images
let feed__maker = document.querySelector('.feed__marker');
let feed__imgs = document.querySelectorAll('.feed__item img');
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
    }else{
      console.log(entry.isIntersecting);
    }
  });
}
feed_observer = new IntersectionObserver(renderImgs, img__options);

feed_observer.observe(feed__maker);

//Other below-fold images
let other__observer;

const observeOtherFN = (entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      other__images.forEach(image => {
        image.src = image.dataset.src;
      });
      other__observer.unobserve(entry.target)
    }else{
      return;
    }
  })
}

other__observer = new IntersectionObserver(observeOtherFN, img__options);

other__images.forEach(img => other__observer.observe(img));