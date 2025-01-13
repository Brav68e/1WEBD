///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
// BURGER MENU Related instructions


import { hidden_burger, burgerAnimation } from "./general/burger.js";

const burgerButton = document.getElementById('burger-menu');
const Ul = document.getElementById('nav-ul');
burgerAnimation(burgerButton, Ul)
hidden_burger(window, Ul)                                                         // Use it at start to handle mobile case