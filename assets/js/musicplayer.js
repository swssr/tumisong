let songs = document.querySelectorAll('.mp__song');
let wArtist = document.querySelector('.mp__artist-name');
let wSong = document.querySelector('.mp__song-name');
let nowPlaying = {
    artist: 'unknown',
    song: 'unknown'
}
let inc = 0;
songs.forEach((song, i) => {
    song.addEventListener('click', (e) => {
        songs.forEach(s => s.classList.remove('playing'))
        song.classList.toggle('playing');
        let npSong = document.querySelector(`.playing .song__name`);
        let npArtist = document.querySelector(`.playing .song__artist`);
        nowPlaying.artist = npArtist.innerHTML;
        nowPlaying.song = npSong.innerHTML;
        wArtist.innerHTML = nowPlaying.artist;
        wSong.innerHTML = nowPlaying.song;
        console.log(`now playing: ${nowPlaying.song} by ${nowPlaying.artist}`);
    })
})