//Music player widget
const getSongs = [{
    "name": "Dessert of la femme",
    "artist": "Koda",
    "duration": "0:00"
},
{
    "name": "After Life",
    "artist": "Illenium",
    "duration": "0:00"
},
{
    "name": "Sixty six",
    "artist": "Matt Lange",
    "duration": "0:00"
},
{
    "name": "Roses",
    "artist": "Jeff Kaale",
    "duration": "0:00"
},
{
    "name": "Liam",
    "artist": "Eric Orydz",
    "duration": "0:00"
},
{
    "name": "Rufus",
    "artist": "Bloom",
    "duration": "0:00"
},
{
    "name": "Oceans",
    "artist": "Flores",
    "duration": "0:00"
}
]
//Add source links and move to exp server
const mp__list = document.querySelector('.mp__songs')

const populateMPList = (_songs, _maxcount) => {
    //Slice fetched songs to max of DOM link count
    mp__list.innerHTML = _songs.slice(0, _maxcount).map(song =>
        (`
        <li class="mp__song">
            <span class="mp__icon btn--play"></span>
            <span class="song__name">${song.name}</span>
            <span class="song__artist">${song.artist}</span>
            <span class="song__duration">${song.duration}</span>
        </li>
        `)

    ).join('')
}

populateMPList(getSongs, 8)

//End mp-widget

let songs = document.querySelectorAll('.mp__song');
let wArtist = document.querySelector('.mp__artist-name');
let wSong = document.querySelector('.mp__song-name');
let nowPlaying = {
    artist: null,
    song: null
}
let inc = 0;
songs.forEach((song, _i) => {
    song.addEventListener('click', _e => {
        songs.forEach(s => s.classList.remove('playing'))
        song.classList.toggle('playing');
        let npSong = document.querySelector(`.playing .song__name`);
        let npArtist = document.querySelector(`.playing .song__artist`);
        nowPlaying.artist = npArtist.textContent;
        nowPlaying.song = npSong.textContent;
        wArtist.textContent = nowPlaying.artist;
        wSong.textContent = nowPlaying.song;
    })
})
//Populate featured list
const featuredList = document.querySelector('.featured__list');

//Fetch and play music song json
const SONGS_URL = 'https://tumiserver.now.sh/songs';
const fetchSongs = fetch(SONGS_URL);

var myHeaders = new Headers();
myHeaders.append('cache-control', 'force-cache');
myHeaders.append(`max-age`, 31536000)

var myInit = {
    method: 'GET',
    headers: myHeaders,
};
//Populate music grid using localstorage
var songList = JSON.parse(localStorage.getItem(`songs`));
//Fetch json utility function
const fetchJson = async (_URL, _options) => {
    return await fetch(_URL, _options).then(res => res.json())
}
//Toggle machanism
let c = 0;
function toggleState(_state) {
    if (c === 0 && _state !== null && typeof _state === 'boolean') {
        c = c + 1;
        return !_state
    }
    else {
        c = 0;
        return _state
    }
}


//Play pause machanism
const audio = document.getElementsByTagName('audio')[0];
const playPause = (_event, _index) => {
    let isPlaying = false;
    const currentSong = songList[_index];

    const svgPause = document.querySelector('.svg--pause');

    audio.src = `LOBEL - Together (Official Video) (128kbit_AAC).m4a`;
    if (toggleState(isPlaying)) {
        audio.play();
    } else {
        audio.pause();
    };
    const btn = _event.target.closest(`span`);
    btn.classList.toggle('isPlaying')
    console.log({ _index, target: _event.target.closest(`span`) });
}

try {
    featuredList.innerHTML = ``;
    songList.forEach((val, index) => {
        templateItem(featuredList, val, index);
    });
}
catch (err) {
    featuredList.innerHTML = ``;
    fetchJson(SONGS_URL, myInit)
        .then(json => {
            //TODO: add local cache version, use indexed Datetime or something better
            songList = localStorage.setItem(`songs`, JSON.stringify(json))
            json.forEach((val, index) => {
                templateItem(featuredList, val, index);
            });
        })
        .catch(res => {
            featuredList.innerHTML = `
            <h1 class='fetch__msg error'>
                <div class="msg__inner">
                    ${res}
                <div>
            </h1>`
        });
}
function templateItem(_parent, _val, _index) {
    return _parent.innerHTML += `
        <figure class="item">
            <div class="item__group">
                <img src="assets/images/cover-art/${_val.imgUrl}" alt="_" class="item__image img">
                <span class="icon btn--play play--icon item__play">
                    <svg class="svg--play" viewBox="0 0     77 76.1">
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
                <span class="text">${_val.song}</span>
                <span class="actions">
                    <i class="icon icon--play"></i>
                </span>
            </figcaption>
        </figure>
        `;
}

const playBtns = document.querySelectorAll('.item__play');

playBtns.forEach((btn, index) => {
    btn.addEventListener('click', e => playPause(e, index))
})