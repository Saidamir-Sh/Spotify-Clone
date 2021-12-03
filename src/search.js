const fetchData = () => {
        fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "9cb56f5722mshf46421dc6a74c54p121d14jsn956fd468120d"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
}



let search = document.querySelector('#nav-search')

const handleSearch = (event) => {
    event.preventDefault()

    let searchTerm = event.target.value

    let tokens = searchTerm
        .toLowerCase()
        .split(' ')
        .filter(function(token){
            return token.trim() !== '';
    })

    if(tokens.length) {
        let searchTermRegex = new RegExp(tokens.join('|'), 'gim');
        let filteredList = albums.filter(function(album){
          
          let albumString = '';
          for(var key in book) {
            if(album.hasOwnProperty(key) && album[key] !== '') {
                albumString += album[key].toString().toLowerCase().trim() + ' ';
            }
          }
          
          return albumString.match(searchTermRegex);
        });
        
        render(filteredList);
    }
}


const createSearchBar = () => {
    const divSearch = document.createElement("div") 
    divSearch.innerHTML = 
    `<form action=" ">
        <input id="search" type="text" placeholder="Search.." name="search">
    </form>`
    
    search.appendChild(divSearch).addEventListener('click', handleSearch, {once: true})
} 

search.addEventListener("click", createSearchBar, {once: true})


window.onload = () => {
    fetchData()
}  