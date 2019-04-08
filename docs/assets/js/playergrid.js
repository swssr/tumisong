//Utility definitions
const sessionStore = [];

let sibling = n =>
  [...n.parentNode.children].filter(x => x.nodeType == 1 && c != n);

const featuredList_div = document.getElementsByClassName("featured__list")[0];

const btnPlay_spans = document.querySelectorAll(".grd__btn");
const URL = "https://tumiserver.now.sh/songs";
const API_TEST_URL = `http://127.0.0.1:63639/assets/songs.json`;
const fetchError = err => {
  featuredList_div.innerHTML = ``;
  featuredList_div.innerHTML = `
    <div class="fetch__msg error">
    <h3 class="msg__inner">
    ${err}
    </h3>
    </div>
    `;
};
const options = {
  method: "GET",
  responseType: "arraybuffer"
};
//TODO: Revert to
const figCaptions = document.querySelectorAll(".item__caption .text");
const item_imgs = document.querySelectorAll('.item__image')
const fetchMsg = document.querySelector(".fetch__msg");

fetch(API_TEST_URL, options)
  .then(res => res.json())
  .then(json => {
    fetchMsg.style.opacity = 0;
    fetchMsg.style.display = "none";
    console.log(json)
    const songs = json.slice(0, 6);
    for (let i = 0; i <= songs.length; i++) {
      const {song_name, img_url} = songs[i];
      item_imgs[i].src = img_url
      figCaptions[i].textContent = song_name;
    }
  });
// .catch(fetchError)

console.clear();

const pBtns = document.querySelectorAll(".item__play");
const clicks = [];
