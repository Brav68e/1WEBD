// Create a function that add a information card about a specific film into a container

export async function loadCard(filmID, container){

    // Request to get all information about the film
    let result = await axios.get(`https://www.omdbapi.com/?apikey=f69141f9&i=${filmID}&plot=full`);
    result = result['data']

    const article = document.createElement('article');
    article.innerHTML = `
        <h1>${result['Title']}</h1>
        <div>
            <img src = ${result['Poster']}>
            <p>${result['Genre']}</p>
            <p>${result['Runtime']}</p>
            <p>${result['Metascore']}</p>
        </div>
        <div>
            <h2>Synopsis :</h2>
            <p>${result['Plot']}</p>
            <h3>${result['Actors']}</h3>
            <h3>${result['Director']}</h3>
        </div>
    `

    container.appendChild(article);

}