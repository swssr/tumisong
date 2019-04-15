//Utility definitions
const sessionStore = [];
const SongsLocal = [
  {
    artist: "Koda",
    title: "In the dessert of La Femme",
    src_local: "assets/songs/15. KJm.mp3",
    img_url: "assets/images/cover-art/c1.jpg",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantiumex nisi commodi, a reiciendis dolore consectetur laboriosam voluptates aliquid, repudiandaeexercitationem eius quae quos sed! Provident debitis nobis itaque?"
  },
  {
    artist: "Illenium",
    title: "After life",
    src_local: "assets/songs/15. KJm.mp3",
    img_url: "assets/images/cover-art/c2.jpg",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantiumex nisi commodi, a reiciendis dolore consectetur laboriosam voluptates aliquid, repudiandaeexercitationem eius quae quos sed! Provident debitis nobis itaque?"
  },
  {
    artist: "Matt Lange",
    title: "Sixy six",
    src_local: "assets/songs/15. KJm.mp3",
    img_url: "assets/images/cover-art/c3.jpg",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantiumex nisi commodi, a reiciendis dolore consectetur laboriosam voluptates aliquid, repudiandaeexercitationem eius quae quos sed! Provident debitis nobis itaque?"
  },
  {
    artist: "Jeff Kaale",
    title: "rose",
    src_local: "assets/songs/15. KJm.mp3",
    img_url: "assets/images/cover-art/c4.jpg",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantiumex nisi commodi, a reiciendis dolore consectetur laboriosam voluptates aliquid, repudiandaeexercitationem eius quae quos sed! Provident debitis nobis itaque?"
  },
  {
    artist: "Eric Prydz",
    title: "Liam",
    src_local: "assets/songs/15. KJm.mp3",
    img_url: "assets/images/cover-art/c5.jpg",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantiumex nisi commodi, a reiciendis dolore consectetur laboriosam voluptates aliquid, repudiandaeexercitationem eius quae quos sed! Provident debitis nobis itaque?"
  },
  {
    artist: "Rufus",
    title: "Bloom",
    src_local: "assets/songs/15. KJm.mp3",
    img_url: "assets/images/cover-art/c6.jpg",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantiumex nisi commodi, a reiciendis dolore consectetur laboriosam voluptates aliquid, repudiandaeexercitationem eius quae quos sed! Provident debitis nobis itaque?"
  },
  {
    artist: "Flores",
    title: "Oceans",
    src_local: "assets/songs/15. KJm.mp3",
    img_url: "assets/images/cover-art/img1.jpg",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantiumex nisi commodi, a reiciendis dolore consectetur laboriosam voluptates aliquid, repudiandaeexercitationem eius quae quos sed! Provident debitis nobis itaque?"
  },
  {
    artist: "Tumisong",
    title: "Axe Ibiza Top 10",
    src_local: "assets/songs/15. KJm.mp3",
    img_url: "assets/images/cover-art/b1.jpg",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantiumex nisi commodi, a reiciendis dolore consectetur laboriosam voluptates aliquid, repudiandaeexercitationem eius quae quos sed! Provident debitis nobis itaque?"
  },
  {
    artist: "Tumisong.",
    title: "Submerged.",
    src_local: "assets/songs/15. KJm.mp3",
    img_url: "assets/images/cover-art/b2.jpg",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantiumex nisi commodi, a reiciendis dolore consectetur laboriosam voluptates aliquid, repudiandaeexercitationem eius quae quos sed! Provident debitis nobis itaque?"
  },
  {
    artist: "Tumisong",
    title: "Blood, sweat & beers",
    song_url:
      "https://res.cloudinary.com/tumi/video/upload/v1548171894/music/Blood_Sweat_Beers_mixed_by_Tumisong.mp3",
    src_local: "assets/songs/15. KJm.mp3",
    img_url: "assets/images/1e2e5b61247247.5a6f4997c1abb.jpg",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantiumex nisi commodi, a reiciendis dolore consectetur laboriosam voluptates aliquid, repudiandaeexercitationem eius quae quos sed! Provident debitis nobis itaque?"
  },
  {
    artist: "Tumisong",
    title: "Spring fiesta groove",
    src_local: "assets/songs/15. KJm.mp3",
    img_url: "assets/images/cover-art/b4.jpg",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantiumex nisi commodi, a reiciendis dolore consectetur laboriosam voluptates aliquid, repudiandaeexercitationem eius quae quos sed! Provident debitis nobis itaque?"
  },
  {
    artist: "Tumisong",
    title: "Loco safredo, no idea",
    src_local: "assets/songs/15. KJm.mp3",
    img_url: "assets/images/cover-art/b5.jpg",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantiumex nisi commodi, a reiciendis dolore consectetur laboriosam voluptates aliquid, repudiandaeexercitationem eius quae quos sed! Provident debitis nobis itaque?"
  },
  {
    artist: "Tumisong",
    title: "Deeper soul mix",
    src_local: "assets/songs/15. KJm.mp3",
    img_url: "assets/images/cover-art/b6.jpg",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantiumex nisi commodi, a reiciendis dolore consectetur laboriosam voluptates aliquid, repudiandaeexercitationem eius quae quos sed! Provident debitis nobis itaque?"
  }
];
const figCaptions = document.querySelectorAll(".item__caption .text");
const item_imgs = document.querySelectorAll(".item__image");
const fetchMsg = document.querySelector(".fetch__msg");
const featuredSect = document.querySelector(".featured");
const featuredList_div = document.getElementsByClassName("featured__list")[0];
const btnPlay_spans = document.querySelectorAll(".grd__btn");
const audio_tags = document.querySelectorAll(".item__group audio");
const bar = document.querySelector(".bar");
let featIO;

const URL = "https://tumiserver.now.sh/songs";

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
bar.addEventListener("click", muteSound);

fetch(URL)
  .then(res => res.json())
  .then(json => {
    templateGrid(json, false);
  })
  //TODO: remove for production build
  .catch(err => {
    console.log(`caught fetch error: ${err}`);
    //Revert to local store
    templateGrid(SongsLocal, true);
  });
// .catch(fetchError);


//Functions

function templateGrid(data, isLocal) {
  hideMsg();
  const songs = data.slice(0, 6);
  for (let i = 0; i <= songs.length; i++) {
    const currSong = songs[i];
    const currBtn = btnPlay_spans[i];

    const { title, img_url, src_local } = currSong;

    btnPlay_spans[i].id = title;
    audio_tags[i].id = title;
    item_imgs[i].dataset.src = img_url;
    figCaptions[i].textContent = title;
    audio_tags[i].src = src_local;

    currBtn.addEventListener("click", e => playPause(e));
  }
}
function hideMsg() {
  fetchMsg.style.opacity = 0;
  fetchMsg.style.display = "none";
}
function playPause(event) {
  const btn = event.target.closest("span");
  const audio = last_sibling(btn);
  
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

let last_sibling = n => [...n.parentNode.children].pop();
