// Function for Burger Menu

const burgerButton = document.getElementById('burger-menu');
const linkUl = document.getElementById('nav-ul');

burgerButton.addEventListener('click', () => {
    if(linkUl.classList.contains('slide-in')){
        // replacement of void linkUl.offsetWidth, force the DOM and prevent optimisation
        requestAnimationFrame(() => {
            // Remove the old animation class
            linkUl.classList.remove('slide-in');
            requestAnimationFrame(() => {
                linkUl.classList.add('slide-out');
                linkUl.addEventListener('animationend', () => {
                    linkUl.style.display = "none";
                }, {once: true});
            });
        });
    } else {
        linkUl.style.display = "flex";
        linkUl.classList.remove('slide-out');
        linkUl.classList.add('slide-in');
    }
});


// Fix : nav li not being display if we reduce the screen size and then increase it back
function hidden_burger(){
    if(window.innerWidth > 786){
            linkUl.style.display = "flex"
        }
        else{
            linkUl.style.display = "none"
            linkUl.classList.remove('slide-in')
            linkUl.classList.remove('slide-out')
        }
    }

hidden_burger()         // Use it at start to handle mobile case
window.addEventListener('resize', hidden_burger)



///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
// Get and display all the trend films using axios


// A function that load 4 predetermine films 
async function load4Films(){

    // Default films
    let films = ['absolution', 'wicked', 'sonic', 'lift'];
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


async function display4Films(){

    let films = await load4Films()

    for(let i=0; i<films.length; i++){
        let film = films[i]
        let article = document.createElement("article")
        article.innerHTML = `
        <div>
            <h2>${film['Title']}</h2>
            <img src=${film['Poster']}>
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


const main = document.querySelector('main');
display4Films()


