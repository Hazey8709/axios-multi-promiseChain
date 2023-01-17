//!    JavaScript   Page

async function getAllLukeMovies() {
    const lukeData = await axios.get("https://swapi.dev/api/people/1");
    const lukeFilms = lukeData.data.films;
    const pendingFilmsPromises = [];

    for (let i = 0; i < lukeFilms.length; i++) {
        pendingFilmsPromises.push(axios.get(lukeFilms[i]));
    }
    //console.log(pendingFilmsPromises);

    Promise.all(pendingFilmsPromises)
        .then((res) => buildListFilms(res))
        .catch((err) => console.log(err));
}

getAllLukeMovies();

buildListFilms(res);

function buildListFilms(res) {
    var list = document.getElementById("returnData");
    for (var i = 0; i < res.length; i++) {
        let listCont = document.createElement("div");
        listCont.style.textAlign = "center";

        let titleEl = document.createElement("p");
        titleEl.innerText = `Episode-Title: ${res[i].data.title}`;
        listCont.appendChild(titleEl);

        let directorsEl = document.createElement("p");
        directorsEl.innerText = `Director: ${res[i].data.director}`;
        listCont.appendChild(directorsEl);

        let episodeIdEl = document.createElement("p");
        episodeIdEl.innerText = `Episode-Id: ${res[i].data.episode_id}`;
        listCont.appendChild(episodeIdEl);

        let releaseDateEl = document.createElement("p");
        releaseDateEl.innerText = `Release-Date: ${res[i].data.release_date}`;
        listCont.appendChild(releaseDateEl);

        let urlEl = document.createElement("p");
        urlEl.innerText = `URL: ${res[i].data.url}`;
        listCont.appendChild(urlEl);

        list.appendChild(listCont);
    }
    console.log(res);
}

// function displayData(lukeData) {
//     console.log(lukeData);
//     let divCont = document.getElementById("returnData");
//     for (let i = 0; i < lukeData.length; i++) {
//         let nameTitle = document.createElement("h2");
//         let name = document.createElement("p");

//         divCont.appendChild(nameTitle);
//         divCont.appendChild(name);
//     }
//     console.log(lukeData);
// }
