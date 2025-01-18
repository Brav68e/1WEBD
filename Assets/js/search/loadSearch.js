// A function that do a research using title

export async function search(title){

    try{
        // Get a list of results
        let results = await axios.get(`https://www.omdbapi.com/?apikey=f69141f9&s=${title}`)
        return results
    }
    catch(e){
        console.log(e)
    }
}



export async function display(main, films){

    for(let i=0; i<films.length; i++){
        let film = await axios.get(`https://www.omdbapi.com/?apikey=f69141f9&i=${films[i]['imdbID']}`)
        film = film['data']

        let article = document.createElement("article")
        article.setAttribute('id', `${film['imdbID']}`)
        article.innerHTML = `
        <div class = "firstcontainer">
            <h2>${film['Title']}</h2>
            <img src=${film['Poster']} alt="${film['Title']}">
        </div>
        <div>
            <p>${film['Plot']}</p>
            <a href="movie.html">En Savoir plus</a>
        </div>
        `
        // console.log(article)
        main.appendChild(article)
    }
}



export async function searchbar(main, input) {

    // Do a research
    let film = input.value;
    let results = await search(film);

    // Check if there is answer
    if(results["data"]["Response"] == "True"){
        main.innerHTML = ""
        await display(main, results["data"]["Search"])
        let buttons = document.querySelectorAll("article a");
        let articles = document.querySelectorAll("article")
        storeID_onClick(buttons, articles);

        // If there is more data that can be shown, add a button to display more
        if(results["data"]["totalResults"] > 10){
            console.log("Show more")
        }
    }
    // No result case -> Display no results found
    else{
        main.innerHTML = `
            <p id="error">No results found</p>
        `
    } 
}