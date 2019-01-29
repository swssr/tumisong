//Music player widget
let widgetArtist_tag = document.querySelector('.mp__artist-name');
let widgetSongName_tag = document.querySelector('.mp__song-name');
let nowPlaying = {
  artist: null,
  song: null
}
//Add source links and move to exp server
const songitem_ul = document.querySelector('.mp__songs')
const songitem_li = document.querySelectorAll('.mp__song')
let playingSongName_tag = document.querySelector(`.playing .song__name`);
let playingSongArtist_tag = document.querySelector(`.playing .song__artist`);

const populateMPList = (_maxcount) => {
  //Slice fetched songs to max of DOM link count
  const template = (list, _maxcount) => {
    songitem_ul.innerHTML = list.slice(0, _maxcount).map(song =>
      (`
      <li class="mp__song">
          <span class="mp__icon btn--play"></span>
          <span class="song__name">${song.name}</span>
          <span class="song__artist">${song.artist}</span>
          <span class="song__duration">${song.duration}</span>
      </li>
      `)).join('')

    songitem_li.forEach(song => console.log(song))

  }

  fetch('http://localhost:3000/playlist')
    .then(res => res.json())
    .then(json => {
      template(json, _maxcount)
    })
}

populateMPList(8)