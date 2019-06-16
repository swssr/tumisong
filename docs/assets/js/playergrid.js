//Utility definitions
const sessionStore = [];
//swssraptor
//seesawfood
const SongsLocal = [
  {
    artist: "Koda",
    title: "In the dessert of La Femme",
    src: "assets/songs/15. KJm.mp3",
    cover: "assets/images/cover-art/c1.jpg",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantiumex nisi commodi, a reiciendis dolore consectetur laboriosam voluptates aliquid, repudiandaeexercitationem eius quae quos sed! Provident debitis nobis itaque?"
  },
  {
    artist: "Illenium",
    title: "After life",
    src: "assets/songs/15. KJm.mp3",
    cover: "assets/images/cover-art/c2.jpg",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantiumex nisi commodi, a reiciendis dolore consectetur laboriosam voluptates aliquid, repudiandaeexercitationem eius quae quos sed! Provident debitis nobis itaque?"
  },
  {
    artist: "Matt Lange",
    title: "Sixy six",
    src: "assets/songs/15. KJm.mp3",
    cover: "assets/images/cover-art/c3.jpg",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantiumex nisi commodi, a reiciendis dolore consectetur laboriosam voluptates aliquid, repudiandaeexercitationem eius quae quos sed! Provident debitis nobis itaque?"
  },
  {
    artist: "Jeff Kaale",
    title: "rose",
    src: "assets/songs/15. KJm.mp3",
    cover: "assets/images/cover-art/c4.jpg",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantiumex nisi commodi, a reiciendis dolore consectetur laboriosam voluptates aliquid, repudiandaeexercitationem eius quae quos sed! Provident debitis nobis itaque?"
  },
  {
    artist: "Eric Prydz",
    title: "Liam",
    src: "assets/songs/15. KJm.mp3",
    cover: "assets/images/cover-art/c5.jpg",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantiumex nisi commodi, a reiciendis dolore consectetur laboriosam voluptates aliquid, repudiandaeexercitationem eius quae quos sed! Provident debitis nobis itaque?"
  },
  {
    artist: "Rufus",
    title: "Bloom",
    src: "assets/songs/15. KJm.mp3",
    cover: "assets/images/cover-art/c6.jpg",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantiumex nisi commodi, a reiciendis dolore consectetur laboriosam voluptates aliquid, repudiandaeexercitationem eius quae quos sed! Provident debitis nobis itaque?"
  },
  {
    artist: "Flores",
    title: "Oceans",
    src: "assets/songs/15. KJm.mp3",
    cover: "assets/images/cover-art/img1.jpg",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantiumex nisi commodi, a reiciendis dolore consectetur laboriosam voluptates aliquid, repudiandaeexercitationem eius quae quos sed! Provident debitis nobis itaque?"
  },
  {
    artist: "Tumisong",
    title: "Axe Ibiza Top 10",
    src: "assets/songs/15. KJm.mp3",
    cover: "assets/images/cover-art/b1.jpg",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantiumex nisi commodi, a reiciendis dolore consectetur laboriosam voluptates aliquid, repudiandaeexercitationem eius quae quos sed! Provident debitis nobis itaque?"
  },
  {
    artist: "Tumisong.",
    title: "Submerged.",
    src: "assets/songs/15. KJm.mp3",
    cover: "assets/images/cover-art/b2.jpg",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantiumex nisi commodi, a reiciendis dolore consectetur laboriosam voluptates aliquid, repudiandaeexercitationem eius quae quos sed! Provident debitis nobis itaque?"
  },
  {
    artist: "Tumisong",
    title: "Blood, sweat & beers",
    song_url:
      "https://res.cloudinary.com/tumi/video/upload/v1548171894/music/Blood_Sweat_Beers_mixed_by_Tumisong.mp3",
    src: "assets/songs/15. KJm.mp3",
    cover: "assets/images/1e2e5b61247247.5a6f4997c1abb.jpg",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantiumex nisi commodi, a reiciendis dolore consectetur laboriosam voluptates aliquid, repudiandaeexercitationem eius quae quos sed! Provident debitis nobis itaque?"
  },
  {
    artist: "Tumisong",
    title: "Spring fiesta groove",
    src: "assets/songs/15. KJm.mp3",
    cover: "assets/images/cover-art/b4.jpg",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantiumex nisi commodi, a reiciendis dolore consectetur laboriosam voluptates aliquid, repudiandaeexercitationem eius quae quos sed! Provident debitis nobis itaque?"
  },
  {
    artist: "Tumisong",
    title: "Loco safredo, no idea",
    src: "assets/songs/15. KJm.mp3",
    cover: "assets/images/cover-art/b5.jpg",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantiumex nisi commodi, a reiciendis dolore consectetur laboriosam voluptates aliquid, repudiandaeexercitationem eius quae quos sed! Provident debitis nobis itaque?"
  },
  {
    artist: "Tumisong",
    title: "Deeper soul mix",
    src: "assets/songs/15. KJm.mp3",
    cover: "assets/images/cover-art/b6.jpg",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantiumex nisi commodi, a reiciendis dolore consectetur laboriosam voluptates aliquid, repudiandaeexercitationem eius quae quos sed! Provident debitis nobis itaque?"
  }
];

