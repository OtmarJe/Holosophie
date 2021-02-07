import { wrapGrid } from 'animate-css-grid'
 
const grid = document.querySelector(".grid");
const { unwrapGrid, forceGridAnimation } = wrapGrid(grid);

var element = document.getElementById("wrapGrid");
element.addEventListener("animationstart", listener, false);
element.addEventListener("animationend", listener, false);
element.addEventListener("animationiteration", listener, false);

element.className = "grid";