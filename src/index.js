const loadAlbumCards = () => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen", {
    "method":"GET"
})


.then(response => response.json())

.then(data => {
    console.log(data)
    
    const albumsRow = document.querySelector('#new-section .row')
    
    for (let i = 0; i < data.length; i++) {
        let dataElement = data[i]
        let col = document.createElement('div')
        col.className = 'col-3'
        col.innerHTML = 
        `<div class="card">
            <img src=${dataElement.album.cover} class="card-img-top" alt=${dataElement.album.title}>
            <div class="card-body">
                <h5 class="card-title">${dataElement.album.title}</h5>
                <p class="card-text">${dataElement.artist.name}</p>
                <p class="card-text">${dataElement.duration}</p>
                <a href="${dataElement.artist.link}" class="btn btn-primary">View more</a>
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


