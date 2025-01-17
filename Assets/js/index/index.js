///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
// BURGER MENU Related instructions


import { burgerAnimation } from "../general/burger.js";

const burgerButton = document.getElementById('burger-menu');
const Ul = document.getElementById('nav-ul');
burgerAnimation(burgerButton, Ul, window)



///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
// API Related instructions


import { loadFilms, displayFilms } from "./apiRequest.js";
import { storeID_onClick } from "../general/passerelle.js";

// Default films
let films = ['absolution', 'wicked', 'sonic', 'lift'];
// Additional films
let additionalFilms = ['count', 'trap', 'fall', 'alien', 'bad', 'despicable'];


const section = document.querySelector('section')
const button = document.getElementById('loadMore')
const main = document.querySelector('main');

// Display the 4 first films
await displayFilms(main, films)

const articles = document.querySelectorAll("article");
const buttons = main.querySelectorAll("a");

// Add the binding to them
storeID_onClick(buttons, articles);


button.addEventListener('click', async() => {
    button.style.display = "none";
    // Insert a temporary loading
    let loader = document.createElement('div')
    loader.setAttribute('class', 'loader')
    section.appendChild(loader)
    await displayFilms(main, additionalFilms)
    // Remove the temporary loading
    section.removeChild(loader)

    // Readd Storing ID on every a
    const articles = document.querySelectorAll("article");
    const buttons = main.querySelectorAll("a");
    storeID_onClick(buttons, articles);
})



