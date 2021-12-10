
  const getArtistInfo = () => {
    
     let searchParams = new URLSearchParams(window.location.search)
     let id = searchParams.get('id');
     console.log(id)
      
      
    fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + id, 
        
    )
    .then( response => response.json())
    .then( artistData => {
            
        console.log(artistData)

            displayInfo(artistData)
          
         
          })
      
  }


  const displayInfo = (artistData) => {

            
const artistName = document.querySelector('h1');
            artistName.innerHTML = artistData.name
            
            
const background_img = document.getElementById('jumbotron')
            console.log(background_img)
background_img.style.backgroundImage = ` url(${artistData.picture_medium})`
// background_img.classList.add('background-repeat: no-repeat;')
            
            // artistData.onclick = () => {
            //     "./artist_Page.html?artist/id=" + artist.id
            // }

            

  }

  const getTracks = (artistData) =>{
        
        const songsList = document.querySelector('#tracks')
        const row = document.createElement('div')
        row.className = "d-flex justify-content-between align-items-center mb-2"
        
              
            row.innerHTML += 
            `
            <div>
              <small class="mr-3">${artist.name}</small>
              <img class="mr-2" style="width: 3em;" src="../assets/artistpage/img1.jpg" alt="Album Cover">
              <small>Another One Bites The Dust - Remastered 2011</small>
            </div>
            <small>1,013,427,226</small>
            <small>3:34</small>
          
            `
  
          songsList.appendChild(row)
            
        }


  
  getArtistInfo()

  getTracks()

  
