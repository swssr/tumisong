let songs = document.querySelectorAll('.mp__song');
let wArtist = document.querySelector('.mp__artist-name');
let wSong = document.querySelector('.mp__song-name');
let nowPlaying = {
    artist: null,
    song: null
}
let inc = 0;
songs.forEach((song, i) => {
    song.addEventListener('click', e => {
        songs.forEach(s => s.classList.remove('playing'))
        song.classList.toggle('playing');
        let npSong = document.querySelector(`.playing .song__name`);
        let npArtist = document.querySelector(`.playing .song__artist`);
        nowPlaying.artist = npArtist.textContent;
        nowPlaying.song = npSong.textContent;
        wArtist.textContent = nowPlaying.artist;
        wSong.textContent = nowPlaying.song;
        console.log(`now playing: ${nowPlaying.song} by ${nowPlaying.artist}`);
    })
})
//Populate featured list
const featuredList = document.querySelector('.featured__list');
//Fetch and play music song json
const SONGS_URL = 'https://tumiserver.now.sh/songs';
const fetchSongs = fetch(SONGS_URL);

var songList;
fetch(SONGS_URL)
    .then(res => res.json())
    .then(json => {
        songList = json;
        songList.forEach((val) => {
            featuredList.innerHTML += `
            <figure class="item">
                <div class="item__group">
                    <img src="assets/images/cover-art/${val.imgUrl}" alt="_" class="item__image img">
                    <span class="icon btn--play play--icon item__play">
                        <svg class="svg--play" viewBox="0 0 77 76.1">
                            <path class="st0" d="M67.9,33L29.1,10.6c-4.3-2.5-9.6,0.6-9.6,5.6v44.8c0,4.9,5.3,8,9.6,5.6l38.8-22.4C72.1,41.6,72.1,35.4,67.9,33z" />
                        </svg>
                        <svg class="svg--pause" width="40px" height="40px" viewBox="0 0 33 40">
                            <rect width="10" height="40" />
                            <rect x="20" width="10" height="40" />
                        </svg>
                    </span>
                </div>
                <figcaption class="item__caption">
                    <span class="text">${val.song}</span>
                    <span class="actions">
                        <i class="icon icon--play"></i>
                    </span>
                </figcaption>
            </figure>
            `;
        });
    })
    .catch(res => {
        featuredList.innerHTML = `<h1 class='fetch__error'>${res}</h1>`
    });