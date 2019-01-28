//Music player widget
let widgetArtist_tag = document.querySelector('.mp__artist-name');
let widgetSongName_tag = document.querySelector('.mp__song-name');
let nowPlaying = {
    artist: null,
    song: null
}




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
const songitem_li = document.querySelectorAll('.mp__songs')

const populateMPList = (_songs, _maxcount) => {
  //Slice fetched songs to max of DOM link count
  songitem_li.innerHTML = _songs.slice(0, _maxcount).map(song =>
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

let playingSongName_tag = document.querySelector(`.playing .song__name`);
let playingSongArtist_tag = document.querySelector(`.playing .song__artist`);


songitem_li.forEach((song, _i) => {
  song.addEventListener('click', _e => {
      songitem_li.forEach(s => s.classList.remove('playing'))
      song.classList.toggle('playing');
      nowPlaying.artist = playingSongArtist_tag.textContent;
      nowPlaying.song = playingSongName_tag.textContent;
      widgetArtist_tag.textContent = nowPlaying.artist;
      widgetSongName_tag.textContent = nowPlaying.song;
  })
})
