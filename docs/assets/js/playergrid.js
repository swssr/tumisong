//
const item_imgs = document.querySelectorAll('.item__image')
const song_names = document.querySelectorAll('.item__caption text')
const item__audio = document.querySelectorAll('.item audio')

//Utility definitions
const sessionStore = []

let sibling = n => [...n.parentNode.children].filter(x => x.nodeType == 1 && c != n)

function templateItem(json) {

    console.log(json);

    const indexDataPair = json.map(function (song, index) {
        return {
            index,
            data: {
                imgurl: song.imgUrl,
                songUrl: song.src
            }
        }
    })
    json.forEach(song)
    console.log(indexDataPair);
}

const featuredList_div = document.getElementsByClassName('featured__list')[0]

const popGrid = (x) => {
    return `
    <figure class="item">
        <div class="item__group">
            <img src="${x.img_url}" alt="_" class="item__image img">
            <span class="icon btn--play play--icon item__play grd__btn">
                <svg class="svg--play" viewBox="0 0 77 76.1">
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
                <span class="text">${x.song_name}</span>
                <span class="actions">
                <i class="icon icon--play"></i>
                </span>
    </figcaption>
    </figure>
    `
}

window.onload = function () {
    const btnPlay_spans = document.querySelectorAll('.grd__btn')
    const URL = 'https://tumiserver.now.sh/songs'
    const fetchError = (err) => {
        featuredList_div.innerHTML = ``
        featuredList_div.innerHTML = `
                <div class="fetch__msg error">
                    <h3 class="msg__inner">
                        ${err}
                    </h3>
                </div>
                `
    }
    const options = {
        method: 'GET',
        params: {},
        responseType: 'arraybuffer'
    }

    const audio = document.querySelector('audio')

    audio.addEventListener('playing', e => {
        if (audio !== e.target) audio.pause()
        console.log('something is playing')
    }, true)
//TODO: Remove all other implementaions if this works

    async function fetchSongs(_url){
        const response = await fetch(_url)
        const data = await response.json()
        const songs = []
        for (const song of data) {
            songs.push(song)
        }
        return songs
    }

    function templateHTML(_container){
        const result = fetchSongs(URL)
        _container.innerHTML = result.map(popGrid).join('')
    }

    templateHTML(featuredList_div)

    // fetch(URL, options)
    //     .then(res => res.json())
    //     .then(json => {
    //         featuredList_div.innerHTML = ``
    //         featuredList_div.innerHTML = json.map(popGrid).join('')

    //         const btns = document.querySelectorAll('.grd__btn')
    //         const isPlaying = false
    //         btns.forEach((btn_play, index) => {

    //             const currSong = json[index]
    //             const URi = currSong.src_local

    //             // const audio = new Audio(URi)
    //             const audio_el = document.querySelector('audio')

    //             const togglePlay = (_audio) => {
    //                 _audio.paused ? _audio.play() : _audio.pause()
    //             }
    //             btn_play.addEventListener('click', (e) => {
                    
    //                 btns.forEach(b => b.classList.remove('isPlaying'))
    //                 btn_play.classList.toggle('isPlaying')

    //                 audio_el.id = currSong.id
    //                 audio_el.src = currSong.song_url

    //                 console.log(audio_el.paused)
    //             })
    //         })
    //     })
    //     .catch(fetchError)

}
//New Song

const newSong_sect = document.getElementById('newsong')