// region Declaration
const figCaptions = document.querySelectorAll(".item__caption .text");
const item_imgs = document.querySelectorAll(".item__image");
const fetchMsg = document.querySelector(".fetch__msg");
const featuredSect = document.querySelector(".featured");
const featuredList_div = document.getElementsByClassName("featured__list")[0];
const btnPlay_spans = document.querySelectorAll(".grd__btn");
const audio_tags = document.querySelectorAll(".item__group audio");
const bar = document.querySelector(".bar");
let featIO;
//end-region

// const URL = "https://tumiserver.now.sh/songs";
// const URL = "http://brain.now.sh/api/songs";
const URL = "http://brain.now.sh/api/songs";

const fetchError = err => {
  console.error(err);

  featuredList_div.innerHTML = ``;
  featuredList_div.innerHTML = `
    <div class="fetch__msg error">
    <h3 class="msg__inner">
    ${err}
    </h3>
    </div>
    `;
};
bar.addEventListener("click", muteSound);

fetch(URL)
  .then(res => res.json())
  .then(json => {
    templateGrid(json, false);
  })
  .catch(fetchError);

function templateGrid(data, isLocal) {
  hideMsg();
  const songs = data.slice(0, 6);

  // for (let i = 0; i <= songs.length; i++) {
  //   const currBtn = btnPlay_spans[i];

  //   console.log(songs[i]);
  //   btnPlay_spans[i].id = songs[i].title;
  //   audio_tags[i].id = songs[i].title;
  //   item_imgs[i].dataset.src = songs[i].cover;
  //   figCaptions[i].textContent = songs[i].title;
  //   audio_tags[i].src = songs[i].src;

  //   currBtn.addEventListener("click", e => playPause(e));
  // }
  console.clear();

  songs.forEach((song, index) => {
    const currBtn = btnPlay_spans[index];
    console.log(song.title);

    btnPlay_spans[index].id = songs[index].title;
    audio_tags[index].id = songs[index].title;
    item_imgs[index].dataset.src = songs[index].cover;
    item_imgs[index].src = songs[index].cover;
    figCaptions[index].textContent = songs[index].title;
    audio_tags[index].src = songs[index].src;

    currBtn.addEventListener("click", e => playPause(e));
  });
}
function hideMsg() {
  fetchMsg.style.opacity = 0;
  fetchMsg.style.display = "none";
}
function playPause(event) {
  const btn = event.target.closest("span");
  const audio = lastSibling(btn);

  bar.classList.add("bar--active");

  btnPlay_spans.forEach(b =>
    b !== btn
      ? b.classList.remove("isPlaying")
      : btn.classList.toggle("isPlaying")
  );
  audio_tags.forEach(a => {
    if (a.id !== btn.id) {
      a.load();
    } else {
      audio.paused ? audio.play() : audio.pause();
    }
  });
}
function muteSound() {
  bar.classList.toggle("mute");
  audio_tags.forEach(audio => {
    if (audio.volume > 0) {
      audio.volume = 0;
    } else if (audio.volume == 0) {
      audio.volume = 1;
    }
  });
}

let lastSibling = n => [...n.parentNode.children].pop();
