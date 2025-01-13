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


///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
// BURGER MENU Related instructions


hidden_burger()         // Use it at start to handle mobile case
window.addEventListener('resize', hidden_burger)


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

import { storeID_onClick } from "../passerelle.js";

const articles = document.querySelectorAll("article");
const buttons = main.querySelectorAll("a");

storeID_onClick(buttons, articles);
