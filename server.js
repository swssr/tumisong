//Fecth

const HOST = 'https://exp-server-uwconvmydu.now.sh/songs';
let iLength = 0;

let grid = document.querySelector('.grid');

fetch(HOST)
  .then(res => res.json())
  .then(json => {
    const itemList = json;
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