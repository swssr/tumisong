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

//Fetch and play music song json
const audio = document.querySelector('audio');
const SONGS_URL = `http://127.0.0.1:5500/db/songs.json`;
const fetchSongs = fetch(SONGS_URL);
let songSrcs = [];

try {
    fetchSongs
    .then(res =>{
        return res.json()
    })
    .then(
        json => {
            const { songs } = json;
            songs.forEach(song => {
                songSrcs.push(song.src)
            });
            console.log(songSrcs);
        }
    )
    .catch(err => console.log(err))
} catch (err) {
    console.log(err);
}
//Pressing play button
let playBtns = document.querySelectorAll(`.btn--play`),
    svgPlay = document.querySelector('.svg--play'),
    svgPause = document.querySelector('.svg--pause');
let counter = 0;
playBtns.forEach((btn, i) => {
    btn.addEventListener('click', e => {
        console.log(e.target.parentNode);
        
        audio.src = songSrcs[i];
        audio.
        //Play pause machanism
        counter++;
        if (counter === 1) {
            console.log(`playing, ${audio.src}`);
            audio.play();

            //Show pause icon
            svgPlay.style.display = 'none'
            svgPause.style.display = 'block'
        }else{
            console.log(`paused`);
            counter = 0;
            audio.pause();

            //Show play icon
            svgPlay.style.display = 'block'
            svgPause.style.display = 'none'
        }
    })
});