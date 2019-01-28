//Utility definitions
function templateItem(_parent, _self, _index) {
    return _parent.innerHTML += `
        <figure class="item">
            <div class="item__group">
                <img src="assets/images/cover-art/${_self.imgUrl}" alt="_" class="item__image img">
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
                <span class="text">${_self.song}</span>
                <span class="actions">
                    <i class="icon icon--play"></i>
                </span>
            </figcaption>
        </figure>
        `;
}

//Populate featured list
const featuredList = document.querySelector('.featured__list');

//Fetch and play music song json
const SONGS_URL = 'http:localhost:3000/songs' || 'https://tumiserver.now.sh/songs';
const fetchSongs = fetch(SONGS_URL); 

var myHeaders = new Headers();
myHeaders.append('cache-control', 'force-cache');
myHeaders.append(`max-age`, 31536000)

var myInit = {
    method: 'GET',
    headers: myHeaders,
};
//Populate music grid using sessionStorage
var songList = JSON.parse(sessionStorage.getItem(`songs`));
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

const playPause = (_event, _index) => {
    let isPlaying = false

    const currentSong = songList[_index];

    const svgPause = document.querySelector('.svg--pause');
    const audio = new Audio(currentSong.src)

    audio.src = currentSong.src;
    if (toggleState(isPlaying)) {
        audio.play();
    } else {
        audio.pause();
    };
    const btn = _event.target.closest(`span`);
    btn.classList.toggle('isPlaying')
    console.log({ _index, target: _event.target.closest(`span`), currentSong: currentSong.src });
}

try {
    featuredList.innerHTML =  ``;
    songList.forEach((val, index) => {
        templateItem(featuredList, val, index);
    });
}
catch (err) {
    featuredList.innerHTML = ``;
    fetchJson(SONGS_URL, myInit)
        .then(json => {
            //TODO: add local cache version, use indexed Datetime or something better
            sessionStorage.clear()
            songList = sessionStorage.setItem(`songs`, JSON.stringify(json))
            json.forEach((val, index) => {
                templateItem(featuredList, val, index);
            });
        })
        .catch(error => {
            featuredList.innerHTML = `
            <h1 class='fetch__msg error'>
                <div class="msg__inner">
                    ${error}
                <div>
            </h1>`
        });
}


document.querySelectorAll('.item__play').forEach((btn, index) => {
    btn.addEventListener('click', e => playPause(e, index))
})