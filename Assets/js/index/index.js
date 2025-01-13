///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
// BURGER MENU Related instructions


import { hidden_burger, burgerAnimation } from "../general/burger.js";

const burgerButton = document.getElementById('burger-menu');
const Ul = document.getElementById('nav-ul');
burgerAnimation(burgerButton, Ul)
hidden_burger(window, Ul)                                                         // Use it at start to handle mobile case


///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
// API Related instructions


import { loadFilms, displayFilms } from "./apiRequest.js";
// Default films
let films = ['absolution', 'wicked', 'sonic', 'lift'];
// Additional films
let additionalFilms = ['count', 'trap', 'fall', 'alien', 'bad', 'despicable'];

const main = document.querySelector('main');
const section = document.querySelector('section')
const button = document.getElementById('loadMore')
await displayFilms(main, films)


button.addEventListener('click', async() => {
    button.style.display = "none";
    // Insert a temporary loading
    let loader = document.createElement('div')
    loader.setAttribute('class', 'loader')
    section.appendChild(loader)
    await displayFilms(main, additionalFilms)
    // Remove the temporary loading
    section.removeChild(loader)
})


///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
// SHOW MORE TRANSITION Related instructions

import { storeID_onClick } from "../general/passerelle.js";

const articles = document.querySelectorAll("article");
const buttons = main.querySelectorAll("a");

storeID_onClick(buttons, articles);
