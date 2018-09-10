var imgs = document.querySelectorAll('.feed__img');
let controls = document.querySelectorAll('.ctrls .icon');
let slideLeft = controls[0]
let slideRight = controls[1]
let currentIndex = 0;
var lastIndex = imgs.length;

let indexedSrc = (currentIndex) => {
    return imgs[currentIndex].src;
};

controls.forEach(_c => {
    _c.addEventListener('click', _ => {
        console.log(`current image: src ${indexedSrc} \n currnt index: ${currentIndex}`);
    })
})
slideLeft.addEventListener('click', () => {
    if (currentIndex >= -1 && currentIndex < lastIndex) {
        currentIndex--;
        modalImgs.src = indexedSrc(currentIndex);
    } else {
        currentIndex = lastIndex - 1;
    }
})
slideRight.addEventListener('click', () => {
    if (currentIndex >= -1 && currentIndex < lastIndex) {
        currentIndex++;
        modalImgs.src = indexedSrc(currentIndex);
    } else {
        currentIndex = 0;
    }
})