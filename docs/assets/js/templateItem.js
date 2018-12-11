function templateItem(_val, _index) {
    return `
        <figure class="item">
            <div class="item__group">
                <img src="assets/images/cover-art/${_val.imgUrl}" alt="_" class="item__image img">
                <span class="icon btn--play play--icon item__play" onclick="playPause(${_index})">
                    <svg class="svg--play" viewBox="0 0 77 76.1">
                        <path class="st0" d="M67.9,33L29.1,10.6c-4.3-2.5-9.6,0.6-9.6,5.6v44.8c0,4.9,5.3,8,9.6,5.6l38.8-22.4C72.1,41.6,72.1,35.4,67.9,33z" />
                    </svg>
                    <svg class="svg--pause" width="40px" height="40px" viewBox="0 0 33 40">
                        <rect width="10" height="40" />
                        <rect x="20" width="10" height="40" />
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