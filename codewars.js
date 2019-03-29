// const btn = {
//   onClick: null
// }

// btn.onClick = (callback) => callback('hello world')

// btn.onClick(console.log)


function sum_pairs(arr, sum){
  // for (let i = 0; i < arr.length; i++) {
  //   const current = arr[i];
  //   const next = arr[i + 1]
  //   if(current + next === sum){
  //     return [current, next]
  //   }else if(current + next !== sum){
  //     return 'Ok'
  //   }
    
  // }
  // return [0, 0]
  let indexLeft = 0;

}

// const ans = sum_pairs([11, 3, 7, 5], 10)

// console.log();
const fetch = require('node-fetch')
const fetchSongs = async (_url) => {
  const response = await fetch(_url)
  const data = await response.json()
  const songs = []
  for (const song of data) {
    songs.push(song)
  }
  return [...songs]
}

const result = fetchSongs('https://tumiserver.now.sh/songs')

const popGrid = async (prom) => {
  const arr = await prom
  arr.forEach(x => {
    console.log(x)
  })
}

popGrid(result)
console.log(typeof result)