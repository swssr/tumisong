//Utility definitions
const sessionStore = [];

let sibling = n => [...n.parentNode.children].filter(x => x.nodeType == 1 && c != n);

const featuredList_div = document.getElementsByClassName("featured__list")[0];

window.onload = function () {
  const btnPlay_spans = document.querySelectorAll(".grd__btn");
  const URL = "http://127.0.0.1:62911/assets/songs.json" || "https://tumiserver.now.sh/songs";
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
  //TODO: Remove all other implementaions if this works
  fetch(URL, options)
    .then(res => res.json())
    .then(json => {
      document.querySelector('.fetch__msg').style.opacity = 0;
      json.slice(0, 6).forEach(song => {
        featuredList_div.appendChild(tempItem(song))
      })
    })
    .catch(fetchError)


};
//New Song

const newSong_sect = document.getElementById("newsong");

function tempItem(song) {

  const fig_item = document.createElement('figure')
  const figCaption = document.createElement('figcaption')
  const spanActions = document.createElement('span')
  const iconPlay = document.createElement('i')
  const item_group = document.createElement('div')
  const item_img = document.createElement('img')
  const btnPlay = document.createElement('span')
  const audio = document.createElement('audio')

  item_group.className = 'item__group'
  item_img.className = 'item__img img'
  item_img.src = song.img_url
  btnPlay.className = 'icon btn--play play--icon item__play grd__btn'
  btnPlay.innerHTML = `
<svg class="svg--play" viewBox="0 0 77 76.1">
<path class="st0" d="M67.9,33L29.1,10.6c-4.3-2.5-9.6,0.6-9.6,5.6v44.8c0,4.9,5.3,8,9.6,5.6l38.8-22.4C72.1,41.6,72.1,35.4,67.9,33z" />
  </svg>
  <svg class="svg--pause" width="30px" height="30px" viewBox="0 0 33 40">
  <rect y="5" width="10" height="30" />
  <rect y="5" x="20" width="10" height="30" />
  </svg>
  `
  btnPlay.addEventListener('click', playPause)

  audio.src = song.src_local

  figCaption.className = 'item__caption'
  figCaption.textContent = song.song_name
  spanActions.className = 'actions'
  iconPlay.className = 'icon icon--play'
  spanActions.appendChild(iconPlay)
  figCaption.appendChild(spanActions)

  item_group.appendChild(item_img)

  item_group.appendChild(btnPlay)
  item_group.appendChild(audio)

  fig_item.appendChild(item_group)
  fig_item.appendChild(figCaption)

  return fig_item
}

function playPause() {
  this.classList.toggle("isPlaying");
  const aud = this.nextSibling;
  //Reset
  aud.pause();
  aud.currentTime = 0;
  

  //Play pause toggle
  aud.paused ? aud.play() : aud.pause();
}

const audioEls = document.querySelectorAll('audio');

console.log(audioEls)