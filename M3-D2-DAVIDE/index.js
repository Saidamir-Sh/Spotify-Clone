window.onload = () => {
  const btn1 = document.getElementById("loadBtn1");
  btn1.addEventListener("click", loadAlbum1);

  const btn2 = document.getElementById("loadBtn2");
  btn2.addEventListener("click", loadAlbum2);

  const btn3 = document.getElementById("loadBtn3");
  btn3.addEventListener("click", loadAlbum3);
};

const loadAlbum1 = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "758d0f1d7fmsh5b11613aca03e3cp1059abjsn6ac9c6700341",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);

      const row = document.querySelector(
        "#recently-played >.container-fluid >.custom-row"
      );
      for (let i = 0; i < data.data.length; i++) {
        const albums = data.data[i];
        const div = document.createElement("div");
        div.className = "column col-md-4";
        div.innerHTML += `<div class="card p-2">
                                        <img src="${
                                          albums.album.cover_medium
                                        }" class="card-img-top" alt="${
          albums.album.title
        }">
                                        <div class="card-body p-0 my-1">
                                            <h5 class="card-title"> <b>${
                                              albums.artist.name +
                                              " " +
                                              albums.album.title
                                            }</b> </h5>
                                            <p class="card-text">${
                                              albums.album.tracklist
                                            }</p>
                                        </div>
                        </div>`;
        row.appendChild(div);
      }
    })

    .catch((err) => console.log(err));
};

const loadAlbum2 = () => {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "758d0f1d7fmsh5b11613aca03e3cp1059abjsn6ac9c6700341",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);

      const row = document.querySelector(
        "#recently-played >.container-fluid >.custom-row"
      );
      for (let i = 0; i < data.data.length; i++) {
        const albums = data.data[i];
        const div = document.createElement("div");
        div.className = "column col-md-4";
        div.innerHTML += `<div class="card p-2">
                                        <img src="${
                                          albums.album.cover_medium
                                        }" class="card-img-top" alt="${
          albums.album.title
        }">
                                        <div class="card-body p-0 my-1">
                                            <h5 class="card-title"> <b>${
                                              albums.artist.name +
                                              " " +
                                              albums.album.title
                                            }</b> </h5>
                                            <p class="card-text">${
                                              albums.album.tracklist
                                            }</p>
                                        </div>
                        </div>`;
        row.appendChild(div);
      }
    })

    .catch((err) => console.log(err));
};

const loadAlbum3 = () => {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=behemot", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "758d0f1d7fmsh5b11613aca03e3cp1059abjsn6ac9c6700341",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);

      const row = document.querySelector(
        "#recently-played >.container-fluid >.custom-row"
      );
      for (let i = 0; i < data.data.length; i++) {
        const albums = data.data[i];
        const div = document.createElement("div");
        div.className = "column col-md-4";
        div.innerHTML += `<div class="card p-2">
                                        <img src="${
                                          albums.album.cover_medium
                                        }" class="card-img-top" alt="${
          albums.album.title
        }">
                                        <div class="card-body p-0 my-1">
                                            <h5 class="card-title"> <b>${
                                              albums.artist.name +
                                              " " +
                                              albums.album.title
                                            }</b> </h5>
                                            <p class="card-text">${
                                              albums.album.tracklist
                                            }</p>
                                        </div>
                        </div>`;
        row.appendChild(div);
      }
    })

    .catch((err) => console.log(err));
};
