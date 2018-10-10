//Fecth

const HOST = 'http://127.0.0.1:5500/db/songs.json';
let iLength = 0;

let grid = document.querySelector('.grid');

fetch(HOST)
  .then(res => res.json())
  .then(json => {
    const {root, songs} = json;
    const itemList = songs.map(song => song);
    console.log(itemList);
    itemList.forEach(item => {
      grid.innerHTML += `
      <figure class="grid__item">
        <h3 class="head">${item.artist}</h3>
        <p class="body"></p>
      </figure> 
      `
    });
  })
  .catch(err =>{
    console.log(err);
  });
// let title = document.querySelector('.head');
{/* <figure class="grid__item">
  <h3 class="head"></h3>
  <p class="body"></p>
</figure> */}
// let artist = document.querySelector('.body');