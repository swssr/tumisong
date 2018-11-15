//Music player widget
const mp__songs = [{
    name: 'Dessert of la femme',
    artist: 'Koda',
    duration: '0:00'
},
{
    name: 'After Life',
    artist: 'Illenium',
    duration: '0:00'
},
{
    name: 'Sixty six',
    artist: 'Matt Lange',
    duration: '0:00'
},
{
    name: 'Roses',
    artist: 'Jeff Kaale',
    duration: '0:00'
},
{
    name: 'Liam',
    artist: 'Eric Orydz',
    duration: '0:00'
},
{
    name: 'Rufus',
    artist: 'Bloom',
    duration: '0:00'
},
{
    name: 'Oceans',
    artist: 'Flores',
    duration: '0:00'
},
]
const mp__list = document.querySelector('.mp__songs')

const populateMPList = () => {
//Slice fetched songs to max of DOM link count
const MAXCOUNT = 7;
mp__list.innerHTML = mp__songs.slice(0, MAXCOUNT).map(song => {
    return `
    <li onClick="play()" class="mp__song">
        <span class="mp__icon btn--play"></span>
        <span class="song__name">${song.name}</span>
        <span class="song__artist">${song.artist}</span>
        <span class="song__duration">${song.duration}</span>
    </li>
    `
}).join('')
}
populateMPList()