// Get and display all the trend films using axios


// A function that load 4 predetermine films 
export async function loadFilms(films){

    let results = [];

    // For each film, do a 'fast request' and use the id to do a second request (more information with id, e.g : plot)
    for(let i=0; i<films.length; i++){
        try{
            let film = await axios.get(`https://www.omdbapi.com/?apikey=f69141f9&s=${films[i]}&y=2024`)
            film = await axios.get(`https://www.omdbapi.com/?apikey=f69141f9&i=${film['data']['Search'][0]['imdbID']}`)
            results.push(film['data'])
        }
        catch(e){
            console.log(e)
        }
    }
    
    // console.log(results)
    return results
}


////////////////////////////////////////////////////////////////////////////


export async function displayFilms(main, films){

    films = await loadFilms(films)

    for(let i=0; i<films.length; i++){
        let film = films[i]
        let article = document.createElement("article")
        article.setAttribute('id', `${film['imdbID']}`)
        article.innerHTML = `
        <div>
            <h2>${film['Title']}</h2>
            <img src=${film['Poster']} alt="${film['Title']}">
        </div>
        <div>
            <p>${film['Plot']}</p>
            <a href="Assets/html/movie.html">En Savoir plus</a>
        </div>
        `
        // console.log(article)
        main.appendChild(article)
    }
}


////////////////////////////////////////////////////////////////////////////