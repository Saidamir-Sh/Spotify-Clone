fetchMusic()
/* fetching API */
async function fetchMusic() {
    let result = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=queen')
    let musics = await result.json()
    let data = musics.data
    data = data.map(item => {
        /* title, artist.name preview.md5_image, album.cover_medium, type */
        const title = item.title
        const music = item.preview
        const albumCover = item.album.cover_medium 
        const type = item.type
        return {title, music, albumCover, type}
    })

    return createModal(data)
}

/* Creating UI modal */
function createModal(fetchedData) {
    let pageNode = document.querySelector('.artist-page')
    let songsListNode = document.querySelectorAll('.songs-list div')
    let modalNode = ''
    fetchedData.forEach(element => {
        modalNode +=
    });
}