"use strict";
//@ts-check

let isPalendrom;
let wordrev = "";

let chkpalen = word => {
  if (typeof wordrev === typeof word) {
    wordrev = word
      .split("")
      .reverse()
      .join("");
    word == wordrev ? (isPalendrom = true) : (isPalendrom = false);
    return isPalendrom == true
      ? `${word} is a palendrom`
      : `${word} is not palendrom`;
  } else {
    return `invalid input`;
  }
};
console.log(chkpalen(""));

let arr = Array(10);
let value;

function any40() {
  arr.forEach(value => {
    value = Math.floor(Math.random() * 1 * 40);
    arr.push(value);
  });
  return arr;
}
console.log(any40());