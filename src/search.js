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



let search = document.querySelector('#search')

const createSearchBar = () => {
    const divSearch = document.createElement("div") 
    divSearch.innerHTML = 
    `<form action=" ">
    <input type="text" placeholder="Search.." name="search">
    </form>`
    
    search.appendChild(divSearch)
} 

search.addEventListener("click", createSearchBar, {once: true})

window.onload = () => {
    fetchData()
}  