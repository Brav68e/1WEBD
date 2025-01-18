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


import { search, display } from "./loadSearch.js";
import { storeID_onClick } from "../general/passerelle.js";


const input = document.querySelector('input')
const searchIcon = document.querySelector('#searchbar img')
const main = document.querySelector('main')


input.addEventListener('keypress', async(event) => {
    if(event.key == "Enter"){
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
                <p>No results found</p>
            `
        }
    }
})