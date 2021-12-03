const fetchData = (query = "queen") => {
        fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query)
    .then( response => 
        response.json()
    )
    .then( ( music ) => {
        console.log(music.data)    
        }
    )

    .catch(err => {
        console.error(err);
    });
}

let search = document.querySelector('#nav-search')

/* const handleSearch = (event) => {
    event.preventDefault()
    searchTerm = event.target.value.toLowerCase()
} */


const createSearchBar = () => {
    const divSearch = document.createElement("div") 
    divSearch.innerHTML = 
    `<form action=" ">
        <input id="search" type="text" placeholder="Search.." name="search">
    </form>`
    
    search.appendChild(divSearch)//.addEventListener('click', handleSearch)
} 

search.addEventListener("click", createSearchBar, {once: true})


window.onload = () => {
    fetchData()
}  