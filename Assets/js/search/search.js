///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
// BURGER MENU Related instructions


import { burgerAnimation } from "../general/burger.js";

const burgerButton = document.getElementById('burger-menu');
const Ul = document.getElementById('nav-ul');
burgerAnimation(burgerButton, Ul, window)



///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
// SEARCH FILM Related instructions


import { search, display, searchbar, loadMore} from "./loadSearch.js";
import { storeID_onClick } from "../general/passerelle.js";


const input = document.querySelector('input')
const searchIcon = document.querySelector('#searchbar img')
const main = document.querySelector('main')
const loading = document.querySelector('.loader')
const loadButton = document.querySelector('#loadMore')

// Hide the loading stuff at start
loading.style.display = "None";
loadButton.style.display = "None";

// Set the default page at 1
sessionStorage.setItem("pageIndex", 1);



// Three time the same binding, allow research to be made

async function interaction(event){
    if(event.key == "Enter"){
        loading.style.display = "block";
        loadButton.style.display = "none";
        let error = await searchbar(main, input);
        loading.style.display = "None";
        if(!error){
            loadButton.style.display = "block";
        }
    }
}

input.addEventListener('keypress', async(event) => {
    await interaction(event);
})

searchIcon.addEventListener('keypress', async(event) => {
    await interaction(event);
})

searchIcon.addEventListener('click', async() => {
    loading.style.display = "block";
        loadButton.style.display = "none";
        let error = await searchbar(main, input);
        loading.style.display = "None";
        if(!error){
            loadButton.style.display = "block";
        }
})


// Binding the load more
loadButton.addEventListener("click", async() => {
    loading.style.display = "block";
    loadButton.style.display = "none";
    let error = await loadMore(main);
    loading.style.display = "None";
    if(!error){
        loadButton.style.display = "block";
    }
})