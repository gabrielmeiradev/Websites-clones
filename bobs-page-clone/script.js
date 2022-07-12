// DOM ELEMENT
const menu = document.querySelector(".menu-content-container");
let c = 0;
function menuAction(){
    if(c==0){
        menu.style.display = "inherit";
        menu.style.opacity = 1;
        c=1; 
    }
    else{
        menu.style.display = "none";
        menu.style.opacity = 0;
        c=0;
    }
}