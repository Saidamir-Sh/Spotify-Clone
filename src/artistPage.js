

// const display_artist = () => {  
    
       
//     fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/queen", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
// 		"x-rapidapi-key": "20b74dadd4msh868d3bed084b2c9p1052e3jsn745d7ab10a9e"
// 	}
// })
// .then(response => response.json())
// .then((music) => {
     
//     toArtistPage(music.data)
//     //DOM MANIPULATION
//     console.log(music)

     

//     })

// .catch(err => {
// 	console.error(err);
// });
// }

// const toArtistPage = () => {
         
//     const artistName = document.querySelector('h1');  
//      artistName.addEventListener('click', () => {artistName.href = music.data.link})
    
// }

// display_artist()

window.onload = ()=>{

    toArtistPage()
}



  const getArtistInfo = () => {
    
    let searchParams = new URLSearchParams(window.location.search)
    let id = searchParams.get('id');

    console.log(id)
      
      
    fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + id, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "20b74dadd4msh868d3bed084b2c9p1052e3jsn745d7ab10a9e"
	}
})
    .then( response => response.json())
    .then( artist => {
            

        console.log(artist)
         
        


    })
      
  }


  getArtistInfo()

  
