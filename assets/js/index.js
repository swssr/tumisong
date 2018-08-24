// @ts-nocheck

console.log(TweenMax);
let vars = {
    rotation: 180
}
let target = document.querySelector('.split');

target.addEventListener('mouseover', () => {
    TweenMax.to(target, 1, vars);
})