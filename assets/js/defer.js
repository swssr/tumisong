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
      imgs.forEach(img => {
        img.src = img.dataset.src;
      });
    } else return;
    observer.unobserve(entry.target);
  });
}
observer.observe(feed);