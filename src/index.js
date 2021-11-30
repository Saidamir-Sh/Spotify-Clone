const loadAlbumCards = () => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen", {
    "method":"GET"
})


.then(response => response.json())

.then(music => {
    console.log(music)
    
    const albumsRow = document.querySelector('#new-section .row')
    
    for (let i = 0; i < music.data.length; i++) {
        let musicAlbum = music.data[i]
        let col = document.createElement('div')
        col.className = 'column'
        col.innerHTML = 
        `<div class="card p-2">
            <img src=${musicAlbum.album.cover} class="card-img-top" alt=${musicAlbum.album.title}>
            <div class="card-body p-0 my-1">
                <h5 class="card-title ">${musicAlbum.album.title}</h5>
                <p class="card-text">${musicAlbum.artist.name}</p>
                <p class="card-text">${musicAlbum.duration}</p>
                <a href="${musicAlbum.artist.link}" class="btn btn-primary">View more</a>
            </div>
        </div>`
        
        albumsRow.appendChild(col)
    }
})
.catch(err => console.log(err))
.finally(() => console.log("fetching done"))
}


window.onload = () => {
    loadAlbumCards()
    console.log('page is fully loaded')
}


