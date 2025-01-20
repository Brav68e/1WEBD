import { storeID_onClick } from "../general/passerelle.js"



// A function that do a research using title

export async function search(){

    try{
        // Get a list of results
        let pageIndex = sessionStorage.getItem("pageIndex")
        let title = sessionStorage.getItem("currentSearch")
        let results = await axios.get(`https://www.omdbapi.com/?apikey=f69141f9&s=${title}&page=${pageIndex}`)
        return results
    }
    catch(e){
        console.log(e)
    }
}



export async function display(main, films){

    for(let i=0; i<films.length; i++){
        let film = await axios.get(`https://www.omdbapi.com/?apikey=f69141f9&i=${films[i]['imdbID']}`);
        film = film['data'];

        let article = document.createElement("article");
        article.setAttribute('id', `${film['imdbID']}`)
        article.innerHTML = `
        <div class = "firstcontainer">
            <h2>${film['Title']}</h2>
            <img src=${film['Poster']} alt="${film['Title']}">
        </div>
        <div>
            <p>${film['Plot']}</p>
            <a href="movie.html">Show More</a>
        </div>
        `

        main.appendChild(article)
        
        // Setup redirection
        let button = document.querySelectorAll(`#${film['imdbID']} a`);
        let articles = document.querySelectorAll(`#${film['imdbID']}`);
        // This function use array
        storeID_onClick(button, articles);
    }
}



export async function searchbar(main, input) {

    // Do a research (get the value of the input and put it in session storage)
    let film = input.value;
    sessionStorage.setItem("currentSearch", film)
    let results = await search();

    // Check if there is answer
    if(results["data"]["Response"] == "True"){
        main.innerHTML = "";                                // Reset the main since it's a new research
        await display(main, results["data"]["Search"]);

        return 0
    }
    // No result case -> Display no results found
    else{
        main.innerHTML = `
            <p id="error">No results found</p>
        `;
        return 1
    } 
}



export async function loadMore(main){

    // Incrementation of the current page of research
    let pageIndex = parseInt(sessionStorage.getItem("pageIndex")) + 1
    sessionStorage.setItem("pageIndex", pageIndex)

    let results = await search();

    // Check if there is answer
    if(results["data"]["Response"] == "True"){
        await display(main, results["data"]["Search"]);
        return 0
    }
    // No result case -> Display no results found
    else{
        main.innerHTML += `
            <p id="error">No results found</p>
        `;
        return 1
    } 
}