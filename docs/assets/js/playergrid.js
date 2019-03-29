//
const item_imgs = document.querySelectorAll(".item__image");
const song_names = document.querySelectorAll(".item__caption text");
const item__audio = document.querySelectorAll(".item audio");

//Utility definitions
const sessionStore = [];

let sibling = n => [...n.parentNode.children].filter(x => x.nodeType == 1 && c != n);

const featuredList_div = document.getElementsByClassName("featured__list")[0];

const popGrid = x => {
  return `
    <figure class="item">
        <div class="item__group">
            <img src="${x.img_url}" alt="_" class="item__image img">
            <span class="icon btn--play play--icon item__play grd__btn">
                <svg class="svg--play" viewBox="0 0 77 76.1">
                    <path class="st0" d="M67.9,33L29.1,10.6c-4.3-2.5-9.6,0.6-9.6,5.6v44.8c0,4.9,5.3,8,9.6,5.6l38.8-22.4C72.1,41.6,72.1,35.4,67.9,33z" />
                </svg>
                <svg class="svg--pause" width="30px" height="30px" viewBox="0 0 33 40">
                    <rect y="5" width="10" height="30" />
                    <rect y="5" x="20" width="10" height="30" />
                </svg>
                </span>
                <span></span>
                </div>
              <figcaption class="item__caption">
                <span class="text">${x.song_name}</span>
                <span class="actions">
                  <i class="icon icon--play"></i>
                </span>
            </figcaption>
    </figure>
    `;
};

const item_group = document.createElement('div')
item_group.className = 'item__group'
const item_img = document.createElement('img')
item_img.className = 'item__img img'
const btnPlay = document.createElement('span')
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
    params: {},
    responseType: "arraybuffer"
  };

  const figCaption = document.createElement('figcaption')
  const spanActions = document.createElement('span')
  const iconPlay = document.createElement('i')

  //TODO: Remove all other implementaions if this works
  fetch(URL)
    .then(res => res.json())
    .then(json => {
      json.slice(0, 6).forEach(song => {
        const fig_item = document.createElement('figure')

        const item_group = document.createElement('div')
        item_group.className = 'item__group'
        const item_img = document.createElement('img')
        item_img.className = 'item__img img'
        item_img.src = song.img_url
        const btnPlay = document.createElement('span')
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
        figCaption.className = 'item__caption'
        figCaption.textContent = song.song_name
        spanActions.className = 'actions'
        iconPlay.className = 'icon icon--play'
        spanActions.appendChild(iconPlay)
        figCaption.appendChild(spanActions)

        item_group.appendChild(item_img)
        item_group.appendChild(btnPlay)
        item_group.appendChild(figCaption)

        fig_item.appendChild(item_group)

        featuredList_div.appendChild(fig_item)
      })
    })

  function playPause() {
    this.classList.toggle("isPlaying");
    const aud = this.nextSibling;

    //Reset
    audio.pause();
    audio.currentTime = 0;

    //Play pause toggle
    aud.paused ? aud.play() : aud.pause();
  }

  btn.addEventListener("click", playPause);
};
//New Song

const newSong_sect = document.getElementById("newsong");