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


import { search, display, searchbar } from "./loadSearch.js";
import { storeID_onClick } from "../general/passerelle.js";


const input = document.querySelector('input')
const searchIcon = document.querySelector('#searchbar img')
const main = document.querySelector('main')


input.addEventListener('keypress', async(event) => {
    if(event.key == "Enter"){
        await searchbar(main, input);
    }
})

searchIcon.addEventListener('keypress', async(event) => {
    if(event.key == "Enter"){
        await searchbar(main, input);
    }
})

searchIcon.addEventListener('click', async() => {
    await searchbar(main, input);
})