var imgs = document.querySelectorAll(".feed__img"),
  controls = document.querySelectorAll(".ctrls .icon"),
  slideLeft = controls[0],
  slideRight = controls[1],
  currentIndex = 0,
  lastIndex = imgs.length;

let indexedSrc = currIndex => {
  return imgs[currIndex].src;
};

controls.forEach(_c => {
  _c.addEventListener("click", _ => {
    console.log(
      `current image: src ${indexedSrc} \n currnt index: ${currentIndex}`
    );
  });
});
slideLeft.addEventListener("click", () => {
  if (currentIndex >= -1 && currentIndex < lastIndex) {
    currentIndex--;
    modalImgs.src = indexedSrc(currentIndex);
  } else {
    currentIndex = lastIndex - 1;
  }
});
slideRight.addEventListener("click", () => {
  if (currentIndex >= -1 && currentIndex < lastIndex) {
    currentIndex++;
    modalImgs.src = indexedSrc(currentIndex);
  } else {
    currentIndex = 0;
  }
});
