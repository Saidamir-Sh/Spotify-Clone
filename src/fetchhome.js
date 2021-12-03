window.onload = async () => {
    await fetchMusic()
    await directToAlbum()
    await createInput()
}
const createInput = async () => {
    let searchIcon = document.querySelector('#nav-search')
    
    searchIcon.addEventListener('click', () => {
        let inputTag = document.createElement('input')
        inputTag.setAttribute('id', 'input-search')
        searchIcon.appendChild(inputTag)
    }, {once:true})
}



// fetch albums
const fetchMusic = async (query) => {
    let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
    let data = await response.json()

    let albums = data.data
    console.log(albums)
    createAlbum(albums)
}

// show cards
const createAlbum = (dataArr) => {
    let cardContainer = document.querySelector('.card-container')

    dataArr.forEach(album => {
        let cardDiv = document.createElement('div')
        cardDiv.classList.add('column')

        cardDiv.innerHTML = `
        <a href='album_Page.html?id=${album.album.id}' class='direct-card'>
        <div class="card p-2 mb-3" data-album=${album.album.id} data-artist=${album.artist.id}>
            <img src=${album.album.cover} class="card-img-top" alt="cover album" data-album=${album.album.id} data-artist=${album.artist.id}>
            <div class="card-body p-0 my-1" data-album=${album.album.id} data-artist=${album.artist.id}>
                <h5 class="card-title" data-album=${album.album.id} data-artist=${album.artist.id}> <b>${album.album.title}</b> </h5>
                <p class="card-text" data-album=${album.album.id} data-artist=${album.artist.id}>${album.title_short}</p>
            </div>
        </div>
        </a>
        `
        cardContainer.appendChild(cardDiv)
    });
}

// directing to album
const directToAlbum = () => {
    let cardDiv = document.querySelectorAll('.card-container div')
    let directCard = document.querySelectorAll('.direct-card')
    cardDiv.forEach(card => {
        card.addEventListener('click', (event) => {
            let albumID = event.target.getAttribute('data-album')
             
        })
    });
}

// // fetchAlbum
// const fetchAlbum = async () => {    
//     let albumURL = new URL(window.location.search)
//     let albumID = albumURL.searchParams.get("id");
//     console.log(albumID)
//     let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/album/')
// }






