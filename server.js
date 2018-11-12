// //Fecth

// const HOST = 'https://exp-server-uwconvmydu.now.sh/songs';
// let iLength = 0;

// let grid = document.querySelector('.grid');

// fetch(HOST)
//   .then(res => res.json())
//   .then(json => {
//     const itemList = json;
//     itemList.forEach(item => {
//       grid.innerHTML += `
//       <figure class="grid__item">
//         <h3 class="head">${item.artist}</h3>
//         <p class="body"></p>
//       </figure> 
//       `
//     });
//   })
//   .catch(err =>{
//     console.log(err);
//   });
// // let title = document.querySelector('.head');
// {/* <figure class="grid__item">
//   <h3 class="head"></h3>
//   <p class="body"></p>
// </figure> */}
// // let artist = document.querySelector('.body');
//Kata 01
// const songDecoder = song => {
//   const re = /wub/gi //match 'wub'
//   const white = /\s\s+/g //match multiple whitespaces
//   const decoded = song.replace(re, ' ');
//   return decoded.replace(white, ' ').trim()
// }
// console.log(songDecoder('AWUBWUBWUBBWUBWUBWUBWUBWUBC'));
// console.log(songDecoder('Hello worwubld I am sa'));

// //Kata 2

// function remove(_str) {
//   str = _str.split('')
//   const regvowels = /[aeiou]/gi
//   const msg = str.map(v => {
//     return v.replace(regvowels, '')
//   }).join('')
//   return msg
// }
// //Refactored version

// function disemvowel(_str) {
//   const regvowels = /[aeiou]/gi //matches case insensitive vowels
//   return _str.replace(regvowels, '') //replace matched string from user input
// }

// console.log(remove('This website is for losers LOL!'));
// console.log(remove('hallo world'))


// //Kata 03
// function validatePIN(_pin) {
//   const valLength = _pin.length == 4 || _pin.length == 6;
//   const reg = _pin.match(/[\D\W]/)
//   return !reg && valLength
// }
// //refactored version
// const pinValidator = _pin => {
//   const valLength = _pin.length == 4 || _pin.length == 6;
//   const reg = /[\D\W]/;
//   const isDigit = reg.test(_pin)
//   return valLength && isDigit;
// }
// console.log(validatePIN('1235'));

// //Super tiny version
// const evalPin = _pin => (_pin.length == 4 || _pin.length == 6) && /[\D\W]/.test(_pin)

// //Brilliant
// function validatePIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin)
// }
// console.log(evalPin('1234'));

//Kata 04

// function getCount(str) {
//   var vowelsCount = 0;

//   // enter your majic here
//   //Match vowels on str return arr length
//   const reg = str.match(/[aeiou]/gi)
//   vowelsCount = reg == null ? 0 : reg.length
//   return vowelsCount;
// }
// console.log(getCount('my pooony'));
//Condensed version
// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }

//Kata 05
//take _number convert to string split
//parse int on every el and reduce

// function digital_root(n) {
//   // ...
//   const digits = n.toString().split('').map(Number)
//   return digits.reduce((acc, val) => {
//     let accValue = acc + val
//     let reg = /^\d\d+/g.test(accValue.toString())
//     return reg;
//   })
// }
// console.log(digital_root(1234));

// In this kata, you must create a digital root function.

// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

// Here's how it works:
// digital_root(16)
// => 1 + 6
// => 7

// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6


// function digital_root(n) {
//   // ...
//   const digits = n.toString().split('').map(Number) //Take input number split into arr of arry of single digit strings map as number
//   return digits.reduce((acc, val) => {
//     //while acc.match is greater than one reduce again
//     let accValue = acc + val
//     const vString = accValue.toString().split('').map(Number)
//     while(vString.length > 1){
//     	vString.reduce((acc2, curr2) => {
//         	accValue = acc2 + curr2
//         })
//       }
//       return accValue;
//   })
// }
// console.log(digital_root(942));

// Kata 06
function order(words) {
  //split input, match number sort 
  //Might need to implement parallel array: using string and extracted number pair
  //if matched num on string = n, then word index on new array equal n - 1
  //Or search for a digit on word then move it to index 0, sort array then join
  //Filter anything thats no a number into only words array the spread shifted number and array into output array, join and return
}

// function order(_words) {

//   let words = _words.toString().split(' ');

//   const shifted = words.map(word => {
//     const reg = /([a-z]+)(\d+)/gi
//     return word.replace(reg, '$2$1')

//   }).sort()

//   const onlyLetters = words.map(word => {
//     const nonDigit = word.match(/\D/gi).join('')
//     return nonDigit
//   })

//   const numIndex = words.map(word => {
//     const withNum = word.search(/\d/)
//     return withNum
//   }) //Find index of digit on original word


//   //Sort by other array
//   //Revert num shifting
//   const output = shifted.map((word, i, arr) => {
//     let toOutput = [];
//     const letter = onlyLetters.forEach(word => {
//         arr[i] = words[i]
//     });
//     return word
//   })

//   return output;
// }
// // console.log({onlyLetters} , {shifted}, {output});
// console.log({
//   order: order('is2 Thi1s T4est 3a')
// });

// const time = '4of Fo1r pe6ople g3ood th5e the2'.match(/\d/g)

// const reg = new RegExp(/[\d]/, 'gi')
// const digits = reg.exec(time)
// console.log(parseInt(time), {
//   digits: digits
// });

// function order(words) {
//   const wordList = words.split(' ')
//   let numOnStr;

//   if (words == '') {
//     return ''
//   } else {
//     const orderedWords = (wordList.map((word, index, arr) => {
//       numOnStr = parseInt(word.match(/[\d]/gi).map(Number).sort().join()) - 1
//       const reg = new RegExp(/[\d]/, 'gi')
//       const digits = reg.exec(word).map(d => d - 1).sort();
//       word = arr[numOnStr]
//       return word
//     }))
//     return orderedWords.join(' ')
//   }
// }

// function order(words) {
//   const reg = new RegExp(/\w+/, 'g')
//   if (words !== null) {
//     let wordList = words.split(' ');
//     let numInStr = words.match(/\d+/g).map(Number).sort().join();

//     // const output = wordList.map((word, i, arr) => {
//     //     // return (word = arr[numInStr[i]])
//     //     return (word)
//     // })
//     const output = [];
//     for(let i = 0; i <= wordList.length; i++){
//       const ordered = wordList.sort((a, b) =>{

//       })
//       output.push(ordered[i])
//     }
//     wordList.sort
//     return output
//   }
//   return ''
// }
// console.log(order('is2 Thi1s T4est 3a'));
// console.log(order('w5ith 3we dru7nken s8ailor a6 d4o sh2all wha1t'));
// // console.log(order(''));

//Finnally
//Toughest yet
function order(words) {
  const wordList = words.split(' ')
  const nums = []
  if (word !== null) {
    for (word of wordList) {
      const num = parseInt(word.match(/[\d]/gi).map(Number).sort().join())
      nums.push(num)
    }
    const numWordList = wordList.map((word, i, arr) => {
      //Assign value to object
      return {
        word,
        number: nums[i]
      }
    })
    const sorted = numWordList.sort((a, b) => a.number - b.number);

    return (sorted.map(obj => obj.word)).join(' ');
  }
  return ''
}

console.log(order('Fion4a Gre6g Ja1mila A5lice C3indy Ig2or'));