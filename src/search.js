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
}  