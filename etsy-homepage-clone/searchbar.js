const menuTopElement = document.querySelector(".menu-top");
const inputSearchBar = document.querySelector("#search-area-input");
const searchArea = document.querySelector('.search-area');
const searchIconContainer = document.querySelector('.search-icon-container');

searchArea.addEventListener('click', () => {
    inputSearchBar.focus();
    searchArea.style.backgroundColor = "white";
    searchIconContainer.style.backgroundColor = "black";
    searchIconContainer.childNodes.forEach((e)=>{
        e.childNodes.forEach((element)=>{
            element.style.fill="white";
        })
    })
});

searchArea.addEventListener('focusout', () => {
    inputSearchBar.focus();
    searchArea.style.backgroundColor = "#f4f4f4";
    searchIconContainer.style.backgroundColor = "#f4f4f4";
    searchIconContainer.childNodes.forEach((e)=>{
        e.childNodes.forEach((element)=>{
            element.style.fill="black";
        })
    })
});