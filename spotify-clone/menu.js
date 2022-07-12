// DOM ELEMENTS
var f = document.getElementById("menu-full");
var menu = document.getElementById("menu");

function showmenu(){
    menu.style.display = "none";
    f.style.opacity = 1;
}

function closemenu(){
    menu.style.display = "inherit";
    f.style.opacity = 0;
}

